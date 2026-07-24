import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/features/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Liceum Polonijne w Warszawie" },
      {
        name: "description",
        content:
          "Liceum Polonijne w Warszawie – szkoła średnia z internatem dla młodzieży polskiego pochodzenia. Rekrutacja, matura, program nauczania.",
      },
      { property: "og:title", content: "Liceum Polonijne w Warszawie" },
      {
        property: "og:description",
        content:
          "Szkoła średnia z internatem w Warszawie dla młodzieży polskiego pochodzenia. Sprawdź rekrutację na nowy rok szkolny.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
