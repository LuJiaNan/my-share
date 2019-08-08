const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false,slowNo: 250});
  const page = await browser.newPage();
  await page.goto('http://192.168.60.24:3000/#/capaa/dbserver/db');
  await page.screenshot({path: 'example.png'});

  // await browser.close();
})();