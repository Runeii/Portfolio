export type Project = {
  title: string;
  description: string;
  link: string | undefined;
  date: Date;
  niceDate?: string;
  isDigital: boolean;
  isPhysical: boolean;
  isNDAed?: boolean;
  isWIP?: boolean
};

type JsonProject = Omit<Project, 'date'> & {
  date: string;
};

export const projects: JsonProject[] = [
  {
    title: 'High Pertinent',
    description: 'The corporation that runs the future',
    link: 'https://github.com/runeii/highpertinent',
    date: '2024-01-01',
    isDigital: true,
    isPhysical: false
  },
  {
    title: "Wipeout Music Visualizer",
    description: "Recontextualising the 90s PSX classic",
    link: "https://github.com/runeii/audiovisualizer",
    date: '2024-01-01',
    isDigital: true,
    isPhysical: false,
    isWIP: true
  },
  {
    title: "R3F Touch Controller",
    description: "Experimental human input device",
    link: "https://github.com/Runeii/r3f-touch-controller",
    date: '2024-01-01',
    isDigital: true,
    isPhysical: false
  },
  {
    title: "Random Studio",
    description: "Website for a design studio",
    link: "https://random.studio/",
    date: '2024-01-01',
    niceDate: '2020-2024',
    isDigital: true,
    isPhysical: false
  },
  {
    title: "Living Entrance",
    description: "Het Hem Museum",
    link: "https://random.studio/projects/the-entrance",
    date: '2024-01-01',
    isDigital: false,
    isPhysical: true
  },
  {
    title: "Karina Gobulenko",
    description: "Portfolio of a UX designer",
    link: "https://www.karinagolubenko.xyz/",
    date: '2024-01-01',
    isDigital: true,
    isPhysical: false
  },
  {
    title: "Mirka Laura Severa",
    description: "Vibrant, playful, surreal photography",
    link: "https://www.mirkalaurasevera.com/",
    date: '2024-01-01',
    isDigital: true,
    isPhysical: false
  },
  {
    title: "Store of the Future",
    description: "",
    link: undefined,
    date: '2024-01-01',
    niceDate: '2019-2024',
    isNDAed: true,
    isDigital: true,
    isPhysical: false
  },
  {
    title: "Nike BreathLab",
    description: "Paris",
    link: 'https://random.studio/projects/a-sensorial-store-takeover-for-nike-house-of-innovation',
    date: '2024-01-01',
    isDigital: false,
    isPhysical: true
  },
  {
    title: "Connected Office",
    description: "Random Studio",
    link: "https://random.studio/projects/our-dynamic-studio",
    date: '2023-01-01',
    isDigital: false,
    isPhysical: true
  },
  {
    title: "Boucheron Bridal Forest",
    description: "Tokyo",
    link: "https://random.studio/projects/a-bridal-forest-for-boucheron",
    date: '2023-01-01',
    isDigital: false,
    isPhysical: true
  },
  {
    title: "Rampvlucht",
    description: "Exploring the story of a Dutch disaster",
    link: "https://assets-rampvlucht.kro-ncrv.nl/digitale/index.html",
    date: '2022-01-01',
    isDigital: true,
    isPhysical: false
  },
  {
    title: "August Getty",
    description: "Intricate high fashion atelier",
    link: undefined,
    date: '2022-01-01',
    isDigital: true,
    isPhysical: false
  },
  {
    title: "Marshmallow Toasting",
    description: "Various",
    link: 'https://github.com/RandomStudio/marshmallow-toasting',
    date: '2021-01-01',
    isDigital: false,
    isPhysical: true
  },
  {
    title: "Laser Cave Painting",
    description: "Various",
    link: 'https://github.com/RandomStudio/Laser-Pointer-Painting',
    date: '2021-01-01',
    isDigital: false,
    isPhysical: true
  },
  {
    title: "Chloé",
    description: "SS20 A Season in Hope",
    link: "https://aseasoninhope-chloe.archive.random.studio/",
    date: '2020-01-01',
    isDigital: true,
    isPhysical: false
  },
  {
    title: "Kid's Machine",
    description: "Tommy Hilfiger stores",
    link: "https://random.studio/projects/interactive-retail-fixture-for-tommy-hilfiger",
    date: '2019-01-01',
    isDigital: false,
    isPhysical: true
  },
  {
    title: "Lego Bricktropolis",
    description: "A city-wide treasure hunt",
    link: undefined,
    date: '2019-01-01',
    isDigital: true,
    isPhysical: false
  },
  {
    title: "Black Eye Project",
    description: "Website for a design studio",
    link: 'https://theblackeyeproject.co.uk/',
    date: '2018-01-01',
    niceDate: '2017-2019',
    isDigital: true,
    isPhysical: false
  },
  {
    title: "Cambridge University",
    description: "Design scratchpad for a new statue",
    link: "https://simontegala-flow.org/",
    date: '2018-01-01',
    isDigital: true,
    isPhysical: false
  },
  {
    title: "Crack in the Road",
    description: "Acclaimed 2010s music blog",
    link: "https://github.com/Runeii/crackintheroad",
    date: '2017-01-01',
    isDigital: true,
    isPhysical: false
  },
  {
    title: "Lifeskills",
    description: "Lifeskills",
    link: undefined,
    date: '2017-01-01',
    isDigital: true,
    isPhysical: false
  },
  {
    title: "Crooked Brewing Company",
    description: "Unconventional new drinks",
    link: undefined,
    date: '2017-01-01',
    isDigital: true,
    isPhysical: false
  },
  {
    title: "Unrecorded",
    description: "Unrecorded",
    link: undefined,
    date: '2014-01-01',
    isDigital: true,
    isPhysical: false
  }
];

export default {
  projects
};
