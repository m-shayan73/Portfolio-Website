import { promises as fs } from 'fs';

const files = [
  'node_modules/slick-carousel/slick/slick-theme.css',
  'node_modules/animate.css/animate.css',
];

async function removeCharsetDeclarations() {
  try {
    for (const file of files) {
      let data = await fs.readFile(file, 'utf8');
      const result = data.replace(/@charset\s+['"][^'"]+['"];/g, '');
      await fs.writeFile(file, result, 'utf8');
      console.log(`Removed @charset from ${file}`);
    }
  } catch (err) {
    console.error('Error removing @charset declarations:', err);
  }
}

removeCharsetDeclarations();