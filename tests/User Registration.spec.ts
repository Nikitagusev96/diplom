import { test } from '@playwright/test';
import { User_Registration } from '../pages/User_Registration';

test.describe('Тесты регистрации пользователя', () => {
    let registration: User_Registration;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://sportferma.com/cabinet/registration/?register=yes&backurl=%2F');
        registration = new User_Registration(page);
    });

    test('Регистрация нового пользователя', async () => {
        await registration.user_registration();
    });

    test('Регистрация: Имя пустое', async () => {
        await registration.negative_name();
    });

    test('Регистрация: Email пустой', async () => {
        await registration.negative_email();
    });

    test('Регистрация: Телефон пустой', async () => {
        await registration.negative_number();
    });

    test('Регистрация: Пароль пустой', async () => {
        await registration.negative_password();
    });

    test('Регистрация: Подтверждение пароля не совпадает', async () => {
        await registration.negative_confirmPassword();
    });
});