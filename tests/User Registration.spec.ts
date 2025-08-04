import {test} from '@playwright/test';
import {User_Registration} from '../pages/User_Registration';

test('Регистрация нового пользователя', async ({ page }) => {
    await page.goto('https://sportferma.com');
    const registration = new User_Registration(page);
    await registration.user_registration();
});
test('Регистрация Имя пустое', async ({ page }) => {
    await page.goto('https://sportferma.com');
    const negative_name = new User_Registration(page);
    await negative_name.negative_name();
});
test('Регистрация Email пустое', async ({ page }) => {
    await page.goto('https://sportferma.com');
    const negative_email = new User_Registration(page);
    await negative_email.negative_email();
});
test('Регистрация Телефон пустое', async ({ page }) => {
    await page.goto('https://sportferma.com');
    const negative_number = new User_Registration(page);
    await negative_number.negative_number();
});
test('Регистрация Пароль пустое', async ({ page }) => {
    await page.goto('https://sportferma.com');
    const negative_password = new User_Registration(page);
    await negative_password.negative_password();
});
test('Регистрация Подтверждения Пароля не совпадает', async ({ page }) => {
    await page.goto('https://sportferma.com');
    const negative_confirmPassword = new User_Registration(page);
    await negative_confirmPassword.negative_confirmPassword();
});