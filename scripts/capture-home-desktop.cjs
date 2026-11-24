const puppeteer = require('puppeteer-core');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outPath = path.resolve('C:\\Users\\user\\.gemini\\antigravity\\brain\\6dfc7d58-d417-46de-afc1-37d7571d84eb\\screenshots\\light_home_1440_desktop_full.png');

async function run() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });
  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForSelector('#section-hero', { timeout: 20000 });
  await new Promise((r) => setTimeout(r, 2500));

  await page.screenshot({ path: outPath, fullPage: true });
  console.log('Saved 1440 desktop screenshot to:', outPath);
  await browser.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
