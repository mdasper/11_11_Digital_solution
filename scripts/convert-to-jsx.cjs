const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const srcDir = path.join(__dirname, '..', 'src');

function getAllFiles(dir, exts) {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(getAllFiles(fullPath, exts));
    } else if (exts.some((ext) => entry.name.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  return files;
}

const allTsFiles = getAllFiles(srcDir, ['.ts', '.tsx']);

console.log(`Found ${allTsFiles.length} files to convert.`);

for (const filePath of allTsFiles) {
  if (filePath.endsWith('.d.ts')) {
    fs.unlinkSync(filePath);
    console.log(`Deleted definition file: ${filePath}`);
    continue;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const isTsx = filePath.endsWith('.tsx');

  const result = ts.transpileModule(content, {
    compilerOptions: {
      jsx: ts.JsxEmit.Preserve,
      target: ts.ScriptTarget.ESNext,
      module: ts.ModuleKind.ESNext,
      removeComments: false,
    },
    fileName: filePath,
  });

  const newExt = isTsx ? '.jsx' : '.js';
  const newPath = filePath.replace(/\.tsx?$/, newExt);

  fs.writeFileSync(newPath, result.outputText, 'utf8');
  fs.unlinkSync(filePath);
  console.log(`Converted: ${path.basename(filePath)} -> ${path.basename(newPath)}`);
}

// Convert vite.config.ts if present
const viteConfigTs = path.join(__dirname, '..', 'vite.config.ts');
if (fs.existsSync(viteConfigTs)) {
  const content = fs.readFileSync(viteConfigTs, 'utf8');
  const result = ts.transpileModule(content, {
    compilerOptions: {
      target: ts.ScriptTarget.ESNext,
      module: ts.ModuleKind.ESNext,
    },
  });
  const viteConfigJs = path.join(__dirname, '..', 'vite.config.js');
  fs.writeFileSync(viteConfigJs, result.outputText, 'utf8');
  fs.unlinkSync(viteConfigTs);
  console.log('Converted: vite.config.ts -> vite.config.js');
}

console.log('TS to JSX/JS conversion complete!');
