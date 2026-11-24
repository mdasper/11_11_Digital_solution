const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\6dfc7d58-d417-46de-afc1-37d7571d84eb\\screenshots';

const pagesToTest = [
  { name: 'work', url: 'http://localhost:3000/work' },
  { name: 'case_jb', url: 'http://localhost:3000/work/jb-healthcare' },
  { name: 'case_snapit', url: 'http://localhost:3000/work/snapit-studio' },
];

const viewports = [
  { name: '1440_desktop', width: 1440, height: 900 },
  { name: '1024_laptop', width: 1024, height: 768 },
  { name: '768_tablet', width: 768, height: 1024 },
  { name: '375_mobile', width: 375, height: 812 },
];

async function run() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();
  const consoleErrors = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  for (const p of pagesToTest) {
    console.log(`\n=== Testing Work Page: ${p.name} ===`);

    for (const vp of viewports) {
      await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 2 });
      await page.evaluateOnNewDocument(() => {
        sessionStorage.setItem('1111_preloader_seen', 'true');
      });
      await page.goto(p.url, { waitUntil: 'domcontentloaded', timeout: 15000 });

      // Wait for page transition & GSAP
      await new Promise((r) => setTimeout(r, 1200));

      const overflow = await page.evaluate(() => {
        return {
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          hasOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
        };
      });

      console.log(`[${p.name}] [${vp.name}] - ScrollWidth: ${overflow.scrollWidth}, ClientWidth: ${overflow.clientWidth}, Overflow: ${overflow.hasOverflow}`);

      if (vp.name === '1440_desktop' || vp.name === '375_mobile') {
        const fullPath = path.join(outDir, `${p.name}_${vp.name}_full.png`);
        await page.screenshot({ path: fullPath, fullPage: true });
        console.log(`Captured full screenshot: ${fullPath}`);
      }
    }
  }

  await browser.close();
  console.log('\n=== Summary of Console Errors ===');
  console.log(consoleErrors.length === 0 ? 'Zero console errors!' : consoleErrors);
}

run().catch((err) => {
  console.error('Error during work page capture:', err);
  process.exit(1);
});
