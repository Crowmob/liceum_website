import type { Lang } from "@/lib/site-i18n";

export type ProfileCopy = { subjects: string; description: string };
export type AchievementCopy = { title: string; description: string; detail: string };

export type UiCopy = {
  aboutTitle: string;
  foundation: { title: string; desc: string; link: string };
  donation: { title: string; desc: string };
  languages: { title: string; items: [string, string, string] };
  profiles: ProfileCopy[];
  achievements: AchievementCopy[];
  achievementsCta: string;
  recTitle: string;
  recWrite: string;
  dormTitle: string;
  aria: { logoHome: string; mainNav: string; mobileNav: string; scrollTop: string; map: string; social: string };
  alt: {
    hero: string;
    about: string;
    dormMain: string;
    dormPreview: string;
    dormPhoto: string;
    srebrna: string;
    matura: string;
    certificate: string;
  };
  archive: {
    search: string;
    clear: string;
    yearPlaceholder: string;
    allYears: string;
    newest: string;
    oldest: string;
    resultOne: string;
    resultMany: string;
    empty: string;
    prevPhoto: string;
    nextPhoto: string;
  };
};

const pl: UiCopy = {
  aboutTitle: "Liceum, które przygotowuje do ambitnej przyszłości",
  foundation: {
    title: "Fundacja „Dla Polonii”",
    desc: "Fundacja wspiera młodzież polonijną oraz prowadzi egzaminy certyfikatowe z języka polskiego na poziomie B1 i B2.",
    link: "Strona Fundacji",
  },
  donation: {
    title: "Twoje 1,5% — mój powrót do Polski",
    desc: "Przekaż 1,5% podatku uczniom Kolegium. Fundacja „Dla Polonii”, KRS: 0000423252.",
  },
  languages: { title: "Języki obce do wyboru", items: ["Język angielski", "Język rosyjski", "Język niemiecki"] },
  profiles: [
    { subjects: "Matematyka + Informatyka", description: "Profil dla przyszłych programistów, analityków danych i twórców nowych technologii. Rozwija logiczne myślenie, umiejętność rozwiązywania problemów oraz praktyczne kompetencje cyfrowe potrzebne na studiach technicznych." },
    { subjects: "Matematyka + Geografia", description: "Dobry wybór dla osób zainteresowanych ekonomią, finansami, logistyką, gospodarką przestrzenną lub turystyką. Łączy analizę danych z rozumieniem procesów społecznych, ekonomicznych i środowiskowych." },
    { subjects: "Historia + Wiedza o społeczeństwie", description: "Kierunek dla uczniów zainteresowanych prawem, polityką, dyplomacją, mediami i życiem społecznym. Uczy interpretowania źródeł, świadomego argumentowania oraz rozumienia współczesnego świata." },
    { subjects: "Biologia + Chemia", description: "Przygotowuje do dalszej nauki na kierunkach medycznych, biologicznych, chemicznych i przyrodniczych. Duży nacisk kładzie na analizę zjawisk, pracę z materiałem badawczym i systematyczne przygotowanie do matury." },
    { subjects: "Geografia + Język rosyjski", description: "Łączy wiedzę o świecie z praktycznym rozwijaniem kompetencji językowych i międzykulturowych. To dobre przygotowanie do studiów związanych z biznesem międzynarodowym, turystyką, logistyką i stosunkami międzynarodowymi." },
    { subjects: "Matematyka + Fizyka", description: "Solidna podstawa dla kandydatów na studia inżynierskie, techniczne, informatyczne i ścisłe. Profil rozwija myślenie analityczne, modelowanie zjawisk oraz sprawne stosowanie matematyki w praktyce." },
  ],
  achievements: [
    { title: "Srebrna Szkoła 2026", description: "Wyróżnienie w ogólnopolskim rankingu liceów Perspektywy.", detail: "Wyróżnienie potwierdza wysoki poziom nauczania i wyniki uczniów naszego liceum." },
    { title: "Stypendia Prezesa Rady Ministrów", description: "Docenienie systematycznej pracy i wysokich wyników naszych uczniów.", detail: "Najwyższe wyniki w nauce doceniane prestiżowymi stypendiami." },
    { title: "Aktywni w bezpieczeństwie", description: "Certyfikat potwierdzający troskę szkoły o bezpieczne środowisko nauki.", detail: "Szkoła wspiera odpowiedzialne relacje oraz przeciwdziała przemocy i cyberprzemocy." },
  ],
  achievementsCta: "Zobacz osiągnięcia w szkolnym kalendarzu",
  recTitle: "Dołącz do naszego liceum",
  recWrite: "Napisz do nas",
  dormTitle: "Internat — komfortowe miejsce do nauki i życia",
  aria: {
    logoHome: "Kolegium św. Stanisława Kostki — strona główna",
    mainNav: "Nawigacja główna",
    mobileNav: "Nawigacja mobilna",
    scrollTop: "Wróć na górę",
    map: "Mapa — ul. Bobrowiecka 9, Warszawa",
    social: "media społecznościowe",
  },
  alt: {
    hero: "Uczniowie Liceum Polonijnego w Warszawie",
    about: "Społeczność Liceum Polonijnego",
    dormMain: "Wspólna przestrzeń wypoczynkowa w internacie",
    dormPreview: "Podgląd internatu",
    dormPhoto: "Internat — zdjęcie",
    srebrna: "Odznaka Srebrna Szkoła 2026 rankingu Perspektywy",
    matura: "Uczennica wyróżniona za wyniki w nauce",
    certificate: "Certyfikat Aktywni w bezpieczeństwie",
  },
  archive: {
    search: "Szukaj w archiwum…",
    clear: "Wyczyść",
    yearPlaceholder: "Rok",
    allYears: "Wszystkie lata",
    newest: "Najnowsze",
    oldest: "Najstarsze",
    resultOne: "wynik",
    resultMany: "wyników",
    empty: "Brak wyników.",
    prevPhoto: "Poprzednie zdjęcie",
    nextPhoto: "Następne zdjęcie",
  },
};

const en: UiCopy = {
  aboutTitle: "A high school that prepares students for an ambitious future",
  foundation: {
    title: "“Dla Polonii” Foundation",
    desc: "The foundation supports young people of Polish descent and runs certificate examinations in Polish at B1 and B2 levels.",
    link: "Foundation website",
  },
  donation: {
    title: "Your 1.5% — my return to Poland",
    desc: "Donate 1.5% of your tax to the students of the Kolegium. “Dla Polonii” Foundation, KRS: 0000423252.",
  },
  languages: { title: "Foreign languages to choose from", items: ["English", "Russian", "German"] },
  profiles: [
    { subjects: "Mathematics + Computer science", description: "For future programmers, data analysts and technology creators. Develops logical thinking, problem solving and the practical digital skills needed for technical degrees." },
    { subjects: "Mathematics + Geography", description: "A good choice for students interested in economics, finance, logistics, spatial planning or tourism. Combines data analysis with an understanding of social, economic and environmental processes." },
    { subjects: "History + Civics", description: "For students interested in law, politics, diplomacy, media and public life. Teaches source interpretation, informed argument and an understanding of the modern world." },
    { subjects: "Biology + Chemistry", description: "Prepares students for medical, biological, chemical and natural science degrees. Strong focus on analysis, laboratory work and systematic matura preparation." },
    { subjects: "Geography + Russian", description: "Combines knowledge of the world with practical language and intercultural skills. Solid preparation for international business, tourism, logistics and international relations." },
    { subjects: "Mathematics + Physics", description: "A firm foundation for engineering, technical, IT and science degrees. Develops analytical thinking, modelling and confident use of mathematics in practice." },
  ],
  achievements: [
    { title: "Silver School 2026", description: "Distinction in the nationwide Perspektywy ranking of Polish high schools.", detail: "The award confirms the high standard of teaching and our students’ results." },
    { title: "Prime Minister’s Scholarships", description: "Recognition of the consistent work and excellent results of our students.", detail: "The best academic results are rewarded with prestigious scholarships." },
    { title: "Active in safety", description: "A certificate confirming the school’s commitment to a safe learning environment.", detail: "The school promotes respectful relationships and counters violence and cyberbullying." },
  ],
  achievementsCta: "See achievements in the school calendar",
  recTitle: "Join our high school",
  recWrite: "Write to us",
  dormTitle: "Boarding house — a comfortable place to study and live",
  aria: {
    logoHome: "St Stanislaus Kostka College — home page",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    scrollTop: "Back to top",
    map: "Map — ul. Bobrowiecka 9, Warsaw",
    social: "social media",
  },
  alt: {
    hero: "Students of the Polish high school in Warsaw",
    about: "The school community",
    dormMain: "Shared lounge in the boarding house",
    dormPreview: "Boarding house preview",
    dormPhoto: "Boarding house — photo",
    srebrna: "Silver School 2026 badge of the Perspektywy ranking",
    matura: "Student awarded for academic results",
    certificate: "Active in safety certificate",
  },
  archive: {
    search: "Search the archive…",
    clear: "Clear",
    yearPlaceholder: "Year",
    allYears: "All years",
    newest: "Newest",
    oldest: "Oldest",
    resultOne: "result",
    resultMany: "results",
    empty: "No results.",
    prevPhoto: "Previous photo",
    nextPhoto: "Next photo",
  },
};

const ru: UiCopy = {
  aboutTitle: "Лицей, который готовит к амбициозному будущему",
  foundation: {
    title: "Фонд «Dla Polonii»",
    desc: "Фонд поддерживает молодежь польского происхождения и проводит сертификационные экзамены по польскому языку на уровнях B1 и B2.",
    link: "Сайт фонда",
  },
  donation: {
    title: "Ваши 1,5% — мое возвращение в Польшу",
    desc: "Передайте 1,5% налога ученикам Коллегиума. Фонд «Dla Polonii», KRS: 0000423252.",
  },
  languages: { title: "Иностранные языки на выбор", items: ["Английский язык", "Русский язык", "Немецкий язык"] },
  profiles: [
    { subjects: "Математика + Информатика", description: "Профиль для будущих программистов, аналитиков данных и создателей новых технологий. Развивает логическое мышление, умение решать задачи и цифровые навыки, нужные на технических специальностях." },
    { subjects: "Математика + География", description: "Хороший выбор для тех, кто интересуется экономикой, финансами, логистикой, пространственным планированием или туризмом. Соединяет анализ данных с пониманием социальных, экономических и природных процессов." },
    { subjects: "История + Обществознание", description: "Направление для учеников, интересующихся правом, политикой, дипломатией, медиа и общественной жизнью. Учит работать с источниками, аргументировать и понимать современный мир." },
    { subjects: "Биология + Химия", description: "Готовит к учебе на медицинских, биологических, химических и естественно-научных специальностях. Много внимания уделяется анализу явлений, лабораторной работе и системной подготовке к экзаменам." },
    { subjects: "География + Русский язык", description: "Соединяет знания о мире с развитием языковых и межкультурных компетенций. Хорошая подготовка к учебе по международному бизнесу, туризму, логистике и международным отношениям." },
    { subjects: "Математика + Физика", description: "Прочная основа для инженерных, технических, IT и точных специальностей. Развивает аналитическое мышление, моделирование и уверенное применение математики." },
  ],
  achievements: [
    { title: "Серебряная школа 2026", description: "Отличие во всепольском рейтинге лицеев Perspektywy.", detail: "Награда подтверждает высокий уровень преподавания и результаты наших учеников." },
    { title: "Стипендии Премьер-министра", description: "Признание системной работы и высоких результатов наших учеников.", detail: "Лучшие academic результаты отмечаются престижными стипендиями." },
    { title: "Активные в безопасности", description: "Сертификат, подтверждающий заботу школы о безопасной среде обучения.", detail: "Школа поддерживает уважительные отношения и противодействует насилию и кибербуллингу." },
  ],
  achievementsCta: "Смотреть достижения в школьном календаре",
  recTitle: "Присоединяйтесь к нашему лицею",
  recWrite: "Напишите нам",
  dormTitle: "Интернат — комфортное место для учебы и жизни",
  aria: {
    logoHome: "Коллегиум св. Станислава Костки — главная страница",
    mainNav: "Основная навигация",
    mobileNav: "Мобильная навигация",
    scrollTop: "Наверх",
    map: "Карта — ul. Bobrowiecka 9, Варшава",
    social: "социальные сети",
  },
  alt: {
    hero: "Ученики польского лицея в Варшаве",
    about: "Сообщество лицея",
    dormMain: "Общая зона отдыха в интернате",
    dormPreview: "Фото интерната",
    dormPhoto: "Интернат — фото",
    srebrna: "Знак «Серебряная школа 2026» рейтинга Perspektywy",
    matura: "Ученица, отмеченная за успехи в учебе",
    certificate: "Сертификат «Активные в безопасности»",
  },
  archive: {
    search: "Поиск в архиве…",
    clear: "Очистить",
    yearPlaceholder: "Год",
    allYears: "Все годы",
    newest: "Сначала новые",
    oldest: "Сначала старые",
    resultOne: "результат",
    resultMany: "результатов",
    empty: "Ничего не найдено.",
    prevPhoto: "Предыдущее фото",
    nextPhoto: "Следующее фото",
  },
};

const uk: UiCopy = {
  aboutTitle: "Ліцей, який готує до амбітного майбутнього",
  foundation: {
    title: "Фонд «Dla Polonii»",
    desc: "Фонд підтримує молодь польського походження та проводить сертифікаційні екзамени з польської мови на рівнях B1 і B2.",
    link: "Сайт фонду",
  },
  donation: {
    title: "Ваші 1,5% — моє повернення до Польщі",
    desc: "Передайте 1,5% податку учням Колегіуму. Фонд «Dla Polonii», KRS: 0000423252.",
  },
  languages: { title: "Іноземні мови на вибір", items: ["Англійська мова", "Російська мова", "Німецька мова"] },
  profiles: [
    { subjects: "Математика + Інформатика", description: "Профіль для майбутніх програмістів, аналітиків даних і творців нових технологій. Розвиває логічне мислення, вміння розв’язувати задачі та цифрові компетенції для технічних спеціальностей." },
    { subjects: "Математика + Географія", description: "Добрий вибір для тих, хто цікавиться економікою, фінансами, логістикою, просторовим плануванням або туризмом. Поєднує аналіз даних із розумінням суспільних, економічних і природних процесів." },
    { subjects: "Історія + Громадянська освіта", description: "Напрям для учнів, які цікавляться правом, політикою, дипломатією, медіа та суспільним життям. Учить працювати з джерелами, аргументувати й розуміти сучасний світ." },
    { subjects: "Біологія + Хімія", description: "Готує до навчання на медичних, біологічних, хімічних і природничих спеціальностях. Багато уваги — аналізу явищ, лабораторній роботі та системній підготовці до випускних іспитів." },
    { subjects: "Географія + Російська мова", description: "Поєднує знання про світ із розвитком мовних і міжкультурних компетенцій. Добра підготовка до навчання з міжнародного бізнесу, туризму, логістики та міжнародних відносин." },
    { subjects: "Математика + Фізика", description: "Міцна основа для інженерних, технічних, ІТ та точних спеціальностей. Розвиває аналітичне мислення, моделювання та впевнене застосування математики." },
  ],
  achievements: [
    { title: "Срібна школа 2026", description: "Відзнака у всепольському рейтингу ліцеїв Perspektywy.", detail: "Відзнака підтверджує високий рівень викладання та результати наших учнів." },
    { title: "Стипендії Прем’єр-міністра", description: "Визнання системної праці та високих результатів наших учнів.", detail: "Найкращі результати в навчанні відзначаються престижними стипендіями." },
    { title: "Активні в безпеці", description: "Сертифікат, що підтверджує турботу школи про безпечне середовище навчання.", detail: "Школа підтримує шанобливі стосунки та протидіє насильству й кіберцькуванню." },
  ],
  achievementsCta: "Дивитися досягнення у шкільному календарі",
  recTitle: "Приєднуйтеся до нашого ліцею",
  recWrite: "Напишіть нам",
  dormTitle: "Інтернат — комфортне місце для навчання й життя",
  aria: {
    logoHome: "Колегіум св. Станіслава Костки — головна сторінка",
    mainNav: "Основна навігація",
    mobileNav: "Мобільна навігація",
    scrollTop: "Догори",
    map: "Карта — ul. Bobrowiecka 9, Варшава",
    social: "соціальні мережі",
  },
  alt: {
    hero: "Учні польського ліцею у Варшаві",
    about: "Спільнота ліцею",
    dormMain: "Спільна зона відпочинку в інтернаті",
    dormPreview: "Фото інтернату",
    dormPhoto: "Інтернат — фото",
    srebrna: "Знак «Срібна школа 2026» рейтингу Perspektywy",
    matura: "Учениця, відзначена за успіхи в навчанні",
    certificate: "Сертифікат «Активні в безпеці»",
  },
  archive: {
    search: "Пошук в архіві…",
    clear: "Очистити",
    yearPlaceholder: "Рік",
    allYears: "Усі роки",
    newest: "Спочатку нові",
    oldest: "Спочатку старі",
    resultOne: "результат",
    resultMany: "результатів",
    empty: "Нічого не знайдено.",
    prevPhoto: "Попереднє фото",
    nextPhoto: "Наступне фото",
  },
};

const be: UiCopy = {
  aboutTitle: "Ліцэй, які гатуе да амбіцыйнай будучыні",
  foundation: {
    title: "Фонд «Dla Polonii»",
    desc: "Фонд падтрымлівае моладзь польскага паходжання і праводзіць сертыфікацыйныя экзамены па польскай мове на ўзроўнях B1 і B2.",
    link: "Сайт фонду",
  },
  donation: {
    title: "Вашы 1,5% — маё вяртанне ў Польшчу",
    desc: "Перадайце 1,5% падатку вучням Калегіума. Фонд «Dla Polonii», KRS: 0000423252.",
  },
  languages: { title: "Іншыя мовы на выбар", items: ["Англійская мова", "Руская мова", "Нямецкая мова"] },
  profiles: [
    { subjects: "Матэматыка + Інфарматыка", description: "Профіль для будучых праграмістаў, аналітыкаў даных і творцаў новых тэхналогій. Развівае лагічнае мысленне, уменне вырашаць задачы і цыфравыя навыкі для тэхнічных спецыяльнасцей." },
    { subjects: "Матэматыка + Геаграфія", description: "Добры выбар для тых, хто цікавіцца эканомікай, фінансамі, лагістыкай, прасторавым планаваннем або турызмам. Спалучае аналіз даных з разуменнем сацыяльных, эканамічных і прыродных працэсаў." },
    { subjects: "Гісторыя + Грамадазнаўства", description: "Напрамак для вучняў, якія цікавяцца правам, палітыкай, дыпламатыяй, медыя і грамадскім жыццём. Вучыць працаваць з крыніцамі, аргументаваць і разумець сучасны свет." },
    { subjects: "Біялогія + Хімія", description: "Гатуе да навучання на медыцынскіх, біялагічных, хімічных і прыродазнаўчых спецыяльнасцях. Шмат увагі — аналізу з’яў, лабараторнай працы і сістэмнай падгатоўцы да экзаменаў." },
    { subjects: "Геаграфія + Руская мова", description: "Спалучае веды пра свет з развіццём мовных і міжкультурных кампетэнцый. Добрая падгатоўка да навучання па міжнародным бізнесе, турызме, лагістыцы і міжнародных адносінах." },
    { subjects: "Матэматыка + Фізіка", description: "Моцная база для інжынерных, тэхнічных, ІТ і дакладных спецыяльнасцей. Развівае аналітычнае мысленне, мадэляванне і ўпэўненае прымяненне матэматыкі." },
  ],
  achievements: [
    { title: "Сярэбраная школа 2026", description: "Адзнака ў агульнапольскім рэйтынгу ліцэяў Perspektywy.", detail: "Адзнака пацвярджае高 узровень выкладання і вынікі нашых вучняў." },
    { title: "Стыпендыі Прэм’ер-міністра", description: "Прызнанне сістэмнай працы і высокіх вынікаў нашых вучняў.", detail: "Найлепшыя вынікі ў навучанні адзначаюцца прэстыжнымі стыпендыямі." },
    { title: "Актыўныя ў бяспецы", description: "Сертыфікат, які пацвярджае турботу школы пра бяспечнае асяроддзе навучання.", detail: "Школа падтрымлівае паважлівыя адносіны і супрацьдзейнічае насіллю і кіберзневажанню." },
  ],
  achievementsCta: "Глядзець дасягненні ў школьным календары",
  recTitle: "Далучайцеся да нашага ліцэя",
  recWrite: "Напішыце нам",
  dormTitle: "Інтэрнат — камфортнае месца для вучобы і жыцця",
  aria: {
    logoHome: "Калегіум св. Станіслава Косткі — галоўная старонка",
    mainNav: "Асноўная навігацыя",
    mobileNav: "Мабільная навігацыя",
    scrollTop: "Уверх",
    map: "Карта — ul. Bobrowiecka 9, Варшава",
    social: "сацыяльныя сеткі",
  },
  alt: {
    hero: "Вучні польскага ліцэя ў Варшаве",
    about: "Супольнасць ліцэя",
    dormMain: "Агульная зона адпачынку ў інтэрнаце",
    dormPreview: "Фота інтэрната",
    dormPhoto: "Інтэрнат — фота",
    srebrna: "Знак «Сярэбраная школа 2026» рэйтынгу Perspektywy",
    matura: "Вучаніца, адзначаная за вынікі ў навучанні",
    certificate: "Сертыфікат «Актыўныя ў бяспецы»",
  },
  archive: {
    search: "Пошук в архіве…",
    clear: "Ачысціць",
    yearPlaceholder: "Год",
    allYears: "Усе гады",
    newest: "Спачатку новыя",
    oldest: "Спачатку старыя",
    resultOne: "результат",
    resultMany: "результатаў",
    empty: "Нічога не знойдзена.",
    prevPhoto: "Папярэдняе фота",
    nextPhoto: "Наступнае фота",
  },
};

const kk: UiCopy = {
  aboutTitle: "Табысты болашаққа дайындайтын лицей",
  foundation: {
    title: "«Dla Polonii» қоры",
    desc: "Қор поляк тектес жастарды қолдайды және поляк тілінен B1 және B2 деңгейінде сертификаттық емтихандар өткізеді.",
    link: "Қор сайты",
  },
  donation: {
    title: "Сіздің 1,5% — менің Польшаға оралуым",
    desc: "Салығыңыздың 1,5%-ын Коллегиум оқушыларына аударыңыз. «Dla Polonii» қоры, KRS: 0000423252.",
  },
  languages: { title: "Таңдауға арналған шет тілдері", items: ["Ағылшын тілі", "Орыс тілі", "Неміс тілі"] },
  profiles: [
    { subjects: "Математика + Информатика", description: "Болашақ бағдарламашылар, деректер талдаушылары және технология жасаушылары үшін бағыт. Логикалық ойлауды, есеп шығаруды және техникалық мамандықтарға қажет цифрлық дағдыларды дамытады." },
    { subjects: "Математика + География", description: "Экономика, қаржы, логистика, кеңістіктік жоспарлау немесе туризмге қызығатындар үшін жақсы таңдау. Деректер талдауын әлеуметтік, экономикалық және табиғи процестерді түсінумен біріктіреді." },
    { subjects: "Тарих + Қоғамтану", description: "Құқық, саясат, дипломатия, медиа және қоғам өміріне қызығатын оқушыларға арналған. Дереккөздермен жұмысты, дәлелдеуді және заманауи әлемді түсінуді үйретеді." },
    { subjects: "Биология + Химия", description: "Медициналық, биологиялық, химиялық және жаратылыстану мамандықтарына дайындайды. Құбылыстарды талдауға, зертханалық жұмысқа және емтихандарға жүйелі дайындыққа көп көңіл бөлінеді." },
    { subjects: "География + Орыс тілі", description: "Әлем туралы білімді тілдік және мәдениетаралық дағдылармен біріктіреді. Халықаралық бизнес, туризм, логистика және халықаралық қатынастар бойынша оқуға жақсы дайындық." },
    { subjects: "Математика + Физика", description: "Инженерлік, техникалық, IT және нақты мамандықтарға берік негіз. Аналитикалық ойлауды, модельдеуді және математиканы тәжірибеде қолдануды дамытады." },
  ],
  achievements: [
    { title: "Күміс мектеп 2026", description: "Perspektywy жалпыполяк лицейлер рейтингіндегі марапат.", detail: "Марапат оқыту деңгейінің жоғары екенін және оқушыларымыздың нәтижелерін растайды." },
    { title: "Премьер-министр стипендиялары", description: "Оқушыларымыздың жүйелі еңбегі мен жоғары нәтижелерінің мойындалуы.", detail: "Оқудағы ең жақсы нәтижелер беделді стипендиялармен бағаланады." },
    { title: "Қауіпсіздікте белсенді", description: "Мектептің қауіпсіз оқу ортасына қамқорлығын растайтын сертификат.", detail: "Мектеп сыйластықты қолдайды, зорлық-зомбылық пен кибербуллингке қарсы жұмыс жүргізеді." },
  ],
  achievementsCta: "Мектеп күнтізбесіндегі жетістіктерді көру",
  recTitle: "Лицейімізге қосылыңыз",
  recWrite: "Бізге жазыңыз",
  dormTitle: "Жатақхана — оқу мен өмірге қолайлы орын",
  aria: {
    logoHome: "Әулие Станислав Костка коллегиумы — басты бет",
    mainNav: "Негізгі навигация",
    mobileNav: "Мобильді навигация",
    scrollTop: "Жоғарыға",
    map: "Карта — ul. Bobrowiecka 9, Варшава",
    social: "әлеуметтік желілер",
  },
  alt: {
    hero: "Варшавадағы поляк лицейінің оқушылары",
    about: "Лицей қауымдастығы",
    dormMain: "Жатақханадағы ортақ демалыс аймағы",
    dormPreview: "Жатақхана суреті",
    dormPhoto: "Жатақхана — сурет",
    srebrna: "Perspektywy рейтингінің «Күміс мектеп 2026» белгісі",
    matura: "Оқу нәтижелері үшін марапатталған оқушы",
    certificate: "«Қауіпсіздікте белсенді» сертификаты",
  },
  archive: {
    search: "Мұрағаттан іздеу…",
    clear: "Тазалау",
    yearPlaceholder: "Жыл",
    allYears: "Барлық жылдар",
    newest: "Жаңалары бірінші",
    oldest: "Ескілері бірінші",
    resultOne: "нәтиже",
    resultMany: "нәтиже",
    empty: "Нәтиже жоқ.",
    prevPhoto: "Алдыңғы фото",
    nextPhoto: "Келесі фото",
  },
};

export const uiCopy: Record<Lang, UiCopy> = { pl, en, ru, uk, be, kk };
