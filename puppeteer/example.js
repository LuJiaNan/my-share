const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false,slowNo: 250});
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();