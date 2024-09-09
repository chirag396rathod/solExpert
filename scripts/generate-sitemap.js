// scripts/generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { routes } from '../src/utils/routes.js'; // Import ES module

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://solexpert.in';

// Create a writable stream
const sitemapStream = new SitemapStream({ hostname: baseUrl });

// Create a promise that will resolve with the sitemap XML
const sitemapPromise = streamToPromise(sitemapStream);

routes.forEach(route => {
  // Handle dynamic segments like :id and :title
  const url = baseUrl + route.path;
  sitemapStream.write({ url, changefreq: route.changefreq, priority: route.priority });
});

// End the stream
sitemapStream.end();

// Resolve the promise and write the sitemap to a file
sitemapPromise.then(sitemapContent => {
  const outputPath = path.join(__dirname, '../public', 'sitemap.xml');
  fs.writeFileSync(outputPath, sitemapContent.toString(), 'utf8');
});
