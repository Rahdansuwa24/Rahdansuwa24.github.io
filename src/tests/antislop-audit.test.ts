import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

function scanProductionFiles(dir: string, extensions: string[]): string[] {
  let fileList: string[] = [];
  const entries = fs.readdirSync(dir);

  for (const entry of entries) {
    if (entry === 'node_modules' || entry === '.git' || entry === 'dist' || entry === 'tests') continue;
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      fileList = fileList.concat(scanProductionFiles(fullPath, extensions));
    } else if (extensions.some(ext => entry.endsWith(ext))) {
      fileList.push(fullPath);
    }
  }

  return fileList;
}

describe('Antislop Delivery Gate Audit', () => {
  it('strictly verifies zero em dash characters across all production source, html, and css files', () => {
    const rootDir = path.resolve(__dirname, '../..');
    const productionFiles = scanProductionFiles(path.join(rootDir, 'src'), ['.ts', '.tsx', '.css'])
      .concat(scanProductionFiles(path.join(rootDir, 'public'), ['.html', '.txt']));

    expect(productionFiles.length).toBeGreaterThan(0);

    const EM_DASH = '\u2014';
    for (const filePath of productionFiles) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const hasEmDash = content.includes(EM_DASH);
      expect(hasEmDash, `Antislop Rule R-02 Violation: Found em dash in ${filePath}`).toBe(false);
    }
  });

  it('verifies resume PDF asset is staged in public directory', () => {
    const resumePath = path.resolve(__dirname, '../../public/resume.pdf');
    expect(fs.existsSync(resumePath), 'public/resume.pdf must exist for recruiter download').toBe(true);
    const stats = fs.statSync(resumePath);
    expect(stats.size).toBeGreaterThan(100000); // Resume PDF is ~699KB
  });

  it('verifies Cloudflare Pages SPA redirects file is present', () => {
    const redirectsPath = path.resolve(__dirname, '../../public/_redirects');
    expect(fs.existsSync(redirectsPath), 'public/_redirects must exist for SPA routing').toBe(true);
  });
});
