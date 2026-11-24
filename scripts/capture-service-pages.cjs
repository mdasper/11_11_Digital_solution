const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\6dfc7d58-d417-46de-afc1-37d7571d84eb\\screenshots';

const pagesToTest = [
  { name: 'websites', url: 'http://localhost:3000/services/websites' },
  { name: 'marketing', url: 'http://localhost:3000/services/marketing' },
  { name: 'reels', url: 'http://localhost:3000/services/reels' },
  { name: 'editing', url: 'http://localhost:3000/services/editing' },
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
    console.log(`\n=== Testing Service Page: ${p.name} ===`);

    for (const vp of viewports) {
      await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 2 });
      await page.goto(p.url, { waitUntil: 'domcontentloaded', timeout: 15000 });

      // Wait for page transition
      await new Promise((r) => setTimeout(r, 1600));

      const overflow = await page.evaluate(() => {
        return {
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          hasOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
        };
      });

      console.log(`[${p.name}] ${vp.name} overflow:`, overflow);

      // Scroll through page to trigger animations
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 400;
          const timer = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;

            if (totalHeight >= scrollHeight) {
              clearInterval(timer);
              resolve();
            }
          }, 80);
        });
      });

      await new Promise((r) => setTimeout(r, 600));

      // Capture full-page screenshot for 1440 and 375
      if (vp.name === '1440_desktop' || vp.name === '375_mobile') {
        const fullPath = path.join(outDir, `service_${p.name}_${vp.name}_full.png`);
        await page.screenshot({ path: fullPath, fullPage: true });
        console.log(`Saved screenshot: ${fullPath}`);
      }
    }
  }

  await browser.close();
  console.log('\n--- VERIFICATION FINISHED ---');
}

run().catch((err) => {
  console.error('Run failed:', err);
  process.exit(1);
});
