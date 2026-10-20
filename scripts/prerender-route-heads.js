import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { createServer } from "vite";
import { getCanonicalUrl, ROUTE_METADATA, SITE_URL } from "../src/seo/routes.js";

const template = readFileSync("dist/index.html", "utf8");
const escapeHtml = (value) =>
  value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");

const vite = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

try {
  const { default: App } = await vite.ssrLoadModule("/src/App.jsx");

  for (const [pathname, metadata] of Object.entries(ROUTE_METADATA)) {
    const canonicalUrl = getCanonicalUrl(pathname);
    const pageMarkup = renderToString(
      React.createElement(StaticRouter, { location: pathname }, React.createElement(App)),
    );
    const values = {
      __SEO_PATH__: pathname,
      __SEO_TITLE__: metadata.title,
      __SEO_DESCRIPTION__: metadata.description,
      __SEO_ROBOTS__: metadata.indexable ? "index,follow" : "noindex,nofollow",
      __SEO_CANONICAL__: canonicalUrl,
    };

    let html = template;
    for (const [placeholder, value] of Object.entries(values)) {
      html = html.replaceAll(placeholder, escapeHtml(value));
    }

    const rootElement = `<div id="root" data-prerendered-path="${escapeHtml(pathname)}"></div>`;
    if (!html.includes(rootElement)) {
      throw new Error("Could not find the application root in the built HTML template.");
    }
    html = html.replace(
      rootElement,
      `<div id="root" data-prerendered-path="${escapeHtml(pathname)}">${pageMarkup}</div>`,
    );

    const outputPath = pathname === "/" ? "dist/index.html" : join("dist", pathname, "index.html");
    mkdirSync(dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, html);
  }
} finally {
  await vite.close();
}

writeFileSync(
  join("dist", "robots.txt"),
  `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`,
);