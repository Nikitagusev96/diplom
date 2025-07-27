import { Locator, Page, expect } from '@playwright/test';

export class Header {
    readonly page: Page;

    // Header
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

        // Header
        this.deliveryAndPayment = page.locator('//nav[@class="navigation__items"]//a[contains(@href, "/delivery_and_payment/")]');
        this.postavshikam = page.locator('//nav[@class="navigation__items"]//a[contains(@href, "/supplier/")]');
        this.optovikam = page.locator('//nav[@class="navigation__items"]//a[contains(@href, "/b2b/")]');
        this.contact = page.locator('//nav[@class="navigation__items"]//a[contains(@href, "/contacts/")]');
        this.cart = page.locator('(//div[@id="basket-area"]/a[@href="/cart/" and contains(@class, "basket-link")])[1]');
        this.favourites = page.locator('//div[@class="header__middle--favorites"]');


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
