import type { PastelName } from "./theme";

/** All imagery lives in /public/case-studies/spilz — real assets from Simran's original case study. */
export const IMG = (name: string) => `/case-studies/spilz/${name}.webp`;

export const spilz = {
  title: "SPILZ",
  logo: IMG("spilz-logo"),
  hero: IMG("hero-photobooth"),
  category: "Social · 0→1 Product",
  year: "2024",
  accent: "lilac" as PastelName,
  topMetric: "50K+ users · live in 13 campuses",
  tagline:
    "A social platform designed to foster genuine connections based on shared values and privacy — built for Gen Z, by talking to Gen Z.",

  meta: {
    role: "Product Designer — research, UX, UI, brand",
    timeline: "2024",
    team: "2 founders · developer · me",
    tools: ["Figma", "ProtoPie", "Google Meet", "Zoom"],
  },

  hook: {
    question:
      "What's your opinion on the preferred social media platform for Generation Z?",
    generations: [
      { label: "Boomers", img: IMG("gen-boomers") },
      { label: "Millennials", img: IMG("gen-millennials") },
      { label: "Gen Z", img: null }, // rendered as a big "?"
    ],
  },

  hypothesis:
    "Gen Z in India faces increasing loneliness due to migration, the breakdown of traditional family structures, and isolating digital platforms. This case study explores these challenges and presents a social platform designed to foster genuine connections based on shared values and privacy — aiming to reduce loneliness and help users build lasting relationships.",

  background: {
    intro: "Before talking to anyone, I dug into how Gen Z actually behaves online.",
    image: IMG("research-feeling"),
    imageCaption: "How are you feeling today?",
    learnings: [
      {
        title: "Rising loneliness among Gen Z",
        body: "62% of Indian Gen Z report feelings of loneliness and helplessness, particularly as they move away for education or work.",
        source: "The Roots Of Loneliness Project",
      },
      {
        title: "Social media became entertainment",
        body: "Platforms like Instagram have evolved into entertainment spaces focused on curated, polished content — leaving little room for authentic interaction.",
      },
      {
        title: "A gap in platforms for Gen Z",
        body: "Facebook and LinkedIn cater to older demographics, leaving Gen Z without a space to form meaningful, genuine peer connections.",
        source: "IJIP",
      },
      {
        title: "The need for real connection",
        body: "With traditional support systems weakening, Gen Z needs a platform designed for real friendships — beyond entertainment and curated posts.",
      },
    ],
    otherApps: {
      image: IMG("research-other-apps"),
      notes: [
        "Instagram and YouTube lead as entertainment platforms — students consume memes, videos and trends, but rarely form friendships there.",
        "Reddit hosts niche, interest-based discussion, but still lacks the personal, friend-based interaction Gen Z craves.",
      ],
    },
  },

  interviews: {
    intro:
      "After examining Gen Z's online engagement through indirect analysis, we undertook direct studies in IIT locations for a more intimate comprehension of users.",
    facts: [
      { k: "Format", v: "Semi-structured interviews" },
      { k: "Tools", v: "Google Meet & Zoom" },
      { k: "Duration", v: "30–40 mins each" },
      { k: "Sample", v: "18 students" },
      { k: "Cohorts", v: "Male · female · club secretaries & presidents" },
      { k: "Campuses", v: "IIT Delhi · IIT Roorkee · DU · VIT" },
    ],
    note: "Campus male-to-female ratio was 8:2 — the sample was weighted to match.",
    stats: [
      { value: "70%", label: "feel lonely or disconnected during their first months in a new city or campus" },
      { value: "80%", label: "are frustrated by the lack of platforms for genuine friendships built on shared hobbies and values" },
      { value: "60%", label: "value anonymity to avoid social judgment, especially on diverse campuses" },
      { value: "89%", label: "want a platform for deep discussions and authentic self-expression — without perfection pressure" },
    ],
  },

  personas: [
    {
      name: "Aditi, 18",
      tag: "Moved to IIT Delhi from UP",
      img: IMG("persona-aditi"),
      accent: "rose" as PastelName,
      goals: "A platform to meet people who share her cultural background and interests — free from concerns about appearance or social status.",
      frustrations: "Instagram makes everyone's life look perfect. She compares herself to others and ends up feeling more disconnected.",
      needs: "Struggles to adjust to city life, misses her family deeply, and finds it hard to connect with like-minded people.",
    },
    {
      name: "Ravi, 21",
      tag: "Moved to VIT from Singapore",
      img: IMG("persona-ravi"),
      accent: "sky" as PastelName,
      goals: "Deeper connections beyond liking posts — with anonymity to explore friendships without judgment.",
      frustrations: "Feels pressured to project a perfect image on Instagram, which stops him from being his authentic self.",
      needs: "A community for his hobbies — coding, gaming, tech — with genuine interaction instead of performance.",
    },
    {
      name: "Diksha, 23",
      tag: "Delhi University",
      img: IMG("persona-diksha"),
      accent: "lilac" as PastelName,
      goals: "An app for forming deeper connections, free from superficiality — a space for meaningful conversation.",
      frustrations: "LinkedIn and Instagram feel transactional — networking or entertainment, never real friendship.",
      needs: "Internships, exams and part-time jobs leave little time; she wants to connect over psychology and social issues.",
    },
    {
      name: "Rahul, 19",
      tag: "IIT Roorkee",
      img: IMG("persona-rahul"),
      accent: "mint" as PastelName,
      goals: "A community of like-minded gamers — anonymous at first, to avoid judgment and have fun.",
      frustrations: "Discord and Reddit miss casual, non-judgmental interaction; Instagram is consumption, not conversation.",
      needs: "Spends his time gaming and creating content, but feels isolated — college friends don't share his interests.",
    },
  ],

  journey: {
    intro: "Mapping the emotional journey from arrival to isolation made the design target obvious.",
    rocket: IMG("journey-rocket"),
    stages: [
      {
        stage: "01",
        title: "Discovery & initial struggles",
        img: IMG("journey-stage-1"),
        emotions: ["Frustration", "Confusion"],
        actions: ["Trying to make new friends", "Feels disconnected — shallow, judgement-based interaction"],
        pains: ["Pressure to perform", "Limited friendship"],
        accent: "butter" as PastelName,
      },
      {
        stage: "02",
        title: "Seeking solutions (facing more barriers)",
        img: IMG("journey-stage-2"),
        emotions: ["Loneliness", "Longing for real friendship"],
        actions: ["Trying multiple apps to find friends", "Tries group chats"],
        pains: ["In-authenticity of social apps", "Unmet social needs"],
        accent: "sky" as PastelName,
      },
      {
        stage: "03",
        title: "Navigating loneliness & helplessness",
        img: IMG("journey-stage-3"),
        emotions: ["Self-doubt"],
        actions: ["Reaching out to classmates", "Turning to social media"],
        pains: ["Pressure of image", "Lack of safe space"],
        accent: "rose" as PastelName,
      },
      {
        stage: "04",
        title: "Realization & need for change",
        img: IMG("journey-stage-4"),
        emotions: ["Hopelessness", "Isolation"],
        actions: ["Stuck in an endless loop of seeking attention"],
        pains: ["Lack of trust", "No platform for vulnerability"],
        accent: "lilac" as PastelName,
      },
    ],
  },

  brainstorm: {
    intro:
      "Journey mapping, brainstorming and wireframing — the four of us arguing our way to the core of the product.",
    chats: [
      {
        who: "Founder 01",
        img: IMG("team-founder-1"),
        quote:
          "A real-time chat feature sounds great, but anonymity can be tricky. We need a way to verify users while keeping their identities private.",
        accent: "butter" as PastelName,
      },
      {
        who: "Founder 02",
        img: IMG("team-founder-2"),
        quote:
          "We need to create a platform that fosters real, meaningful connections. But how do we ensure people feel safe sharing their thoughts?",
        accent: "sky" as PastelName,
      },
      {
        who: "Developer",
        img: IMG("team-developer"),
        quote:
          "Engagement is key! What if we introduce Gen Z-specific interactions? Something that makes the platform stand out?",
        accent: "mint" as PastelName,
      },
      {
        who: "Designer (me, hehe)",
        img: IMG("team-designer"),
        quote:
          "A vibe check can be a trust signal — something that reassures users without exposing their identity. And privacy settings so users control who they interact with, connecting on interests rather than personal details.",
        accent: "rose" as PastelName,
      },
    ],
    outro: "Love the idea of a non-judgemental zone… so our core pillars are:",
  },

  pillars: [
    { label: "Vibe Check", img: IMG("pillar-vibe-check") },
    { label: "Anonymity", img: IMG("pillar-anonymity") },
    { label: "Finding Similar Interests", img: IMG("pillar-interests") },
    { label: "Safety & Privacy", img: IMG("pillar-safety") },
    { label: "Gen Z Lingos", img: IMG("pillar-lingo") },
    { label: "Non-Judgement Zone", img: IMG("pillar-nonjudgement") },
    { label: "Gamified Interaction", img: IMG("pillar-gamification") },
  ],

  objectives: [
    "Craft a user-centric, instinctive interface that elevates the Gen Z user journey — an application that comprehends them and tailors to their requirements.",
    "Design a scalable platform that can adapt to diverse user needs and preferences.",
  ],

  screens: {
    intro:
      "The outcome: a home for genuine connection — icebreaking through comments, jamming, polls, and anonymous 1:1 chat once trust is earned.",
    items: [
      {
        img: IMG("screen-feed"),
        title: "The Feed",
        note: "home screen · jamming · polls",
        alt: "SPILZ feed screen with campus toggle, live jams and polls",
      },
      {
        img: IMG("screen-events"),
        title: "Events Feed",
        note: "online events · icebreaking",
        alt: "SPILZ events feed with ongoing and upcoming campus events",
      },
      {
        img: IMG("screen-messages"),
        title: "Messages",
        note: "friend requests · 1:1 chat",
        alt: "SPILZ messages screen with friend requests and chats",
      },
    ],
    more: "…and more screens with more concepts",
  },

  impact: {
    headline: "Our founders realised the potential!",
    img: IMG("impact-founders"),
    metrics: [
      { value: "50K+", label: "users acquired" },
      { value: "13", label: "campuses live" },
    ],
  },

  brand: {
    intro: "Some extra work for the brand — posters, t-shirt & sticker designs.",
    items: [
      { img: IMG("brand-qr-poster"), label: "Launch poster", tall: true },
      { img: IMG("brand-stickers"), label: "Sticker pack", tall: true },
      { img: IMG("brand-just-say-it"), label: "T-shirt design", tall: false },
      { img: IMG("brand-improv-poster"), label: "Campus event poster", tall: false },
      { img: IMG("brand-extra-1"), label: "Brand collateral", tall: true },
      { img: IMG("brand-update-3d"), label: "Update visual", tall: false },
      { img: IMG("brand-extra-4"), label: "Poster series", tall: false },
      { img: IMG("brand-extra-5"), label: "Poster series", tall: true },
    ],
  },

  learnings: [
    {
      title: "PMs are design superpowers",
      body: "This project was my first deep collaboration with Product Managers — invaluable in shaping the gamification feature.",
    },
    {
      title: "Assumptions are usually wrong",
      body: "Working research-first kept us user-centric. Usability testing proved, again and again, that assumptions are more often than not misleading.",
    },
    {
      title: "Innovation vs. intuition",
      body: "The real challenge was balancing innovative features with an intuitive experience — while working within constraints.",
    },
  ],

  teaser: {
    line: "This represents a mere 5% of the case study.",
    sub: "Get in touch for an in-depth discussion on the project…",
    gif: "/case-studies/spilz/thank-you.gif",
  },
} as const;
