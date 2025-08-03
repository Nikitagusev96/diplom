import { Locator, Page, expect } from '@playwright/test';

export class Authorization {
    readonly page: Page;

    // Modal enter account
    readonly enterButonPage: Locator;
    readonly modalEnterTitle: Locator;
    readonly numberPhoneField: Locator;
    readonly codeSmsField: Locator;
    readonly rememberMeCheckBox: Locator;
    readonly sendSmsCodeLink: Locator;
    readonly enterButon: Locator;
    readonly enterByLoginAndPasswordLink: Locator;
    readonly regButoon: Locator;
    readonly descpriptionRegText: Locator;
    readonly closeModalEnterAccountButton: Locator;
    readonly showPasswordButon: Locator;
    readonly hidePasswordButon: Locator;
    readonly myOffice: Locator;


    constructor(page: Page) {
        this.page = page;

        this.enterButonPage = page.locator('div[class="header__middle--user"] a');
        this.modalEnterTitle = page.locator('div[class="text"] .title');
        this.numberPhoneField = page.locator('input[data-reg-placeholder="Номер телефона"]');
        this.codeSmsField = page.locator('input[data-reg="Код из смс"]');
        this.rememberMeCheckBox = page.locator('label[for="cbaup_remember"]');
        this.sendSmsCodeLink = page.locator('span[class$="link"]');
        this.enterButon = page.locator('div[data-auth-title="Войти"]');
        this.enterByLoginAndPasswordLink = page.locator('//a[@href="/auth/login/"]');
        this.regButoon = page.locator('.register');
        this.descpriptionRegText = page.locator('//div[@class="more_text_small"]');
        this.closeModalEnterAccountButton = page.locator('//span[contains(@class, "fa-close")]');
        this.showPasswordButon = page.locator('//span[@title="Показать пароль"]');
        this.hidePasswordButon = page.locator('//span[@title="Скрыть пароль"]');
        this.myOffice = page.locator('div[class=\'header__middle--user\'] a[title=\'Мой кабинет\']')
    }

    async authorization() {
        await this.enterButonPage.click();
        await expect(this.modalEnterTitle).toBeVisible();
        await expect(this.numberPhoneField).toBeVisible();
        await expect(this.codeSmsField).toBeVisible();
        await expect(this.rememberMeCheckBox).toBeVisible();
        await expect(this.sendSmsCodeLink).toBeVisible();
        await expect(this.enterButon).toBeVisible();
        await expect(this.enterByLoginAndPasswordLink).toBeVisible();
        await expect(this.regButoon).toBeVisible();
        await expect(this.descpriptionRegText).toBeVisible();
        await expect(this.closeModalEnterAccountButton).toBeVisible();
        await expect(this.showPasswordButon).toBeVisible();
        await this.showPasswordButon.click();
        await expect(this.hidePasswordButon).toBeVisible();
        await this.hidePasswordButon.click();
        //Вход
        await this.numberPhoneField.click();
        await this.numberPhoneField.pressSequentially('test.sportferma@yandex.ru');

        await this.codeSmsField.click()
        await this.codeSmsField.pressSequentially('123123')

        await this.enterButon.click()
        // выполнен выход в аккаунт
        //выполнем проверку, зашел ли в аккаунт
        await expect(this.myOffice).toBeVisible()
        await this.myOffice.click()
        await expect(this.page).toHaveTitle(/Личный кабинет - Интернет-магазин Спорт Ферма/);
        await expect(this.page).toHaveURL(/cabinet/);
    }

}