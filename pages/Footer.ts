import { Page, Locator, expect } from '@playwright/test';

export class Footer {
    readonly page: Page;

    readonly catalog: Locator;
    readonly sale: Locator;
    readonly energy: Locator;
    readonly muscles: Locator;
    readonly fitness: Locator;
    readonly vitamins: Locator;
    readonly nutritionSets: Locator;
    readonly massage: Locator;
    readonly cosmetics: Locator;
    readonly touristFood: Locator;
    readonly gadgets: Locator;
    readonly accessories: Locator;
    readonly company: Locator;
    readonly brends: Locator;
    readonly ambassadors: Locator;
    readonly requisites: Locator;
    readonly blog: Locator;
    readonly where_buy: Locator;
    readonly contacts: Locator;
    readonly socialVk: Locator;
    readonly socialTg: Locator;
    readonly tg: Locator;


    constructor(page: Page) {
        this.page = page;
        this.catalog = page.locator('//a[@href=\'/product/\']');
        this.sale = page.locator('//div[@id="bottomMenuFooterCatalog"]//a[contains(@href, "/product/rasprodazha/")]');
        this.energy = page.locator('//div[@id="bottomMenuFooterCatalog"]//a[contains(@href, "/product/energiya_i_vynoslivost/")]');
        this.muscles = page.locator('//div[@id="bottomMenuFooterCatalog"]//a[contains(@href, "/product/myshtsy_i_vosstanovlenie/")]');
        this.fitness = page.locator('//div[@id="bottomMenuFooterCatalog"]//a[contains(@href, "/product/fitnes_pitanie/")]');
        this.vitamins = page.locator('//div[@id="bottomMenuFooterCatalog"]//a[contains(@href, "/product/vitaminy_i_mineraly/")]');
        this.nutritionSets = page.locator('//div[@id="bottomMenuFooterCatalog"]//a[contains(@href, "/product/nabory_pitaniya/")]');
        this.massage = page.locator('//div[@id="bottomMenuFooterCatalog"]//a[contains(@href, "/product/massazhnoe_oborudovanie_i_devaysy/")]');
        this.cosmetics = page.locator('//div[@id="bottomMenuFooterCatalog"]//a[contains(@href, "/product/sportivnaya_kosmetika/")]');
        this.touristFood = page.locator('//div[@id="bottomMenuFooterCatalog"]//a[contains(@href, "/product/turisticheskoe_pitanie/")]');
        this.gadgets = page.locator('//div[@id="bottomMenuFooterCatalog"]//a[contains(@href, "/product/chasy_i_gadzhety/")]');
        this.accessories = page.locator('//div[@id="bottomMenuFooterCatalog"]//a[contains(@href, "/product/aksessuary/")]');

        this.company = page.locator('//div[@id="bottomMenuFooterAbout"]//a[@href="/company/" and normalize-space(text())="О компании"]');
        this.brends = page.locator('//div[@id="bottomMenuFooterAbout"]//a[contains(@href, "/company/brends/")]');
        this.ambassadors = page.locator('//div[@id="bottomMenuFooterAbout"]//a[contains(@href, "/company/ambassadors/")]');
        this.requisites = page.locator('//div[@id="bottomMenuFooterAbout"]//a[contains(@href, "/company/requisites/")]');
        this.blog = page.locator('//div[@id="bottomMenuFooterAbout"]//a[contains(@href, "/articles/")]');
        this.where_buy = page.locator('//div[@id="bottomMenuFooterAbout"]//a[contains(@href, "/where_can_one_buy/")]');
        this.contacts = page.locator('//div[@id="bottomMenuFooterAbout"]//a[contains(@href, "/contacts/")]');

        //соициальные сети
        this.socialVk = page.locator('//div[@class="footer-social-line"]//a[contains(@href,"https://vk.com/sportferma")]')
        this.socialTg = page.locator('//div[@class="footer-social-line"]//a[contains(@href,"https://t.me/sportferma")]')

    }
    async checkAllFoterLinks() {
    await this.catalog.click();
    await expect(this.page).toHaveTitle(/Каталог спортивного питания | Спорт Ферма/);
    await expect(this.page).toHaveURL(/product/);

    await this.sale.click();
    await expect(this.page).toHaveURL(/rasprodazha/);
    await expect(this.page).toHaveTitle(/Спортивное питание со скидками до 50% в интернет-магазине Спорт Ферма c доставкой по выгодной цене/);

    await this.energy.click();
    await expect(this.page).toHaveTitle(/Энергия и выносливость - купить в интернет-магазине SPORTFERMA c кэшбэком и доставкой по России/);
    await expect(this.page).toHaveURL(/energiya_i_vynoslivost/);

    await this.muscles.click();
    await expect(this.page).toHaveTitle(/Восстановление мышц после тренировки – BCAA, протеин, гейнеры, аминокислоты | SPORTFERMA/);
    await expect(this.page).toHaveURL(/myshtsy_i_vosstanovlenie/);

    await this.fitness.click();
    await expect(this.page).toHaveTitle(/Питание для ЗОЖ – купить в интернет-магазине Спорт Ферма c доставкой по выгодной цене/);
    await expect(this.page).toHaveURL(/fitnes_pitanie/);

    await this.vitamins.click();
    await expect(this.page).toHaveTitle(/Витамины и минералы - купить в интернет-магазине SPORTFERMA c кэшбэком и доставкой по России/);
    await expect(this.page).toHaveURL(/vitaminy_i_mineraly/);

    await this.nutritionSets.click();
    await expect(this.page).toHaveTitle(/Выгодные наборы спортивного питания – купить в интернет-магазине Спорт Ферма c доставкой по выгодной цене/);
    await expect(this.page).toHaveURL(/nabory_pitaniya/);

    await this.massage.click();
    await expect(this.page).toHaveTitle(/Массажное оборудование и девайсы - купить в интернет-магазине SPORTFERMA c кэшбэком и доставкой по России/);
    await expect(this.page).toHaveURL(/massazhnoe_oborudovanie_i_devaysy/);

    await this.cosmetics.click();
    await expect(this.page).toHaveTitle(/Спортивная косметика - купить в интернет-магазине SPORTFERMA c кэшбэком и доставкой по России/);
    await expect(this.page).toHaveURL(/sportivnaya_kosmetika/);

    await this.touristFood.click();
    await expect(this.page).toHaveTitle(/Купить туристическое питание – сублимированные продукты, сухпайки и консервы | SPORTFERMA/);
    await expect(this.page).toHaveURL(/turisticheskoe_pitanie/);

    await this.gadgets.click();
    await expect(this.page).toHaveTitle(/Часы и гаджеты - купить в интернет-магазине SPORTFERMA c кэшбэком и доставкой по России/);
    await expect(this.page).toHaveURL(/chasy_i_gadzhety/);

    await this.accessories.click();
    await expect(this.page).toHaveTitle(/Аксессуары для спорта – купить в интернет-магазине Спорт Ферма c доставкой по выгодной цене/);
    await expect(this.page).toHaveURL(/aksessuary/);

    await this.company.click();
    await expect(this.page).toHaveTitle(/О компании | Спорт Ферма - Интернет-магазин Спорт Ферма/);
    await expect(this.page).toHaveURL(/company/);

    await this.brends.click();
    await expect(this.page).toHaveURL(/brends/);
    await expect(this.page).toHaveTitle(/Бренды | Спорт Ферма - Интернет-магазин Спорт Ферма/);

    await this.ambassadors.click();
    await expect(this.page).toHaveURL(/ambassadors/);
    await expect(this.page).toHaveTitle(/Амбассадоры | Спорт Ферма - Интернет-магазин Спорт Ферма/);

    await this.requisites.click();
    await expect(this.page).toHaveURL(/requisites/);
    await expect(this.page).toHaveTitle(/Реквизиты | Спорт Ферма - Интернет-магазин Спорт Ферма/);

    await this.blog.click();
    await expect(this.page).toHaveURL(/articles/);
    await expect(this.page).toHaveTitle(/Блог Спорт Фермы - Интернет-магазин Спорт Ферма/);

    await this.where_buy.click();
    await expect(this.page).toHaveURL(/where_can_one_buy/);
    await expect(this.page).toHaveTitle(/Где купить | Спорт Ферма - Интернет-магазин Спорт Ферма/);

    await this.contacts.click();
    await expect(this.page).toHaveURL(/contacts/);
    await expect(this.page).toHaveTitle(/Контакты | Интернет-магазин Спорт Ферма - Интернет-магазин Спорт Ферма/);
    }
    async checkSocialFoterLinks() {
    await this.socialVk.click();
    await expect(this.page).toHaveURL(/sportferma/);

    await this.socialTg.click();
    await expect(this.page).toHaveURL(/sportferma/);



    }

}


