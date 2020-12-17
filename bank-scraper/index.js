const puppeteer = require('puppeteer');
const CREDS = require('./credentials.json');
const options = {headless: false};

(async () => {
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.goto(CREDS.host, {waitUntil: 'networkidle2'});
  await page.screenshot({path: 'example.png'});
  await page.type('#txtMyClientNumber_field', CREDS.username);
  await page.type('#txtMyPassword_field', CREDS.password);
  await Promise.all([
    page.click('#btnLogon_field'),
    page.waitForNavigation({ waitUntil: 'networkidle0' }),
  ]);
  await page.screenshot({path: 'example2.png'});

  await browser.close();
})();
