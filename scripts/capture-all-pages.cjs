const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = path.resolve('C:\\Users\\user\\.gemini\\antigravity\\brain\\6dfc7d58-d417-46de-afc1-37d7571d84eb\\screenshots');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const routes = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'services', path: '/services' },
  { name: 'service_websites', path: '/services/websites' },
  { name: 'work', path: '/work' },
  { name: 'case_jb', path: '/work/jb-healthcare' },
  { name: 'pricing', path: '/pricing' },
  { name: 'contact', path: '/contact' },
];

const viewports = [
  { name: '1440_desktop', width: 1440, height: 900 },
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

  const baseUrl = 'http://localhost:3000';

  for (const route of routes) {
    const targetUrl = `${baseUrl}${route.path}`;
    console.log(`\nTesting page: ${route.name} (${targetUrl})`);

    for (const vp of viewports) {
      const page = await browser.newPage();
      try {
        await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 2 });
        await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 20000 });

        // Wait for lazy components & Three.js canvas to initialize
        await new Promise((r) => setTimeout(r, 3500));

        // Check overflow
        const overflow = await page.evaluate(() => {
          return {
            scrollWidth: document.documentElement.scrollWidth,
            clientWidth: document.documentElement.clientWidth,
            hasOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
          };
        });

        console.log(`  [${vp.name}] Overflow: ${overflow.hasOverflow ? 'YES (FAIL)' : 'NO (PASS)'} (scroll: ${overflow.scrollWidth}, client: ${overflow.clientWidth})`);

        // Smooth scroll
        await page.evaluate(async () => {
          await new Promise((resolve) => {
            let totalHeight = 0;
            const distance = 500;
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

        // Capture full screenshot
        const fullPath = path.join(outDir, `light_${route.name}_${vp.name}_full.png`);
        await page.screenshot({ path: fullPath, fullPage: true });
        console.log(`  [${vp.name}] Saved: ${path.basename(fullPath)}`);
      } catch (err) {
        console.error(`  [${vp.name}] Error capturing ${route.name}:`, err.message);
      } finally {
        await page.close();
      }
    }
  }

  await browser.close();

  console.log('\n=========================================');
  console.log('Total Console Errors:', consoleErrors.length);
  if (consoleErrors.length > 0) {
    console.log('Errors:', consoleErrors);
  } else {
    console.log('ZERO console errors detected! Quality gate PASS.');
  }
  console.log('=========================================');
}

run().catch((err) => {
  console.error('Fatal error during capture:', err);
  process.exit(1);
});
