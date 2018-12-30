import puppeteer from 'puppeteer';

const appUrl = 'http://localhost:8080';
let page;
let browser;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: true,
    slowMo: 80
  });
  page = await browser.newPage();
});
afterAll(async () => {
  browser.close();
});

describe('End to end test', () => {
  it('should change the langue', async () => {
    await page.goto(appUrl);
    await page.waitForSelector('[data-test="header-title"]');
    let headerTitle = await page.$eval('[data-test="header-title"]', e => e.innerHTML);
    expect(headerTitle).toBe('Games catalog PS4');
    await page.click('[data-test="language-fr"]');
    headerTitle = await page.$eval('[data-test="header-title"]', e => e.innerHTML);
    expect(headerTitle).toEqual('Catalogue de jeux PS4');
    await page.click('[data-test="language-en"]');
  });

  it('should select X1 platform', async () => {
    await page.waitForSelector('[data-test="platform-X1"]');
    let cardSubTitle = await page.$eval('[data-test="card-subtitle"]', e => e.innerHTML);
    expect(cardSubTitle).toEqual('PS4');
    await page.click('[data-test="platform-X1"]');
    await page.waitForSelector('[data-test="card-subtitle"]');
    cardSubTitle = await page.$eval('[data-test="card-subtitle"]', e => e.innerHTML);
    const gameName = await page.$eval('[data-test="card-title"] span', e => e.innerHTML);
    expect(cardSubTitle).toEqual('X1');
    expect(gameName).toEqual('Xbox Game A');
  });

  it('should go to detail page and check the game name and its platform', async () => {
    const gameName = await page.$eval('[data-test="card-title"] span', e => e.innerHTML);
    await page.waitForSelector('[data-test="card-title"]');
    await page.click('[data-test="card-title"]');
    const headerTitle = await page.$eval('[data-test="header-title"]', e => e.innerHTML);
    expect(headerTitle).toEqual('Game details');
    const articleTitle = await page.$eval('[data-test="detail-article-title"]', e => e.innerHTML);
    const articleSubTitle = await page.$eval(
      '[data-test="detail-article-subtitle"]',
      e => e.innerHTML
    );
    expect(articleTitle).toEqual(gameName);
    expect(articleSubTitle).toEqual('X1');
  });

  it('should Go back to home page when click header logo', async () => {
    await page.click('[data-test="header-logo"]');
    const headerTitle = await page.$eval('[data-test="header-title"]', e => e.innerHTML);
    expect(headerTitle).toEqual('Games catalog PS4');
  });

  it('shows 404 message when route does not exist', async () => {
    await page.goto(`${appUrl}/unknown`);
    await page.waitForSelector('[data-test="not-found-message"]');
    const message = await page.$eval('[data-test="not-found-message"]', e => e.innerHTML);
    expect(message).toEqual('Every thing is fine, but this page does not exist!');
  });

  it('go back with the go back home button', async () => {
    await page.waitForSelector('[data-test="go-back-button"]');
    await page.click('[data-test="go-back-button"]');
    await page.waitForSelector('[data-test="platform-X1"]');
    const headerTitle = await page.$eval('[data-test="header-title"]', e => e.innerHTML);
    expect(headerTitle).toBe('Games catalog PS4');
  });
});
