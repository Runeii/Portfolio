export type Project = {
  name: string;
  for: string;
  summary: string;
  link?: string;
  source?: string;
  caseStudy?: string;
  year: number;
  role: string;
  niceDate?: string;
  isDigital: boolean;
  isPhysical: boolean;
};

export const projects: Project[] = [
  {
    name: 'High Pertinent',
    for: 'High Pertinent',
    summary: 'Website',
    link: 'https://highpertinent.com',
    source: "https://github.com/runeii/highpertinent",
    year: 2024,
    role: "n/a",
    isDigital: true,
    isPhysical: false
  },
  {
    for: "Open Source",
    name: "Wipeout Music Visualizer",
    summary: "Retro GL Music Visualizer",
    year: 2024,
    link: "",
    source: "https://github.com/runeii/audiovisualizer",
    role: "n/a",
    isDigital: true,
    isPhysical: false
  },
  {
    for: "Open Source",
    name: "R3F Touch Controller",
    year: 2024,
    summary: "Remote interface",
    link: "",
    source: "https://github.com/Runeii/r3f-touch-controller",
    role: "n/a",
    isDigital: true,
    isPhysical: false
  },
  {
    for: "Open Source",
    name: "Obscura Maps",
    summary: "Atlas Obscura utility",
    year: 2024,
    link: "",
    role: "n/a",
    source: "https://github.com/Runeii/obscura-maps",
    isDigital: true,
    isPhysical: false
  },
  {
    for: "Crack in the Road",
    name: "Crack in the Road",
    summary: "A music blog",
    year: 2017,
    niceDate: "2010-2017",
    link: "",
    role: "Founder",
    source: "https://github.com/Runeii/crackintheroad",
    isDigital: true,
    isPhysical: false
  },
  {
    for: "Unrecorded",
    name: "Unrecorded",
    summary: "Static web site",
    year: 2014,
    link: "",
    role: "Developer",
    isDigital: true,
    isPhysical: false
  },
  {
    for: "Living Lab (Het Hem)",
    name: "Living Entrance",
    summary: "Installation",
    caseStudy: "https://random.studio/projects/the-entrance",
    year: 2024,
    role: "Developer",
    isDigital: true,
    isPhysical: true
  },
  {
    for: "Random Studio",
    name: "Marshmallow Toasting",
    year: 2021,
    summary: "Installation",
    link: "",
    role: "Developer",
    isDigital: true,
    isPhysical: true
  },
  {
    for: "Random Studio",
    name: "Laser Cave Painting",
    summary: "Installation",
    year: 2021,
    link: "",
    role: "Developer",
    isDigital: true,
    isPhysical: true
  },
  {
    for: "Black Eye Project",
    name: "Black Eye Project",
    summary: "Website",
    year: 2018,
    link: "",
    role: "Developer",
    isDigital: true,
    isPhysical: false
  },
  {
    for: "Sheffield BID",
    name: "Lego Bricktropolis",
    summary: "Augmented Reality App",
    year: 2019,
    link: "",
    role: "Developer",
    isDigital: true,
    isPhysical: false
  },
  {
    for: "Cambridge University",
    name: "Simon Tegala",
    summary: "Website",
    year: 2018,
    link: "https://simontegala-flow.org/",
    role: "Developer",
    isDigital: true,
    isPhysical: false
  },
  {
    for: "Lifeskills",
    name: "Lifeskills",
    summary: "Website",
    year: 2017,
    link: "",
    role: "Developer",
    isDigital: true,
    isPhysical: false
  },
  {
    for: "Global Brands",
    name: "Crooked Brewing Company",
    summary: "Website",
    year: 2017,
    link: "",
    role: "Developer",
    isDigital: true,
    isPhysical: false
  },
  {
    for: "Karina Gobulenko",
    name: "Karina Gobulenko",
    summary: "Portfolio website",
    year: 2024,
    source: "https://github.com/Runeii/karinagolubenko",
    link: "https://www.karinagolubenko.xyz/",
    role: "Developer",
    isDigital: true,
    isPhysical: false
  },
  {
    for: "Mirka Laura Severa",
    name: "Mirka Laura Severa",
    summary: "Portfolio website",
    year: 2024,
    source: "https://github.com/Runeii/mirkalaurasevera-portfolio",
    link: "https://www.mirkalaurasevera.com/",
    role: "Developer",
    isDigital: true,
    isPhysical: false
  },
  {
    for: "Random Studio",
    name: "Connected Office",
    summary: "Installation",
    year: 2023,
    caseStudy: "https://random.studio/projects/our-dynamic-studio",
    role: "Developer",
    isDigital: true,
    isPhysical: true
  },
  {
    for: "Random Studio",
    name: "Random Studio",
    summary: "Website",
    year: 2019,
    niceDate: "2019-24",
    link: "https://random.studio/",
    role: "Developer",
    isDigital: true,
    isPhysical: false
  },
  {
    for: "PVH",
    name: "Store of the Future",
    summary: "Global retail platform",
    year: 2024,
    niceDate: '2019-24',
    role: "Lead Developer",
    isDigital: true,
    isPhysical: false
  },
  {
    for: "Tommy Hillfiger",
    name: "Kid's Machine",
    summary: "Interactive retail fixture",
    year: 2019,
    caseStudy: "https://random.studio/projects/interactive-retail-fixture-for-tommy-hilfiger",
    role: "Lead Developer",
    isDigital: true,
    isPhysical: true
  },
  {
    for: "Chloé",
    name: "SS20: A Season in Hope",
    summary: "Campaign website",
    link: "https://aseasoninhope-chloe.archive.random.studio/",
    caseStudy: "https://random.studio/projects/a-ss21-collection-experience-for-chloe",
    year: 2020,
    role: "Developer",
    isDigital: true,
    isPhysical: false
  },
  {
    for: "KRO NCRV",
    name: "Rampvlucht",
    summary: "WebGL experience",
    link: "https://assets-rampvlucht.kro-ncrv.nl/digitale/index.html",
    caseStudy: "https://random.studio/projects/rampvlucht",
    year: 2022,
    role: "Developer",
    isDigital: true,
    isPhysical: false
  },
  {
    for: "Boucheron (Tokyo)",
    name: "Bridal Forest",
    summary: "Installation",
    year: 2023,
    caseStudy: "https://random.studio/projects/a-bridal-forest-for-boucheron",
    role: "Developer",
    isDigital: true,
    isPhysical: true
  },
  {
    for: "August Getty",
    name: "August Getty",
    summary: "Website",
    year: 2022,
    role: "Developer",
    isDigital: true,
    isPhysical: false
  },
  {
    for: "Nike",
    name: "Breath Lab",
    summary: "Installation",
    year: 2024,
    role: "Consultant",
    isDigital: true,
    isPhysical: true
  }
];

export default {
  projects
};
