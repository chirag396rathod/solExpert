// routes.js
export const routes = [
    { path: '/', changefreq: 'daily', priority: 1.0 },
    { path: '/services', changefreq: 'daily', priority: 0.8 },
    { path: '/service/:id', changefreq: 'weekly', priority: 0.7 },
    { path: '/about-us', changefreq: 'monthly', priority: 0.8 },
    { path: '/contact-us', changefreq: 'monthly', priority: 0.7 },
    { path: '/blogs', changefreq: 'daily', priority: 0.8 },
    { path: '/blog/:title', changefreq: 'weekly', priority: 0.6 },
    { path: '/create-blog', changefreq: 'yearly', priority: 0.5 },
  ];
  