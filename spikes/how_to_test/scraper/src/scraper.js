const puppeteer = require('puppeteer');

const url = 'http://127.0.0.1:5000/login';

(async () => {
  const launch_options = {headless: true};
  const browser = await puppeteer.launch(launch_options);
  const page = await browser.newPage();
  await page.goto(url, {waitUntil: 'load'});
  await page.type('#username', 'foo');
  await page.click('#submit')
  const html = await  page.content();
  console.log(html);
  await browser.close();
})();
