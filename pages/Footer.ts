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


    constructor(page: Page) {
        this.page = page;
        this.catalog = page.locator('html > body > footer > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(3) > div > div > div:nth-of-type(2) > div > div > a');
        this.sale = page.locator('html > body > footer > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(3) > div > div > div:nth-of-type(3) > div:nth-of-type(1) > div > div > a');
        this.energy = page.locator('//div[@id="bottomMenuFooterCatalog"]//a[contains(@href, "/product/energiya_i_vynoslivost/")]');
        this.muscles = page.locator('html > body > footer > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(3) > div > div > div:nth-of-type(3) > div:nth-of-type(3) > div > div > a');
        this.fitness = page.locator('html > body > footer > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(3) > div > div > div:nth-of-type(3) > div:nth-of-type(4) > div > div > a');
        this.vitamins = page.locator('html > body > footer > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(3) > div > div > div:nth-of-type(3) > div:nth-of-type(5) > div > div > a');
        this.nutritionSets = page.locator('html > body > footer > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(3) > div > div > div:nth-of-type(3) > div:nth-of-type(6) > div > div > a');
        this.massage = page.locator('html > body > footer > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(3) > div > div > div:nth-of-type(3) > div:nth-of-type(7) > div > div > a');
        this.cosmetics = page.locator('html > body > footer > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(3) > div > div > div:nth-of-type(3) > div:nth-of-type(8) > div > div > a');
        this.touristFood = page.locator('html > body > footer > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(3) > div > div > div:nth-of-type(3) > div:nth-of-type(9) > div > div > a');
        this.gadgets = page.locator('html > body > footer > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(3) > div > div > div:nth-of-type(3) > div:nth-of-type(10) > div > div > a');
        this.accessories = page.locator('html > body > footer > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(3) > div > div > div:nth-of-type(3) > div:nth-of-type(11) > div > div > a');








    }


}
