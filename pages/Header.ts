import { Locator, Page, expect } from '@playwright/test';

export class Header {
    readonly page: Page;

    // Header links
    readonly deliveryAndPayment: Locator;
    readonly postavshikam: Locator;
    readonly contact: Locator;
    readonly cart: Locator;
    readonly favourites: Locator;
    readonly enter: Locator;
    readonly optovikam: Locator;

    // Catalog
    readonly catalogOpenButton: Locator;
    readonly closeCatalogButton: Locator;
    readonly catalogMain: Locator;

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
    readonly closeModelEntetAccountButon: Locator;
    readonly showPasswordButon: Locator;
    readonly hidePasswordButon: Locator;

    constructor(page: Page) {
        this.page = page;

        // Header links
        this.deliveryAndPayment = page.locator('html > body > header > div:nth-of-type(1) > div > div:nth-of-type(1) > nav > div:nth-of-type(1) > a');
        this.postavshikam = page.locator('html > body > header > div:nth-of-type(1) > div > div:nth-of-type(1) > nav > div:nth-of-type(2) > a');
        this.contact = page.locator('html > body > header > div:nth-of-type(1) > div > div:nth-of-type(1) > nav > div:nth-of-type(4) > a');
        this.cart = page.locator('html > body > header > div:nth-of-type(2) > div:nth-of-type(6) > div > div > a > span > div');
        this.favourites = page.locator('html > body > header > div:nth-of-type(2) > div:nth-of-type(5) > a > span:nth-of-type(2)');
        this.enter = page.locator('html > body > header > div:nth-of-type(2) > div:nth-of-type(4) > a > span > span');
        this.optovikam = page.locator('header').getByText('Оптовикам');

        // Catalog
        this.catalogOpenButton = page.locator('//div[@id="header__middle--catalog-menu"]');
        this.closeCatalogButton = page.locator('div[class="header__button-menu open"] img[class="header__button-menu--img-icon-close"]');
        this.catalogMain = page.locator('div[class="CatalogPopup open"]');

        // Modal
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
        this.closeModelEntetAccountButon = page.locator('//span[contains(@class, "fa-close")]');
        this.showPasswordButon = page.locator('//span[@title="Показать пароль"]');
        this.hidePasswordButon = page.locator('//span[@title="Скрыть пароль"]');
    }

    async checkAllHeaderLinks() {
        await this.deliveryAndPayment.click();
        await expect(this.page).toHaveTitle(/Информация об оплате и доставке/i);

        await this.page.goBack();
        await this.postavshikam.click();
        await expect(this.page).toHaveTitle(/Стать поставщиком/i);

        await this.page.goBack();
        await this.optovikam.click();
        await expect(this.page).toHaveTitle(/Купить спортивное питание оптом/i);

        await this.page.goBack();
        await this.contact.click();
        await expect(this.page).toHaveTitle(/Контакты/i);

        await this.favourites.click();
        await expect(this.page).toHaveTitle(/Избранное/i);

        await this.cart.click();
        await expect(this.page).toHaveTitle(/Моя корзина/i);
    }

    async checkCatalogFunctionality() {
        await expect(this.catalogOpenButton).toBeVisible();
        await this.catalogOpenButton.click();
        await expect(this.catalogMain).toBeVisible();
        await expect(this.closeCatalogButton).toBeVisible();
        await this.closeCatalogButton.click();
        await expect(this.catalogOpenButton).toBeVisible();
    }

    async checkLoginModalElements() {
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
        await expect(this.closeModelEntetAccountButon).toBeVisible();
        await expect(this.showPasswordButon).toBeVisible();
        await this.showPasswordButon.click();
        await expect(this.hidePasswordButon).toBeVisible();
        await this.hidePasswordButon.click();
    }
}
