/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://raza-dev.vercel.app',
  generateRobotsTxt: true,
  exclude: ['/private-page'],
  transform: async (config, path) => {
    return {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.7,
    };
  },
};

export default config;
