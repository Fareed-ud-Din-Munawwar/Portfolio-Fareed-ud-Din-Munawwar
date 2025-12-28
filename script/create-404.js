import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

// Create 404.html for GitHub Pages SPA routing
// GitHub Pages will serve this file for any 404, allowing client-side routing to work

async function create404() {
  const distPath = join(process.cwd(), 'dist', 'public');
  const indexPath = join(distPath, 'index.html');
  const notFoundPath = join(distPath, '404.html');

  try {
    const indexContent = await readFile(indexPath, 'utf-8');
    await writeFile(notFoundPath, indexContent);
    console.log('✓ Created 404.html for GitHub Pages SPA routing');
  } catch (error) {
    console.error('Error creating 404.html:', error);
    process.exit(1);
  }
}

create404();

