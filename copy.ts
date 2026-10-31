export type Lang = "ar" | "en";

const ar = {
  brand: { name: "NOVA AI", tagline: "مساعدك الرقمي الذكي" },
  nav: {
    tools: "الأدوات",
    how: "كيف تعمل",
    benefits: "المزايا",
    pricing: "الأسعار",
    faq: "الأسئلة",
    cta: "ابدأ الآن",
    menu: "فتح القائمة",
    close: "إغلاق القائمة",
    switchTo: "English",
    switchLabel: "التبديل إلى الإنجليزية",
  },
  hero: {
    badge: "منصة عربية لأدوات الذكاء الاصطناعي",
    title: "ذكاؤك الاصطناعي... في مكان واحد",
    text: "أنجز أعمالك، أنشئ محتواك، وطوّر مشروعك باستخدام أدوات ذكية مصممة لتوفير وقتك وجهدك.",
    primary: "ابدأ الآن",
    secondary: "اكتشف الأدوات",
    previewLabel: "معاينة توضيحية للواجهة (ليست نتائج حقيقية)",
    previewTool: "مولّد المحتوى",
    previewField1: "الموضوع",
    previewField2: "المنصة",
    previewButton: "توليد",
  },
  tools: {
    title: "أدوات ذكية لكل احتياج",
    subtitle: "ثماني أدوات أساسية في منصة واحدة، وتُضاف أدوات جديدة تباعاً.",
    soon: "قريباً",
    items: [
      { icon: "content", name: "مولّد المحتوى", desc: "منشورات فيسبوك، تعليقات إنستغرام، سكريبتات تيك توك وأفكار تسويقية." },
      { icon: "business", name: "مساعد الأعمال", desc: "ردود على العملاء، رسائل ترويجية، عروض أسعار وأفكار لمشروعك." },
      { icon: "email", name: "كاتب الرسائل", desc: "رسائل بريد احترافية حسب المستلم والغرض والنبرة واللغة." },
      { icon: "product", name: "وصف المنتجات", desc: "أوصاف جذابة لمنتجات متجرك الإلكتروني." },
      { icon: "study", name: "مساعد الدراسة", desc: "شرح المفاهيم، تلخيص الدروس، أسئلة المراجعة وخطط الدراسة." },
      { icon: "prompt", name: "مولّد البرومبت", desc: "صياغة تعليمات احترافية للذكاء الاصطناعي حسب هدفك." },
      { icon: "translate", name: "المترجم الذكي", desc: "ترجمة وتحسين النصوص بين العربية والإنجليزية والفرنسية." },
      { icon: "idea", name: "مولّد أفكار المشاريع", desc: "أفكار مشاريع حسب ميزانيتك ومهاراتك والسوق واهتماماتك." },
    ],
  },
  how: {
    title: "كيف تعمل NOVA AI",
    subtitle: "ثلاث خطوات بسيطة من الفكرة إلى النتيجة.",
    steps: [
      { title: "اختر الأداة", desc: "تصفّح الأدوات حسب الفئة أو ابحث عمّا تحتاجه." },
      { title: "أدخل التفاصيل", desc: "املأ نموذجاً قصيراً بالموضوع والنبرة واللغة." },
      { title: "احصل على النتيجة", desc: "انسخ النص الجاهز أو عدّله وأعد التوليد." },
    ],
  },
  benefits: {
    title: "لماذا NOVA AI؟",
    items: [
      { title: "عربية أولاً", desc: "واجهة كاملة من اليمين إلى اليسار ونتائج مصممة للقارئ العربي." },
      { title: "توفير للوقت", desc: "مسودات جاهزة في ثوانٍ بدل ساعات من الكتابة." },
      { title: "أدوات متعددة، حساب واحد", desc: "لا حاجة للتنقل بين عدة مواقع وخدمات." },
      { title: "خصوصية وأمان", desc: "مفاتيح الذكاء الاصطناعي محفوظة على الخادم، وبياناتك الخاصة لا يراها غيرك." },
    ],
  },
  pricing: {
    title: "الخطط والأسعار",
    subtitle: "ابدأ مجاناً. الخطط المدفوعة لم تُفعَّل بعد، وسنعلن الأسعار قبل الإطلاق.",
    free: "مجانية",
    soonPrice: "السعر يُعلن قريباً",
    soonCta: "قريباً",
    freeCta: "ابدأ مجاناً",
    popular: "الأكثر طلباً",
    plans: [
      {
        id: "free",
        name: "مجانية",
        features: ["عدد محدود من التوليدات", "الوصول إلى أدوات مختارة", "ميزات أساسية"],
      },
      {
        id: "pro",
        name: "احترافية",
        features: ["حدود توليد أعلى", "الوصول إلى جميع الأدوات", "حفظ سجل التوليدات", "أولوية في المعالجة حيث أمكن"],
      },
      {
        id: "business",
        name: "أعمال",
        features: ["حصة استخدام أكبر", "أدوات موجهة للأعمال", "ميزات إنتاجية متقدمة"],
      },
    ],
  },
  faq: {
    title: "الأسئلة الشائعة",
    items: [
      { q: "هل المنصة مجانية؟", a: "تتوفر خطة مجانية بعدد محدود من التوليدات. الخطط المدفوعة قيد التجهيز ولم تُفعَّل بعد." },
      { q: "ما اللغات المدعومة؟", a: "الواجهة بالعربية مع خيار الإنجليزية، ويمكن توليد المحتوى بالعربية والإنجليزية والفرنسية." },
      { q: "هل نتائج الذكاء الاصطناعي دقيقة دائماً؟", a: "قد تحتوي النتائج على أخطاء، لذا راجعها قبل نشرها أو اعتمادها، خاصة في المعلومات الحساسة." },
      { q: "هل بياناتي آمنة؟", a: "تُعالج الطلبات عبر خادم آمن ولا تُعرض مفاتيح الخدمة في المتصفح، وتُحمى سجلاتك بحيث لا يصل إليها غيرك." },
      { q: "متى تُفتح الطرق المدفوعة للدفع؟", a: "لن نفعّل الدفع إلا بعد التأكد من توفر مزوّد دفع مناسب للسوق الجزائري." },
    ],
  },
  footer: {
    about: "منصة عربية لأدوات الذكاء الاصطناعي تساعدك على العمل بذكاء وإنشاء المحتوى بسرعة وتنمية مشروعك.",
    links: "روابط",
    rights: "جميع الحقوق محفوظة.",
    top: "العودة للأعلى",
  },
};

export type Copy = typeof ar;

const en: Copy = {
  brand: { name: "NOVA AI", tagline: "Your Smart Digital Assistant" },
  nav: {
    tools: "Tools",
    how: "How it works",
    benefits: "Benefits",
    pricing: "Pricing",
    faq: "FAQ",
    cta: "Get started",
    menu: "Open menu",
    close: "Close menu",
    switchTo: "العربية",
    switchLabel: "Switch to Arabic",
  },
  hero: {
    badge: "AI tools built for the Arabic-speaking world",
    title: "Your AI... in one place",
    text: "Get work done, create content, and grow your business with smart tools designed to save your time and effort.",
    primary: "Get started",
    secondary: "Explore tools",
    previewLabel: "Illustrative interface preview (not real output)",
    previewTool: "Content Generator",
    previewField1: "Topic",
    previewField2: "Platform",
    previewButton: "Generate",
  },
  tools: {
    title: "Smart tools for every need",
    subtitle: "Eight core tools in one platform, with more added over time.",
    soon: "Coming soon",
    items: [
      { icon: "content", name: "Content Generator", desc: "Facebook posts, Instagram captions, TikTok scripts and marketing ideas." },
      { icon: "business", name: "Business Assistant", desc: "Customer replies, promo messages, quotations and ideas for your business." },
      { icon: "email", name: "Email Writer", desc: "Professional emails by recipient, purpose, tone and language." },
      { icon: "product", name: "Product Descriptions", desc: "Attractive descriptions for your online store products." },
      { icon: "study", name: "Study Assistant", desc: "Explain concepts, summarize lessons, revision questions and study plans." },
      { icon: "prompt", name: "Prompt Generator", desc: "Professional AI prompts shaped around your goal." },
      { icon: "translate", name: "Smart Translator", desc: "Translate and improve text between Arabic, English and French." },
      { icon: "idea", name: "Business Idea Generator", desc: "Ideas based on your budget, skills, market and interests." },
    ],
  },
  how: {
    title: "How NOVA AI works",
    subtitle: "Three simple steps from idea to result.",
    steps: [
      { title: "Pick a tool", desc: "Browse by category or search for what you need." },
      { title: "Enter the details", desc: "Fill a short form with the topic, tone and language." },
      { title: "Get your result", desc: "Copy the ready text, or tweak it and regenerate." },
    ],
  },
  benefits: {
    title: "Why NOVA AI?",
    items: [
      { title: "Arabic first", desc: "A full right-to-left interface and results designed for Arabic readers." },
      { title: "Save time", desc: "Ready drafts in seconds instead of hours of writing." },
      { title: "Many tools, one account", desc: "No need to jump between multiple sites and services." },
      { title: "Privacy and security", desc: "AI keys stay on the server, and your private data is visible only to you." },
    ],
  },
  pricing: {
    title: "Plans and pricing",
    subtitle: "Start free. Paid plans are not active yet; prices will be announced before launch.",
    free: "Free",
    soonPrice: "Price announced soon",
    soonCta: "Coming soon",
    freeCta: "Start free",
    popular: "Most popular",
    plans: [
      {
        id: "free",
        name: "Free",
        features: ["Limited AI generations", "Access to selected tools", "Basic features"],
      },
      {
        id: "pro",
        name: "Pro",
        features: ["Higher generation limits", "Access to all tools", "Saved generation history", "Priority processing where supported"],
      },
      {
        id: "business",
        name: "Business",
        features: ["Higher usage allowance", "Business-focused tools", "Advanced productivity features"],
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      { q: "Is the platform free?", a: "A free plan with a limited number of generations is available. Paid plans are being prepared and are not active yet." },
      { q: "Which languages are supported?", a: "The interface is in Arabic with an English option, and content can be generated in Arabic, English and French." },
      { q: "Are AI results always accurate?", a: "Results can contain mistakes, so review them before publishing or relying on them, especially for sensitive information." },
      { q: "Is my data safe?", a: "Requests go through a secure server, service keys are never exposed in the browser, and your records are protected so only you can access them." },
      { q: "When will payments open?", a: "We will only enable payments after confirming a suitable payment provider for the Algerian market." },
    ],
  },
  footer: {
    about: "An Arabic AI tools platform that helps you work smarter, create faster and grow your business.",
    links: "Links",
    rights: "All rights reserved.",
    top: "Back to top",
  },
};

export const copy: Record<Lang, Copy> = { ar, en };
