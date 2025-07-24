export const siteUrl = 'https://raza-dev.vercel.app';
export const generateRobotsTxt = true;
export const exclude = ['/private-page'];
export async function transform(config, path) {
    return {
        loc: path, // The final URL
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7,
    };
}
