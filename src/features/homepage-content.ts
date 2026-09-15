import type { Lang } from "@/lib/site-i18n";

export type AchievementLanguage = "all" | "en" | "ru" | "de";

export const educationProfiles = [
  { code: "MAT–INF", subjects: "Matematyka + Informatyka", description: "Profil dla przyszłych programistów, analityków danych i twórców nowych technologii. Rozwija logiczne myślenie, umiejętność rozwiązywania problemów oraz praktyczne kompetencje cyfrowe potrzebne na studiach technicznych.", icon: "code" },
  { code: "MAT–GEO", subjects: "Matematyka + Geografia", description: "Dobry wybór dla osób zainteresowanych ekonomią, finansami, logistyką, gospodarką przestrzenną lub turystyką. Łączy analizę danych z rozumieniem procesów społecznych, ekonomicznych i środowiskowych.", icon: "globe" },
  { code: "HIS–WOS", subjects: "Historia + Wiedza o społeczeństwie", description: "Kierunek dla uczniów zainteresowanych prawem, polityką, dyplomacją, mediami i życiem społecznym. Uczy interpretowania źródeł, świadomego argumentowania oraz rozumienia współczesnego świata.", icon: "landmark" },
  { code: "BIOL–CHEM", subjects: "Biologia + Chemia", description: "Przygotowuje do dalszej nauki na kierunkach medycznych, biologicznych, chemicznych i przyrodniczych. Duży nacisk kładzie na analizę zjawisk, pracę z materiałem badawczym i systematyczne przygotowanie do matury.", icon: "flask" },
  { code: "GEO–J. ROS.", subjects: "Geografia + Język rosyjski", description: "Łączy wiedzę o świecie z praktycznym rozwijaniem kompetencji językowych i międzykulturowych. To dobre przygotowanie do studiów związanych z biznesem międzynarodowym, turystyką, logistyką i stosunkami międzynarodowymi.", icon: "languages" },
  { code: "MAT–FIZ", subjects: "Matematyka + Fizyka", description: "Solidna podstawa dla kandydatów na studia inżynierskie, techniczne, informatyczne i ścisłe. Profil rozwija myślenie analityczne, modelowanie zjawisk oraz sprawne stosowanie matematyki w praktyce.", icon: "atom" },
] as const;

// Prototype data: replace these records when the school provides the final staff list.
export const teachers = [
  { name: "Anna Kowalska", role: "Dyrektor szkoły", description: "Dba o spójną wizję i rozwój szkoły." },
  { name: "Piotr Nowak", role: "Wicedyrektor", description: "Koordynuje codzienną pracę dydaktyczną." },
  { name: "Katarzyna Wiśniewska", role: "Język polski", description: "Rozwija świadome czytanie i argumentację." },
  { name: "Michał Kamiński", role: "Matematyka", description: "Pokazuje praktyczną stronę logicznego myślenia." },
  { name: "Natalia Zielińska", role: "Język angielski", description: "Buduje swobodę i pewność komunikacji." },
  { name: "Tomasz Wójcik", role: "Informatyka", description: "Łączy algorytmy z pracą projektową." },
  { name: "Aleksandra Lewandowska", role: "Biologia", description: "Zachęca do odkrywania świata przyrody." },
  { name: "Jakub Dąbrowski", role: "Fizyka", description: "Wyjaśnia zjawiska przez doświadczenia." },
  { name: "Maria Szymańska", role: "Historia / WOS", description: "Uczy rozumienia procesów i dyskusji." },
  { name: "Daniel Kozłowski", role: "Geografia", description: "Pomaga patrzeć na świat z wielu perspektyw." },
] as const;

// Language-specific achievements can be added by changing `language` from "all".
export const achievements: Array<{
  title: string;
  description: string;
  language: AchievementLanguage;
}> = [
  {
    title: "Srebrna Szkoła 2026",
    description: "Wyróżnienie w ogólnopolskim rankingu liceów Perspektywy.",
    language: "all",
  },
  {
    title: "Stypendia Prezesa Rady Ministrów",
    description: "Docenienie systematycznej pracy i wysokich wyników naszych uczniów.",
    language: "all",
  },
  {
    title: "Aktywni w bezpieczeństwie",
    description: "Certyfikat potwierdzający troskę szkoły o bezpieczne środowisko nauki.",
    language: "all",
  },
];

type PageCopy = {
  nav: { profiles: string; matura: string; achievements: string; staff: string; menu: string };
  heroLead: string;
  heroSecondary: string;
  profiles: { eyebrow: string; title: string; lead: string };
  matura: { eyebrow: string; title: string; lead: string; poland: string; school: string };
  achievements: {
    eyebrow: string;
    title: string;
    lead: string;
    filters: Record<AchievementLanguage, string>;
    empty: string;
  };
  staff: { eyebrow: string; title: string; lead: string; placeholder: string };
  life: { eyebrow: string; title: string; lead: string; cta: string };
  docs: { show: string; hide: string };
  dorm: { lead: string; gallery: string; open: string; previous: string; next: string; close: string };
};

const pl: PageCopy = {
  nav: { profiles: "Rozszerzenia", matura: "Matura", achievements: "Osiągnięcia", staff: "Kadra", menu: "Menu" },
  heroLead: "Nowoczesne liceum w Warszawie, które łączy ambitną edukację, skuteczne przygotowanie do matury i wspierającą społeczność.",
  heroSecondary: "Poznaj ofertę edukacyjną",
  profiles: {
    eyebrow: "Rozszerzenia",
    title: "Wybierz kierunek swojej edukacji",
    lead: "Sześć przemyślanych połączeń przedmiotów pozwala rozwijać mocne strony i przygotować się do wybranych studiów.",
  },
  matura: {
    eyebrow: "Wyniki matury",
    title: "Wyniki, które pokazują skuteczność naszej edukacji",
    lead: "Średni wynik naszych maturzystów jest o 20 punktów procentowych wyższy od średniej krajowej.",
    poland: "Średni wynik w Polsce",
    school: "Średni wynik w naszej szkole",
  },
  achievements: {
    eyebrow: "Osiągnięcia",
    title: "Ambicja przynosi rezultaty",
    lead: "Doceniamy konsekwentną pracę uczniów — od wyników akademickich po aktywność i odpowiedzialność.",
    filters: { all: "Wszystkie", en: "Angielski", ru: "Rosyjski", de: "Niemiecki" },
    empty: "Osiągnięcia w tej kategorii uzupełnimy po otrzymaniu danych od szkoły.",
  },
  staff: {
    eyebrow: "Kadra pedagogiczna",
    title: "Nauczyciele, którzy wspierają rozwój",
    lead: "Kameralna społeczność sprzyja uważnej pracy, rozmowie i indywidualnemu podejściu do każdego ucznia.",
    placeholder: "Nazwiska przykładowe — do podmiany",
  },
  life: {
    eyebrow: "Życie szkoły",
    title: "Nauka, relacje i doświadczenia",
    lead: "Wycieczki, uroczystości, projekty i codzienne chwile tworzą społeczność, w której młodzi ludzie mogą czuć się swobodnie i rozwijać zainteresowania.",
    cta: "Zobacz szkolny kalendarz",
  },
  docs: { show: "Zobacz dokumenty", hide: "Ukryj dokumenty" },
  dorm: {
    lead: "Uczniowie, którzy przyjeżdżają do Warszawy z innych miejscowości lub krajów, mogą korzystać z naszego internatu — komfortowego miejsca do nauki i życia.",
    gallery: "Galeria internatu",
    open: "Zobacz galerię",
    previous: "Poprzednie zdjęcie",
    next: "Następne zdjęcie",
    close: "Zamknij galerię",
  },
};

const en: PageCopy = {
  nav: { profiles: "Study paths", matura: "Matura", achievements: "Achievements", staff: "Staff", menu: "Menu" },
  heroLead: "A modern high school in Warsaw combining ambitious education, effective matura preparation and a supportive community.",
  heroSecondary: "Explore our programme",
  profiles: { eyebrow: "Extended subjects", title: "Choose your educational path", lead: "Six focused subject combinations help students develop their strengths and prepare for university." },
  matura: { eyebrow: "Matura results", title: "Results that demonstrate effective education", lead: "Our students’ average is 20 percentage points above the national average.", poland: "Polish average", school: "Our school average" },
  achievements: { eyebrow: "Achievements", title: "Ambition brings results", lead: "We recognise consistent academic work, initiative and responsibility.", filters: { all: "All", en: "English", ru: "Russian", de: "German" }, empty: "We will add achievements in this category when the school provides the details." },
  staff: { eyebrow: "Teaching staff", title: "Teachers who support growth", lead: "A close-knit community enables attentive teaching and an individual approach.", placeholder: "Sample names — to be replaced" },
  life: { eyebrow: "School life", title: "Learning, relationships and experiences", lead: "Trips, celebrations, projects and everyday moments build a welcoming school community.", cta: "View the school calendar" },
  docs: { show: "View documents", hide: "Hide documents" },
  dorm: { lead: "Students coming to Warsaw from other places or countries can use our boarding house — a comfortable place to study and live.", gallery: "Boarding gallery", open: "View gallery", previous: "Previous photo", next: "Next photo", close: "Close gallery" },
};

const ru: PageCopy = {
  nav: { profiles: "Профили", matura: "Матура", achievements: "Достижения", staff: "Педагоги", menu: "Меню" },
  heroLead: "Современный лицей в Варшаве, сочетающий амбициозное образование, эффективную подготовку к выпускным экзаменам и дружное сообщество.",
  heroSecondary: "Узнать о программе",
  profiles: { eyebrow: "Профили", title: "Выберите направление обучения", lead: "Шесть продуманных сочетаний предметов помогают развивать сильные стороны и готовиться к выбранной специальности." },
  matura: { eyebrow: "Результаты экзаменов", title: "Результаты, подтверждающие эффективность нашего обучения", lead: "Средний результат наших выпускников на 20 процентных пунктов выше среднего по стране.", poland: "Средний результат в Польше", school: "Средний результат нашей школы" },
  achievements: { eyebrow: "Достижения", title: "Амбиции приносят результаты", lead: "Мы ценим упорную учебу, инициативу и ответственность учеников.", filters: { all: "Все", en: "Английский", ru: "Русский", de: "Немецкий" }, empty: "Мы добавим достижения в этой категории после получения данных от школы." },
  staff: { eyebrow: "Педагогический состав", title: "Учителя, которые поддерживают развитие", lead: "Небольшое сообщество способствует внимательному обучению и индивидуальному подходу.", placeholder: "Примерные имена — будут заменены" },
  life: { eyebrow: "Школьная жизнь", title: "Учеба, отношения и впечатления", lead: "Экскурсии, праздники, проекты и повседневные события создают дружное школьное сообщество.", cta: "Смотреть школьный календарь" },
  docs: { show: "Показать документы", hide: "Скрыть документы" },
  dorm: { lead: "Ученики, приезжающие в Варшаву из других городов или стран, могут жить в нашем интернате — комфортном месте для учебы и жизни.", gallery: "Галерея интерната", open: "Открыть галерею", previous: "Предыдущее фото", next: "Следующее фото", close: "Закрыть галерею" },
};

const uk: PageCopy = {
  nav: { profiles: "Профілі", matura: "Матура", achievements: "Досягнення", staff: "Викладачі", menu: "Меню" },
  heroLead: "Сучасний ліцей у Варшаві, що поєднує амбітну освіту, ефективну підготовку до випускних іспитів та дружню спільноту.",
  heroSecondary: "Дізнатися про програму",
  profiles: { eyebrow: "Профілі", title: "Оберіть напрям навчання", lead: "Шість продуманих поєднань предметів допомагають розвивати сильні сторони та готуватися до обраної спеціальності." },
  matura: { eyebrow: "Результати іспитів", title: "Результати, що підтверджують ефективність нашого навчання", lead: "Середній результат наших випускників на 20 відсоткових пунктів вищий за середній у країні.", poland: "Середній результат у Польщі", school: "Середній результат нашої школи" },
  achievements: { eyebrow: "Досягнення", title: "Амбіції дають результати", lead: "Ми цінуємо наполегливе навчання, ініціативу та відповідальність учнів.", filters: { all: "Усі", en: "Англійська", ru: "Російська", de: "Німецька" }, empty: "Ми додамо досягнення в цій категорії після отримання даних від школи." },
  staff: { eyebrow: "Педагогічний склад", title: "Вчителі, які підтримують розвиток", lead: "Невелика спільнота сприяє уважному навчанню та індивідуальному підходу.", placeholder: "Прикладові імена — будуть замінені" },
  life: { eyebrow: "Шкільне життя", title: "Навчання, стосунки та враження", lead: "Екскурсії, свята, проєкти та щоденні події створюють дружню шкільну спільноту.", cta: "Переглянути шкільний календар" },
  docs: { show: "Показати документи", hide: "Сховати документи" },
  dorm: { lead: "Учні, які приїжджають до Варшави з інших міст або країн, можуть жити в нашому інтернаті — комфортному місці для навчання й життя.", gallery: "Галерея інтернату", open: "Відкрити галерею", previous: "Попереднє фото", next: "Наступне фото", close: "Закрити галерею" },
};

const be: PageCopy = {
  nav: { profiles: "Профілі", matura: "Матура", achievements: "Дасягненні", staff: "Выкладчыкі", menu: "Меню" },
  heroLead: "Сучасны ліцэй у Варшаве, які спалучае амбіцыйную адукацыю, эфектыўную падрыхтоўку да выпускных экзаменаў і дружную супольнасць.",
  heroSecondary: "Пазнаёміцца з праграмай",
  profiles: { eyebrow: "Профілі", title: "Выберыце напрамак навучання", lead: "Шэсць прадуманых спалучэнняў прадметаў дапамагаюць развіваць моцныя бакі і рыхтавацца да абранай спецыяльнасці." },
  matura: { eyebrow: "Вынікі экзаменаў", title: "Вынікі, якія пацвярджаюць эфектыўнасць нашай адукацыі", lead: "Сярэдні вынік нашых выпускнікоў на 20 працэнтных пунктаў вышэйшы за сярэдні па краіне.", poland: "Сярэдні вынік у Польшчы", school: "Сярэдні вынік нашай школы" },
  achievements: { eyebrow: "Дасягненні", title: "Амбіцыі прыносяць вынікі", lead: "Мы цэнім настойлівую вучобу, ініцыятыву і адказнасць вучняў.", filters: { all: "Усе", en: "Англійская", ru: "Руская", de: "Нямецкая" }, empty: "Мы дададзім дасягненні ў гэтай катэгорыі пасля атрымання даных ад школы." },
  staff: { eyebrow: "Педагагічны склад", title: "Настаўнікі, якія падтрымліваюць развіццё", lead: "Невялікая супольнасць спрыяе ўважліваму навучанню і індывідуальнаму падыходу.", placeholder: "Прыкладныя імёны — будуць заменены" },
  life: { eyebrow: "Школьнае жыццё", title: "Навучанне, адносіны і ўражанні", lead: "Экскурсіі, святы, праекты і штодзённыя падзеі ствараюць дружную школьную супольнасць.", cta: "Глядзець школьны каляндар" },
  docs: { show: "Паказаць дакументы", hide: "Схаваць дакументы" },
  dorm: { lead: "Вучні, якія прыязджаюць у Варшаву з іншых гарадоў або краін, могуць жыць у нашым інтэрнаце — камфортным месцы для вучобы і жыцця.", gallery: "Галерэя інтэрната", open: "Адкрыць галерэю", previous: "Папярэдняе фота", next: "Наступнае фота", close: "Закрыць галерэю" },
};

const kk: PageCopy = {
  nav: { profiles: "Бағыттар", matura: "Матура", achievements: "Жетістіктер", staff: "Ұстаздар", menu: "Мәзір" },
  heroLead: "Варшавадағы заманауи лицей сапалы білімді, бітіру емтихандарына нәтижелі дайындықты және қолдаушы ортаны біріктіреді.",
  heroSecondary: "Оқу бағдарламасын көру",
  profiles: { eyebrow: "Бағыттар", title: "Оқу бағытыңызды таңдаңыз", lead: "Алты үйлесімді пәндер жинағы оқушыларға қабілеттерін дамытуға және таңдаған мамандыққа дайындалуға көмектеседі." },
  matura: { eyebrow: "Емтихан нәтижелері", title: "Білім беру тиімділігін көрсететін нәтижелер", lead: "Біздің түлектердің орташа нәтижесі елдік көрсеткіштен 20 пайыздық тармаққа жоғары.", poland: "Польшадағы орташа нәтиже", school: "Мектебіміздің орташа нәтижесі" },
  achievements: { eyebrow: "Жетістіктер", title: "Талпыныс нәтиже береді", lead: "Біз оқушылардың тұрақты еңбегін, бастамашылдығын және жауапкершілігін бағалаймыз.", filters: { all: "Барлығы", en: "Ағылшын тілі", ru: "Орыс тілі", de: "Неміс тілі" }, empty: "Мектептен деректер алынған соң осы санаттағы жетістіктерді қосамыз." },
  staff: { eyebrow: "Педагогикалық ұжым", title: "Дамуға қолдау көрсететін ұстаздар", lead: "Шағын қауымдастық мұқият оқытуға және жеке көзқарасқа мүмкіндік береді.", placeholder: "Үлгі есімдер — кейін ауыстырылады" },
  life: { eyebrow: "Мектеп өмірі", title: "Оқу, қарым-қатынас және тәжірибе", lead: "Саяхаттар, мерекелер, жобалар мен күнделікті сәттер жылы мектеп ортасын қалыптастырады.", cta: "Мектеп күнтізбесін көру" },
  docs: { show: "Құжаттарды көру", hide: "Құжаттарды жасыру" },
  dorm: { lead: "Варшаваға басқа қалалардан немесе елдерден келген оқушылар оқу мен өмір сүруге қолайлы жатақханамызда тұра алады.", gallery: "Жатақхана галереясы", open: "Галереяны ашу", previous: "Алдыңғы фото", next: "Келесі фото", close: "Галереяны жабу" },
};

export const pageCopy: Record<Lang, PageCopy> = {
  pl,
  en,
  ru,
  uk,
  be,
  kk,
};