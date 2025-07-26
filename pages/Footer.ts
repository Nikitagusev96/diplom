import { Page, Locator } from '@playwright/test';

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
    }
    async checkAllFoterLinks() {







}
