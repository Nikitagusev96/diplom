import { Page, Locator, expect } from '@playwright/test';

export class Buy_Product {
    readonly page: Page;
    readonly inbasketElement: Locator;
    readonly cart: Locator;
    readonly cartCount: Locator;
    readonly goToTheRegistration: Locator;
    readonly surnameName: Locator;
    readonly number: Locator;
    readonly email: Locator;
    readonly payOrder: Locator;


    constructor(page: Page) {
        this.page = page;
        this.inbasketElement = page.locator('//div[contains(@class, "buy_block")]//div[@data-item-id="471"]//button[contains(@class, "to_cart")]');
        this.cart = page.locator('(//div[@id="basket-area"]/a[@href="/cart/" and contains(@class, "basket-link")])[1]');
        this.cartCount  = page.locator('//span[@class=\'item__num count\']')

        this.goToTheRegistration = page.locator('button[data-entity=\'basket-checkout-button\']')

        this.surnameName = page.locator('//input[@id="soa-property-1"]')
        this.number = page.locator('//input[contains(@autocomplete, \'tel\')]')
        this.email = page.locator('//input[contains(@placeholder, \'e-mail\')]')
        this.payOrder = page.locator('//a[contains(@style, \'font\')]')

    }


    async buy_product() {
        await this.page.goto('https://sportferma.com/product/gel_gu_original_shokoladnoe_bezumie_1_sht/');
        await this.inbasketElement.click();
        await this.cart.click();
        await expect(this.page).toHaveURL(/cart/);
        await expect(this.page).toHaveTitle(/Моя корзина - Интернет-магазин Спорт Ферма/);
        //перейти к оформлению
        await expect(this.goToTheRegistration).toBeVisible();
        await this.goToTheRegistration.click();
        await expect(this.page).toHaveURL(/order/);
        await expect(this.page).toHaveTitle(/Оформление заказа - Интернет-магазин Спорт Ферма/);

        await this.surnameName.clear();
        await this.surnameName.pressSequentially('Никита Гусев');
        await this.number.clear();
        await this.number.pressSequentially('9106955536');
        await this.email.clear();
        await this.email.pressSequentially('nikita-gusev-qa96@mail.ru');
        await this.payOrder.click();
        await expect(this.page.getByText('ООО "СПОРТ ФЕРМА"')).toBeVisible();

    }
    async name_negative() {
        await this.page.goto('https://sportferma.com/product/gel_gu_original_shokoladnoe_bezumie_1_sht/');
        await this.inbasketElement.click();
        await this.cart.click();
        await expect(this.page).toHaveURL(/cart/);
        await expect(this.page).toHaveTitle(/Моя корзина - Интернет-магазин Спорт Ферма/);
        //перейти к оформлению
        await expect(this.goToTheRegistration).toBeVisible();
        await this.goToTheRegistration.click();
        await expect(this.page).toHaveURL(/order/);
        await expect(this.page).toHaveTitle(/Оформление заказа - Интернет-магазин Спорт Ферма/);

        await this.surnameName.clear();

        await this.number.clear();
        await this.number.pressSequentially('9106955536');
        await this.email.clear();
        await this.email.pressSequentially('nikita-gusev-qa96@mail.ru');
        await this.payOrder.click();
        await expect(
            this.page.locator('div.alert.alert-danger').filter({ hasText: 'Поле "Имя и фамилия" обязательно для заполнения' })
        ).toBeVisible();
    }
    async number_negative() {
        await this.page.goto('https://sportferma.com/product/gel_gu_original_shokoladnoe_bezumie_1_sht/');
        await this.inbasketElement.click();
        await this.cart.click();
        await expect(this.page).toHaveURL(/cart/);
        await expect(this.page).toHaveTitle(/Моя корзина - Интернет-магазин Спорт Ферма/);
        //перейти к оформлению
        await expect(this.goToTheRegistration).toBeVisible();
        await this.goToTheRegistration.click();
        await expect(this.page).toHaveURL(/order/);
        await expect(this.page).toHaveTitle(/Оформление заказа - Интернет-магазин Спорт Ферма/);

        await this.surnameName.clear();
        await this.surnameName.pressSequentially('Никита Гусев');
        await this.number.clear();

        await this.email.clear();
        await this.email.pressSequentially('nikita-gusev-qa96@mail.ru');
        await this.payOrder.click();
        await expect(
            this.page.locator('div.alert.alert-danger').filter({ hasText: 'Поле "Телефон" обязательно для заполнения' })
        ).toBeVisible();
    }
    async email_negative() {
        await this.page.goto('https://sportferma.com/product/gel_gu_original_shokoladnoe_bezumie_1_sht/');
        await this.inbasketElement.click();
        await this.cart.click();
        await expect(this.page).toHaveURL(/cart/);
        await expect(this.page).toHaveTitle(/Моя корзина - Интернет-магазин Спорт Ферма/);
        //перейти к оформлению
        await expect(this.goToTheRegistration).toBeVisible();
        await this.goToTheRegistration.click();
        await expect(this.page).toHaveURL(/order/);
        await expect(this.page).toHaveTitle(/Оформление заказа - Интернет-магазин Спорт Ферма/);

        await this.surnameName.clear();
        await this.surnameName.pressSequentially('Никита Гусев');
        await this.number.clear();
        await this.number.pressSequentially('9106955536');
        await this.email.clear();

        await this.payOrder.click();
        await expect(
            this.page.locator('div.alert.alert-danger').filter({ hasText: 'Поле "Электронная почта" обязательно для заполнения' })
        ).toBeVisible();
    }
}