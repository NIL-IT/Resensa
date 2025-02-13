// import { ROUTES } from "./routes";
// import { generateSitemapXml } from "./generateSitemap";
// import fs from "fs";
// import { useSelector } from "react-redux";
// const baseUrl = "https://new.recensa.ru";
// const routes = [
//   ROUTES.HOME,
//   ROUTES.EQUIPMENT,
//   ROUTES.SOLUTIONS,
//   ROUTES.ABOUT,
//   ROUTES.CONTACT,
//   ROUTES.AUTH,
// ];

// const { equipment, solutions } = useSelector(({ user }) => user);
// // Add dynamic routes
// const equipmentProducts = equipment.map(({ name }) => {
//   name: name;
// }); // Replace with actual IDs
// const solutionProducts = [1, 2, 3]; // Replace with actual IDs

// equipmentProducts.forEach((id) => {
//   routes.push(ROUTES.EQUIPMENT_PRODUCT.replace(":id", id));
// });

// solutionProducts.forEach((id) => {
//   routes.push(ROUTES.SOLUTIONS_PRODUCT.replace(":id", id));
// });

// // Generate sitemap
// const sitemap = generateSitemapXml(baseUrl, routes);

// console.log("Sitemap generated successfully!");
// // Save sitemap to file
// fs.writeFileSync("./public/sitemap.xml", sitemap);
