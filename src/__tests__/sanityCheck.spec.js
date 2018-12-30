import puppeteer from 'puppeteer';

describe('End to end test', () => {
  it('should check the language selection and select X1 platform, then choose the first game to see its details', async () => {
    const browser = await puppeteer.launch({
      headless: true,
      slowMo: 80
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:8080');
    // check language selection
    await page.waitForSelector('[data-test="header-title"]');
    let headerTitle = await page.$eval('[data-test="header-title"]', e => e.innerHTML);
    expect(headerTitle).toBe('Games catalog PS4');
    await page.click('[data-test="language-fr"]');
    headerTitle = await page.$eval('[data-test="header-title"]', e => e.innerHTML);
    expect(headerTitle).toEqual('Catalogue de jeux PS4');
    await page.click('[data-test="language-en"]');

    // check platform selection
    await page.waitForSelector('[data-test="platform-X1"]');
    let cardSubTitle = await page.$eval('[data-test="card-subtitle"]', e => e.innerHTML);
    expect(cardSubTitle).toEqual('PS4');
    await page.click('[data-test="platform-X1"]');
    await page.waitForSelector('[data-test="card-subtitle"]');
    cardSubTitle = await page.$eval('[data-test="card-subtitle"]', e => e.innerHTML);
    const gameName = await page.$eval('[data-test="card-title"] span', e => e.innerHTML);
    expect(cardSubTitle).toEqual('X1');
    expect(gameName).toEqual('Xbox Game A');

    // go to detail page and check game name and its platform
    await page.waitForSelector('[data-test="card-title"]');
    await page.click('[data-test="card-title"]');
    headerTitle = await page.$eval('[data-test="header-title"]', e => e.innerHTML);
    expect(headerTitle).toEqual('Game details');
    const articleTitle = await page.$eval('[data-test="detail-article-title"]', e => e.innerHTML);
    const articleSubTitle = await page.$eval(
      '[data-test="detail-article-subtitle"]',
      e => e.innerHTML
    );
    expect(articleTitle).toEqual(gameName);
    expect(articleSubTitle).toEqual('X1');

    // Go back to home page when click header logo
    await page.click('[data-test="header-logo"]');
    headerTitle = await page.$eval('[data-test="header-title"]', e => e.innerHTML);
    expect(headerTitle).toEqual('Games catalog PS4');
    browser.close();
  });
});
