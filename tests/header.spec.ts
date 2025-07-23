import { test } from '@playwright/test';
import { Header } from '../pages/Header';

test.describe('HEADER: проверка основного функционала', () => {
    let header: Header;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://sportferma.com');
        header = new Header(page);
    });

    test('Кликабельность всех ссылок в хедере', async () => {
        await header.checkAllHeaderLinks();
    });

    test('Открытие и закрытие каталога', async () => {
        await header.checkCatalogFunctionality();
    });

    test('Открытие модального окна авторизации и его элементы', async () => {
        await header.checkLoginModalElements();
    });
});
