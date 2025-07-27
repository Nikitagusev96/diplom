import { test,} from '@playwright/test';
import { Footer } from '../pages/Footer';

test.describe('Проверка ссылок в футере', () => {
    let footer: Footer;
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sportferma.com');
        footer = new Footer(page);
    });
    test('Кликабельность всех ссылок в футере', async () => {
        await footer.checkAllFoterLinks();
    });
    test('Кликабельность социальных сетей в футере', async () => {
        await footer.checkSocialFoterLinks();
    });




});

