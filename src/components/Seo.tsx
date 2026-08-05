import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  jsonLd?: Record<string, unknown>;
};

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Minimal document-head manager for a client-rendered Vite + React app.
 * Replaces TanStack Router's `head()` route option.
 */
export function Seo({ title, description, canonical, image, jsonLd }: SeoProps) {
  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("name", "twitter:card", "summary_large_image");
    if (canonical) {
      setLink("canonical", canonical);
      setMeta("property", "og:url", canonical);
    }
    if (image) {
      setMeta("property", "og:image", image);
      setMeta("name", "twitter:image", image);
    }
  }, [title, description, canonical, image]);

  useEffect(() => {
    if (!jsonLd) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => script.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(jsonLd ?? null)]);

  return null;
}
