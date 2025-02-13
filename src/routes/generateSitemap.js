// export function generateSitemapXml(baseUrl, routes) {
//   const today = new Date().toISOString().split("T")[0];

//   let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
//   xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

//   routes.forEach((route) => {
//     xml += "  <url>\n";
//     xml += `    <loc>${baseUrl}${route}</loc>\n`;
//     xml += `    <lastmod>${today}</lastmod>\n`;
//     xml += "  </url>\n";
//   });

//   xml += "</urlset>";

//   return xml;
// }
