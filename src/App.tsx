import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomePage from "@/features/HomePage";
import ArchivePage from "@/features/ArchivePage";
import { Seo } from "@/components/Seo";

const queryClient = new QueryClient();

const SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://liceumpolonijne.edu.pl";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Strona nie została znaleziona</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Podany adres nie istnieje lub został przeniesiony.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Strona główna
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Seo
                  title="Liceum Polonijne w Warszawie – szkoła z internatem"
                  description="Liceum Polonijne w Warszawie – szkoła średnia z internatem dla młodzieży polskiego pochodzenia. Rekrutacja, matura, program nauczania."
                  canonical={`${SITE_URL}/`}
                  jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "School",
                    name: "Liceum Polonijne w Warszawie",
                    description:
                      "Szkoła średnia z internatem w Warszawie dla młodzieży polskiego pochodzenia.",
                    address: {
                      "@type": "PostalAddress",
                      addressLocality: "Warszawa",
                      addressCountry: "PL",
                    },
                    url: `${SITE_URL}/`,
                  }}
                />
                <HomePage />
              </>
            }
          />
          <Route
            path="/archiwum"
            element={
              <>
                <Seo
                  title="Archiwum – Liceum Polonijne w Warszawie"
                  description="Archiwum wydarzeń, uroczystości i aktualności Liceum Polonijnego w Warszawie z lat 2013–2026."
                  canonical={`${SITE_URL}/archiwum`}
                  jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: [
                      {
                        "@type": "ListItem",
                        position: 1,
                        name: "Strona główna",
                        item: `${SITE_URL}/`,
                      },
                      {
                        "@type": "ListItem",
                        position: 2,
                        name: "Archiwum",
                        item: `${SITE_URL}/archiwum`,
                      },
                    ],
                  }}
                />
                <ArchivePage />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
