export const personalInfo = {
  name: "Nunnalin Heimvichit",
  title: "Thai",
  email: "nunnalin.h@gmail.com",
  github: "github.com/nalinzip",
  linkedin: "linkedin.com/in/nunnalin-heimvichit",
  bio: "My name is Nunnalin, but I usually go by 'Nalin' or '나린'. Computer Science and Engineering student at Ewha Womans University with a passion for full-stack development, UX/UI design, and AI. EGPP Scholar with experience in software projects and cross-cultural collaboration."
};

export const education = {
  university: "Ewha Womans University",
  location: "Republic of Korea",
  degree: "Bachelor of Engineering",
  major: "Computer Science and Engineering",
  period: "2023 - 2026",
  courseworks: [
    "Computer Architecture",
    "Programming",
    "Linear Algebra",
    "Open Software Platform",
    "Data Structure",
    "Cloud Computing",
    "Database",
    "Operating System",
    "Software Engineering"
  ],
  honors: [
    "EGPP (Ewha Global Partnership Program) Scholarship Recipient",
    "EGPP Scholarship Mentor – Fall 2024"
  ]
};

export const projects = [
  {
    id: "capstone-project",
    title: "LLM-based Korean Conversation Coaching System",
    description: "AI-powered system to help multinational users communicate in Korean with real-time mediation and context-based coaching.",
    tech: ["HyperClovaX by NAVER", "React Native", "AI/ML", "NLP", "UX/UI Design"],
    year: "Fall 2025",
    role: "AI Engineer & UX/UI Designer",
    links: [
      { name: "GitHub Repo", url: "https://github.com/HajarFazillah/SEAquence" },
    ],
    images: [],
    details: {
      overview: "Capstone Design Project focused on developing an AI-powered real-time conversation mediation system to help multinational users with Korean communication through context-based coaching.",
      features: [
        "Real-time conversation mediation",
        "Context-based language coaching",
        "Multinational user support",
        "AI-powered language assistance"
      ],
      challenges: "Developing accurate real-time language processing for multiple language pairs while maintaining context awareness.",
      learnings: "Gained experience in AI/ML implementation, NLP techniques, and designing user-friendly interfaces for language learning applications."
    }
  },
  {
    id: "kradong",
    title: "Kradong - Employee Skill Matching Solution",
    description: "Banpu Employee Skill Matching Machine Learning Solution for matching employee skills with organizational needs.",
    tech: ["Machine Learning", "Python", "Data Science"],
    year: "Spring 2025",
    role: "Machine Learning Engineer",
    images: [],
    details: {
      overview: "Developed a machine learning solution for Banpu to match employee skills with organizational requirements, improving workforce allocation and development.",
      features: [
        "Skill-based employee matching",
        "ML-powered recommendations",
        "Data-driven workforce insights",
        "Scalable matching algorithm"
      ],
      challenges: "Processing and analyzing diverse employee skill data to create accurate matching algorithms.",
      learnings: "Deepened understanding of machine learning applications in HR tech and real-world data processing challenges."
    }
  },
  {
    id: "wewha",
    title: "WeWha",
    description: "Frontend development and user experience design project focusing on creating engaging user interfaces.",
    tech: ["React.js", "Figma", "UX/UI Design"],
    year: "Summer 2025",
    role: "Frontend Developer & UX/UI Designer",
    links: [
      { name: "GitHub Repo", url: "https://github.com/ECC-WeWha" },
      { name: "Try our demo", url: "https://wewha.netlify.app" }
    ],
    images: [
      {url: "/portfolio/images/wewha1.png", caption: "WeWha 위화"},
      {url: "/portfolio/images/wewha2.png", caption: "WeWha 위화"},
      {url: "/portfolio/images/wewha3.png", caption: "WeWha 위화"},
      {url: "/portfolio/images/wewha4.png", caption: "WeWha 위화"},
      {url: "/portfolio/images/wewha5.png", caption: "WeWha 위화"},
      {url: "/portfolio/images/wewha6.png", caption: "WeWha 위화"},
    ],
    details: {
      overview: "WeWha project combining frontend development skills with UX/UI design principles to create an engaging user experience.",
      features: [
        "Responsive web design",
        "User-centered interface",
        "Modern React.js implementation",
        "Cohesive visual design"
      ],
      challenges: "Balancing aesthetic design with functional frontend implementation.",
      learnings: "Enhanced skills in combining development and design workflows for cohesive product delivery."
    }
  },
  {
    id: "testd",
    title: "TestD - Thai-Korean Personality Test Game",
    description: "Interactive personality test game with Korean-Thai and Korean-English translations, featuring custom UX/UI design.",
    tech: ["UX/UI Design", "Translation", "Illustration"],
    year: "Summer 2025",
    role: "UX/UI Designer & Translator",
    images: [
      {url: "/portfolio/images/testd1.png", caption: "test:D Figma Design"},
    ],
    links: [
      { name: "GitHub Repo", url: "https://github.com/ECC-WeWha" },
    ],
    details: {
      overview: "A fun personality test game bridging Korean and Thai cultures, featuring original illustrations and multilingual support.",
      features: [
        "Korean → Thai translation",
        "Korean → English translation",
        "Custom icon illustrations",
        "Engaging UX/UI design"
      ],
      challenges: "Ensuring cultural nuances were preserved across translations while maintaining engaging gameplay.",
      learnings: "Gained experience in cross-cultural design, localization, and illustration for digital products."
    }
  },
  {
    id: "market-charity",
    title: "Software System Design : Nanum Store; Ewha Market for Charity Application ",
    description: "Software System Design project with UML-based application design for a charity marketplace platform. On-campus second-hand store project at Ewha Womans University where all profit supports scholarships, facilities, student activities, and donations.",
    tech: ["UML", "Visual Paradigm", "Figma"],
    year: "Spring 2023",
    role: "Software System Designer",
    links: [
      {name: "Final Presentation", url: "https://youtu.be/Xm0G08n5c28"}
    ],
    images: [],
    details: {
      overview: "Comprehensive software system design for a charity-focused marketplace application, utilizing UML diagrams and prototyping tools.",
      features: [
        "Designed a hi-fi prototype mobile app to help operate the store, manage inventory, and connect donations with digital records.",
        "Designed an in-app incentive system that rewards donors with points/badges, converts digital rewards into real-life benefits (discounts, opportunities, etc.)",
        "Planned volunteer and part-time incentives, tracking contributions through the app.",
        "Aimed to transform the store into a self-service second-hand store using the app, smart tags, and automated flows.",
        "Introduced a 24-hour smart donation box with an embedded smart camera to receive donations anytime on campus and automatically register items to reduce staff workload.",
        "Our goal is to promote a sustainable lifestyle on campus while making store operations more efficient, data-driven, and student-friendly."
      ],
      challenges: "Designing a scalable system architecture that serves both donors and charitable organizations effectively.",
      learnings: "Strengthened understanding of software engineering principles, UML modeling, and system design methodologies."
    }
  },
  {
    id: "online-market",
    title: "Online Market Website",
    description: "Full-stack online marketplace website developed as part of Open Software Development course.",
    tech: ["Kakao Log-in API", "Kakao Address API", "Flask", "Firebase", "HTML", "CSS", "JavaScript", "Github", "Figma"],
    year: "Spring 2024",
    role: "Developer",
    images: [ 
      {url: "/portfolio/images/POTG.jpeg", caption: "POTG - Online Marketplace Website Screenshot"},
      {url: "/portfolio/images/POTG1.png", caption: "POTG - Online Marketplace Website Screenshot"},
      {url: "/portfolio/images/POTG2.png", caption: "POTG - Online Marketplace Website Screenshot"},
      {url: "/portfolio/images/POTG4.png", caption: "POTG - Online Marketplace Website Screenshot"},
      {url: "/portfolio/images/POTG3.png", caption: "POTG - Online Marketplace Website Screenshot"},
      {url: "/portfolio/images/POTG3.png", caption: "POTG - Online Marketplace Website Screenshot"}
    ],
    links: [
      { name: "GitHub Repo", url: "https://github.com/HongYeonLee/POTG" },
      {name: "Demo Video", url: "https://youtu.be/Pi4Ll_Yc38c"}
    ],
    details: {
      overview: "Developed an online marketplace website as part of the Open Software Development course, focusing on open-source technologies.",
      features: [
        "E-commerce functionality",
        "User authentication",
        "Product management",
        "Open source implementation"
      ],
      challenges: "Implementing secure payment and user management systems.",
      learnings: "Building an online shopping site and learned how to use Firebase for authentication, database, and deployment"
    }
  },
  {
    id: "connecthai",
    title: "Human-computer Interaction Project: ConnecThai",
    description: "An application which aims to help Thai students abroad find comfort, community, and confidence. - Stay connected, even far from home",
    tech: ["Figma", "UX/UI Design", "Human-computer Interaction", "Hi-fi Prototype Design"],
    year: "Fall 2025",
    role: "Mobile Application Designer",
    images: [ 
      // {url: "/portfolio/images/POTG.jpeg", caption: "POTG - Online Marketplace Website Screenshot"},
    ],
    links: [
      { name: "Figma Interactive Prototype", url: "https://www.figma.com/proto/NshZkUrmc67KjeQZnb07Di/ConnecThai?node-id=0-1&t=r1amx5y1rVQQbA0K-1" },
      {name: "Demo Video", url: "https://youtu.be/RgeudMxjn9E?si=UyadfY9xdpJwgVOj"}
    ],
    details: {
      overview: "Developed an online marketplace website as part of the Open Software Development course, focusing on open-source technologies.",
      features: [
        "Community board: Posts by category: housing, visa, school, part-time jobs, buy/sell, events",
        "Thai-friendly map: Map of Thai restaurants, stores, clinics, salons, religious/community places / Reviews + “bookmark list” + directions",
        "Find friends by university, region, interests, language exchange goals",
        "Group chats by event (e.g., “Ewha Thai”, “Hongdae hangout",
      ],
      challenges: "Complicated community platform structure with various features to accommodate different user needs.",
      learnings: "In the future, this platform can be expanded into a separate application for international students from diverse nationalities studying abroad."
    }
  },
  {
    id: "luckyrookie",
    title: "LuckyRookie - Fortune-telling, Lucky Diary, and Breathing Exercise Application",
    description: "An application which aims to help Thai students abroad find comfort, community, and confidence. - Stay connected, even far from home",
    tech: ["Figma", "UX/UI Design", "React Native", "Expo Go", "HTML", "CSS", "JavaScript", "Public APIs", "Spotify API"],
    year: "Fall 2025",
    role: "Mobile Application Designer",
    images: [ 
      // {url: "/portfolio/images/POTG.jpeg", caption: "POTG - Online Marketplace Website Screenshot"},
    ],
    links: [
      {name: "Demo Video", url: "https://youtu.be/3XDQiA77IHQ"}
    ],
    details: {
      overview: "LuckyRookie is a mobile app designed as a digital good-luck charm (Omamori) inspired by Lucky Girl Syndrome. The app helps users reduce anxiety, build confidence, and navigate daily life with positivity through fortune-based features. It supports multicultural fortune systems, combining Eastern and Western beliefs, and focuses on emotional comfort rather than blind reliance on fate",
      features: [
        "Boost self-confidence and emotional stability",
        "Reduce daily anxiety through small, positive rituals",
        "Improve accessibility to comforting fortune content anytime, anywhere",
        "Omamori Home : Daily, weekly, and monthly fortunes, Birthdate input with automatic Zodiac calculation, Uses a public Horoscope API",
        "Fortune Cookie (expo-av): Interactive fortune-cookie experience with sound effects, Random motivational messages and quotes via API",
        "Lucky Color Chart (2025) : Recommended lucky colors by day of the week",
        "My Lucky Diary : Record happy moments, favorite songs, breathing exercises (react-native-calendars)",
        "Photo upload via camera or gallery (expo-image-picker)",
        "Spotify API integration to log favorite music",
        "Clover collection as a visual reward system (@react-native-async-storage/async-storage)",
        "My Lucky Time : Calculates lucky time slots based on birthdate and birth weekday",
        "Breathing Exercise Mode : Guided breathing with animation"
      ],
      challenges: "API Key restrictions and managing multiple features in a single app while maintaining a smooth user experience.",
      learnings: "Developed skills in mobile app design and development using React Native, integrating various APIs, and creating user-centric features for emotional well-being."
    }
  },
  {
    id: "tsak-website",
    title: "TSAK Official Website",
    description: "Official website for the Thai Student Association in the Republic of Korea (TSAK), serving as the digital hub for Thai students across Korea.",
    tech: ["Web Development", "UX/UI Design"],
    year: "2024 - Present",
    role: "Head of IT Department",
    images: [],
    links: [
      { name: "Visit Website", url: "https://thaistudentsinkr.org/" }
    ],
    details: {
      overview: "Developed and maintained the official website for TSAK as part of the IT Department responsibilities, providing a central platform for the Thai student community in Korea.",
      features: [
        "Community information hub",
        "Event announcements",
        "Digital presence for Thai students in Korea",
        "Mobile-responsive design"
      ],
      challenges: "Maintaining an up-to-date and accessible platform for a geographically distributed student community.",
      learnings: "Gained hands-on experience managing a production website for a real organization and community."
    }
  }
];

export const workExperience = [
  {
    title: "Web Developer",
    company: "Embassy of Brazil in Bangkok",
    period: "2024 - Present",
    tech: ["JavaScript", "Python", "HTML", "CSS"]
  }
];

export const languageTests = [
  { name: "Thai", score: "Native", date: "", details: "Native speaker" },
  { name: "English", score: "Fluent", date: "", details: "Professional proficiency" },
  { name: "Korean", score: "TOPIK 6", date: "", details: "Highest level" },
  { name: "Spanish", score: "Beginner", date: "", details: "Basic communication" },
  { name: "Portuguese", score: "A1", date: "", details: "Certificate of Completion" }
];

export const skills = {
  languages: ["JavaScript", "Python", "HTML", "CSS"],
  frameworks: ["React.js", "Node.js", "Flask", "Django"],
  tools: ["VS Code", "GitHub", "Linux", "Jupyter Notebook"],
  design: ["Figma", "Pixso", "Visual Paradigm"]
};

export const extracurriculars = [
  {
    id: "tsak",
    title: "Thai Student Association in Korea (TSAK)",
    role: "Head of IT Department",
    period: "2024 - Present",
    description: "Leading IT initiatives and digital presence for the Thai student community in Korea.",
    highlights: ["IT infrastructure", "Digital strategy", "Community engagement"],
    details: {
      overview: "As Head of IT Department at TSAK, responsible for overseeing all technology-related initiatives and maintaining digital platforms for the Thai student community across Korea.",
      responsibilities: [
        "Managing official websites and social media",
        "Developing digital tools for community engagement",
        "Coordinating IT support for events",
        "Leading technical team members"
      ],
      achievements: [
        "Improved digital presence and engagement",
        "Streamlined communication channels",
        "Supported major community events"
      ],
      impact: "Enhanced connectivity among Thai students in Korea through improved digital platforms and communication tools."
    },
    images: []
  },
  {
    id: "etsa",
    title: "Ewha Thai Student Association (ETSA)",
    role: "Board Member",
    period: "2024 - Present",
    description: "Contributing to the Thai student community at Ewha Womans University.",
    highlights: ["Event organization", "Community building", "Cultural exchange"],
    details: {
      overview: "Active board member supporting Thai students at Ewha Womans University, fostering community bonds and cultural exchange.",
      responsibilities: [
        "Organizing community events",
        "Supporting new Thai students",
        "Promoting cultural exchange activities",
        "Collaborating with university organizations"
      ],
      achievements: [
        "Successful community events",
        "Strong student support network",
        "Cross-cultural collaborations"
      ],
      impact: "Built a supportive community for Thai students at Ewha, helping with adaptation and cultural integration."
    },
    images: []
  },
  {
    id: "ecc",
    title: "Ewha Computer Club (ECC)",
    role: "ML Division Member",
    period: "Spring - Summer 2025",
    description: "Machine Learning Division and Summer Project participation.",
    highlights: ["Machine Learning", "Summer project", "Technical skills"],
    details: {
      overview: "Member of the Machine Learning Division at Ewha Computer Club, engaging in hands-on ML projects and collaborative learning.",
      responsibilities: [
        "Participating in ML study sessions",
        "Contributing to summer project",
        "Collaborating with team members",
        "Exploring cutting-edge ML technologies"
      ],
      achievements: [
        "Completed summer ML project",
        "Gained practical ML experience",
        "Built network with CS peers"
      ],
      impact: "Developed practical machine learning skills and contributed to club's technical community."
    },
    images: []
  },
  {
    id: "early-altubitu",
    title: "Early-Altubitu",
    role: "Member",
    period: "Fall 2024",
    description: "Algorithms and Coding Test Preparation Club.",
    highlights: ["Algorithm practice", "Coding tests", "Problem-solving"],
    details: {
      overview: "Participated in Early-Altubitu club focused on algorithm study and coding test preparation for technical interviews.",
      responsibilities: [
        "Weekly algorithm problem solving",
        "Participating in mock coding tests",
        "Peer code reviews",
        "Study group discussions"
      ],
      achievements: [
        "Improved algorithm skills",
        "Completed coding challenges",
        "Enhanced problem-solving abilities"
      ],
      impact: "Built strong foundation in algorithms and data structures for technical career preparation."
    },
    images: []
  },
  {
    id: "jin-jiny",
    title: "OTTOGI JIN Ramen Student Supporter",
    role: "JIN&JINY 17th - Winner",
    period: "Summer 2025",
    description: "Selected as winner of OTTOGI JIN Ramen's student supporter program.",
    highlights: ["Brand ambassador", "Marketing", "Competition winner"],
    details: {
      overview: "Selected as a winner of the 17th generation JIN&JINY program, OTTOGI's student supporter initiative.",
      responsibilities: [
        "Brand promotion activities",
        "Creative content creation",
        "Social media marketing",
        "Event participation"
      ],
      achievements: [
        "Selected as program winner",
        "Successful brand campaigns",
        "Creative marketing contributions"
      ],
      impact: "Gained marketing experience while representing a major Korean food brand."
    },
    links: [
      { name: "Instagram : isfj_jinjjalover", url: "https://instagram.com/isfj_jinjjalover" },
      { name: "Tiktok : isfj_jinjjalover", url: "https://www.tiktok.com/@isfjin_jjalover?_t=ZS-8xqUDmkaLiC&_r=1" }
    ], 
     
    images: [ 
      {url: "/portfolio/images/JIN_Ramens_Algorithm.jpg", caption: "Ramen Algorithm"},
    ],
  },
  {
    id: "aiesec",
    title: "Social Case Competition 2025",
    role: "Semi-Finalist",
    period: "2025",
    description: "AIESEC in Thailand — Reached semi-final round in social impact competition.",
    highlights: ["Semi-final", "Social impact", "Case competition"],
    details: {
      overview: "Participated in AIESEC Thailand's Social Case Competition 2025, advancing to the semi-final round with innovative social impact solutions.",
      responsibilities: [
        "Developing social impact solutions",
        "Case analysis and presentation",
        "Team collaboration",
        "Research and strategy"
      ],
      achievements: [
        "Advanced to semi-final round",
        "Developed viable social solutions",
        "Cross-functional teamwork"
      ],
      impact: "Contributed to social impact initiatives while developing business and analytical skills."
    },
    images: []
  },
  {
    id: "thai-festival",
    title: "Thai Festival in Seoul 2024",
    role: "Volunteer",
    period: "2024",
    description: "Volunteer at Thai Festival organized by the Royal Thai Embassy, Seoul.",
    highlights: ["Cultural event", "Royal Thai Embassy", "Volunteer"],
    details: {
      overview: "Volunteered at the annual Thai Festival in Seoul, organized by the Royal Thai Embassy, supporting cultural exchange activities.",
      responsibilities: [
        "Event support and coordination",
        "Visitor assistance",
        "Cultural activity facilitation",
        "Logistics support"
      ],
      achievements: [
        "Certificate of Participation",
        "Successful event contribution",
        "Cultural ambassador role"
      ],
      impact: "Promoted Thai culture in Korea and supported community engagement between Thai and Korean communities."
    },
    images: []
  }
];
