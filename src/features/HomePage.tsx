import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Atom,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Code2,
  Download,
  Facebook,
  FileText,
  FlaskConical,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Home,
  Instagram,
  Landmark,
  Languages,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Trophy,
  Utensils,
  Wifi,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { achievements, educationProfiles, pageCopy } from "@/features/homepage-content";
import { zasadyDoc, loDocs, internatDocs, type DocItem } from "@/lib/docs";
import { translations, languageOptions, type Lang } from "@/lib/site-i18n";

import logo from "@/assets/real/logo.png.asset.json";
import heroImg from "@/assets/real/recruitment.jpg.asset.json";
import schoolStart from "@/assets/real/school-start.jpg.asset.json";
import matura from "@/assets/real/matura.jpg.asset.json";
import certificate from "@/assets/real/certificate.jpg.asset.json";
import dorm1 from "@/assets/real/dorm-1.jpg.asset.json";
import dorm2 from "@/assets/real/dorm-2.jpg.asset.json";
import dorm3 from "@/assets/real/dorm-3.jpg.asset.json";
import dorm4 from "@/assets/real/dorm-4.jpg.asset.json";
import dorm5 from "@/assets/real/dorm-5.jpg.asset.json";
import dorm6 from "@/assets/real/dorm-6.jpg.asset.json";
import dorm7 from "@/assets/real/dorm-7.jpg.asset.json";
import dorm8 from "@/assets/real/dorm-8.jpg.asset.json";
import dorm9 from "@/assets/real/dorm-9.jpg.asset.json";
import dorm10 from "@/assets/real/dorm-10.jpg.asset.json";
import srebrnaSzkola from "@/assets/real/srebrna-szkola.png.asset.json";
import donationVideo from "@/assets/real/fundacja-1-5-procent.mp4.asset.json";

const SOCIAL_LINKS = [
  { label: "Liceum", url: "https://www.instagram.com/kolegium_sw.stanislawakostki/", icon: Instagram },
  { label: "Internat", url: "https://www.instagram.com/nasz_internat/", icon: Instagram },
  { label: "Liceum", url: "https://www.facebook.com/profile.php?id=100063546372254", icon: Facebook },
  { label: "SP", url: "https://www.facebook.com/bobrowiecka9", icon: Facebook },
];

const DORM_IMAGES = [dorm4, dorm3, dorm5, dorm9, dorm7, dorm2, dorm10, dorm6, dorm8, dorm1];
const PROFILE_ICONS = { code: Code2, globe: Globe2, landmark: Landmark, flask: FlaskConical, languages: Languages, atom: Atom };

export default function HomePageEntry() {
  return <HomePage />;
}

function useReveal(lang: Lang) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("reveal-in"));
    }, { threshold: 0.08 });
    element.querySelectorAll(".reveal").forEach((node) => {
      node.classList.remove("reveal-in");
      observer.observe(node);
    });
    return () => observer.disconnect();
  }, [lang]);
  return ref;
}

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return scrolled;
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  const idsKey = ids.join("|");
  useEffect(() => {
    const update = () => {
      const probe = window.innerHeight * 0.35;
      let current = ids[0] ?? "";
      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= probe) current = id;
      });
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [idsKey]);
  return active;
}

function HomePage() {
  const [lang, setLang] = useState<Lang>("pl");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrolled = useScrolled();
  const rootRef = useReveal(lang);
  const t = translations[lang];
  const copy = pageCopy[lang];

  useEffect(() => {
    const update = () => setShowScrollTop(window.scrollY > 400);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const navItems = useMemo(() => [
    { id: "o-szkole", label: t.nav.about },
    { id: "oferta", label: t.nav.offer },
    { id: "rozszerzenia", label: copy.nav.profiles },
    { id: "osiagniecia", label: copy.nav.achievements },
    { id: "internat", label: t.nav.dorm },
    { id: "rekrutacja", label: t.nav.recruitment },
    { id: "kontakt", label: t.nav.contact },
  ], [copy, t]);
  const active = useActiveSection(navItems.map((item) => item.id));

  return (
    <div ref={rootRef} className="min-h-screen bg-background text-foreground">
      <header className={`fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur-md transition-shadow ${scrolled ? "border-b border-border shadow-sm" : ""}`}>
        <div className="container-x flex h-20 items-center justify-between gap-4">
          <a href="#top" className="flex shrink-0 items-center gap-3" aria-label="Kolegium św. Stanisława Kostki — strona główna">
            <img src={logo.url} alt="Kolegium św. Stanisława Kostki" className="h-9 w-auto md:h-13" />
          </a>
          <nav className="hidden items-center gap-4 text-[13px] font-medium 2xl:flex" aria-label="Nawigacja główna">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className={`whitespace-nowrap border-b-2 py-2 transition-colors ${active === item.id ? "border-accent text-accent" : "border-transparent hover:text-accent"}`}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-1.5 sm:gap-3">
            <a href="/archiwum" aria-label={t.nav.archive} className="hidden h-10 items-center justify-center rounded-full px-3 text-sm font-medium transition-colors hover:bg-secondary hover:text-accent lg:inline-flex">
              {t.nav.archive}
            </a>
            <LanguageSwitcher lang={lang} onChange={setLang} ariaLabel={t.nav.langAria} />
            <Button asChild className="hidden rounded-full bg-accent px-5 text-accent-foreground hover:bg-accent/90 sm:inline-flex">
              <a href="#rekrutacja">{t.nav.apply}<ArrowRight /></a>
            </Button>
            <Button variant="ghost" size="icon" className="2xl:hidden" onClick={() => setMobileMenuOpen((open) => !open)} aria-expanded={mobileMenuOpen} aria-label={copy.nav.menu}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="container-x grid max-h-[calc(100svh-5rem)] grid-cols-2 gap-1 overflow-y-auto border-t border-border bg-background py-4 sm:grid-cols-3" aria-label="Nawigacja mobilna">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setMobileMenuOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary hover:text-accent">
                {item.label}
              </a>
            ))}
            <a href="/archiwum" className="rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary hover:text-accent">{t.nav.archive}</a>
          </nav>
        )}
      </header>

      <main>
        <section id="top" className="relative flex h-[92svh] min-h-[760px] max-h-[1020px] items-center overflow-hidden pt-20">
          <img src={heroImg.url} alt="Uczniowie Liceum Polonijnego w Warszawie" className="absolute inset-0 h-full w-full object-cover object-center kenburns" />
          <div className="absolute inset-0 bg-primary/65" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-primary/80 to-transparent" />
          <div className="container-x relative z-10 text-primary-foreground">
            <p className="reveal mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-accent sm:text-sm">{t.hero.eyebrow}</p>
            <h1 className="reveal max-w-5xl font-display text-4xl leading-[1.06] sm:text-6xl lg:text-7xl xl:text-8xl">
              {t.hero.titlePre} <span className="italic text-accent">{t.hero.titleAccent}</span>
            </h1>
            <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
              {copy.heroLead}
            </p>
            <div className="reveal mt-9 flex max-w-xl flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-13 rounded-full bg-accent px-7 text-accent-foreground hover:bg-accent/90"><a href="#rekrutacja">{t.hero.cta1}<ArrowRight /></a></Button>
              <Button asChild size="lg" variant="outline" className="h-13 rounded-full border-primary-foreground/50 bg-transparent px-7 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><a href="#oferta">{copy.heroSecondary}</a></Button>
            </div>
          </div>
          <a href="#o-szkole" className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-primary-foreground/80 transition-colors hover:text-accent" aria-label={t.hero.scrollAria}><ChevronDown className="h-8 w-8 animate-bounce" /></a>
        </section>

        <section id="o-szkole" className="container-x scroll-mt-24 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="reveal relative">
              <img src={schoolStart.url} alt="Społeczność Liceum Polonijnego" className="aspect-[4/3] w-full rounded-lg object-cover shadow-xl lg:aspect-[4/5]" />
              <div className="absolute bottom-4 right-4 max-w-[200px] rounded-lg bg-accent p-5 text-accent-foreground shadow-xl md:-bottom-6 md:-right-6">
                <div className="font-display text-4xl">{t.about.badgeNumber}</div>
                <div className="mt-1 text-sm font-medium leading-tight">{t.about.badgeText}</div>
              </div>
            </div>
            <div>
              <SectionHeading eyebrow={t.about.eyebrow} title="Liceum, które przygotowuje do ambitnej przyszłości" />
              <div className="mt-7 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p className="reveal">{t.about.p1}</p><p className="reveal">{t.about.p2}</p><p className="reveal">{t.about.p4}</p>
              </div>
              <div className="reveal mt-9 grid grid-cols-2 gap-4 border-t border-border pt-8">
                 <div><div className="font-display text-4xl text-primary">{t.about.statYearsValue}</div><div className="mt-1 text-sm text-muted-foreground">{t.about.statYearsLabel}</div></div>
                <div><div className="font-display text-4xl text-primary">{t.about.statCountriesValue}</div><div className="mt-1 text-sm text-muted-foreground">{t.about.statCountriesLabel}</div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="oferta" className="scroll-mt-24 bg-secondary/55 py-20 md:py-28">
          <div className="container-x">
            <SectionHeading centered eyebrow={t.offer.eyebrow} title={t.offer.title} />
             <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[t.offer.items[0], t.offer.items[1], t.offer.items[3], t.offer.items[4], t.offer.items[5]].map((item, index) => {
                const Icon = [GraduationCap, Languages, HeartHandshake, ShieldCheck, Trophy][index] ?? GraduationCap;
                 return <article key={item.title} className="reveal group flex flex-col items-center rounded-lg border border-border bg-card p-7 text-center transition-all hover:border-accent/60 hover:shadow-lg"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground"><Icon className="h-6 w-6" /></div><h3 className="font-display text-2xl text-primary">{item.title}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{item.desc}</p></article>;
              })}
               <article className="reveal group flex flex-col items-center rounded-lg border border-border bg-card p-7 text-center transition-all hover:border-accent/60 hover:shadow-lg"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground"><HeartHandshake className="h-6 w-6" /></div><h3 className="font-display text-2xl text-primary">Fundacja „Dla Polonii”</h3><p className="mt-2 leading-relaxed text-muted-foreground">Fundacja wspiera młodzież polonijną oraz prowadzi egzaminy certyfikatowe z języka polskiego na poziomie B1 i B2.</p><a href="https://www.fundacjadlapolonii.pl" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center justify-center gap-2 pt-5 text-sm font-semibold text-accent hover:underline">Strona Fundacji<ArrowRight className="h-4 w-4" /></a></article>
             </div>
             <div className="mx-auto mt-12 max-w-2xl">
              <article className="reveal flex flex-col rounded-lg border border-border bg-card p-6 text-center"><div className="relative aspect-video overflow-hidden rounded-md bg-primary"><video src={donationVideo.url} poster="/media/video/fundacja-1-5-procent-poster.jpg" className="absolute inset-0 h-full w-full object-contain" controls playsInline preload="metadata" /></div><h3 className="mt-5 font-display text-xl text-primary">Twoje 1,5% — mój powrót do Polski</h3><p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">Przekaż 1,5% podatku uczniom Kolegium. Fundacja „Dla Polonii”, KRS: <span className="font-semibold text-primary">0000423252</span>.</p><a href="https://www.fundacjadlapolonii.pl" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center justify-center gap-2 pt-5 text-sm font-semibold text-accent hover:underline">Strona Fundacji<ArrowRight className="h-4 w-4" /></a></article>
             </div>
           </div>
         </section>

        <section id="rozszerzenia" className="container-x scroll-mt-24 py-20 md:py-28">
          <SectionHeading centered eyebrow={copy.profiles.eyebrow} title={copy.profiles.title} lead={copy.profiles.lead} />
           <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-lg border border-border bg-card">
            {educationProfiles.map((profile) => {
              const Icon = PROFILE_ICONS[profile.icon];
                return <ProfileRow key={profile.code} profile={profile} icon={Icon} />;
            })}
          </div>
           <div className="reveal mx-auto mt-8 max-w-4xl rounded-lg border border-border bg-secondary/55 px-6 py-7 text-center sm:px-10">
             <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground"><Languages className="h-5 w-5" /></div>
             <h3 className="mt-4 font-display text-2xl text-primary">Języki obce do wyboru</h3>
             <div className="mt-5 flex flex-wrap justify-center gap-3">
               {["Język angielski", "Język rosyjski", "Język niemiecki"].map((language) => <span key={language} className="rounded-full border border-border bg-card px-5 py-2 text-sm font-semibold text-primary shadow-sm">{language}</span>)}
             </div>
           </div>
        </section>

        <AchievementsSection copy={copy} />

        <InternatSection t={t} copy={copy} />

        <section id="rekrutacja" className="container-x scroll-mt-24 py-20 md:py-28">
          <SectionHeading centered eyebrow={t.rec.eyebrow} title="Dołącz do naszego liceum" lead={t.rec.lead} />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <DocsCard title={t.rec.zasady} subtitle={t.rec.zasadySub} icon={ShieldCheck} highlight items={[zasadyDoc]} downloadLabel={t.rec.download} showLabel={copy.docs.show} hideLabel={copy.docs.hide} />
            <DocsCard title={t.rec.lo} subtitle={t.rec.loSub} icon={GraduationCap} items={loDocs} downloadLabel={t.rec.download} showLabel={copy.docs.show} hideLabel={copy.docs.hide} />
            <DocsCard title={t.rec.internat} subtitle={t.rec.internatSub} icon={Home} items={internatDocs} downloadLabel={t.rec.download} showLabel={copy.docs.show} hideLabel={copy.docs.hide} />
          </div>
          <div className="reveal mt-12 flex flex-col items-start justify-between gap-7 rounded-lg bg-primary p-8 text-primary-foreground md:flex-row md:items-center md:p-11">
            <div><h3 className="font-display text-3xl">{t.rec.ctaTitle}</h3><p className="mt-3 max-w-xl text-primary-foreground/80">{t.rec.ctaLead}</p></div>
            <div className="flex flex-col gap-3 sm:flex-row"><Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"><a href="mailto:rekrutacja.kolegium@gmail.com"><Mail />Napisz do nas</a></Button><Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><a href="tel:+48225592110"><Phone />22 559 21 10</a></Button></div>
          </div>
        </section>

        <section id="kontakt" className="scroll-mt-24 bg-secondary/55 py-20 md:py-28">
          <div className="container-x grid items-start gap-12 lg:grid-cols-2">
            <div><SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} lead={t.contact.lead} /><div className="reveal mt-9 space-y-5"><ContactLine icon={MapPin} label={t.contact.addressLabel}>{t.contact.address}</ContactLine><ContactLine icon={Phone} label={t.contact.phoneLabel}><a href="tel:+48225592110" className="hover:text-accent">22 559 21 10</a></ContactLine><ContactLine icon={Mail} label={t.contact.emailLabel}><a href="mailto:sekretariat@liceumpolonijne.edu.pl" className="break-all hover:text-accent">sekretariat@liceumpolonijne.edu.pl</a></ContactLine></div></div>
            <div className="reveal h-[420px] overflow-hidden rounded-lg border border-border shadow-lg"><iframe title="Mapa — ul. Bobrowiecka 9, Warszawa" src="https://www.google.com/maps?q=ul.+Bobrowiecka+9,+Warszawa&output=embed" className="h-full w-full border-0" loading="lazy" /></div>
          </div>
        </section>
      </main>

      <footer className="bg-primary py-12 text-primary-foreground/85"><div className="container-x grid items-center gap-8 md:grid-cols-3"><img src={logo.url} alt="Kolegium św. Stanisława Kostki" className="mx-auto h-12 w-auto brightness-0 invert md:mx-0" /><div className="flex flex-col items-center gap-3"><span className="text-xs uppercase tracking-[0.25em] text-primary-foreground/70">{t.footer.followUs}</span><div className="flex gap-4">{SOCIAL_LINKS.map((social) => <a key={social.url} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={`${social.label} — media społecznościowe`} className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"><social.icon className="h-4 w-4" /></a>)}</div></div><p className="text-center text-sm md:text-right">© {new Date().getFullYear()} {t.footer.rights}</p></div></footer>
      <Button size="icon" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Wróć na górę" className={`fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full bg-accent text-accent-foreground shadow-lg transition-all hover:bg-accent/90 ${showScrollTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}><ArrowUp /></Button>
    </div>
  );
}

function SectionHeading({ eyebrow, title, lead, centered = false, inverse = false }: { eyebrow: string; title: string; lead?: string; centered?: boolean; inverse?: boolean }) {
  return <div className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}><p className="reveal mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent">{eyebrow}</p><h2 className={`reveal font-display text-4xl leading-tight md:text-5xl ${inverse ? "text-primary-foreground" : "text-primary"}`}>{title}</h2>{lead && <p className={`reveal mt-5 text-lg leading-relaxed ${inverse ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{lead}</p>}</div>;
}

function AchievementsSection({ copy }: { copy: (typeof pageCopy)[Lang] }) {
  const achievementItems = [
    { title: achievements[0]?.title, description: achievements[0]?.description, image: srebrnaSzkola.url, alt: "Odznaka Srebrna Szkoła 2026 rankingu Perspektywy", detail: "Wyróżnienie potwierdza wysoki poziom nauczania i wyniki uczniów naszego liceum." },
    { title: achievements[1]?.title, description: achievements[1]?.description, image: matura.url, alt: "Uczennica wyróżniona za wyniki w nauce", detail: "Najwyższe wyniki w nauce doceniane prestiżowymi stypendiami." },
    { title: achievements[2]?.title, description: achievements[2]?.description, image: certificate.url, alt: "Certyfikat Aktywni w bezpieczeństwie", detail: "Szkoła wspiera odpowiedzialne relacje oraz przeciwdziała przemocy i cyberprzemocy." },
  ];
  return <section id="osiagniecia" className="scroll-mt-24 bg-secondary/55 py-20 md:py-28"><div className="container-x"><SectionHeading centered eyebrow={copy.achievements.eyebrow} title={copy.achievements.title} lead={copy.achievements.lead} /><div className="mx-auto mt-12 max-w-6xl space-y-6">{achievementItems.map((item, index) => <article key={item.title} className="reveal grid overflow-hidden rounded-lg border border-border bg-card lg:grid-cols-2"><div className={`flex min-h-72 items-center justify-center bg-background p-6 sm:min-h-96 sm:p-10 ${index % 2 === 1 ? "lg:order-2" : ""}`}><img src={item.image} alt={item.alt} loading="lazy" className="max-h-[430px] w-full object-contain" /></div><div className="flex flex-col items-center justify-center p-8 text-center sm:p-12"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-3 font-display text-3xl text-primary sm:text-4xl">{item.title}</h3><p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{item.description}</p><p className="mt-5 max-w-md border-t border-border pt-5 font-semibold text-primary">{item.detail}</p></div></article>)}</div><div className="mt-9 text-center"><Button asChild variant="outline" className="rounded-full"><a href="/archiwum">Zobacz osiągnięcia w szkolnym kalendarzu<ArrowRight /></a></Button></div></div></section>;
}

function ProfileRow({ profile, icon: Icon }: { profile: (typeof educationProfiles)[number]; icon: typeof Code2 }) {
  const [open, setOpen] = useState(false);
  return <Collapsible open={open} onOpenChange={setOpen} className="reveal border-b border-border last:border-b-0"><CollapsibleTrigger asChild><Button variant="ghost" className="h-auto w-full justify-start rounded-none px-5 py-5 text-left hover:bg-secondary sm:px-7"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-secondary text-primary"><Icon className="h-5 w-5" /></span><span className="min-w-0 flex-1"><span className="block whitespace-normal font-display text-xl text-primary">{profile.subjects}</span></span><ChevronDown className={`shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} /></Button></CollapsibleTrigger><CollapsibleContent><p className="px-7 pb-6 pl-[5.75rem] leading-relaxed text-muted-foreground">{profile.description}</p></CollapsibleContent></Collapsible>;
}

function InternatSection({ t, copy }: { t: (typeof translations)[Lang]; copy: (typeof pageCopy)[Lang] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const selectImage = (next: number) => setIndex((next + DORM_IMAGES.length) % DORM_IMAGES.length);
  const openGallery = (selected = 0) => { setIndex(selected); setOpen(true); };
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") selectImage(index - 1);
      if (event.key === "ArrowRight") selectImage(index + 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, open]);
  return <section id="internat" className="scroll-mt-24 bg-secondary/55 py-20 md:py-28"><div className="container-x grid items-center gap-10 lg:grid-cols-12 lg:gap-16"><div className="lg:col-span-5"><SectionHeading eyebrow={t.dorm.eyebrow} title="Internat — komfortowe miejsce do nauki i życia" lead={copy.dorm.lead} /><ul className="reveal mt-7 space-y-3">{t.dorm.bullets.slice(0, 4).map((bullet) => <li key={bullet} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><span>{bullet}</span></li>)}</ul><div className="reveal mt-8 flex gap-6">{[{ icon: Home, text: t.dorm.badgeRooms }, { icon: Utensils, text: t.dorm.badgeFood }, { icon: Wifi, text: t.dorm.badgeWifi }].map(({ icon: Icon, text }) => <div key={text} className="text-center"><div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-background text-primary"><Icon className="h-5 w-5" /></div><span className="mt-2 block text-xs text-muted-foreground">{text}</span></div>)}</div></div><div className="lg:col-span-7"><button type="button" className="reveal group relative block w-full cursor-pointer overflow-hidden rounded-lg text-left shadow-xl" onClick={() => openGallery(0)}><img src={DORM_IMAGES[0].url} alt="Wspólna przestrzeń wypoczynkowa w internacie" loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" /><span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-primary/80 p-5 text-primary-foreground"><span><span className="block text-xs uppercase tracking-[0.2em] text-accent">{copy.dorm.gallery}</span><span className="mt-1 block font-semibold">{copy.dorm.open}</span></span><ArrowRight className="h-5 w-5" /></span></button><div className="mt-3 grid grid-cols-4 gap-3">{DORM_IMAGES.slice(1, 5).map((image, imageIndex) => <button key={image.url} type="button" onClick={() => openGallery(imageIndex + 1)} className="cursor-pointer overflow-hidden rounded-md border border-border"><img src={image.url} alt={`Podgląd internatu ${imageIndex + 2}`} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform hover:scale-105" /></button>)}</div></div></div><Dialog open={open} onOpenChange={setOpen}><DialogContent className="max-h-[95svh] max-w-[min(96vw,1100px)] gap-3 overflow-hidden border-primary-foreground/20 bg-primary p-3 text-primary-foreground sm:rounded-lg sm:p-5 [&>button]:hidden"><div className="flex items-center justify-between gap-4 px-1"><div><DialogTitle className="font-display text-xl text-primary-foreground">{copy.dorm.gallery}</DialogTitle><DialogDescription className="text-primary-foreground/65">{index + 1} / {DORM_IMAGES.length}</DialogDescription></div><Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label={copy.dorm.close} className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><X /></Button></div><div className="relative flex min-h-0 items-center justify-center overflow-hidden rounded-md bg-background/5"><img src={DORM_IMAGES[index].url} alt={`Internat — zdjęcie ${index + 1}`} className="max-h-[68svh] w-full object-contain" /><Button size="icon" onClick={() => selectImage(index - 1)} aria-label={copy.dorm.previous} className="absolute left-3 rounded-full bg-background/90 text-foreground hover:bg-background"><ChevronLeft /></Button><Button size="icon" onClick={() => selectImage(index + 1)} aria-label={copy.dorm.next} className="absolute right-3 rounded-full bg-background/90 text-foreground hover:bg-background"><ChevronRight /></Button></div><div className="flex gap-2 overflow-x-auto pb-1">{DORM_IMAGES.map((image, imageIndex) => <button key={image.url} type="button" onClick={() => setIndex(imageIndex)} aria-label={`Zdjęcie ${imageIndex + 1}`} className={`shrink-0 cursor-pointer overflow-hidden rounded-md border-2 ${index === imageIndex ? "border-accent" : "border-transparent"}`}><img src={image.url} alt="" className="h-16 w-24 object-cover" /></button>)}</div></DialogContent></Dialog></section>;
}

function LanguageSwitcher({ lang, onChange, ariaLabel }: { lang: Lang; onChange: (lang: Lang) => void; ariaLabel: string }) {
  const current = languageOptions.find((option) => option.code === lang) ?? languageOptions[0];
  if (!current) return null;
  return <DropdownMenu><DropdownMenuTrigger asChild><Button variant="outline" className="rounded-full px-2.5 sm:px-3" aria-label={ariaLabel}><span className="text-base">{current.flag}</span><span className="hidden sm:inline">{current.code.toUpperCase()}</span><ChevronDown className="opacity-60" /></Button></DropdownMenuTrigger><DropdownMenuContent align="end">{languageOptions.map((option) => <DropdownMenuItem key={option.code} onClick={() => onChange(option.code)} className={`cursor-pointer gap-2 ${option.code === lang ? "font-semibold text-accent" : ""}`}><span>{option.flag}</span>{option.label}</DropdownMenuItem>)}</DropdownMenuContent></DropdownMenu>;
}

function DocsCard({ title, subtitle, icon: Icon, items, highlight, downloadLabel, showLabel, hideLabel }: { title: string; subtitle: string; icon: typeof FileText; items: DocItem[]; highlight?: boolean; downloadLabel: string; showLabel: string; hideLabel: string }) {
  const [open, setOpen] = useState(false);
  return <Collapsible open={open} onOpenChange={setOpen} className={`reveal self-start rounded-lg border p-6 transition-shadow hover:shadow-lg ${highlight ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`}><div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-md ${highlight ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"}`}><Icon className="h-6 w-6" /></div><h3 className={`font-display text-2xl ${highlight ? "text-primary-foreground" : "text-primary"}`}>{title}</h3><p className={`mt-1 text-sm ${highlight ? "text-primary-foreground/65" : "text-muted-foreground"}`}>{subtitle}</p><CollapsibleTrigger asChild><Button variant={highlight ? "secondary" : "outline"} className="mt-6 w-full justify-between rounded-md">{open ? hideLabel : showLabel}<ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} /></Button></CollapsibleTrigger><CollapsibleContent><ul className="mt-5 space-y-2 border-t border-current/15 pt-5">{items.map((item) => <li key={item.name} className={`rounded-md border p-3 ${highlight ? "border-primary-foreground/15 bg-primary-foreground/5" : "border-border bg-secondary/40"}`}><div className="flex items-start gap-3"><FileText className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><div className="min-w-0 flex-1"><div className="text-sm font-medium leading-snug">{item.name}</div><div className="mt-2 flex flex-wrap gap-1.5">{item.files.map((file) => <a key={file.kind + file.url} href={file.url} target="_blank" rel="noopener noreferrer" download className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-semibold ${highlight ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"}`} aria-label={`${downloadLabel} ${item.name} (${file.kind})`}><Download className="h-3 w-3" />{file.kind}</a>)}</div></div></div></li>)}</ul></CollapsibleContent></Collapsible>;
}

function ContactLine({ icon: Icon, label, children }: { icon: typeof MapPin; label: string; children: React.ReactNode }) {
  return <div className="flex items-start gap-4"><Icon className="mt-1 h-6 w-6 shrink-0 text-accent" /><div><div className="font-semibold text-primary">{label}</div><div className="text-muted-foreground">{children}</div></div></div>;
}
