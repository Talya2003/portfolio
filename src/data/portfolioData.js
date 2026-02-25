export const siteConfig = {
  name: "Talya Kazayof",
  email: "talya8399@gmail.com",
  github: "https://github.com/Talya2003",
  linkedin: "https://www.linkedin.com/in/talya-kazayof",
};

export const content = {
  en: {
    title: "Software Engineer",
    location: "Israel",
    headline: "Software Engineer focused on cloud, automation, and full-stack delivery.",
    subheadline:
      "Building reliable data platforms and internal tools on GCP and SAP, while delivering research-driven web products with modern React and Python stacks.",
    nav: {
      work: "Work",
      about: "About",
      contact: "Contact",
      resume: "Resume",
      theme: "Theme",
      language: "Language",
    },
    hero: {
      primaryCta: "View work",
      secondaryCta: "GitHub",
      scroll: "scroll",
    },
    sections: {
      selectedWork: "Selected Work",
      projects: "Projects",
      howIWork: "How I Work",
      principles: "Engineering Principles",
      tools: "Tools & Technologies",
      techStack: "Tech Stack",
      career: "Career",
      experience: "Experience",
      about: "About",
    },
    projectsFilter: {
      label: "Filter",
      all: "All",
    },
    about: {
      paragraphs: [
        "I’m a software engineer specializing in cloud infrastructure, automation, and full-stack delivery for data-intensive systems.",
        "At the Population and Immigration Authority, I lead GCP and SAP architecture work, build serverless automation, and develop internal web platforms that make data more accessible and reliable.",
        "As a freelance developer, I ship research and community products using React, Django, and Firebase, with a focus on clean UX, secure access, and maintainable codebases.",
      ],
    },
    caseStudy: {
      back: "Back to projects",
      notFoundTitle: "Project not found",
      notFoundBody: "The case study you are looking for does not exist.",
      overview: "Overview",
      problem: "Problem",
      architecture: "Architecture",
      implementation: "Implementation",
      challenges: "Challenges",
      results: "Results",
      role: "Role",
      year: "Year",
      duration: "Duration",
      team: "Team",
    },
    notFound: {
      title: "404",
      body: "The page you are looking for does not exist.",
      back: "Back to home",
    },
    github: {
      label: "Open Source Activity",
      title: "GitHub Repositories",
      cta: "View all on GitHub",
      loading: "Loading repositories...",
      error: "Unable to load repositories right now.",
      noDescription: "No description provided.",
      updated: "Updated",
      stars: "Stars",
      forks: "Forks",
      language: "Language",
    },
    contact: {
      label: "Contact",
      title: "Let’s work together",
      subtitle:
        "Share a quick overview and I’ll respond with timelines, availability, and next steps.",
      fields: {
        name: "Name",
        email: "Email",
        message: "Message",
      },
      placeholders: {
        name: "Your name",
        email: "you@example.com",
        message: "Tell me about the role, project, or collaboration.",
      },
      recruiter: {
        title: "Recruiter mode",
        subtitle: "Unlock a few extra hiring details.",
        toggle: "Toggle recruiter fields",
        fields: {
          company: "Company",
          role: "Role",
          timeline: "Hiring timeline",
        },
        placeholders: {
          company: "Company name",
          role: "Role title",
          timeline: "e.g. 2-4 weeks",
        },
      },
      actions: {
        send: "Send message",
        sending: "Sending...",
        email: "Email directly",
      },
      note: "Emails are delivered via EmailJS.",
      feedback: {
        success: "Message sent successfully. I will get back to you soon.",
        error: "Something went wrong. Please try again or email me directly.",
      },
      cards: {
        availability: {
          label: "Availability",
          title: "Open to new opportunities",
          body: "Interested in roles focused on cloud platforms, automation, and product delivery.",
        },
        focus: {
          label: "Focus",
          title: "Cloud, data, and full-stack",
          body: "GCP, serverless automation, data pipelines, and modern React-based interfaces.",
        },
        response: {
          label: "Response time",
          title: "Fast replies",
          body: "I usually respond within 1–2 business days.",
        },
      },
    },
    resumeRequest: {
      label: "Resume Access",
      title: "Request the resume",
      subtitle: "Share hiring context so I can respond with the right version.",
      close: "Close",
      fields: {
        name: "Name",
        email: "Email",
        company: "Company",
        role: "Role",
        linkedin: "LinkedIn profile",
        reason: "Hiring context",
      },
      placeholders: {
        name: "Your name",
        email: "you@example.com",
        company: "Company name",
        role: "Role title",
        linkedin: "https://linkedin.com/in/…",
        reason: "What are you hiring for and what should I highlight?",
      },
      actions: {
        submit: "Request resume",
        sending: "Sending...",
      },
      note: "Requests are reviewed manually to prevent spam.",
      emailSubject: "Resume request from portfolio",
      emailBodyHeader: "Resume request details",
      source: "Source",
      feedback: {
        success: "Resume request sent successfully. I will follow up soon.",
        error: "Something went wrong. Please try again or email me directly.",
      },
    },
    projects: [
      {
        id: "gcp-data-infrastructure",
        title: "GCP Data Infrastructure",
        subtitle: "Cloud-native data platform design",
        description:
          "Designed a GCP-based data infrastructure with automated pipelines and serverless services for cross-team workflows.",
        overview:
          "Led R&D and architecture for a cloud data platform integrating GCP services with SAP, enabling reliable ingestion, processing, and governance.",
        problem:
          "Multiple teams needed consistent, automated data pipelines and controlled environments while maintaining data quality and auditability.",
        architecture:
          "Serverless-first architecture using Cloud Run and Cloud Functions, with Python orchestration and SAP HANA integration for structured datasets.",
        implementation:
          "Built automation around pipeline execution, environment management, and API-based integrations with Azure DevOps.",
        challenges:
          "Coordinating multiple stakeholders while ensuring security constraints and data quality requirements were met.",
        results:
          "Standardized data flows and reduced manual operational work with reusable automation workflows.",
        techStack: ["Python", "GCP", "SAP HANA", "Cloud Run"],
        category: "CLOUD PLATFORM",
        metrics: [
          { label: "Pipelines", value: "8+" },
          { label: "Integrations", value: "4" },
          { label: "Teams", value: "3" },
          { label: "Environments", value: "3" },
        ],
        links: [{ label: "GitHub", url: "https://github.com" }],
        year: "2024",
        role: "Software Engineer",
        duration: "Ongoing",
        team: "Cross-functional",
      },
      {
        id: "remez-research-platform",
        title: "REMEZ Research Platform",
        subtitle: "Drug–reaction analysis web app",
        description:
          "Built a research-driven platform for drug–reaction analysis with authentication, query management, and visualization.",
        overview:
          "Developed a full-stack web application for clinical research workflows, supporting secure access, persistent queries, and interpretable outputs.",
        problem:
          "Researchers needed a unified system for exploring drug–reaction data and managing queries without ad-hoc scripts.",
        architecture:
          "React front-end with Django and FastAPI services, backed by a structured data layer and role-based access.",
        implementation:
          "Delivered authentication, query orchestration, and visualization for reporting with a clean, fast UI.",
        challenges:
          "Balancing complex data queries with responsive UX while ensuring clarity for non-technical users.",
        results:
          "Enabled repeatable research workflows and improved collaboration across the team.",
        techStack: ["React", "Django", "FastAPI", "PostgreSQL"],
        category: "FULL-STACK",
        metrics: [
          { label: "Modules", value: "4" },
          { label: "Auth", value: "RBAC" },
          { label: "Queries", value: "10+" },
          { label: "Visuals", value: "ROR" },
        ],
        links: [{ label: "GitHub", url: "https://github.com" }],
        year: "2024",
        role: "Freelance Developer",
        duration: "Ongoing",
        team: "Independent",
      },
      {
        id: "internal-bi-portal",
        title: "Internal BI Portal",
        subtitle: "Organizational analytics hub",
        description:
          "Building an internal BI portal that centralizes reporting workflows and improves access to data insights.",
        overview:
          "Developing a web portal for internal stakeholders to view dashboards and request reports through a unified interface.",
        problem:
          "Analytics workflows were fragmented and required manual coordination across teams.",
        architecture:
          "React client with Node.js REST APIs, integrating with SAP HANA data sources and internal authentication.",
        implementation:
          "Designed reusable UI components, API contracts, and query modules to support reporting needs.",
        challenges:
          "Ensuring data consistency and performance while aligning with organizational security standards.",
        results:
          "Streamlined access to analytics and reduced turnaround time for internal reporting.",
        techStack: ["React", "Node.js", "REST APIs", "SAP HANA"],
        category: "DATA PLATFORM",
        metrics: [
          { label: "Dashboards", value: "6+" },
          { label: "APIs", value: "5" },
          { label: "Data Sets", value: "12" },
          { label: "Stakeholders", value: "4" },
        ],
        links: [{ label: "GitHub", url: "https://github.com" }],
        year: "2024",
        role: "Software Engineer",
        duration: "Ongoing",
        team: "Internal",
      },
    ],
    experiences: [
      {
        company: "Population and Immigration Authority",
        role: "Software Engineer",
        period: "2024 — Present",
        description:
          "Leading cloud data infrastructure initiatives on GCP and SAP, building automation, data pipelines, and internal web platforms.",
        highlights: [
          "Designed serverless architecture using Cloud Run and Cloud Functions.",
          "Automated pipeline workflows and integrated Azure DevOps APIs.",
          "Developed SQL on SAP HANA to improve data quality and performance.",
        ],
      },
      {
        company: "Freelance",
        role: "Web Developer",
        period: "2024 — Present",
        description:
          "Delivering full-stack web products for research and community organizations using React, Django, and Firebase.",
        highlights: [
          "Built REMEZ, a drug–reaction analysis platform with authentication and visualization.",
          "Shipped a production site for a synagogue community with optimized performance.",
          "Implemented REST APIs, data persistence, and role-based access.",
        ],
      },
      {
        company: "Lehava (Association for Kidney Health)",
        role: "Director, Computer Department",
        period: "2020 — Present",
        description:
          "Volunteering to manage and improve technology operations for a healthcare non-profit.",
        highlights: [
          "Coordinated technical support and infrastructure needs.",
          "Improved tooling and documentation for volunteers.",
          "Supported cross-team collaboration and data access.",
        ],
      },
    ],
    principles: [
      {
        title: "Automate the repetitive",
        description:
          "Build workflows that remove manual steps and keep systems consistent and reliable.",
      },
      {
        title: "Architect for scale",
        description:
          "Design cloud platforms that support growth across teams and data volumes.",
      },
      {
        title: "Keep data trustworthy",
        description:
          "Focus on data quality, governance, and performance to enable confident decisions.",
      },
      {
        title: "Ship with clarity",
        description:
          "Prefer clean interfaces and documentation that help teams move quickly.",
      },
    ],
    techStack: [
      {
        category: "Languages",
        items: ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "C#"],
      },
      {
        category: "Infrastructure",
        items: ["GCP", "AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
      },
      {
        category: "Data",
        items: ["SAP HANA", "Firebase", "MongoDB", "Supabase", "SQLite", "SQL"],
      },
      {
        category: "Tooling",
        items: ["Git", "GitHub", "GitLab", "Azure DevOps", "VS Code", "PyCharm"],
      },
    ],
  },
  he: {
    title: "מהנדסת תוכנה",
    location: "ישראל",
    headline: "מהנדסת תוכנה המתמקדת בענן, אוטומציה ופול-סטאק.",
    subheadline:
      "בונה פלטפורמות דאטה וכלים ארגוניים על גבי GCP ו-SAP, לצד פיתוח מוצרי מחקר מבוססי React ופייתון.",
    nav: {
      work: "עבודות",
      about: "אודות",
      contact: "יצירת קשר",
      resume: "קורות חיים",
      theme: "ערכת נושא",
      language: "שפה",
    },
    hero: {
      primaryCta: "לצפייה בעבודות",
      secondaryCta: "GitHub",
      scroll: "גלילה",
    },
    sections: {
      selectedWork: "נבחרות",
      projects: "פרויקטים",
      howIWork: "איך אני עובדת",
      principles: "עקרונות הנדסיים",
      tools: "כלים וטכנולוגיות",
      techStack: "סטאק טכנולוגי",
      career: "קריירה",
      experience: "ניסיון",
      about: "אודות",
    },
    projectsFilter: {
      label: "סינון",
      all: "הכול",
    },
    about: {
      paragraphs: [
        "מהנדסת תוכנה המתמחה בתשתיות ענן, אוטומציה ופיתוח מערכות עתירות דאטה.",
        "ברשות האוכלוסין וההגירה אני מובילה ארכיטקטורת GCP ו-SAP, בונה אוטומציות Serverless ומפתחת פלטפורמות ווב פנימיות שמנגישות נתונים בצורה אמינה.",
        "כפרילנסרית אני מפתחת מוצרים למחקר וקהילה עם React, Django ו-Firebase, תוך דגש על UX נקי, אבטחה ותחזוקתיות.",
      ],
    },
    caseStudy: {
      back: "חזרה לפרויקטים",
      notFoundTitle: "הפרויקט לא נמצא",
      notFoundBody: "המקרה שביקשת לא קיים.",
      overview: "סקירה",
      problem: "אתגר",
      architecture: "ארכיטקטורה",
      implementation: "מימוש",
      challenges: "אתגרים",
      results: "תוצאות",
      role: "תפקיד",
      year: "שנה",
      duration: "משך",
      team: "צוות",
    },
    notFound: {
      title: "404",
      body: "העמוד המבוקש לא קיים.",
      back: "חזרה לדף הבית",
    },
    github: {
      label: "פעילות קוד פתוח",
      title: "פרויקטי GitHub",
      cta: "לכל הפרויקטים ב-GitHub",
      loading: "טוענת ריפוזיטוריז...",
      error: "לא ניתן לטעון את הריפוזיטוריז כרגע.",
      noDescription: "אין תיאור לפרויקט.",
      updated: "עודכן",
      stars: "כוכבים",
      forks: "Forks",
      language: "שפה",
    },
    contact: {
      label: "יצירת קשר",
      title: "בואו נעבוד יחד",
      subtitle: "שלחי תקציר קצר ואחזור אליך עם זמינות והמשך תהליך.",
      fields: {
        name: "שם",
        email: "אימייל",
        message: "הודעה",
      },
      placeholders: {
        name: "השם שלך",
        email: "you@example.com",
        message: "ספרי לי על התפקיד, הפרויקט או שיתוף הפעולה.",
      },
      recruiter: {
        title: "מצב מגייסות",
        subtitle: "פתיחת שדות גיוס נוספים.",
        toggle: "מתג שדות מגייסות",
        fields: {
          company: "חברה",
          role: "תפקיד",
          timeline: "לו״ז גיוס",
        },
        placeholders: {
          company: "שם החברה",
          role: "שם התפקיד",
          timeline: "לדוגמה: 2-4 שבועות",
        },
      },
      actions: {
        send: "שליחת הודעה",
        sending: "שולחת...",
        email: "שליחה במייל",
      },
      note: "השליחה מתבצעת דרך EmailJS.",
      feedback: {
        success: "ההודעה נשלחה בהצלחה. אחזור אליך בהקדם.",
        error: "משהו השתבש. נסי שוב או שלחי מייל ישירות.",
      },
      cards: {
        availability: {
          label: "זמינות",
          title: "פתוחה להצעות חדשות",
          body: "מתעניינת בתפקידי ענן, אוטומציה ופיתוח מוצרי דאטה.",
        },
        focus: {
          label: "פוקוס",
          title: "ענן, דאטה ופול-סטאק",
          body: "GCP, Serverless, צינורות נתונים וממשקי React מודרניים.",
        },
        response: {
          label: "זמן תגובה",
          title: "מענה מהיר",
          body: "בדרך כלל חוזרת בתוך 1–2 ימי עסקים.",
        },
      },
    },
    resumeRequest: {
      label: "בקשת קורות חיים",
      title: "בקשה לקבלת קורות חיים",
      subtitle: "ספרי על ההקשר הגיוסי כדי שאחזיר את הגרסה המתאימה.",
      close: "סגירה",
      fields: {
        name: "שם",
        email: "אימייל",
        company: "חברה",
        role: "תפקיד",
        linkedin: "לינקדאין",
        reason: "הקשר הגיוס",
      },
      placeholders: {
        name: "השם שלך",
        email: "you@example.com",
        company: "שם החברה",
        role: "שם התפקיד",
        linkedin: "https://linkedin.com/in/…",
        reason: "מה מחפשים ולמה חשוב להדגיש?",
      },
      actions: {
        submit: "בקשת קו\"ח",
        sending: "שולחת...",
      },
      note: "בקשות עוברות בדיקה ידנית למניעת ספאם.",
      emailSubject: "בקשת קו\"ח מהפורטפוליו",
      emailBodyHeader: "פרטי בקשה לקו\"ח",
      source: "מקור",
      feedback: {
        success: "הבקשה נשלחה בהצלחה. אחזור אליך בהקדם.",
        error: "משהו השתבש. נסי שוב או שלחי מייל ישירות.",
      },
    },
    projects: [
      {
        id: "gcp-data-infrastructure",
        title: "תשתית דאטה ב-GCP",
        subtitle: "תכנון פלטפורמת דאטה עננית",
        description:
          "תכננתי תשתית דאטה מבוססת GCP עם צינורות אוטומטיים ושירותי Serverless לצוותים מרובים.",
        overview:
          "הובלתי מחקר ופיתוח ארכיטקטורה לפלטפורמת דאטה המשלבת שירותי GCP עם SAP, עבור קליטה, עיבוד וניהול נתונים אמין.",
        problem:
          "צוותים רבים נזקקו לצינורות נתונים עקביים, אוטומטיים וסביבות מבוקרות תוך שמירה על איכות נתונים ובקרה.",
        architecture:
          "ארכיטקטורת Serverless עם Cloud Run ו-Cloud Functions, ניהול ב-Python וחיבור ל-SAP HANA.",
        implementation:
          "בניית אוטומציות לצינורות עיבוד, ניהול סביבות ואינטגרציות API עם Azure DevOps.",
        challenges:
          "תיאום בין בעלי עניין רבים תוך עמידה בדרישות אבטחה ואיכות נתונים.",
        results:
          "הסטנדרטיזציה של זרימות נתונים והפחתת עבודה ידנית באמצעות אוטומציה reusable.",
        techStack: ["Python", "GCP", "SAP HANA", "Cloud Run"],
        category: "פלטפורמת ענן",
        metrics: [
          { label: "צינורות", value: "8+" },
          { label: "אינטגרציות", value: "4" },
          { label: "צוותים", value: "3" },
          { label: "סביבות", value: "3" },
        ],
        links: [{ label: "GitHub", url: "https://github.com" }],
        year: "2024",
        role: "מהנדסת תוכנה",
        duration: "מתמשך",
        team: "חוצה צוותים",
      },
      {
        id: "remez-research-platform",
        title: "פלטפורמת המחקר REMEZ",
        subtitle: "מערכת ניתוח תגובות לתרופות",
        description:
          "פיתחתי פלטפורמת מחקר לניתוח תגובות לתרופות עם אימות משתמשים, ניהול שאילתות והמחשה.",
        overview:
          "פיתוח אפליקציית ווב מלאה למחקר קליני עם גישה מאובטחת, שאילתות מתועדות ותוצרים ברורים.",
        problem:
          "חוקרים נזקקו למערכת אחודה לחקר דאטה של תרופות ותגובות ללא סקריפטים נקודתיים.",
        architecture:
          "Front-end ב-React עם שירותי Django ו-FastAPI, שכבת נתונים מובנית והרשאות תפקידים.",
        implementation:
          "אימות משתמשים, ניהול שאילתות והמחשה אנליטית עם UI מהיר ונקי.",
        challenges:
          "איזון בין מורכבות חישובית לבין חוויית משתמש נגישה לחוקרים.",
        results:
          "אפשרה תהליכי מחקר חוזרים ושיפור שיתופי פעולה.",
        techStack: ["React", "Django", "FastAPI", "PostgreSQL"],
        category: "פול-סטאק",
        metrics: [
          { label: "מודולים", value: "4" },
          { label: "אימות", value: "RBAC" },
          { label: "שאילתות", value: "10+" },
          { label: "המחשות", value: "ROR" },
        ],
        links: [{ label: "GitHub", url: "https://github.com" }],
        year: "2024",
        role: "מפתחת פרילנס",
        duration: "מתמשך",
        team: "עצמאית",
      },
      {
        id: "internal-bi-portal",
        title: "פורטל BI ארגוני",
        subtitle: "מרכז אנליטיקה פנימי",
        description:
          "פיתוח פורטל BI פנימי שמרכז תהליכי דיווח ומשפר גישה לתובנות דאטה.",
        overview:
          "פיתוח פורטל עבור בעלי עניין ארגוניים לצפייה בדשבורדים והזמנת דוחות בממשק אחיד.",
        problem:
          "תהליכי אנליטיקה היו מפוזרים ודרשו תיאום ידני בין צוותים.",
        architecture:
          "לקוח React עם APIs ב-Node.js, חיבור ל-SAP HANA ואימות פנימי.",
        implementation:
          "עיצוב רכיבי UI ניתנים לשימוש חוזר, חוזי API ומודולי שאילתות.",
        challenges:
          "שמירה על עקביות ביצועים ועמידה בסטנדרטים ארגוניים.",
        results:
          "שיפור זמינות הדאטה והפחתת זמן לטיפול בבקשות דיווח.",
        techStack: ["React", "Node.js", "REST APIs", "SAP HANA"],
        category: "פלטפורמת דאטה",
        metrics: [
          { label: "דשבורדים", value: "6+" },
          { label: "APIs", value: "5" },
          { label: "סטים", value: "12" },
          { label: "משתמשים", value: "4" },
        ],
        links: [{ label: "GitHub", url: "https://github.com" }],
        year: "2024",
        role: "מהנדסת תוכנה",
        duration: "מתמשך",
        team: "פנימי",
      },
    ],
    experiences: [
      {
        company: "רשות האוכלוסין וההגירה",
        role: "מהנדסת תוכנה",
        period: "2024 — היום",
        description:
          "הובלת יוזמות תשתית דאטה בענן ב-GCP ו-SAP, אוטומציה, צינורות נתונים ופלטפורמות ווב פנימיות.",
        highlights: [
          "תכנון ארכיטקטורת Serverless עם Cloud Run ו-Cloud Functions.",
          "אוטומציה של תהליכי דאטה ואינטגרציות API עם Azure DevOps.",
          "כתיבת SQL ב-SAP HANA לשיפור איכות הנתונים והביצועים.",
        ],
      },
      {
        company: "פרילנס",
        role: "מפתחת ווב",
        period: "2024 — היום",
        description:
          "פיתוח מוצרי ווב למחקר ולקהילה עם React, Django ו-Firebase.",
        highlights: [
          "פיתוח REMEZ עם אימות משתמשים והמחשה אנליטית.",
          "השקת אתר קהילתי עם ביצועים משופרים.",
          "מימוש REST APIs ושמירת נתונים מאובטחת.",
        ],
      },
      {
        company: "להב\"ה (עמותה לבריאות הכליה)",
        role: "מנהלת מחלקת מחשוב",
        period: "2020 — היום",
        description:
          "התנדבות בניהול ושיפור מערכות טכנולוגיות בעמותה.",
        highlights: [
          "תיאום צרכים טכנולוגיים ותמיכה שוטפת.",
          "שיפור כלים ותיעוד עבור מתנדבים.",
          "חיזוק שיתופי פעולה בין צוותים.",
        ],
      },
    ],
    principles: [
      {
        title: "אוטומציה של החוזר",
        description:
          "לבנות תהליכים שמסירים עבודה ידנית ושומרים על עקביות.",
      },
      {
        title: "ארכיטקטורה שמאפשרת סקייל",
        description:
          "תכנון פלטפורמות ענן שגדלות עם הצוותים והנתונים.",
      },
      {
        title: "דאטה אמין",
        description:
          "מיקוד באיכות, בקרה וביצועים כדי לאפשר החלטות בטוחות.",
      },
      {
        title: "בהירות בתוצרים",
        description:
          "UI ברור ותיעוד שמאפשרים תנועה מהירה.",
      },
    ],
    techStack: [
      {
        category: "שפות",
        items: ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "C#"],
      },
      {
        category: "תשתיות",
        items: ["GCP", "AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
      },
      {
        category: "דאטה",
        items: ["SAP HANA", "Firebase", "MongoDB", "Supabase", "SQLite", "SQL"],
      },
      {
        category: "כלי פיתוח",
        items: ["Git", "GitHub", "GitLab", "Azure DevOps", "VS Code", "PyCharm"],
      },
    ],
  },
};
