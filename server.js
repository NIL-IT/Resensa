import fs from "node:fs/promises";
import express from "express";
import compression from "compression";
import sirv from "sirv";

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

// Serve HTML
app.use("*", async (req, res) => {
  console.log(`Request: ${req.method} ${req.originalUrl}`);
  try {
    const url = req.originalUrl.replace(base, "");

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

    res.status(200).set({ "Content-Type": "text/html" }).end(html);
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
