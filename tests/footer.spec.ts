import { test, expect } from '@playwright/test';
import { Footer } from '../pages/Footer';

test.describe('Проверка ссылок в футере', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sportferma.com');
    });

    test('Переход в "Каталог"', async ({ page }) => {
        const footer = new Footer(page);
        await footer.catalog.click();
        await expect(page).toHaveURL(/product/);
        await expect(page).toHaveTitle(/Каталог спортивного питания | Спорт Ферма/);
    });
    test('Переход в "Распродажа"', async ({ page }) => {
        const footer = new Footer(page);
        await footer.sale.click();
        await expect(page).toHaveURL(/rasprodazha/);
        await expect(page).toHaveTitle(/Спортивное питание со скидками до 50% в интернет-магазине Спорт Ферма c доставкой по выгодной цене/);
    });

    test('Переход в "Энергия и выносливость"', async ({ page }) => {
        const footer = new Footer(page);
        await footer.energy.click();
        await expect(page).toHaveURL(/energiya_i_vynoslivost/);
        await expect(page).toHaveTitle(/Энергия и выносливость - купить в интернет-магазине SPORTFERMA c кэшбэком и доставкой по России/);

    });

    test('Переход в "Мышцы и восстановление"', async ({ page }) => {
        const footer = new Footer(page);
        await footer.muscles.click();
        await expect(page).toHaveURL(/myshtsy_i_vosstanovlenie/);
        await expect(page).toHaveTitle(/Восстановление мышц после тренировки – BCAA, протеин, гейнеры, аминокислоты | SPORTFERMA/);

    });

    test('Переход в "Фитнес питание"', async ({ page }) => {
        const footer = new Footer(page);
        await footer.fitness.click();
        await expect(page).toHaveURL(/fitnes_pitanie/);
        await expect(page).toHaveTitle(/Питание для ЗОЖ – купить в интернет-магазине Спорт Ферма c доставкой по выгодной цене/);

    });

    test('Переход в "Витамины и минералы"', async ({ page }) => {
        const footer = new Footer(page);
        await footer.vitamins.click();
        await expect(page).toHaveURL(/vitaminy_i_mineraly/);
        await expect(page).toHaveTitle(/Витамины и минералы - купить в интернет-магазине SPORTFERMA c кэшбэком и доставкой по России/);

    });

    test('Переход в "Наборы питания"', async ({ page }) => {
        const footer = new Footer(page);
        await footer.nutritionSets.click();
        await expect(page).toHaveURL(/nabory_pitaniya/);
        await expect(page).toHaveTitle(/Выгодные наборы спортивного питания – купить в интернет-магазине Спорт Ферма c доставкой по выгодной цене/);

    });

    test('Переход в "Массажное оборудование"', async ({ page }) => {
        const footer = new Footer(page);
        await footer.massage.click();
        await expect(page).toHaveURL(/massazhnoe_oborudovanie_i_devaysy/);
        await expect(page).toHaveTitle(/Массажное оборудование и девайсы - купить в интернет-магазине SPORTFERMA c кэшбэком и доставкой по России/);

    });

    test('Переход в "Спортивная косметика"', async ({ page }) => {
        const footer = new Footer(page);
        await footer.cosmetics.click();
        await expect(page).toHaveURL(/sportivnaya_kosmetika/);
        await expect(page).toHaveTitle(/Спортивная косметика - купить в интернет-магазине SPORTFERMA c кэшбэком и доставкой по России/);

    });

    test('Переход в "Туристическое питание"', async ({ page }) => {
        const footer = new Footer(page);
        await footer.touristFood.click();
        await expect(page).toHaveURL(/turisticheskoe_pitanie/);
        await expect(page).toHaveTitle(/Купить туристическое питание – сублимированные продукты, сухпайки и консервы | SPORTFERMA/);

    });

    test('Переход в "Часы и гаджеты"', async ({ page }) => {
        const footer = new Footer(page);
        await footer.gadgets.click();
        await expect(page).toHaveURL(/chasy_i_gadzhety/);
        await expect(page).toHaveTitle(/Часы и гаджеты - купить в интернет-магазине SPORTFERMA c кэшбэком и доставкой по России/);

    });

    test('Переход в "Аксессуары"', async ({ page }) => {
        const footer = new Footer(page);
        await footer.accessories.click();
        await expect(page).toHaveURL(/aksessuary/);
        await expect(page).toHaveTitle(/Аксессуары для спорта – купить в интернет-магазине Спорт Ферма c доставкой по выгодной цене/);

    });

    test('Переход в "О компании"', async ({ page }) => {
        const footer = new Footer(page);
        await footer.company.click();
        await expect(page).toHaveURL(/company/);
        await expect(page).toHaveTitle(/О компании | Спорт Ферма - Интернет-магазин Спорт Ферма/);

    });
    test('Переход в "О брендах"', async ({ page }) => {
        const footer = new Footer(page);
        await footer.brends.click();
        await expect(page).toHaveURL(/brends/);
        await expect(page).toHaveTitle(/Бренды | Спорт Ферма - Интернет-магазин Спорт Ферма/);

    });
    test('Переход в "Амбассадоры"', async ({ page }) => {
        const footer = new Footer(page);
        await footer.ambassadors.click();
        await expect(page).toHaveURL(/ambassadors/);
        await expect(page).toHaveTitle(/Амбассадоры | Спорт Ферма - Интернет-магазин Спорт Ферма/);

    });
    test('Переход в "Реквизиты"', async ({ page }) => {
        const footer = new Footer(page);
        await footer.requisites.click();
        await expect(page).toHaveURL(/requisites/);
        await expect(page).toHaveTitle(/Реквизиты | Спорт Ферма - Интернет-магазин Спорт Ферма/);

    });
    test('Переход в "Блог"', async ({ page }) => {
        const footer = new Footer(page);
        await footer.blog.click();
        await expect(page).toHaveURL(/articles/);
        await expect(page).toHaveTitle(/Блог Спорт Фермы - Интернет-магазин Спорт Ферма/);
    });
    test('Переход в "Где купить"', async ({ page }) => {
        const footer = new Footer(page);
        await footer.where_buy.click();
        await expect(page).toHaveURL(/where_can_one_buy/);
        await expect(page).toHaveTitle(/Где купить | Спорт Ферма - Интернет-магазин Спорт Ферма/);
    });
    test('Переход в "Контакты"', async ({ page }) => {
        const footer = new Footer(page);
        await footer.contacts.click();
        await expect(page).toHaveURL(/contacts/);
        await expect(page).toHaveTitle(/Контакты | Интернет-магазин Спорт Ферма - Интернет-магазин Спорт Ферма/);
    });
});

