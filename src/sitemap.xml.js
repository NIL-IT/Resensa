import { useEffect } from "react";
import useLatinFormat from "./utils/hooks/useLatinFormat";

const SitemapGenerator = (equipment, solutions) => {
  useEffect(() => {
    const generateSitemap = async () => {
      const baseUrl = "https://new.recensa.ru";
      // Получаем данные из API

      // Создаем статические URL
      const staticUrls = [
        {
          url: baseUrl,
          lastModified: new Date(),
          changeFrequency: "daily",
          priority: 1,
        },
        {
          url: `${baseUrl}/about`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.8,
        },
        {
          url: `${baseUrl}/contact`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.5,
        },
        {
          url: `${baseUrl}/equipment`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.8,
        },
        {
          url: `${baseUrl}/solutions`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.8,
        },
      ];

      // Создаем динамические URL для оборудования
      const equipmentUrls = equipment.map((item) => ({
        url: `${baseUrl}/equipment/${useLatinFormat(item.name)}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      }));

      // Создаем динамические URL для решений
      const solutionsUrls = solutions.map((item) => ({
        url: `${baseUrl}/solutions/${useLatinFormat(item.name)}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      }));

      // Объединяем все URL
      const allUrls = [...staticUrls, ...equipmentUrls, ...solutionsUrls];

      // Создаем XML
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(
      (url) => `
  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastModified.toISOString()}</lastmod>
    <changefreq>${url.changeFrequency}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`;
      console.log(sitemap);
    };
    generateSitemap();
  }, []);

  return null; // Этот компонент не рендерит ничего видимого
};

export default SitemapGenerator;
