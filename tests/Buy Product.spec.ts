import { test, expect } from '@playwright/test';
import { Authorization } from '../pages/Authorization';
import { Buy_Product } from '../pages/Buy_Product';

// Указываем, что этот тест будет запускаться только в Chromium
test.use({ browserName: 'chromium' });

test('Авторизация и покупка товара (только в Chromium)', async ({ page }) => {
    await page.goto('https://sportferma.com');

    const authorization = new Authorization(page);
    const buy = new Buy_Product(page);

    await authorization.authorization(); // логика логина
    await buy.buy_product(); // логика покупки
});
