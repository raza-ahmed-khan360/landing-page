export async function GET() {
  const content = `
User-agent: *
Allow: /

Sitemap: https://raza-dev.vercel.app/sitemap.xml
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
