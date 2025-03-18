import fs from "node:fs/promises";
import express from "express";
import compression from "compression";
import sirv from "sirv";
import path from "path";

// Constants
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 5173;
const base = process.env.BASE || "/"; // Изменено с "https://new.recensa.ru/"

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile("./dist/client/index.html", "utf-8")
  : "";

// Create http server
const app = express();

// Add Vite or respective production middlewares
let vite;
if (!isProduction) {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    base,
  });
  app.use(vite.middlewares);
} else {
  app.use(compression());
  app.use(sirv(path.resolve("dist/client"), { extensions: [] }));
}

const validRoutes = [
  "/",
  "/equipment",
  "/solutions",
  "/about",
  "/contact",
  "/news/:name",
  "/admin/:id",
  "/auth",
  "/equipment/:id",
  "/solutions/:id",
];
// Helper function to check if a URL is valid
function isValidRoute(url) {
  // Remove query parameters and hash
  const cleanUrl = url.split("?")[0].split("#")[0];

  // Remove trailing slash if present (except for root)
  if (cleanUrl !== "/" && cleanUrl.endsWith("/")) {
    const cleanUrlTemp = cleanUrl.slice(0, -1);
    cleanUrl = cleanUrlTemp;
  }

  console.log(`Checking route: ${cleanUrl}`);

  // Check if it's a direct match with our valid routes
  if (validRoutes.includes(cleanUrl)) {
    console.log(`Valid route match: ${cleanUrl}`);
    return true;
  }

  // Check if it's a product page
  if (
    cleanUrl.startsWith("/equipment/") ||
    cleanUrl.startsWith("/solutions/")
  ) {
    // Here you might want to check if the specific product exists
    console.log(`Valid product route: ${cleanUrl}`);
    return true;
  }

  // Check for static assets
  if (
    cleanUrl.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/)
  ) {
    console.log(`Valid asset: ${cleanUrl}`);
    return true;
  }

  console.log(`Invalid route: ${cleanUrl}`);
  return false;
}

// Serve HTML
app.use("*", async (req, res) => {
  try {
    // Get the URL without the base
    const fullUrl = req.originalUrl;
    console.log(`Request: ${req.method} ${fullUrl}`);

    // Remove the base from the URL if it's present
    let url = fullUrl;
    if (base !== "/" && url.startsWith(base)) {
      url = url.substring(base.length);
    }

    // Determine if this is a valid route
    const isValid = isValidRoute(url);

    // Set status code based on route validity
    const statusCode = isValid ? 200 : 404;
    console.log(`Setting status code: ${statusCode} for ${url}`);

    let template, render;
    if (!isProduction) {
      // Always read fresh template in development
      template = await fs.readFile("./index.html", "utf-8");
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule("/src/entry-server.jsx")).render;
    } else {
      template = templateHtml;
      render = (await import("./dist/server/entry-server.js")).render;
    }

    // Pass the status code to the render function
    const rendered = await render(url, statusCode);

    // Add initial state to the template
    const initialState = `<script>window.__INITIAL_STATE__ = ${JSON.stringify(
      rendered.initialState || {}
    ).replace(/</g, "\\u003c")}</script>`;

    const html = template
      .replace("<!--app-head-->", rendered.head || "")
      .replace("<!--app-html-->", rendered.html || "")
      .replace("<!--initial-state-->", initialState);

    // IMPORTANT: Set the status code explicitly before sending the response
    res.status(statusCode);

    // Add debug header to see if our status code is being set
    res.set("X-Debug-Status-Code", statusCode.toString());

    // Set content type and send the HTML
    res.set({ "Content-Type": "text/html" }).end(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
