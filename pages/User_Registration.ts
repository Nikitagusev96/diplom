import { Page, Locator, expect } from '@playwright/test';
import { faker } from '@faker-js/faker/locale/ru';


export class User_Registration {
    readonly page: Page;
    readonly nameField: Locator;
    readonly emailField: Locator;
    readonly phoneField: Locator;
    readonly passwordField: Locator;
    readonly confirmPasswordField: Locator;
    readonly registerButton: Locator;
    readonly checkbox: Locator;
    readonly myOfficeLink: Locator;
    readonly error_name: Locator;
    readonly error_email: Locator;
    readonly error_number: Locator;
    readonly error_password: Locator;
    readonly error_confirmPassword: Locator;

    // Сгенерированные фейковые данные
    readonly firstName: string;
    readonly email: string;
    readonly phone: string;
    readonly password: string;

    constructor(page: Page) {
        this.page = page;
        this.nameField = page.locator('#input_NAME');
        this.emailField = page.locator('#input_EMAIL');
        this.phoneField = page.locator('#input_PERSONAL_PHONE');
        this.passwordField = page.locator('#input_PASSWORD');
        this.confirmPasswordField = page.locator('#input_CONFIRM_PASSWORD');
        this.registerButton = page.locator('button[name=\'register_submit_button1\']');
        this.checkbox = page.locator('label[for=\'licenses_reg\']');
        this.myOfficeLink = page.locator('div.header__middle--user a[title=\'Мой кабинет\']')

        this.firstName = faker.person.firstName();
        this.email = faker.internet.email({ provider: 'gmail.com' });
        this.phone = '9'+ faker.string.numeric(9);
        this.password = faker.internet.password({
            length: 8,
            memorable: false,
            pattern: /[A-Za-z0-9!@#$%^&*]/,
        });
        //Ошибки
        this.error_name = page.locator('#input_NAME-error')
        this.error_email = page.locator('#input_EMAIL-error')
        this.error_number = page.locator('#input_PERSONAL_PHONE-error')
        this.error_password = page.locator('#input_PASSWORD-error')
        this.error_confirmPassword = page.locator('#input_CONFIRM_PASSWORD-error')
    }
    async user_registration() {
        await this.page.goto('https://sportferma.com/cabinet/registration/?register=yes®ister=yes&backurl=%2F');
        // Проверка видимости элементов
        await expect(this.nameField).toBeVisible();
        await expect(this.emailField).toBeVisible();
        await expect(this.phoneField).toBeVisible();
        await expect(this.passwordField).toBeVisible();
        await expect(this.confirmPasswordField).toBeVisible();
        await expect(this.registerButton).toBeVisible();
        await expect(this.checkbox).toBeVisible();
        // Заполнение формы
        await this.nameField.fill(this.firstName);
        await this.emailField.fill(this.email);
        await this.phoneField.fill('');
        await this.phoneField.fill(this.phone);
        await this.passwordField.fill(this.password);
        await this.confirmPasswordField.fill(this.password);

        await this.registerButton.click();

        // await expect(this.myOfficeLink).toBeVisible();
        //
        // await this.myOfficeLink.click();
        //
        // await expect(this.page).toHaveURL(new RegExp('/personal/cabinet'));
        // await expect(this.page).toHaveTitle(/Личный кабинет - Интернет-магазин Спорт Ферма/i);
    }

    async negative_name() {
        await this.page.goto('https://sportferma.com/cabinet/registration/?register=yes®ister=yes&backurl=%2F');
        // Проверка видимости элементов
        await expect(this.nameField).toBeVisible();
        await expect(this.emailField).toBeVisible();
        await expect(this.phoneField).toBeVisible();
        await expect(this.passwordField).toBeVisible();
        await expect(this.confirmPasswordField).toBeVisible();
        await expect(this.registerButton).toBeVisible();
        await expect(this.checkbox).toBeVisible();
        // Заполнение формы
        await this.emailField.fill(this.email);
        await this.phoneField.fill('');
        await this.phoneField.fill(this.phone);
        await this.passwordField.fill(this.password);
        await this.confirmPasswordField.fill(this.password);


        await this.registerButton.click();
        await expect(this.error_name).toBeVisible()
    }
    async negative_email() {
        await this.page.goto('https://sportferma.com/cabinet/registration/?register=yes®ister=yes&backurl=%2F');
        // Проверка видимости элементов
        await expect(this.nameField).toBeVisible();
        await expect(this.emailField).toBeVisible();
        await expect(this.phoneField).toBeVisible();
        await expect(this.passwordField).toBeVisible();
        await expect(this.confirmPasswordField).toBeVisible();
        await expect(this.registerButton).toBeVisible();
        await expect(this.checkbox).toBeVisible();
        // Заполнение формы
        await this.nameField.fill(this.firstName);
        await this.phoneField.fill('');
        await this.phoneField.fill(this.phone);
        await this.passwordField.fill(this.password);
        await this.confirmPasswordField.fill(this.password);


        await this.registerButton.click();
        await expect(this.error_email).toBeVisible()
    }
    async negative_number() {
        await this.page.goto('https://sportferma.com/cabinet/registration/?register=yes®ister=yes&backurl=%2F');
        // Проверка видимости элементов
        await expect(this.nameField).toBeVisible();
        await expect(this.emailField).toBeVisible();
        await expect(this.phoneField).toBeVisible();
        await expect(this.passwordField).toBeVisible();
        await expect(this.confirmPasswordField).toBeVisible();
        await expect(this.registerButton).toBeVisible();
        await expect(this.checkbox).toBeVisible();
        // Заполнение формы
        await this.nameField.fill(this.firstName);
        await this.emailField.fill(this.email);
        await this.passwordField.fill(this.password);
        await this.confirmPasswordField.fill(this.password);


        await this.registerButton.click();
        await expect(this.error_number).toBeVisible()
    }
    async negative_password() {
        await this.page.goto('https://sportferma.com/cabinet/registration/?register=yes®ister=yes&backurl=%2F');
        // Проверка видимости элементов
        await expect(this.nameField).toBeVisible();
        await expect(this.emailField).toBeVisible();
        await expect(this.phoneField).toBeVisible();
        await expect(this.passwordField).toBeVisible();
        await expect(this.confirmPasswordField).toBeVisible();
        await expect(this.registerButton).toBeVisible();
        await expect(this.checkbox).toBeVisible();
        // Заполнение формы
        await this.nameField.fill(this.firstName);
        await this.emailField.fill(this.email);
        await this.phoneField.fill('');
        await this.phoneField.fill(this.phone);


        await this.registerButton.click();
        await expect(this.error_password).toBeVisible()
    }

    async negative_confirmPassword() {
        await this.page.goto('https://sportferma.com/cabinet/registration/?register=yes®ister=yes&backurl=%2F');
        // Проверка видимости элементов
        await expect(this.nameField).toBeVisible();
        await expect(this.emailField).toBeVisible();
        await expect(this.phoneField).toBeVisible();
        await expect(this.passwordField).toBeVisible();
        await expect(this.confirmPasswordField).toBeVisible();
        await expect(this.registerButton).toBeVisible();
        await expect(this.checkbox).toBeVisible();
        // Заполнение формы
        await this.nameField.fill(this.firstName);
        await this.emailField.fill(this.email);
        await this.phoneField.fill('');
        await this.phoneField.fill(this.phone);
        await this.passwordField.fill(this.password);
        //Пароль будет отличаться
        await this.confirmPasswordField.fill('qwerty123');

        await this.registerButton.click();
        await expect(this.error_confirmPassword).toBeVisible()
    }

}
