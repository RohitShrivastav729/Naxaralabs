import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getCanonicalUrl, getRouteMetadata } from "./routes.js";

function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = getRouteMetadata(pathname);
    const canonicalUrl = getCanonicalUrl(pathname);
    const robots = metadata.indexable ? "index,follow" : "noindex,nofollow";

    document.title = metadata.title;

    const values = [
      ['meta[name="description"]', "content", metadata.description],
      ['meta[name="robots"]', "content", robots],
      ['meta[property="og:title"]', "content", metadata.title],
      ['meta[property="og:description"]', "content", metadata.description],
      ['meta[property="og:url"]', "content", canonicalUrl],
      ['meta[name="twitter:title"]', "content", metadata.title],
      ['meta[name="twitter:description"]', "content", metadata.description],
      ['link[rel="canonical"]', "href", canonicalUrl],
    ];

    for (const [selector, attribute, value] of values) {
      document.head.querySelector(selector)?.setAttribute(attribute, value);
    }
  }, [pathname]);

  return null;
}

export default SeoManager;