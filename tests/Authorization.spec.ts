import { test } from '@playwright/test';
import {Authorization} from '../pages/Authorization';

test.describe('Авторизация', () => {
    let authorization: Authorization;
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sportferma.com');
        authorization = new Authorization(page);
    });
    test('Authorization', async ({page}) => {
        await authorization.authorization();
    });
});