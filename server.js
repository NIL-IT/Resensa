import fs from "node:fs/promises";
import express from "express";
import compression from "compression";
import sirv from "sirv";
import path from "path";

// Constants
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 5173;
const base = process.env.BASE || "https://new.recensa.ru/";

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

// Define valid routes for 404 detection
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

  // Check if it's a direct match with our valid routes
  if (validRoutes.includes(cleanUrl)) {
    return true;
  }

  // Check if it's a product page
  if (
    cleanUrl.startsWith("/equipment/") ||
    cleanUrl.startsWith("/solutions/")
  ) {
    return true;
  }

  // Check for static assets
  if (
    cleanUrl.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/)
  ) {
    return true;
  }

  return false;
}

// Serve HTML
app.use("*", async (req, res) => {
  console.log(`Request: ${req.method} ${req.originalUrl}`);
  try {
    const url = req.originalUrl.replace(base, "");

    // Determine if this is a valid route
    const isValid = isValidRoute(url);

    // Set status code based on route validity
    const statusCode = isValid ? 200 : 404;

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

    // Here's the key change - await the render function
    const rendered = await render(url);

    // Add initial state to the template
    const initialState = `<script>window.__INITIAL_STATE__ = ${JSON.stringify(
      rendered.initialState || {}
    ).replace(/</g, "\\u003c")}</script>`;

    const html = template
      .replace("<!--app-head-->", rendered.head || "")
      .replace("<!--app-html-->", rendered.html || "")
      .replace("<!--initial-state-->", initialState); // Add this line to your index.html

    // Set the appropriate status code and send the HTML
    res.status(statusCode).set({ "Content-Type": "text/html" }).end(html);
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
