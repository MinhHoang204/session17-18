export const GET = () => {
    const robotsContent = `
      User-agent: *
      Allow: /
      Sitemap: https://yourdomain.com/sitemap.xml
    `;
  
    return new Response(robotsContent, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
};
  