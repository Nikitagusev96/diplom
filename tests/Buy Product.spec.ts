import { test, expect } from '@playwright/test';
import { Authorization } from '../pages/Authorization';
import { Buy_Product } from '../pages/Buy_Product';

// Указываем, что этот тест будет запускаться только в Chromium
test.use({ browserName: 'chromium' });

test('Покупка товара авторизованным пользователем (только в Chromium)', async ({ page }) => {
    await page.goto('https://sportferma.com');

    const authorization = new Authorization(page);
    const buy = new Buy_Product(page);

    await authorization.authorization();
    await buy.buy_product();
});

test('Покупка товара Имя и фамилия пустое ', async ({ page }) => {
    await page.goto('https://sportferma.com');

    const authorization = new Authorization(page);
    const name_negative = new Buy_Product(page);

    await authorization.authorization();
    await name_negative.name_negative();
});
test('Покупка товара телефон пустое ', async ({ page }) => {
    await page.goto('https://sportferma.com');

    const authorization = new Authorization(page);
    const number_negative = new Buy_Product(page);

    await authorization.authorization();
    await number_negative.number_negative();
});
test('Покупка товара email пустое ', async ({ page }) => {
    await page.goto('https://sportferma.com');

    const authorization = new Authorization(page);
    const email_negative = new Buy_Product(page);

    await authorization.authorization();
    await email_negative.email_negative();
});