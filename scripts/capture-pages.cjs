const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\6dfc7d58-d417-46de-afc1-37d7571d84eb\\screenshots';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const pagesToTest = [
  { name: 'about', url: 'http://localhost:3000/about' },
  { name: 'services', url: 'http://localhost:3000/services' },
];

const viewports = [
  { name: '1440_desktop', width: 1440, height: 900 },
  { name: '1024_laptop', width: 1024, height: 768 },
  { name: '768_tablet', width: 768, height: 1024 },
  { name: '375_mobile', width: 375, height: 812 },
];

async function run() {
  console.log('Launching Chrome from:', chromePath);
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

  page.on('pageerror', (err) => {
    consoleErrors.push(err.toString());
  });

  for (const p of pagesToTest) {
    console.log(`\n=== Testing Page: ${p.name} (${p.url}) ===`);

    for (const vp of viewports) {
      await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 2 });
      await page.goto(p.url, { waitUntil: 'domcontentloaded', timeout: 15000 });

      // Wait for page transition curtains and animations
      await new Promise((r) => setTimeout(r, 1800));

      // Check overflow
      const overflow = await page.evaluate(() => {
        return {
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          hasOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
        };
      });

      console.log(`[${p.name}] ${vp.name} overflow:`, overflow);

      // Hero screenshot
      const heroPath = path.join(outDir, `${p.name}_${vp.name}_hero.png`);
      await page.screenshot({ path: heroPath, fullPage: false });

      // Scroll through page
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
          }, 100);
        });
      });

      await new Promise((r) => setTimeout(r, 800));

      // Full page screenshot
      const fullPath = path.join(outDir, `${p.name}_${vp.name}_full.png`);
      await page.screenshot({ path: fullPath, fullPage: true });
      console.log(`Saved: ${fullPath}`);
    }
  }

  await browser.close();

  console.log('\n--- VERIFICATION SUMMARY ---');
  console.log('Console errors captured:', consoleErrors.length);
  if (consoleErrors.length > 0) {
    console.log('Errors:', consoleErrors);
  } else {
    console.log('Zero console errors detected!');
  }
}

run().catch((err) => {
  console.error('Test run failed:', err);
  process.exit(1);
});
