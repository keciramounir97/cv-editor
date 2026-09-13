/* =========================================================
   1. ICONS
   ========================================================= */
const ICO = {
  moon:'<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  sun:'<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
  pdf:'<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></svg>',
  doc:'<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  external:'<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  plus:'<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  x:'<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'
};

/* =========================================================
   2. TRANSLATIONS
   ========================================================= */
const I18N = {
  en:{
    appTitle:'CV Editor', appSub:'Minimal, one-page resume',
    appearance:'Appearance', light:'Light', dark:'Dark',
    language:'Language', direction:'Direction',
    personal:'Personal details', fullName:'Full name', jobTitle:'Job title',
    contact:'Contact', email:'Email', phone:'Phone', location:'Location', website:'Website',
    summary:'Summary', summaryPh:'A short pitch about you…',
    syntaxHint:'Format: # Title · ## Subtitle · --- divider · - bullet',
    experience:'Experience', addExperience:'Add experience',
    role:'Job title', company:'Company', start:'Start', end:'End',
    description:'Description', descPh:'What you achieved…',
    education:'Education', addEducation:'Add education',
    degree:'Degree', school:'School / University',
    skills:'Skills', skillsHint:'Separate items with commas',
    languages:'Languages', languagesHint:'Separate items with commas',
    custom:'Custom sections', addCustom:'Add section',
    sectionTitle:'Section title', sectionContent:'Content',
    customHint:'Add any section (Projects, Awards, Volunteering…).',
    export:'Export', pdf:'Save PDF', docx:'Save DOCX', print:'Print',
    pdfHint:'PDF and DOCX keep your fonts, sizes, section colors and the current light or dark theme.',
    open:'Open in new window', preview:'Live preview', onePage:'Always 1 page',
    design:'Design', font:'Font', fontSize:'Font size', lineHeight:'Line height',
    autoFit:'Fit to one page', autoFitOn:'On', autoFitOff:'Off',
    themeColors:'Theme colors', lightMode:'Editing light mode', darkMode:'Editing dark mode',
    pageBg:'Page background', headingCol:'Name & headings', accentCol:'Job title / accent',
    bodyCol:'Body text', bodyCol2:'Descriptions', mutedCol:'Secondary text',
    borderCol:'Borders', headBorderCol:'Header line', chipCol:'Chip text',
    chipBorderCol:'Chip border', chipBgCol:'Chip background',
    resetColors:'Reset this theme', sectionStyles:'Section styles',
    secHeader:'Header', headingTint:'Heading', textTint:'Text', sizeScale:'Size',
    sameFont:'Same as document', loadSample:'Load sample in this language',
    replaceConfirm:'Replace the current CV text with a sample in this language?',
    yourName:'Your name', popupBlocked:'Please allow pop-ups for this page.',
    saving:'Saving…'
  },
  ar:{
    appTitle:'محرّر السيرة الذاتية', appSub:'سيرة ذاتية موجزة في صفحة واحدة',
    appearance:'المظهر', light:'فاتح', dark:'داكن',
    language:'اللغة', direction:'الاتجاه',
    personal:'البيانات الشخصية', fullName:'الاسم الكامل', jobTitle:'المسمّى الوظيفي',
    contact:'التواصل', email:'البريد الإلكتروني', phone:'الهاتف', location:'المدينة', website:'الموقع الإلكتروني',
    summary:'نبذة', summaryPh:'تعريف موجز بك…',
    syntaxHint:'التنسيق: # عنوان · ## عنوان فرعي · --- فاصل · - نقطة',
    experience:'الخبرة المهنية', addExperience:'إضافة خبرة',
    role:'المسمّى الوظيفي', company:'الجهة', start:'من', end:'إلى',
    description:'الوصف', descPh:'ماذا أنجزت…',
    education:'التعليم', addEducation:'إضافة مؤهل',
    degree:'الشهادة', school:'الجامعة / المؤسسة',
    skills:'المهارات', skillsHint:'افصل العناصر بفواصل',
    languages:'اللغات', languagesHint:'افصل العناصر بفواصل',
    custom:'أقسام إضافية', addCustom:'إضافة قسم',
    sectionTitle:'عنوان القسم', sectionContent:'المحتوى',
    customHint:'أضف أي قسم (مشاريع، جوائز، تطوّع…).',
    export:'تصدير', pdf:'حفظ PDF', docx:'حفظ DOCX', print:'طباعة',
    pdfHint:'يحافظ ملفا PDF وDOCX على الخطوط والأحجام وألوان الأقسام وعلى المظهر الفاتح أو الداكن الحالي.',
    open:'فتح في نافذة جديدة', preview:'معاينة مباشرة', onePage:'صفحة واحدة دائماً',
    design:'التصميم', font:'الخط', fontSize:'حجم الخط', lineHeight:'ارتفاع السطر',
    autoFit:'ملاءمة الصفحة', autoFitOn:'تشغيل', autoFitOff:'إيقاف',
    themeColors:'ألوان المظهر', lightMode:'تعديل الوضع الفاتح', darkMode:'تعديل الوضع الداكن',
    pageBg:'خلفية الصفحة', headingCol:'الاسم والعناوين', accentCol:'المسمّى / اللون المميّز',
    bodyCol:'النص الأساسي', bodyCol2:'الوصف', mutedCol:'النص الثانوي',
    borderCol:'الحدود', headBorderCol:'خط الترويسة', chipCol:'نص الشارات',
    chipBorderCol:'حدود الشارة', chipBgCol:'خلفية الشارة',
    resetColors:'إعادة ألوان هذا المظهر', sectionStyles:'أنماط الأقسام',
    secHeader:'الترويسة', headingTint:'العنوان', textTint:'النص', sizeScale:'الحجم',
    sameFont:'نفس خط المستند', loadSample:'تحميل نموذج بهذه اللغة',
    replaceConfirm:'هل تريد استبدال نص السيرة الحالية بنموذج بهذه اللغة؟',
    yourName:'اسمك', popupBlocked:'يرجى السماح بالنوافذ المنبثقة لهذه الصفحة.',
    saving:'جارٍ الحفظ…'
  },
  fr:{
    appTitle:'Éditeur de CV', appSub:'CV minimal sur une page',
    appearance:'Apparence', light:'Clair', dark:'Sombre',
    language:'Langue', direction:'Sens du texte',
    personal:'Informations personnelles', fullName:'Nom complet', jobTitle:'Intitulé du poste',
    contact:'Contact', email:'E-mail', phone:'Téléphone', location:'Ville', website:'Site web',
    summary:'Profil', summaryPh:'Présentez-vous en quelques lignes…',
    syntaxHint:'Format : # Titre · ## Sous-titre · --- séparateur · - puce',
    experience:'Expérience', addExperience:'Ajouter une expérience',
    role:'Poste', company:'Entreprise', start:'Début', end:'Fin',
    description:'Description', descPh:'Vos réalisations…',
    education:'Formation', addEducation:'Ajouter une formation',
    degree:'Diplôme', school:'École / Université',
    skills:'Compétences', skillsHint:'Séparez les éléments par des virgules',
    languages:'Langues', languagesHint:'Séparez les éléments par des virgules',
    custom:'Sections personnalisées', addCustom:'Ajouter une section',
    sectionTitle:'Titre de la section', sectionContent:'Contenu',
    customHint:'Ajoutez une section (Projets, Prix, Bénévolat…).',
    export:'Exporter', pdf:'Enregistrer le PDF', docx:'Enregistrer le DOCX', print:'Imprimer',
    pdfHint:'Les fichiers PDF et DOCX conservent vos polices, tailles, couleurs de sections et le thème clair ou sombre actuel.',
    open:'Ouvrir dans une nouvelle fenêtre', preview:'Aperçu en direct', onePage:'Toujours 1 page',
    design:'Mise en forme', font:'Police', fontSize:'Taille de police', lineHeight:'Interligne',
    autoFit:'Ajuster à une page', autoFitOn:'Oui', autoFitOff:'Non',
    themeColors:'Couleurs du thème', lightMode:'Modification du mode clair', darkMode:'Modification du mode sombre',
    pageBg:'Fond de page', headingCol:'Nom et titres', accentCol:'Poste / accent',
    bodyCol:'Texte principal', bodyCol2:'Descriptions', mutedCol:'Texte secondaire',
    borderCol:'Bordures', headBorderCol:'Ligne d’en-tête', chipCol:'Texte des pastilles',
    chipBorderCol:'Bordure des pastilles', chipBgCol:'Fond des pastilles',
    resetColors:'Réinitialiser ce thème', sectionStyles:'Styles des sections',
    secHeader:'En-tête', headingTint:'Titre', textTint:'Texte', sizeScale:'Taille',
    sameFont:'Identique au document', loadSample:'Charger un exemple dans cette langue',
    replaceConfirm:'Remplacer le texte actuel du CV par un exemple dans cette langue ?',
    yourName:'Votre nom', popupBlocked:'Veuillez autoriser les fenêtres pop-up pour cette page.',
    saving:'Enregistrement…'
  },
  es:{
    appTitle:'Editor de CV', appSub:'CV minimal en una página',
    appearance:'Apariencia', light:'Claro', dark:'Oscuro',
    language:'Idioma', direction:'Dirección',
    personal:'Datos personales', fullName:'Nombre completo', jobTitle:'Puesto',
    contact:'Contacto', email:'Correo', phone:'Teléfono', location:'Ubicación', website:'Sitio web',
    summary:'Perfil', summaryPh:'Preséntate en pocas líneas…',
    syntaxHint:'Formato: # Título · ## Subtítulo · --- separador · - viñeta',
    experience:'Experiencia', addExperience:'Añadir experiencia',
    role:'Puesto', company:'Empresa', start:'Inicio', end:'Fin',
    description:'Descripción', descPh:'Tus logros…',
    education:'Formación', addEducation:'Añadir formación',
    degree:'Título', school:'Escuela / Universidad',
    skills:'Habilidades', skillsHint:'Separa los elementos con comas',
    languages:'Idiomas', languagesHint:'Separa los elementos con comas',
    custom:'Secciones personalizadas', addCustom:'Añadir sección',
    sectionTitle:'Título de sección', sectionContent:'Contenido',
    customHint:'Añade cualquier sección (Proyectos, Premios, Voluntariado…).',
    export:'Exportar', pdf:'Guardar PDF', docx:'Guardar DOCX', print:'Imprimir',
    pdfHint:'PDF y DOCX conservan fuentes, tamaños, colores de sección y el tema claro u oscuro actual.',
    open:'Abrir en nueva ventana', preview:'Vista previa', onePage:'Siempre 1 página',
    design:'Diseño', font:'Fuente', fontSize:'Tamaño de fuente', lineHeight:'Interlineado',
    autoFit:'Ajustar a una página', autoFitOn:'Sí', autoFitOff:'No',
    themeColors:'Colores del tema', lightMode:'Editando modo claro', darkMode:'Editando modo oscuro',
    pageBg:'Fondo de página', headingCol:'Nombre y títulos', accentCol:'Puesto / acento',
    bodyCol:'Texto principal', bodyCol2:'Descripciones', mutedCol:'Texto secundario',
    borderCol:'Bordes', headBorderCol:'Línea de cabecera', chipCol:'Texto de etiquetas',
    chipBorderCol:'Borde de etiquetas', chipBgCol:'Fondo de etiquetas',
    resetColors:'Restablecer este tema', sectionStyles:'Estilos de sección',
    secHeader:'Cabecera', headingTint:'Título', textTint:'Texto', sizeScale:'Tamaño',
    sameFont:'Igual que el documento', loadSample:'Cargar ejemplo en este idioma',
    replaceConfirm:'¿Reemplazar el texto actual del CV por un ejemplo en este idioma?',
    yourName:'Tu nombre', popupBlocked:'Permite las ventanas emergentes en esta página.',
    saving:'Guardando…'
  },
  de:{
    appTitle:'CV-Editor', appSub:'Minimaler Lebenslauf auf einer Seite',
    appearance:'Erscheinungsbild', light:'Hell', dark:'Dunkel',
    language:'Sprache', direction:'Schreibrichtung',
    personal:'Persönliche Daten', fullName:'Vollständiger Name', jobTitle:'Berufsbezeichnung',
    contact:'Kontakt', email:'E-Mail', phone:'Telefon', location:'Ort', website:'Website',
    summary:'Profil', summaryPh:'Kurze Vorstellung…',
    syntaxHint:'Format: # Titel · ## Untertitel · --- Trenner · - Punkt',
    experience:'Berufserfahrung', addExperience:'Erfahrung hinzufügen',
    role:'Position', company:'Unternehmen', start:'Von', end:'Bis',
    description:'Beschreibung', descPh:'Deine Erfolge…',
    education:'Ausbildung', addEducation:'Ausbildung hinzufügen',
    degree:'Abschluss', school:'Schule / Universität',
    skills:'Fähigkeiten', skillsHint:'Mit Kommas trennen',
    languages:'Sprachen', languagesHint:'Mit Kommas trennen',
    custom:'Eigene Abschnitte', addCustom:'Abschnitt hinzufügen',
    sectionTitle:'Abschnittstitel', sectionContent:'Inhalt',
    customHint:'Füge beliebige Abschnitte hinzu (Projekte, Auszeichnungen…).',
    export:'Exportieren', pdf:'PDF speichern', docx:'DOCX speichern', print:'Drucken',
    pdfHint:'PDF und DOCX behalten Schriften, Größen, Abschnittsfarben und das aktuelle helle oder dunkle Design.',
    open:'In neuem Fenster öffnen', preview:'Live-Vorschau', onePage:'Immer 1 Seite',
    design:'Gestaltung', font:'Schriftart', fontSize:'Schriftgröße', lineHeight:'Zeilenabstand',
    autoFit:'Auf eine Seite anpassen', autoFitOn:'An', autoFitOff:'Aus',
    themeColors:'Designfarben', lightMode:'Helles Design bearbeiten', darkMode:'Dunkles Design bearbeiten',
    pageBg:'Seitenhintergrund', headingCol:'Name und Überschriften', accentCol:'Titel / Akzent',
    bodyCol:'Fließtext', bodyCol2:'Beschreibungen', mutedCol:'Sekundärtext',
    borderCol:'Rahmen', headBorderCol:'Kopflinie', chipCol:'Chip-Text',
    chipBorderCol:'Chip-Rahmen', chipBgCol:'Chip-Hintergrund',
    resetColors:'Dieses Design zurücksetzen', sectionStyles:'Abschnittsstile',
    secHeader:'Kopfbereich', headingTint:'Überschrift', textTint:'Text', sizeScale:'Größe',
    sameFont:'Wie Dokument', loadSample:'Beispiel in dieser Sprache laden',
    replaceConfirm:'Aktuellen Lebenslauftext durch ein Beispiel in dieser Sprache ersetzen?',
    yourName:'Dein Name', popupBlocked:'Bitte Pop-ups für diese Seite zulassen.',
    saving:'Speichern…'
  }
};

/* =========================================================
   3. LOCALIZED SAMPLES
   ========================================================= */
const SAMPLES = {
  en:{
    name:'Alex Morgan', title:'Senior Frontend Developer',
    email:'alex.morgan@email.com', phone:'+1 555 018 2245',
    loc:'San Francisco, CA', web:'alexmorgan.dev',
    summary:'Frontend developer with 8+ years of experience building fast, accessible and scalable web products. Passionate about design systems, performance and clean architecture.',
    skills:'JavaScript, TypeScript, React, Vue, Node.js, CSS Architecture, Accessibility, Testing',
    langs:'English (Native), Spanish (Fluent), French (Basic)',
    experience:[
      { role:'Senior Frontend Developer', company:'NovaTech', start:'2021', end:'Present',
        desc:'Led the migration to a component design system, cutting UI delivery time by 40%.\n- Improved Core Web Vitals across 12 products\n- Mentored 4 engineers and ran weekly design reviews.' },
      { role:'Frontend Developer', company:'Brightline Studio', start:'2018', end:'2021',
        desc:'Built accessible, responsive interfaces for fintech clients.\n- Introduced automated visual testing and CI pipelines\n- Shipped 30+ production features with zero P1 regressions.' }
    ],
    education:[{ degree:'BSc Computer Science', school:'University of California', start:'2014', end:'2018' }],
    custom:[{ title:'Projects', content:'## Portfolio\n- Personal site built with React + Vite (98 Lighthouse score)\n- Open-source UI kit with 1.2k GitHub stars' }]
  },
  ar:{
    name:'أليكس مورغان', title:'مطوّر واجهات أمامية أول',
    email:'alex.morgan@email.com', phone:'+1 555 018 2245',
    loc:'سان فرانسيسكو، كاليفورنيا', web:'alexmorgan.dev',
    summary:'مطوّر واجهات أمامية بخبرة تزيد عن ثماني سنوات في بناء منتجات ويب سريعة وسهلة الوصول وقابلة للتوسّع. مهتم بأنظمة التصميم والأداء والبنية النظيفة.',
    skills:'جافاسكربت، تايب سكربت، React، Vue، Node.js، هندسة CSS، إمكانية الوصول، الاختبارات',
    langs:'الإنجليزية (لغة أم)، الإسبانية (طلق)، الفرنسية (أساسي)',
    experience:[
      { role:'مطوّر واجهات أمامية أول', company:'نوفا تك', start:'2021', end:'حتى الآن',
        desc:'قدت الانتقال إلى نظام تصميم بالمكوّنات، واختصرت زمن تسليم الواجهات بنسبة 40٪.\n- تحسين مؤشرات Core Web Vitals عبر 12 منتجاً\n- إرشاد أربعة مهندسين وإدارة مراجعات تصميم أسبوعية.' },
      { role:'مطوّر واجهات أمامية', company:'برايتلاين ستوديو', start:'2018', end:'2021',
        desc:'بناء واجهات سهلة الوصول ومتجاوبة لعملاء التقنية المالية.\n- إدخال اختبارات بصرية آلية وخطوط تكامل مستمر\n- إطلاق أكثر من 30 ميزة إنتاج دون أعطال حرجة.' }
    ],
    education:[{ degree:'بكالوريوس علوم الحاسوب', school:'جامعة كاليفورنيا', start:'2014', end:'2018' }],
    custom:[{ title:'المشاريع', content:'## معرض الأعمال\n- موقع شخصي مبني بـ React وVite (تقييم Lighthouse 98)\n- مكتبة واجهات مفتوحة المصدر بأكثر من 1200 نجمة على GitHub' }]
  },
  fr:{
    name:'Alex Morgan', title:'Développeur frontend senior',
    email:'alex.morgan@email.com', phone:'+1 555 018 2245',
    loc:'San Francisco, CA', web:'alexmorgan.dev',
    summary:'Développeur frontend avec plus de 8 ans d’expérience dans la création de produits web rapides, accessibles et évolutifs. Passionné par les design systems, la performance et une architecture soignée.',
    skills:'JavaScript, TypeScript, React, Vue, Node.js, architecture CSS, accessibilité, tests',
    langs:'Anglais (langue maternelle), Espagnol (courant), Français (notions)',
    experience:[
      { role:'Développeur frontend senior', company:'NovaTech', start:'2021', end:'Aujourd’hui',
        desc:'Pilotage de la migration vers un design system de composants, réduisant le délai de livraison UI de 40 %.\n- Amélioration des Core Web Vitals sur 12 produits\n- Mentorat de 4 ingénieurs et revues de design hebdomadaires.' },
      { role:'Développeur frontend', company:'Brightline Studio', start:'2018', end:'2021',
        desc:'Interfaces accessibles et responsives pour des clients fintech.\n- Mise en place de tests visuels automatisés et de pipelines CI\n- Plus de 30 fonctionnalités en production sans régression critique.' }
    ],
    education:[{ degree:'Licence en informatique', school:'University of California', start:'2014', end:'2018' }],
    custom:[{ title:'Projets', content:'## Portfolio\n- Site personnel React + Vite (score Lighthouse 98)\n- Kit UI open source avec 1 200 étoiles GitHub' }]
  },
  es:{
    name:'Alex Morgan', title:'Desarrollador frontend sénior',
    email:'alex.morgan@email.com', phone:'+1 555 018 2245',
    loc:'San Francisco, CA', web:'alexmorgan.dev',
    summary:'Desarrollador frontend con más de 8 años creando productos web rápidos, accesibles y escalables. Apasionado de los design systems, el rendimiento y una arquitectura limpia.',
    skills:'JavaScript, TypeScript, React, Vue, Node.js, arquitectura CSS, accesibilidad, testing',
    langs:'Inglés (nativo), Español (fluido), Francés (básico)',
    experience:[
      { role:'Desarrollador frontend sénior', company:'NovaTech', start:'2021', end:'Actualidad',
        desc:'Lideré la migración a un design system de componentes y reduje un 40 % el tiempo de entrega de UI.\n- Mejoré los Core Web Vitals en 12 productos\n- Mentoricé a 4 ingenieros y organicé revisiones de diseño semanales.' },
      { role:'Desarrollador frontend', company:'Brightline Studio', start:'2018', end:'2021',
        desc:'Interfaces accesibles y responsivas para clientes fintech.\n- Implanté pruebas visuales automatizadas y pipelines de CI\n- Publiqué más de 30 funciones en producción sin regresiones P1.' }
    ],
    education:[{ degree:'Grado en Informática', school:'University of California', start:'2014', end:'2018' }],
    custom:[{ title:'Proyectos', content:'## Portafolio\n- Sitio personal con React + Vite (98 en Lighthouse)\n- Kit de UI de código abierto con 1,2 k estrellas en GitHub' }]
  },
  de:{
    name:'Alex Morgan', title:'Senior Frontend-Entwickler',
    email:'alex.morgan@email.com', phone:'+1 555 018 2245',
    loc:'San Francisco, CA', web:'alexmorgan.dev',
    summary:'Frontend-Entwickler mit über 8 Jahren Erfahrung in schnellen, barrierefreien und skalierbaren Webprodukten. Fokus auf Design Systems, Performance und klare Architektur.',
    skills:'JavaScript, TypeScript, React, Vue, Node.js, CSS-Architektur, Barrierefreiheit, Testing',
    langs:'Englisch (Muttersprache), Spanisch (fließend), Französisch (Grundkenntnisse)',
    experience:[
      { role:'Senior Frontend-Entwickler', company:'NovaTech', start:'2021', end:'Heute',
        desc:'Leitung der Migration auf ein Komponenten-Design-System und 40 % schnellere UI-Lieferung.\n- Verbesserung der Core Web Vitals über 12 Produkte\n- Mentoring von 4 Entwicklern und wöchentliche Design Reviews.' },
      { role:'Frontend-Entwickler', company:'Brightline Studio', start:'2018', end:'2021',
        desc:'Barrierefreie, responsive Oberflächen für Fintech-Kunden.\n- Einführung automatisierter visueller Tests und CI-Pipelines\n- Über 30 Produktionsfeatures ohne P1-Regressionen.' }
    ],
    education:[{ degree:'B.Sc. Informatik', school:'University of California', start:'2014', end:'2018' }],
    custom:[{ title:'Projekte', content:'## Portfolio\n- Persönliche Seite mit React + Vite (Lighthouse 98)\n- Open-Source-UI-Kit mit 1,2k GitHub-Sternen' }]
  }
};

const FONTS = [
  { id:'Inter', stack:"'Inter','Segoe UI',system-ui,'Noto Sans Arabic',Arial,sans-serif" },
  { id:'Noto Sans Arabic', stack:"'Noto Sans Arabic','Segoe UI',Arial,sans-serif" },
  { id:'Cairo', stack:"'Cairo','Noto Sans Arabic',Arial,sans-serif" },
  { id:'Tajawal', stack:"'Tajawal','Noto Sans Arabic',Arial,sans-serif" },
  { id:'Roboto', stack:"'Roboto','Segoe UI',Arial,sans-serif" },
  { id:'Open Sans', stack:"'Open Sans','Segoe UI',Arial,sans-serif" },
  { id:'IBM Plex Sans', stack:"'IBM Plex Sans','Segoe UI',Arial,sans-serif" },
  { id:'Georgia', stack:"Georgia,'Times New Roman',serif" },
  { id:'Times New Roman', stack:"'Times New Roman',Times,serif" },
  { id:'Garamond', stack:"Garamond,'Times New Roman',serif" },
  { id:'Lora', stack:"'Lora',Georgia,serif" },
  { id:'Merriweather', stack:"'Merriweather',Georgia,serif" },
  { id:'Playfair Display', stack:"'Playfair Display',Georgia,serif" },
  { id:'Calibri', stack:"Calibri,'Segoe UI',Arial,sans-serif" },
  { id:'Arial', stack:"Arial,Helvetica,sans-serif" }
];
const DOCX_FONT = {
  'Inter':'Calibri','Roboto':'Calibri','Open Sans':'Calibri','IBM Plex Sans':'Calibri',
  'Noto Sans Arabic':'Arial','Cairo':'Arial','Tajawal':'Arial',
  'Georgia':'Georgia','Times New Roman':'Times New Roman','Garamond':'Garamond',
  'Lora':'Georgia','Merriweather':'Georgia','Playfair Display':'Georgia',
  'Calibri':'Calibri','Arial':'Arial'
};
const PALETTE_KEYS = [
  ['bg','pageBg'],['heading','headingCol'],['accent','accentCol'],['text','bodyCol'],
  ['soft','bodyCol2'],['muted','mutedCol'],['border','borderCol'],['headBorder','headBorderCol'],
  ['chipText','chipCol'],['chipBorder','chipBorderCol'],['chipBg','chipBgCol']
];
const DEFAULT_PALETTES = {
  light:{ bg:'#ffffff', text:'#374151', heading:'#0b0f19', muted:'#6b7280', soft:'#4b5563',
    border:'#e5e7eb', accent:'#4f46e5', headBorder:'#111827', chipBorder:'#e5e7eb',
    chipText:'#374151', chipBg:'#ffffff' },
  dark:{ bg:'#141821', text:'#cbd5e1', heading:'#f1f5f9', muted:'#94a3b8', soft:'#a1aec4',
    border:'#2a3242', accent:'#a5b4fc', headBorder:'#3b4459', chipBorder:'#2a3242',
    chipText:'#cbd5e1', chipBg:'#1a2030' }
};
const SEC_META = [
  ['header','secHeader'],['summary','summary'],['experience','experience'],
  ['education','education'],['skills','skills'],['languages','languages']
];
const emptySec = () => ({ heading:'', text:'', scale:100, font:'' });
const defaultSections = () => Object.fromEntries(SEC_META.map(([id]) => [id, emptySec()]));

const state = { theme:'light', lang:'en', dir:'ltr' };
const design = {
  font:'Inter', fontSize:11, lineHeight:1.5, autoFit:true,
  palettes:{ light:{...DEFAULT_PALETTES.light}, dark:{...DEFAULT_PALETTES.dark} },
  sections: defaultSections()
};
let userEdited = false;
let experience = SAMPLES.en.experience.map(x => ({...x}));
let education = SAMPLES.en.education.map(x => ({...x}));
let customSections = SAMPLES.en.custom.map(x => ({...x, style: emptySec()}));

const STORE_KEY = 'cv-editor-v2';
const $  = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const val = id => (document.getElementById(id)?.value || '').trim();
const T = () => I18N[state.lang] || I18N.en;
const pal = () => design.palettes[state.theme];
const fontStack = (id) => (FONTS.find(f => f.id === (id || design.font)) || FONTS[0]).stack;
const hex6 = h => {
  if (!h) return '#000000';
  let x = String(h).replace('#','');
  if (x.length === 3) x = x.split('').map(c => c+c).join('');
  return '#' + x.slice(0,6);
};
const hexWord = h => hex6(h).slice(1).toUpperCase();

function download(blob, filename){
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
function baseName(){ return (val('f-name') || 'CV').replace(/[^\p{L}\p{N}]+/gu,'_'); }

function fieldsFromForm(){
  return {
    name: val('f-name'), title: val('f-title'), email: val('f-email'), phone: val('f-phone'),
    loc: val('f-location'), web: val('f-website'), summary: val('f-summary'),
    skills: val('f-skills'), langs: val('f-langs')
  };
}
function applyFields(f){
  const set = (id, v) => { const el = document.getElementById(id); if (el && v != null) el.value = v; };
  set('f-name', f.name); set('f-title', f.title); set('f-email', f.email); set('f-phone', f.phone);
  set('f-location', f.loc); set('f-website', f.web); set('f-summary', f.summary);
  set('f-skills', f.skills); set('f-langs', f.langs);
}
function applySample(lang, force){
  const s = SAMPLES[lang]; if (!s) return false;
  if (!force && userEdited) return false;
  applyFields(s);
  experience = s.experience.map(x => ({...x}));
  education = s.education.map(x => ({...x}));
  customSections = s.custom.map(x => ({...x, style: emptySec()}));
  userEdited = false;
  return true;
}

function saveState(){
  try{
    localStorage.setItem(STORE_KEY, JSON.stringify({
      theme: state.theme, lang: state.lang, dir: state.dir, userEdited, design,
      experience, education, customSections, fields: fieldsFromForm()
    }));
  }catch(e){}
}
function loadState(){
  try{
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return;
    const d = JSON.parse(raw);
    if (d.theme) state.theme = d.theme;
    if (d.lang) state.lang = d.lang;
    if (d.dir) state.dir = d.dir;
    if (typeof d.userEdited === 'boolean') userEdited = d.userEdited;
    if (Array.isArray(d.experience)) experience = d.experience;
    if (Array.isArray(d.education)) education = d.education;
    if (Array.isArray(d.customSections)) customSections = d.customSections.map(x => ({ style: emptySec(), ...x, style: x.style || emptySec() }));
    if (d.fields) applyFields(d.fields);
    if (d.design){
      if (d.design.font) design.font = d.design.font;
      if (d.design.fontSize) design.fontSize = +d.design.fontSize;
      if (d.design.lineHeight) design.lineHeight = +d.design.lineHeight;
      if (typeof d.design.autoFit === 'boolean') design.autoFit = d.design.autoFit;
      if (d.design.palettes){
        ['light','dark'].forEach(t => {
          design.palettes[t] = { ...DEFAULT_PALETTES[t], ...(d.design.palettes[t] || {}) };
        });
      }
      if (d.design.sections){
        design.sections = { ...defaultSections(), ...d.design.sections };
        Object.keys(design.sections).forEach(k => { design.sections[k] = { ...emptySec(), ...design.sections[k] }; });
      }
    }
    const langSel = document.getElementById('langSel');
    if (langSel && d.lang) langSel.value = d.lang;
  }catch(e){}
}

function richText(str, textColor){
  if (!str) return '';
  const tint = textColor ? ` style="color:${textColor}"` : '';
  const lines = String(str).split('\n');
  const out = []; let list = [];
  const flush = () => {
    if (list.length){
      out.push('<ul class="cv-ul">' + list.map(l => `<li${tint}>${esc(l)}</li>`).join('') + '</ul>');
      list = [];
    }
  };
  for (const raw of lines){
    const trimmed = raw.replace(/\s+$/,'').trim();
    if (trimmed === '---' || trimmed === '***' || trimmed === '___'){ flush(); out.push('<hr class="cv-hr">'); }
    else if (/^###\s+/.test(trimmed)){ flush(); out.push(`<h5 class="cv-subhead">${esc(trimmed.replace(/^###\s+/,''))}</h5>`); }
    else if (/^##\s+/.test(trimmed)){ flush(); out.push(`<h5 class="cv-subhead">${esc(trimmed.replace(/^##\s+/,''))}</h5>`); }
    else if (/^#\s+/.test(trimmed)){ flush(); out.push(`<h4 class="cv-subhead-lg">${esc(trimmed.replace(/^#\s+/,''))}</h4>`); }
    else if (/^[-*•]\s+/.test(trimmed)){ list.push(trimmed.replace(/^[-*•]\s+/,'')); }
    else if (trimmed === ''){ flush(); out.push('<div class="cv-br"></div>'); }
    else { flush(); out.push(`<p${tint}>${esc(trimmed)}</p>`); }
  }
  flush();
  return out.join('');
}

function secStyleAttr(sec, skipColor){
  if (!sec) return '';
  const parts = [];
  if (sec.scale && +sec.scale !== 100) parts.push(`font-size:${sec.scale}%`);
  if (sec.font) parts.push(`font-family:${fontStack(sec.font)}`);
  if (sec.text && !skipColor) parts.push(`color:${sec.text}`);
  return parts.length ? ` style="${parts.join(';')}"` : '';
}
function h3Style(sec, extra){
  const c = (sec && sec.heading) || extra || '';
  return c ? ` style="color:${c}"` : '';
}

function renderCV(){
  const Tr = T();
  const p = fieldsFromForm();
  const hs = design.sections.header;
  const nameCol = hs.heading ? ` style="color:${hs.heading}"` : '';
  const titleCol = hs.text ? ` style="color:${hs.text}"` : '';
  const contactBits = [
    p.email && `<span>${ICO.mail}${esc(p.email)}</span>`,
    p.phone && `<span>${ICO.phone}${esc(p.phone)}</span>`,
    p.loc   && `<span>${ICO.pin}${esc(p.loc)}</span>`,
    p.web   && `<span>${ICO.globe}${esc(p.web)}</span>`
  ].filter(Boolean).join('');

  const headerHTML = `
    <header class="cv-head" data-sec="header"${secStyleAttr(hs, true)}>
      <h1${nameCol}>${esc(p.name || Tr.yourName)}</h1>
      ${p.title ? `<div class="cv-title"${titleCol}>${esc(p.title)}</div>` : ''}
      ${contactBits ? `<div class="cv-contact">${contactBits}</div>` : ''}
    </header>`;

  const block = (id, title, inner) => {
    if (!inner) return '';
    const sec = design.sections[id];
    return `<section class="cv-sec" data-sec="${id}"${secStyleAttr(sec)}><h3${h3Style(sec)}>${esc(title)}</h3>${inner}</section>`;
  };

  const expHTML = experience.map(e => `
    <div class="cv-item">
      <div class="cv-item-top">
        <div><strong>${esc(e.role || '')}</strong>${e.company ? `<span class="cv-item-sub"> · ${esc(e.company)}</span>` : ''}</div>
        ${(e.start || e.end) ? `<div class="cv-date">${esc([e.start, e.end].filter(Boolean).join(' — '))}</div>` : ''}
      </div>
      ${e.desc ? richText(e.desc, design.sections.experience.text) : ''}
    </div>`).join('');

  const eduHTML = education.map(e => `
    <div class="cv-item">
      <div class="cv-item-top">
        <div><strong>${esc(e.degree || '')}</strong>${e.school ? `<span class="cv-item-sub"> · ${esc(e.school)}</span>` : ''}</div>
        ${(e.start || e.end) ? `<div class="cv-date">${esc([e.start, e.end].filter(Boolean).join(' — '))}</div>` : ''}
      </div>
    </div>`).join('');

  const chips = str => str.split(/[,،]/).map(s => s.trim()).filter(Boolean).map(s => `<span class="chip">${esc(s)}</span>`).join('');

  const customHTML = customSections.map((s,i) => {
    if (!s.title && !s.content) return '';
    const st = s.style || emptySec();
    return `<section class="cv-sec" data-sec="custom-${i}"${secStyleAttr(st)}>
      ${s.title ? `<h3${h3Style(st)}>${esc(s.title)}</h3>` : ''}
      ${richText(s.content, st.text)}
    </section>`;
  }).join('');

  $('#cv').innerHTML =
    headerHTML +
    block('summary', Tr.summary, p.summary ? richText(p.summary, design.sections.summary.text) : '') +
    block('experience', Tr.experience, experience.length ? expHTML : '') +
    block('education', Tr.education, education.length ? eduHTML : '') +
    block('skills', Tr.skills, p.skills ? `<div class="chips">${chips(p.skills)}</div>` : '') +
    block('languages', Tr.languages, p.langs ? `<div class="chips">${chips(p.langs)}</div>` : '') +
    customHTML;
  applyCvVars();
  fitToOnePage();
}

function applyCvVars(){
  const p = pal();
  const stack = fontStack();
  const vars = {
    '--cv-bg': p.bg, '--cv-text': p.text, '--cv-heading': p.heading, '--cv-muted': p.muted,
    '--cv-soft': p.soft, '--cv-border': p.border, '--cv-accent': p.accent,
    '--cv-head-border': p.headBorder, '--cv-chip-border': p.chipBorder,
    '--cv-chip-text': p.chipText, '--cv-chip-bg': p.chipBg, '--cv-font': stack,
    '--cv-line': String(design.lineHeight),
    '--cv-shadow': state.theme === 'dark'
      ? '0 24px 60px rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.03)'
      : '0 24px 60px rgba(0,0,0,.22)'
  };
  [$('#page'), $('#cv')].forEach(el => {
    if (!el) return;
    Object.entries(vars).forEach(([k,v]) => el.style.setProperty(k, v));
    el.style.background = p.bg;
    el.style.color = p.text;
    el.style.fontFamily = stack;
  });
  const baked = document.getElementById('baked-cv');
  if (baked){
    baked.textContent = `
      .page,.cv{background:${p.bg};color:${p.text};font-family:${stack};line-height:${design.lineHeight}}
      .cv-head{border-bottom-color:${p.headBorder}}
      .cv-head h1{color:${design.sections.header.heading || p.heading}}
      .cv-title{color:${design.sections.header.text || p.accent}}
      .cv-contact{color:${p.muted}}
      .cv-sec h3{border-bottom-color:${p.border}}
      .cv-sec:not([style*="color"]) h3{color:${p.heading}}
      .cv-item-top strong,.cv h4.cv-subhead-lg{color:${p.heading}}
      .cv-item-sub,.cv-date{color:${p.muted}}
      .cv-item p,.cv ul.cv-ul li{color:${p.soft}}
      .chip{color:${p.chipText};border-color:${p.chipBorder};background:${p.chipBg}}
      .cv hr.cv-hr{border-top-color:${p.border}}
    `;
  }
}

let fitRAF = null;
function fitToOnePage(){
  if (fitRAF) cancelAnimationFrame(fitRAF);
  fitRAF = requestAnimationFrame(() => {
    const cv = $('#cv'); if (!cv) return;
    if (!design.autoFit){
      cv.style.fontSize = design.fontSize + 'pt';
      return;
    }
    const targetH = cv.clientHeight; if (!targetH) return;
    let lo = 6.5, hi = Math.max(design.fontSize, 8), best = 8;
    for (let i = 0; i < 20; i++){
      const mid = (lo + hi) / 2;
      cv.style.fontSize = mid.toFixed(2) + 'pt';
      if (cv.scrollHeight <= targetH){ best = mid; lo = mid; } else hi = mid;
    }
    let size = Math.max(6.5, best - 0.04);
    cv.style.fontSize = size.toFixed(2) + 'pt';
    let guard = 0;
    while (cv.scrollHeight > targetH && size > 6.5 && guard < 40){
      size -= 0.1; cv.style.fontSize = size.toFixed(2) + 'pt'; guard++;
    }
  });
}

function renderExperience(){
  const Tr = T();
  $('#expList').innerHTML = experience.map((e,i) => `
    <div class="item">
      <div class="item-head"><span>#${i+1}</span>
        <button class="mini" data-act="del-exp" data-i="${i}">${ICO.x}</button></div>
      <input type="text" data-list="exp" data-i="${i}" data-k="role" value="${esc(e.role)}" placeholder="${esc(Tr.role)}">
      <input type="text" data-list="exp" data-i="${i}" data-k="company" value="${esc(e.company)}" placeholder="${esc(Tr.company)}" style="margin-top:8px">
      <div class="grid2" style="margin-top:8px">
        <input type="text" data-list="exp" data-i="${i}" data-k="start" value="${esc(e.start)}" placeholder="${esc(Tr.start)}">
        <input type="text" data-list="exp" data-i="${i}" data-k="end" value="${esc(e.end)}" placeholder="${esc(Tr.end)}">
      </div>
      <textarea data-list="exp" data-i="${i}" data-k="desc" placeholder="${esc(Tr.descPh)}" style="margin-top:8px;min-height:70px">${esc(e.desc)}</textarea>
    </div>`).join('');
  $('#addExp').innerHTML = ICO.plus + `<span>${esc(Tr.addExperience)}</span>`;
}
function renderEducation(){
  const Tr = T();
  $('#eduList').innerHTML = education.map((e,i) => `
    <div class="item">
      <div class="item-head"><span>#${i+1}</span>
        <button class="mini" data-act="del-edu" data-i="${i}">${ICO.x}</button></div>
      <input type="text" data-list="edu" data-i="${i}" data-k="degree" value="${esc(e.degree)}" placeholder="${esc(Tr.degree)}">
      <input type="text" data-list="edu" data-i="${i}" data-k="school" value="${esc(e.school)}" placeholder="${esc(Tr.school)}" style="margin-top:8px">
      <div class="grid2" style="margin-top:8px">
        <input type="text" data-list="edu" data-i="${i}" data-k="start" value="${esc(e.start)}" placeholder="${esc(Tr.start)}">
        <input type="text" data-list="edu" data-i="${i}" data-k="end" value="${esc(e.end)}" placeholder="${esc(Tr.end)}">
      </div>
    </div>`).join('');
  $('#addEdu').innerHTML = ICO.plus + `<span>${esc(Tr.addEducation)}</span>`;
}
function renderCustom(){
  const Tr = T();
  $('#customList').innerHTML = customSections.map((s,i) => `
    <div class="item">
      <div class="item-head"><span>#${i+1}</span>
        <button class="mini" data-act="del-cus" data-i="${i}">${ICO.x}</button></div>
      <input type="text" data-list="cus" data-i="${i}" data-k="title" value="${esc(s.title)}" placeholder="${esc(Tr.sectionTitle)}">
      <textarea data-list="cus" data-i="${i}" data-k="content" placeholder="${esc(Tr.sectionContent)}" style="margin-top:8px;min-height:74px">${esc(s.content)}</textarea>
    </div>`).join('');
  $('#addCustom').innerHTML = ICO.plus + `<span>${esc(Tr.addCustom)}</span>`;
}

function fontOptions(selected, includeSame){
  const Tr = T();
  const same = includeSame ? `<option value="" ${!selected ? 'selected' : ''}>${esc(Tr.sameFont)}</option>` : '';
  return same + FONTS.map(f => `<option value="${esc(f.id)}" ${selected===f.id?'selected':''} style="font-family:${f.stack}">${esc(f.id)}</option>`).join('');
}

function renderDesignControls(){
  const Tr = T();
  const p = pal();
  const fontSel = $('#f-font');
  if (fontSel && !fontSel.dataset.ready){
    fontSel.innerHTML = fontOptions(design.font, false);
    fontSel.dataset.ready = '1';
  }
  if (fontSel) fontSel.value = design.font;
  $('#f-fontsize').value = design.fontSize;
  $('#fontSizeVal').textContent = design.fontSize + ' pt';
  $('#f-lineheight').value = design.lineHeight;
  $('#lineHeightVal').textContent = Number(design.lineHeight).toFixed(2);
  $$('#fitSeg button').forEach(b => b.classList.toggle('active', (b.dataset.fit === 'on') === design.autoFit));
  $('#colorThemeLabel').textContent = state.theme === 'dark' ? Tr.darkMode : Tr.lightMode;
  $('#paletteDots').innerHTML = ['bg','heading','accent','text','muted','border'].map(k =>
    `<i style="background:${p[k]}"></i>`).join('');
  $('#colorList').innerHTML = PALETTE_KEYS.map(([key, i18n]) => `
    <div class="color-row">
      <span class="cname">${esc(Tr[i18n] || key)}</span>
      <input type="color" data-pal="${key}" value="${hex6(p[key])}">
      <input type="text" class="hex-in" data-pal-hex="${key}" value="${esc(p[key])}" maxlength="9">
    </div>`).join('');
  $('#resetColorsBtn').innerHTML = `<span>${esc(Tr.resetColors)}</span>`;
  renderSectionStyles();
}

function colorPair(secId, kind, current, fallback, customIndex){
  const shown = current || fallback;
  const cus = customIndex == null ? '' : ` data-cusi="${customIndex}"`;
  return `<div class="color-row">
    <span class="cname">${esc(T()[kind === 'heading' ? 'headingTint' : 'textTint'])}</span>
    <input type="color" data-sec="${secId}" data-seck="${kind}"${cus} value="${hex6(shown)}">
    <button type="button" class="mini" data-act="clear-sec" data-sec="${secId}" data-seck="${kind}"${cus} title="${esc(T().resetColors)}">${ICO.x}</button>
  </div>`;
}

function renderSectionStyles(){
  const Tr = T();
  const p = pal();
  const cards = SEC_META.map(([id, i18n]) => {
    const s = design.sections[id];
    const fbH = id === 'header' ? p.heading : p.heading;
    const fbT = id === 'header' ? p.accent : p.text;
    return `<div class="sec-style">
      <div class="sec-title">${esc(Tr[i18n])}</div>
      ${colorPair(id,'heading', s.heading, fbH)}
      ${colorPair(id,'text', s.text, fbT)}
      <div class="row-lab"><span>${esc(Tr.sizeScale)}</span><b>${s.scale}%</b></div>
      <input type="range" min="80" max="140" step="5" value="${s.scale}" data-sec-scale="${id}">
      <select data-sec-font="${id}" style="margin-top:8px">${fontOptions(s.font, true)}</select>
    </div>`;
  });
  customSections.forEach((cs, i) => {
    const s = cs.style || emptySec();
    cards.push(`<div class="sec-style">
      <div class="sec-title">${esc(cs.title || (Tr.custom + ' #' + (i+1)))}</div>
      ${colorPair('custom','heading', s.heading, p.heading, i)}
      ${colorPair('custom','text', s.text, p.text, i)}
      <div class="row-lab"><span>${esc(Tr.sizeScale)}</span><b>${s.scale}%</b></div>
      <input type="range" min="80" max="140" step="5" value="${s.scale}" data-cus-scale="${i}">
      <select data-cus-font="${i}" style="margin-top:8px">${fontOptions(s.font, true)}</select>
    </div>`);
  });
  $('#sectionStyleList').innerHTML = cards.join('');
}

function applyI18n(){
  const Tr = T();
  $$('[data-i18n]').forEach(el => { const k = el.dataset.i18n; if (Tr[k]) el.textContent = Tr[k]; });
  $$('[data-i18n-ph]').forEach(el => { const k = el.dataset.i18nPh; if (Tr[k]) el.placeholder = Tr[k]; });
  $('#themeBtn').innerHTML = state.theme === 'light' ? ICO.moon + `<span>${Tr.dark}</span>` : ICO.sun + `<span>${Tr.light}</span>`;
  $('#pdfBtn').innerHTML = ICO.pdf + `<span>${Tr.pdf}</span>`;
  $('#docxBtn').innerHTML = ICO.doc + `<span>${Tr.docx}</span>`;
  $('#printBtn').innerHTML = ICO.pdf + `<span>${Tr.print}</span>`;
  $('#newWindowBtn').innerHTML = ICO.external + `<span>${Tr.open}</span>`;
  $('#sampleBtn').innerHTML = `<span>${esc(Tr.loadSample)}</span>`;
  $('#resetColorsBtn').innerHTML = `<span>${esc(Tr.resetColors)}</span>`;
}
function applyDir(){
  document.documentElement.dir = state.dir;
  document.documentElement.lang = state.lang;
  $('#sidebarScroll').dir = state.dir;
  $('#sidebarFooter').dir = state.dir;
  $('#cv').dir = state.dir;
  $$('#dirSeg button').forEach(b => b.classList.toggle('active', b.dataset.dir === state.dir));
}
function applyTheme(){ document.documentElement.dataset.theme = state.theme; }

function refreshAll(){
  applyTheme(); applyI18n(); applyDir();
  renderExperience(); renderEducation(); renderCustom();
  renderDesignControls(); renderCV();
}

$('#themeBtn').addEventListener('click', () => {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  applyTheme(); applyI18n(); renderDesignControls(); renderCV(); saveState();
});
$('#langSel').addEventListener('change', e => {
  state.lang = e.target.value;
  if (state.lang === 'ar') state.dir = 'rtl';
  else if (state.dir === 'rtl' && state.lang !== 'ar') state.dir = 'ltr';
  applySample(state.lang, false);
  refreshAll(); saveState();
});
$('#dirSeg').addEventListener('click', e => {
  const b = e.target.closest('button[data-dir]'); if (!b) return;
  state.dir = b.dataset.dir; applyDir(); renderCV(); saveState();
});
$('#sampleBtn').addEventListener('click', () => {
  if (userEdited && !confirm(T().replaceConfirm)) return;
  applySample(state.lang, true);
  refreshAll(); saveState();
});
$('#f-font').addEventListener('change', e => { design.font = e.target.value; renderCV(); saveState(); });
$('#f-fontsize').addEventListener('input', e => {
  design.fontSize = +e.target.value; $('#fontSizeVal').textContent = design.fontSize + ' pt';
  renderCV(); saveState();
});
$('#f-lineheight').addEventListener('input', e => {
  design.lineHeight = +e.target.value; $('#lineHeightVal').textContent = Number(design.lineHeight).toFixed(2);
  renderCV(); saveState();
});
$('#fitSeg').addEventListener('click', e => {
  const b = e.target.closest('button[data-fit]'); if (!b) return;
  design.autoFit = b.dataset.fit === 'on';
  $$('#fitSeg button').forEach(x => x.classList.toggle('active', x === b));
  renderCV(); saveState();
});
$('#resetColorsBtn').addEventListener('click', () => {
  design.palettes[state.theme] = { ...DEFAULT_PALETTES[state.theme] };
  renderDesignControls(); renderCV(); saveState();
});

$('#sidebarScroll').addEventListener('input', e => {
  const el = e.target;
  if (el.dataset.pal){
    pal()[el.dataset.pal] = el.value;
    const hex = $(`[data-pal-hex="${el.dataset.pal}"]`);
    if (hex) hex.value = el.value;
    $('#paletteDots').innerHTML = ['bg','heading','accent','text','muted','border'].map(k => `<i style="background:${pal()[k]}"></i>`).join('');
    renderCV(); saveState(); return;
  }
  if (el.dataset.palHex){
    const v = el.value.trim();
    if (/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(v)){
      pal()[el.dataset.palHex] = hex6(v);
      const c = $(`[data-pal="${el.dataset.palHex}"]`);
      if (c) c.value = hex6(v);
      renderCV(); saveState();
    }
    return;
  }
  if (el.dataset.sec && el.dataset.seck){
    const target = el.dataset.cusi != null ? (customSections[+el.dataset.cusi].style ||= emptySec()) : design.sections[el.dataset.sec];
    target[el.dataset.seck] = el.value;
    renderCV(); saveState(); return;
  }
  if (el.dataset.secScale){
    design.sections[el.dataset.secScale].scale = +el.value;
    el.previousElementSibling?.querySelector('b') && (el.previousElementSibling.querySelector('b').textContent = el.value + '%');
    renderCV(); saveState(); return;
  }
  if (el.dataset.cusScale){
    (customSections[+el.dataset.cusScale].style ||= emptySec()).scale = +el.value;
    el.previousElementSibling?.querySelector('b') && (el.previousElementSibling.querySelector('b').textContent = el.value + '%');
    renderCV(); saveState(); return;
  }
  if (el.dataset.secFont){ design.sections[el.dataset.secFont].font = el.value; renderCV(); saveState(); return; }
  if (el.dataset.cusFont){ (customSections[+el.dataset.cusFont].style ||= emptySec()).font = el.value; renderCV(); saveState(); return; }
  if (el.dataset.list){
    userEdited = true;
    if (el.dataset.list === 'exp') experience[+el.dataset.i][el.dataset.k] = el.value;
    if (el.dataset.list === 'edu') education[+el.dataset.i][el.dataset.k] = el.value;
    if (el.dataset.list === 'cus') customSections[+el.dataset.i][el.dataset.k] = el.value;
  } else if (el.id && el.id.startsWith('f-') && !['f-font','f-fontsize','f-lineheight'].includes(el.id)){
    userEdited = true;
  }
  renderCV(); saveState();
});

$('#sidebarScroll').addEventListener('click', e => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  const i = +b.dataset.i;
  if (b.dataset.act === 'del-exp'){ experience.splice(i,1); userEdited = true; renderExperience(); }
  if (b.dataset.act === 'del-edu'){ education.splice(i,1); userEdited = true; renderEducation(); }
  if (b.dataset.act === 'del-cus'){ customSections.splice(i,1); userEdited = true; renderCustom(); renderSectionStyles(); }
  if (b.dataset.act === 'clear-sec'){
    const target = b.dataset.cusi != null ? (customSections[+b.dataset.cusi].style ||= emptySec()) : design.sections[b.dataset.sec];
    target[b.dataset.seck] = '';
    renderSectionStyles(); renderCV(); saveState(); return;
  }
  renderCV(); saveState();
});

$('#addExp').addEventListener('click', () => {
  experience.push({ role:'', company:'', start:'', end:'', desc:'' });
  userEdited = true; renderExperience(); renderCV(); saveState();
});
$('#addEdu').addEventListener('click', () => {
  education.push({ degree:'', school:'', start:'', end:'' });
  userEdited = true; renderEducation(); renderCV(); saveState();
});
$('#addCustom').addEventListener('click', () => {
  customSections.push({ title:'', content:'', style: emptySec() });
  userEdited = true; renderCustom(); renderSectionStyles(); renderCV(); saveState();
});
window.addEventListener('resize', fitToOnePage);

function wordFont(){ return DOCX_FONT[design.font] || 'Calibri'; }
function escXml(s){ return String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c])); }

function wP(text, o={}){
  const p = pal();
  const color = hexWord(o.color || p.text);
  const size = o.size || Math.round(design.fontSize * 2);
  const bold = o.bold ? '<w:b/><w:bCs/>' : '';
  const font = o.font || wordFont();
  const after = o.after ?? 80;
  const rtl = state.dir === 'rtl';
  return `<w:p>
    <w:pPr>
      <w:spacing w:after="${after}"/>
      <w:jc w:val="${o.align || (rtl ? 'right' : 'left')}"/>
      ${rtl ? '<w:bidi w:val="1"/>' : ''}
    </w:pPr>
    <w:r>
      <w:rPr>${bold}<w:sz w:val="${size}"/><w:szCs w:val="${size}"/>
        <w:color w:val="${color}"/>
        <w:rFonts w:ascii="${font}" w:hAnsi="${font}" w:cs="${font}" w:eastAsia="${font}"/>
        ${rtl ? '<w:rtl/>' : ''}
      </w:rPr>
      <w:t xml:space="preserve">${escXml(text)}</w:t>
    </w:r>
  </w:p>`;
}
function wRuns(runs, o={}){
  const rtl = state.dir === 'rtl';
  const after = o.after ?? 80;
  const font = wordFont();
  return `<w:p><w:pPr><w:spacing w:after="${after}"/><w:jc w:val="${o.align || (rtl ? 'right' : 'left')}"/>${rtl ? '<w:bidi w:val="1"/>' : ''}</w:pPr>${
    runs.map(r => {
      const size = r.size || Math.round(design.fontSize * 2);
      return `<w:r><w:rPr>${r.bold?'<w:b/><w:bCs/>':''}<w:sz w:val="${size}"/><w:szCs w:val="${size}"/><w:color w:val="${hexWord(r.color || pal().text)}"/><w:rFonts w:ascii="${font}" w:hAnsi="${font}" w:cs="${font}"/>${rtl?'<w:rtl/>':''}</w:rPr><w:t xml:space="preserve">${escXml(r.text)}</w:t></w:r>`;
    }).join('')
  }</w:p>`;
}
function wHeading(text, color){
  const p = pal();
  return wP(String(text).toUpperCase(), { bold:true, color: color || p.heading, size: Math.round(design.fontSize * 1.6), after:60 });
}
function richToWord(str, color){
  if (!str) return '';
  const p = pal();
  const c = color || p.soft;
  return String(str).split('\n').map(line => {
    const t = line.trim();
    if (!t) return wP('', { after:40 });
    if (t === '---' || t === '***') return wP('—', { color:p.muted, after:60 });
    if (/^#{1,3}\s+/.test(t)) return wP(t.replace(/^#{1,3}\s+/, ''), { bold:true, color:p.heading, after:60 });
    if (/^[-*•]\s+/.test(t)) return wP('•  ' + t.replace(/^[-*•]\s+/, ''), { color:c, after:40 });
    return wP(t, { color:c, after:60 });
  }).join('');
}

async function buildDocxBlob(){
  const p = pal();
  const f = fieldsFromForm();
  const Tr = T();
  const bg = hexWord(p.bg);
  const base = Math.round(design.fontSize * 2);
  let body = '';
  const hs = design.sections.header;
  body += wP(f.name || Tr.yourName, { bold:true, color: hs.heading || p.heading, size: Math.round(base * 2.1), after:40 });
  if (f.title) body += wP(f.title, { color: hs.text || p.accent, size: Math.round(base * 1.15), after:80 });
  const contact = [f.email, f.phone, f.loc, f.web].filter(Boolean).join('   ·   ');
  if (contact) body += wP(contact, { color:p.muted, size: Math.round(base * 0.85), after:160 });

  const addSec = (id, title, inner) => {
    if (!inner) return;
    const s = design.sections[id];
    body += wHeading(title, s.heading);
    body += inner;
  };
  if (f.summary) addSec('summary', Tr.summary, richToWord(f.summary, design.sections.summary.text));
  if (experience.length){
    addSec('experience', Tr.experience, experience.map(e => {
      const line = wRuns([
        { text: e.role || '', bold:true, color: p.heading, size: base },
        { text: e.company ? '  ·  ' + e.company : '', color: p.muted, size: Math.round(base * 0.95) },
        { text: (e.start || e.end) ? '    ' + [e.start, e.end].filter(Boolean).join(' — ') : '', color: p.muted, size: Math.round(base * 0.85) }
      ], { after:40 });
      return line + (e.desc ? richToWord(e.desc, design.sections.experience.text) : '');
    }).join(''));
  }
  if (education.length){
    addSec('education', Tr.education, education.map(e => wRuns([
      { text: e.degree || '', bold:true, color: p.heading },
      { text: e.school ? '  ·  ' + e.school : '', color: p.muted },
      { text: (e.start || e.end) ? '    ' + [e.start, e.end].filter(Boolean).join(' — ') : '', color: p.muted, size: Math.round(base * 0.85) }
    ])).join(''));
  }
  const splitChips = s => s.split(/[,،]/).map(x => x.trim()).filter(Boolean).join('   ·   ');
  if (f.skills) addSec('skills', Tr.skills, wP(splitChips(f.skills), { color: p.chipText }));
  if (f.langs) addSec('languages', Tr.languages, wP(splitChips(f.langs), { color: p.chipText }));
  customSections.forEach(s => {
    if (!s.title && !s.content) return;
    if (s.title) body += wHeading(s.title, (s.style && s.style.heading) || p.heading);
    if (s.content) body += richToWord(s.content, s.style && s.style.text);
  });

  const rtl = state.dir === 'rtl';
  const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:background w:color="${bg}"/>
  <w:body>
    <w:tbl>
      <w:tblPr><w:tblW w:w="5000" w:type="pct"/><w:shd w:val="clear" w:color="auto" w:fill="${bg}"/></w:tblPr>
      <w:tr>
        <w:tc>
          <w:tcPr><w:shd w:val="clear" w:color="auto" w:fill="${bg}"/><w:tcW w:w="5000" w:type="pct"/></w:tcPr>
          ${body}
        </w:tc>
      </w:tr>
    </w:tbl>
    <w:sectPr>
      ${rtl ? '<w:bidi/>' : ''}
      <w:pgSz w:w="11906" w:h="16838"/>
      <w:pgMar w:top="794" w:right="794" w:bottom="794" w:left="794"/>
    </w:sectPr>
  </w:body>
</w:document>`;

  const contentTypes = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/settings.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml"/>
</Types>`;
  const rels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`;
  const docRels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings" Target="settings.xml"/>
</Relationships>`;
  const settings = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:settings xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:displayBackgroundShape w:val="true"/>
</w:settings>`;

  const zip = new JSZip();
  zip.file('[Content_Types].xml', contentTypes);
  zip.folder('_rels').file('.rels', rels);
  const word = zip.folder('word');
  word.file('document.xml', documentXml);
  word.file('settings.xml', settings);
  word.folder('_rels').file('document.xml.rels', docRels);
  return zip.generateAsync({ type:'blob', mimeType:'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
}

function buildStandaloneHTML(){
  const theme = state.theme;
  const name = val('f-name') || 'CV';
  const p = pal();
  const cvHTML = $('#cv').outerHTML;
  const pageStyle = $('#page').getAttribute('style') || '';
  return `<!DOCTYPE html>
<html lang="${state.lang}" dir="${state.dir}" data-theme="${theme}">
<head>
<meta charset="utf-8">
<title>${esc(name)} — CV</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=IBM+Plex+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=Lora:wght@400;600;700&family=Merriweather:wght@400;700&family=Noto+Sans+Arabic:wght@400;500;600;700;800&family=Open+Sans:wght@400;600;700&family=Playfair+Display:wght@600;700;800&family=Roboto:wght@400;500;700&family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet">
<style>
  *{box-sizing:border-box}
  body{margin:0;padding:26px;background:${theme==='dark'?'#0c0f15':'#eef1f6'};display:flex;justify-content:center;font-family:${fontStack()}}
  .page{width:210mm;height:297mm;padding:14mm;overflow:hidden;border-radius:2px;box-shadow:0 12px 44px rgba(0,0,0,${theme==='dark'?.6:.2});background:${p.bg};color:${p.text}}
  .toolbar{position:fixed;top:14px;inset-inline-end:14px;z-index:99}
  .toolbar button{padding:10px 16px;border:none;border-radius:10px;cursor:pointer;background:#4f46e5;color:#fff;font:inherit;font-weight:700;font-size:13px}
  @page{size:A4;margin:0}
  @media print{
    body,.page,.cv,.cv *{-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important}
    body{background:transparent!important;padding:0;display:block}
    .page{width:210mm;min-height:297mm;height:auto;padding:14mm;margin:0;border-radius:0!important;box-shadow:none!important;overflow:visible;background:${p.bg}!important}
    .cv{height:auto;overflow:visible;background:${p.bg}!important}
    .toolbar{display:none}
  }
  .cv{height:100%;overflow:hidden;font-family:${fontStack()};color:${p.text};background:${p.bg};line-height:${design.lineHeight};font-size:${$('#cv').style.fontSize||design.fontSize+'pt'}}
  .cv h1,.cv h3,.cv p{margin:0}
  .cv-head{padding-bottom:10px;margin-bottom:14px;border-bottom:1.5px solid ${p.headBorder}}
  .cv-head h1{font-size:2.15em;line-height:1.05;color:${p.heading};letter-spacing:-.025em;font-weight:800}
  .cv-title{color:${p.accent};font-weight:600;font-size:1.02em;margin-top:3px}
  .cv-contact{display:flex;flex-wrap:wrap;gap:3px 16px;margin-top:9px;font-size:.82em;color:${p.muted}}
  .cv-contact span{display:inline-flex;align-items:center;gap:5px;white-space:nowrap}
  .cv-contact svg{width:1em;height:1em;flex:0 0 1em}
  .cv-sec{margin-bottom:13px}
  .cv-sec h3{font-size:.78em;text-transform:uppercase;letter-spacing:.16em;color:${p.heading};font-weight:800;margin-bottom:8px;padding-bottom:4px;border-bottom:1px solid ${p.border}}
  .cv-item{margin-bottom:9px}
  .cv-item-top{display:flex;justify-content:space-between;align-items:baseline;gap:12px;flex-wrap:wrap}
  .cv-item-top strong{color:${p.heading};font-weight:700}
  .cv-item-sub,.cv-date{color:${p.muted};font-weight:500}
  .cv-date{font-size:.8em;white-space:nowrap}
  .cv-item p,.cv ul.cv-ul li{color:${p.soft};font-size:.9em}
  .chips{display:flex;flex-wrap:wrap;gap:6px}
  .chip{border:1px solid ${p.chipBorder};color:${p.chipText};background:${p.chipBg};border-radius:6px;padding:2.5px 9px;font-size:.8em}
  .cv hr.cv-hr{border:none;border-top:1px solid ${p.border};margin:8px 0}
  .cv h4.cv-subhead-lg{font-size:1em;font-weight:700;color:${p.heading};margin:7px 0 3px}
  .cv h5.cv-subhead{font-size:.9em;font-weight:700;margin:6px 0 2px}
  .cv ul.cv-ul{margin:3px 0 6px;padding-inline-start:1.15em}
  .cv .cv-br{height:6px}
</style>
</head>
<body>
  <div class="toolbar"><button onclick="window.print()">Print / PDF</button></div>
  <div class="page" style="${esc(pageStyle)}">${cvHTML}</div>
</body>
</html>`;
}

async function exportPdf(){
  const Tr = T();
  const btn = $('#pdfBtn');
  const old = btn.innerHTML;
  btn.innerHTML = ICO.pdf + `<span>${Tr.saving}</span>`;
  try{
    const JsPDF = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;
    if (!window.html2canvas || !JsPDF){ window.print(); return; }
    await document.fonts.ready;
    const wrap = document.createElement('div');
    wrap.style.cssText = 'position:fixed;left:-10000px;top:0;z-index:-1;';
    const clone = $('#page').cloneNode(true);
    clone.style.boxShadow = 'none';
    clone.style.borderRadius = '0';
    wrap.appendChild(clone);
    document.body.appendChild(wrap);
    const canvas = await html2canvas(clone, {
      scale: 2, useCORS: true, backgroundColor: pal().bg,
      width: clone.scrollWidth, height: clone.scrollHeight
    });
    wrap.remove();
    const pdf = new JsPDF({ unit:'mm', format:'a4', orientation:'portrait' });
    pdf.addImage(canvas.toDataURL('image/jpeg', 0.95), 'JPEG', 0, 0, 210, 297);
    pdf.save(baseName() + '_CV.pdf');
  }catch(err){
    window.print();
  }finally{
    btn.innerHTML = old;
  }
}

async function exportDocx(){
  const Tr = T();
  const btn = $('#docxBtn');
  const old = btn.innerHTML;
  btn.innerHTML = ICO.doc + `<span>${Tr.saving}</span>`;
  try{
    if (window.JSZip){
      const blob = await buildDocxBlob();
      download(blob, baseName() + '_CV.docx');
    } else {
      const blob = new Blob(['\ufeff' + buildStandaloneHTML()], { type:'application/msword' });
      download(blob, baseName() + '_CV.doc');
    }
  }catch(err){
    const blob = new Blob(['\ufeff' + buildStandaloneHTML()], { type:'application/msword' });
    download(blob, baseName() + '_CV.doc');
  }finally{
    btn.innerHTML = old;
  }
}

$('#pdfBtn').addEventListener('click', () => exportPdf());
$('#docxBtn').addEventListener('click', () => exportDocx());
$('#printBtn').addEventListener('click', () => window.print());
$('#newWindowBtn').addEventListener('click', () => {
  const w = window.open('', '_blank');
  if (!w){ alert(T().popupBlocked); return; }
  w.document.open(); w.document.write(buildStandaloneHTML()); w.document.close();
});

(function init(){
  loadState();
  const fontSel = $('#f-font');
  fontSel.innerHTML = fontOptions(design.font, false);
  fontSel.dataset.ready = '1';
  refreshAll();
  window.addEventListener('beforeunload', saveState);
  window.addEventListener('load', fitToOnePage);
  setTimeout(fitToOnePage, 200);
})();
