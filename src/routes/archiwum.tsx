import { createFileRoute } from "@tanstack/react-router";
import ArchivePage from "@/features/ArchivePage";

export const Route = createFileRoute("/archiwum")({
  head: () => ({
    meta: [
      { title: "Archiwum – Liceum Polonijne w Warszawie" },
      {
        name: "description",
        content:
          "Archiwum wydarzeń, uroczystości i aktualności Liceum Polonijnego w Warszawie z lat 2013–2026.",
      },
      { property: "og:title", content: "Archiwum – Liceum Polonijne" },
      {
        property: "og:description",
        content:
          "Przeglądaj archiwalne wpisy, wydarzenia i zdjęcia z historii Liceum Polonijnego w Warszawie.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/archiwum" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/archiwum" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Strona główna", item: "/" },
            { "@type": "ListItem", position: 2, name: "Archiwum", item: "/archiwum" },
          ],
        }),
      },
    ],
  }),
  component: ArchivePage,
});
