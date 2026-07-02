import type { PastelName } from "./theme";

export type Metric = { value: string; label: string };
export type Persona = { name: string; tag: string; quote: string; needs: string; accent: PastelName };
export type Insight = { title: string; body: string };
export type Step = { title: string; body: string };
export type Screen = { caption: string; note?: string; accent: PastelName };

export type CaseStudy = {
  slug: string;
  draft?: boolean; // content still to be finalized with Simran
  title: string;
  tagline: string;
  category: string;
  year: string;
  accent: PastelName;
  topMetric: string;
  overview: string;
  meta: { role: string; timeline: string; team: string; tools: string[] };
  problem: string;
  research: { body: string; methods: string[]; stats: Metric[] };
  personas?: Persona[];
  insights: Insight[];
  process: { body: string; steps: Step[] };
  solution: { body: string; screens: Screen[] };
  outcome: { body: string; metrics: Metric[] };
  reflection: string;
  nextSlug: string;
};

const spilz: CaseStudy = {
  slug: "spilz",
  title: "SPILZ",
  tagline:
    "A social platform for Gen Z that reached 50K+ students across 13 campuses — built on genuine connection, not curation.",
  category: "Social · 0→1 Product",
  year: "2024",
  accent: "lilac",
  topMetric: "50K+ users · 13 campuses",
  overview:
    "SPILZ helps students in India form real friendships around shared values and interests — with privacy and anonymity designed in from the very first screen. It started from a simple, uncomfortable observation: young people are more connected than ever, and lonelier than ever.",
  meta: {
    role: "Product Designer — research, UX, UI, prototyping",
    timeline: "2024 · ~4 months",
    team: "with Product Managers & Engineering",
    tools: ["Figma", "ProtoPie", "Maze", "Notion"],
  },
  problem:
    "Gen Z in India faces rising loneliness — driven by migration to new cities, changing family structures, and platforms that reward performance over connection. Existing apps optimise for curated content and follower counts, leaving little room for authentic peer relationships. How might we design a space where students feel safe enough to be themselves — and actually make friends?",
  research: {
    body: "I ran semi-structured interviews with students across premium Indian campuses, paired with a competitive teardown of social and anonymity apps and a survey on loneliness. The pattern was consistent: students craved genuine connection but were exhausted by platforms that made them perform for it.",
    methods: [
      "18 semi-structured interviews (Google Meet / Zoom · 30–40 min each)",
      "Students across IIT Delhi, IIT Roorkee, DU & VIT",
      "Competitive analysis of social + anonymity apps",
      "Survey on loneliness & platform frustrations",
    ],
    stats: [
      { value: "70%", label: "of students feel lonely or disconnected in their first months on campus" },
      { value: "89%", label: "want a platform for genuine friendships & authentic self-expression" },
      { value: "80%", label: "are frustrated by the lack of space for real connection" },
    ],
  },
  personas: [
    { name: "Aditi, 18", tag: "The newcomer", quote: "I miss home, and I don't want to perform to make friends.", needs: "Cultural alignment and low-pressure ways to meet people.", accent: "rose" },
    { name: "Ravi, 21", tag: "The lurker", quote: "I'll open up — just not with my face attached.", needs: "Anonymity + hobby-based community, no performance.", accent: "sky" },
    { name: "Diksha, 23", tag: "The deep-diver", quote: "I want real conversations, not another highlight reel.", needs: "Substantive discussion on the topics she cares about.", accent: "lilac" },
    { name: "Rahul, 19", tag: "The gamer", quote: "Give me my people without the judgement.", needs: "Non-judgemental, interest-first, anonymous interaction.", accent: "mint" },
  ],
  insights: [
    { title: "Trust needs a signal, not an identity", body: "Students want to gauge someone's vibe before exposing themselves. That reframed the whole product around a lightweight 'Vibe Check' — a trust signal that reassures without revealing." },
    { title: "Anonymity and verification aren't opposites", body: "Safety came from being verified but anonymous — real students, hidden identities. That balance made vulnerability feel possible." },
    { title: "Interests are the icebreaker", body: "Connection formed around shared hobbies and values, not looks or clout. Interest-based matching became the core loop." },
    { title: "Judgement kills participation", body: "A visibly non-judgemental zone was the single biggest driver of people actually opening up. It had to be felt in the tone, copy, and moderation." },
  ],
  process: {
    body: "I turned the insights into flows and information architecture, prototyped the riskiest idea — the Vibe Check — first, and pressure-tested it in usability sessions. Assumptions kept getting corrected by real students, which is exactly what I wanted.",
    steps: [
      { title: "Flows & IA", body: "Mapped onboarding, verification, matching, and the anonymous chat loop end-to-end." },
      { title: "Concept: Vibe Check", body: "Designed a trust-signal interaction that lets users read the room before engaging." },
      { title: "Wireframes → hi-fi", body: "Iterated from low-fi flows to a full component system in Figma." },
      { title: "Usability testing", body: "Tested with students; simplified features that fought the core 'make a friend' job." },
    ],
  },
  solution: {
    body: "The final experience makes genuine connection the path of least resistance: verify quietly, find your people by interest, break the ice safely, and go as deep as you want — anonymously.",
    screens: [
      { caption: "Home feed", note: "the calm, non-performative core", accent: "lilac" },
      { caption: "Vibe Check", note: "trust before identity", accent: "rose" },
      { caption: "Interest-based matching", note: "your people, by hobby", accent: "sky" },
      { caption: "Icebreaking & comments", note: "safe first moves", accent: "mint" },
      { caption: "Anonymous real-time chat", note: "go deep, stay safe", accent: "butter" },
      { caption: "Profile & Jamming", note: "express, don't perform", accent: "lilac" },
    ],
  },
  outcome: {
    body: "SPILZ launched and grew fast — reaching tens of thousands of students across campuses in its early phase. Just as valuable: it was my first deep collaboration with Product Managers, and it proved that research-led bets beat assumption-led ones.",
    metrics: [
      { value: "50K+", label: "users acquired" },
      { value: "13", label: "campuses live" },
      { value: "1st", label: "deep PM collaboration" },
    ],
  },
  reflection:
    "The recurring lesson: our assumptions about what Gen Z 'wants' were usually wrong until the research corrected them. If I ran it again, I'd usability-test the Vibe Check even earlier and invest sooner in moderation tone — the thing that makes a 'non-judgemental zone' actually feel like one.",
  nextSlug: "trip-it-2",
};

const tripIt: CaseStudy = {
  slug: "trip-it-2",
  draft: true,
  title: "Trip It 2.0",
  tagline:
    "Rethinking how people plan, book, and actually feel their way through a trip — an end-to-end travel redesign.",
  category: "Travel · Redesign",
  year: "2024",
  accent: "sky",
  topMetric: "End-to-end redesign",
  overview:
    "Trip It 2.0 reimagines the travel-planning experience from discovery to on-the-ground moments, replacing a cluttered, transactional flow with something calmer, more human, and genuinely helpful.",
  meta: {
    role: "Product Designer — UX, UI, prototyping",
    timeline: "2024",
    team: "cross-functional",
    tools: ["Figma", "ProtoPie"],
  },
  problem:
    "Travel apps overwhelm people at exactly the moment they should feel excited. Planning is fragmented across tabs and tools, decisions feel heavy, and the joy of the trip gets lost in logistics. How might we make planning feel as good as the trip itself?",
  research: {
    body: "Grounded in interviews and journey mapping across the plan → book → travel lifecycle, surfacing where people drop off, get anxious, or switch tools.",
    methods: [
      "User interviews with frequent & occasional travellers",
      "End-to-end journey mapping",
      "Competitive analysis of travel & itinerary apps",
      "Usability testing on the redesigned flows",
    ],
    stats: [
      { value: "Plan → Travel", label: "the full journey, remapped end-to-end" },
      { value: "1 place", label: "fragmented tools, consolidated into one flow" },
      { value: "Tested", label: "key flows validated with real users" },
    ],
  },
  insights: [
    { title: "Excitement is a design goal", body: "The emotional high of planning a trip was being crushed by logistics — the redesign had to protect it." },
    { title: "One place, not ten tabs", body: "People stitched trips together across many tools; consolidating the journey reduced anxiety." },
    { title: "Decisions should feel light", body: "Reducing choice overload at each step kept momentum through the flow." },
  ],
  process: {
    body: "Flows, information architecture, and a cohesive component system — iterated against usability feedback across desktop and mobile.",
    steps: [
      { title: "Journey mapping", body: "Mapped the full plan → book → travel experience and its friction." },
      { title: "IA & flows", body: "Restructured navigation around how people actually plan." },
      { title: "Prototype & test", body: "Built interactive prototypes and validated key flows." },
      { title: "Design system", body: "Established consistency across the redesigned surfaces." },
    ],
  },
  solution: {
    body: "A calmer, more guided experience that keeps the excitement of travel front-and-centre while quietly handling the logistics.",
    screens: [
      { caption: "Discovery & inspiration", note: "start with the feeling", accent: "sky" },
      { caption: "Trip planning", note: "one calm place", accent: "mint" },
      { caption: "Itinerary view", note: "everything, together", accent: "butter" },
      { caption: "On-the-go mode", note: "the trip, in your pocket", accent: "rose" },
    ],
  },
  outcome: {
    body: "A cohesive, human travel experience validated through usability testing — planning that finally feels as good as the trip.",
    metrics: [
      { value: "Smoother", label: "end-to-end planning journey" },
      { value: "Less", label: "friction & drop-off" },
      { value: "Calmer", label: "a more human travel experience" },
    ],
  },
  reflection:
    "Redesigning something people use emotionally taught me to protect the feeling, not just the flow. The next step is pairing these flows with live metrics to prove the calm actually converts.",
  nextSlug: "nxtwave",
};

const nxtwave: CaseStudy = {
  slug: "nxtwave",
  draft: true,
  title: "NxtWave",
  tagline:
    "Designing learning experiences at scale for India's next generation of builders.",
  category: "EdTech · Product",
  year: "2025",
  accent: "butter",
  topMetric: "Current work",
  overview:
    "As Product Designer at NxtWave, I work on learning experiences used by a large, fast-growing community of aspiring developers — balancing clarity, motivation, and scale.",
  meta: {
    role: "Product Designer",
    timeline: "2025 – present",
    team: "cross-functional product team",
    tools: ["Figma"],
  },
  problem:
    "Learning to code is hard, and staying motivated through it is harder. The challenge: design experiences that keep learners moving, reduce drop-off, and hold up across a huge, diverse audience.",
  research: {
    body: "Grounded in learner behaviour data and qualitative feedback — understanding where people stall, lose momentum, or drop off, and designing to keep them going.",
    methods: [
      "Learner behaviour analysis",
      "Qualitative feedback & usability testing",
      "Cross-functional discovery",
    ],
    stats: [
      { value: "Scale", label: "designing for a large, diverse learner base" },
      { value: "Behaviour", label: "decisions grounded in learner data" },
      { value: "Feedback", label: "qualitative signal woven into iteration" },
    ],
  },
  insights: [
    { title: "Motivation is a feature", body: "At scale, keeping learners moving matters as much as any single screen." },
    { title: "Clarity beats cleverness", body: "For a broad audience, the simplest path through a concept wins." },
    { title: "Design for the many", body: "Decisions have to hold up across a large, diverse learner base." },
  ],
  process: {
    body: "How I approach learning experiences at NxtWave: understand the learner, design for momentum, validate with real users, and measure what matters.",
    steps: [
      { title: "Discover", body: "Understand the learner and the moments they stall or drop off." },
      { title: "Design", body: "Prototype and refine the experience for clarity and momentum." },
      { title: "Validate", body: "Test with learners and iterate on what fights their progress." },
      { title: "Ship & measure", body: "Launch and watch the engagement metrics that matter." },
    ],
  },
  solution: {
    body: "A learning experience designed to keep people moving — clear, motivating, and built to hold up at scale.",
    screens: [
      { caption: "Learning experience", note: "keep them moving", accent: "butter" },
      { caption: "Progress & motivation", note: "momentum by design", accent: "mint" },
      { caption: "Key flow", note: "clarity first", accent: "sky" },
    ],
  },
  outcome: {
    body: "Ongoing work with a fast-growing learner community — clarity and motivation designed to hold up at scale.",
    metrics: [
      { value: "At scale", label: "experiences for a large learner base" },
      { value: "Momentum", label: "designed to reduce drop-off" },
      { value: "Live", label: "shipping & iterating now" },
    ],
  },
  reflection:
    "Designing for a huge, diverse audience is a lesson in restraint — the clearest path usually wins. I'm excited to keep pairing these decisions with the numbers behind them.",
  nextSlug: "spilz",
};

const STUDIES: Record<string, CaseStudy> = {
  spilz,
  "trip-it-2": tripIt,
  nxtwave,
};

export const caseStudySlugs = Object.keys(STUDIES);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return STUDIES[slug];
}
