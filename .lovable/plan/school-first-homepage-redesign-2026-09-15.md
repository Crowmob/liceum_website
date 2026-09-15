# School-first homepage redesign

## Goal
Reorder and refine the existing homepage so the liceum’s education, academic results, profiles, teachers, and achievements lead the story, while the internat remains a polished supporting advantage.

## What will change
1. **Navigation and first impression**
   - Prioritize O szkole, Oferta edukacyjna, Rozszerzenia, Matura, Osiągnięcia, Kadra, Rekrutacja, Internat, Kontakt.
   - Keep the existing brand and school photography, but rewrite the lead and secondary action so education—not accommodation—is the immediate focus.
   - Add a usable compact mobile navigation rather than hiding the school section links.

2. **School-first page order**
   - Arrange the homepage as: introduction → advantages / offer → extended-subject profiles → matura comparison → achievements → teachers and leadership → student life → recruitment → internat → contact.
   - Reuse current sections and assets, splitting mixed content only where the hierarchy requires it.

3. **Educational profiles**
   - Add six concise, responsive cards for Inf-Mat, Geo-Mat, His-WOS, Chim-Bio, Geo-Rus, and Fiz-Mat.
   - Show full subject names and restrained subject-specific icons.

4. **Matura results**
   - Add a strong, accessible comparison using only the supplied values: Poland 59% and this school 79%.
   - Emphasize the school result with clear labels and mobile-safe progress bars.

5. **Achievements and language filter**
   - Turn the current academic distinction content into a dedicated achievement area.
   - Add functional tabs for Wszystkie, Angielski, Rosyjski, and Niemiecki.
   - Keep achievement data in an editable structure with language metadata, without inventing unsupported statistics.

6. **Teachers and leadership**
   - Add an editable data list of the ten supplied placeholder people, visibly marked as prototype content.
   - Present compact avatar cards with name and role/subject; use a grid on larger screens and a comfortable horizontal list on mobile.

7. **Student life**
   - Add a concise school-atmosphere bridge using existing school imagery and the school calendar/archive link, without duplicating archive content.

8. **Recruitment documents**
   - Keep every existing document and download link.
   - Collapse each document group by default behind a “Zobacz dokumenty” control, with accessible expand/collapse state.

9. **Internat presentation**
   - Move the internat after recruitment and frame it as an additional advantage for students coming to Warsaw.
   - Replace the oversized collage and always-visible grid with one strong featured image and a smaller preview strip.
   - Add a responsive lightbox with previous/next controls, keyboard navigation, close behavior, image count, and thumbnails.
   - Order room/common-space images first and utility/laundry images last.

10. **Quality and responsive review**
    - Preserve language switching and existing links; add the new labels/content to every supported language where practical, with Polish as the authoritative copy.
    - Respect reduced-motion preferences and keep image dimensions stable.
    - Verify desktop and mobile layouts, gallery navigation, filters, collapsed documents, links, missing images, console output, and production build diagnostics.

## Technical details
- Keep plain Vite + React and React Router; no backend changes.
- Reuse the existing semantic color tokens and shadcn Button/Dialog/Collapsible/Tabs patterns.
- Refactor the large homepage into focused local components/data where useful, without changing routes or archive behavior.
- Placeholder teacher names remain explicitly prototype-only and easy to replace.
