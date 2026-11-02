export type BlogImage = { width: number; height: number; alt: string };

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  date: string;
  summary: string;
  images: BlogImage[];
  linkedinUrl: string;
};

const linkedinUrl = (id: string) => `https://www.linkedin.com/feed/update/urn:li:activity:${id}/`;

export const blogPosts: BlogPost[] = [
  {
    id: "7399610695517954048",
    slug: "bamboo-scaffolding-as-a-structural-material",
    title: "Bamboo Scaffolding as a Structural Material",
    date: "2025-11-27",
    summary: "Why bamboo's fibers, hollow section, nodes and tied joints make it useful in scaffolding.",
    linkedinUrl: linkedinUrl("7399610695517954048"),
    images: [
      { width: 480, height: 694, alt: "A tall building surrounded by bamboo scaffolding" },
      { width: 480, height: 360, alt: "Cut bamboo poles showing their hollow sections and nodes" },
    ],
  },
  {
    id: "7401406796361633792",
    slug: "diagonal-bracing-in-bamboo-scaffolding",
    title: "Why Diagonal Bracing Matters in Bamboo Scaffolding",
    date: "2025-12-02",
    summary: "Triangles, degrees of freedom and the role of large diagonal braces in scaffold stability.",
    linkedinUrl: linkedinUrl("7401406796361633792"),
    images: [
      { width: 480, height: 688, alt: "Workers on bamboo scaffolding with diagonal members" },
      { width: 480, height: 640, alt: "Large diagonal braces across a bamboo scaffold on a building" },
      { width: 480, height: 317, alt: "Bamboo scaffold with diagonal bracing over several bays" },
    ],
  },
  {
    id: "7404691649559261184",
    slug: "why-metro-viaducts-use-concrete-box-girders",
    title: "Why Metro Viaducts Use Concrete Box Girders and Segmental Construction",
    date: "2025-12-11",
    summary: "The structural and construction reasons behind common metro viaduct systems.",
    linkedinUrl: linkedinUrl("7404691649559261184"),
    images: [
      { width: 800, height: 600, alt: "Le Xuan Hung beside a launching girder at a metro viaduct site" },
      { width: 480, height: 640, alt: "Bridge construction site with a launching girder" },
      { width: 480, height: 640, alt: "Precast concrete bridge segments at the construction site" },
      { width: 480, height: 360, alt: "Concrete box-girder metro viaduct under construction" },
    ],
  },
  {
    id: "7406883880919666688",
    slug: "vertical-web-stiffeners-in-steel-bridges",
    title: "Vertical Web Stiffeners in Steel Girder Bridges",
    date: "2025-12-17",
    summary: "Structural roles, detailing and design checks for transverse web stiffeners.",
    linkedinUrl: linkedinUrl("7406883880919666688"),
    images: [
      { width: 689, height: 449, alt: "Diagrams of bending, torsional buckling and beam-column action around a web stiffener" },
      { width: 480, height: 479, alt: "Diagram of a steel girder with vertical web stiffeners" },
      { width: 480, height: 251, alt: "Steel girder web panel and stiffener design diagram" },
      { width: 480, height: 300, alt: "Chart comparing web strength and stiffener spacing" },
    ],
  },
  {
    id: "7419936673544695808",
    slug: "longitudinal-web-stiffeners-in-steel-bridges",
    title: "Longitudinal Web Stiffeners in Steel Girder Bridges",
    date: "2026-01-22",
    summary: "What longitudinal stiffeners do, how they are detailed and how AASHTO LRFD treats them.",
    linkedinUrl: linkedinUrl("7419936673544695808"),
    images: [
      { width: 800, height: 600, alt: "Longitudinal stiffeners inside a steel box girder" },
      { width: 480, height: 360, alt: "Steel girder web with longitudinal stiffener detail" },
      { width: 480, height: 640, alt: "Diagram of longitudinal web stiffener placement" },
    ],
  },
  {
    id: "7422531618998886400",
    slug: "why-the-tape-measure-hook-moves",
    title: "Why the Hook on a Tape Measure Moves",
    date: "2026-01-29",
    summary: "A small sliding detail that keeps both inside and outside measurements accurate.",
    linkedinUrl: linkedinUrl("7422531618998886400"),
    images: [
      { width: 800, height: 600, alt: "Tape measure hook with arrows pointing to its sliding rivets" },
      { width: 480, height: 118, alt: "Illustration of the tape hook's small travel" },
      { width: 480, height: 480, alt: "Diagram comparing inside and outside tape measurements" },
    ],
  },
  {
    id: "7436639230405001216",
    slug: "will-ai-replace-civil-engineers",
    title: "Will AI Replace Civil Engineers?",
    date: "2026-03-09",
    summary: "How data availability, site conditions and engineering responsibility limit full automation.",
    linkedinUrl: linkedinUrl("7436639230405001216"),
    images: [
      { width: 800, height: 754, alt: "Chart comparing theoretical AI capability and observed use across occupations" },
    ],
  },
  {
    id: "7444538563318415360",
    slug: "civil-engineering-versus-it",
    title: "Civil Engineering vs IT: Which One Is Harder?",
    date: "2026-03-31",
    summary: "A comparison of experience, ways of thinking, career scale and the value of combining skills.",
    linkedinUrl: linkedinUrl("7444538563318415360"),
    images: [
      { width: 800, height: 533, alt: "Illustration comparing a bridge construction site with software development" },
    ],
  },
  {
    id: "7445366438653235204",
    slug: "how-the-finite-element-method-developed",
    title: "From War to Engineering: How FEM Developed",
    date: "2026-04-02",
    summary: "The aerospace origins and basic mechanics of the finite element method.",
    linkedinUrl: linkedinUrl("7445366438653235204"),
    images: [
      { width: 800, height: 533, alt: "Illustration of an aircraft wing divided into finite elements and solved on a computer" },
    ],
  },
  {
    id: "7466028023046369280",
    slug: "yeosu-goheung-sea-bridge-route",
    title: "The Yeosu–Goheung Sea Bridge Route",
    date: "2026-05-29",
    summary: "A route of 11 sea bridges, including four long-span bridges now under construction between Hwatae and Baegya.",
    linkedinUrl: linkedinUrl("7466028023046369280"),
    images: [
      { width: 800, height: 600, alt: "Le Xuan Hung visiting the Changseon–Samcheonpo Bridge route" },
      { width: 480, height: 640, alt: "Bridge construction on the Yeosu–Goheung island route" },
      { width: 480, height: 360, alt: "Long-span bridge under construction above the sea" },
      { width: 480, height: 360, alt: "Construction view of a bridge on the Hwatae–Baegya section" },
    ],
  },
  {
    id: "7497043782631084032",
    slug: "ai-coding-in-engineering",
    title: "AI Coding in Engineering: Understand the Whole System",
    date: "2026-08-23",
    summary: "A subway tunnel analogy for developing engineering software with AI tools.",
    linkedinUrl: linkedinUrl("7497043782631084032"),
    images: [
      { width: 800, height: 1066, alt: "View along an illuminated automated subway tunnel from the front of a train" },
    ],
  },
  {
    id: "7508687397996650496",
    slug: "triangular-meshes-and-three-gauss-points",
    title: "Why Use Triangular Meshes and Three Gauss Points?",
    date: "2026-09-24",
    summary: "How triangular integration and a three-point Gaussian rule recover axial force and bending moments in a P–M interaction solver.",
    linkedinUrl: linkedinUrl("7508687397996650496"),
    images: [
      { width: 800, height: 482, alt: "Triangular integration mesh and Gauss points around openings in an irregular reinforced-concrete section" },
      { width: 800, height: 483, alt: "Triangular integration mesh across a curved reinforced-concrete section with circular reinforcement bars" },
    ],
  },
  {
    id: "7510227873417445376",
    slug: "finding-the-governing-truck-position",
    title: "Finding the Governing Truck Position on a Bridge",
    date: "2026-09-28",
    summary: "A continuous influence-line method that finds the critical moving-load position without a position grid or repeated FEM solves.",
    linkedinUrl: linkedinUrl("7510227873417445376"),
    images: [
      { width: 1122, height: 1402, alt: "Diagram showing how four unit-load states reconstruct an influence line and locate the governing truck position" },
      { width: 800, height: 447, alt: "Bridge analysis software displaying a truck, axle positions and moment influence-line results" },
    ],
  },
  {
    id: "7516121724384382977",
    slug: "matrix-behind-3d-engineering-graphics",
    title: "The Matrix Behind 3D Engineering Graphics",
    date: "2026-10-14",
    summary: "How rotation and translation matrices connect 3D graphics, structural software, Scaffolding and CastControl.",
    linkedinUrl: linkedinUrl("7516121724384382977"),
    images: [
      { width: 800, height: 554, alt: "A 3D scaffolding model below a homogeneous transformation matrix for rotation and translation" },
    ],
  },
  {
    id: "7521929373801734145",
    slug: "ai-and-the-challenge-of-final-drawings",
    title: "AI in Structural Engineering: The Challenge of Final Drawings",
    date: "2026-10-30",
    summary: "Why moving from analysis and code checks to fabrication-ready drawings still depends heavily on engineering and construction experience.",
    linkedinUrl: linkedinUrl("7521929373801734145"),
    images: [],
  },
  {
    id: "7522281554564554752",
    slug: "the-first-program-i-wrote",
    title: "The First Program I Wrote",
    date: "2026-10-31",
    summary: "A VB6 bridge-design tool that digitized H30 live-load tables, interpolated values and displayed diagrams for university assignments.",
    linkedinUrl: linkedinUrl("7522281554564554752"),
    images: [
      { width: 505, height: 456, alt: "Early VB6 bridge-design program showing an H30 live-load diagram and calculated distribution factor" },
      { width: 501, height: 409, alt: "Early VB6 bridge-design program showing transverse girder inputs and interpolated distribution results" },
    ],
  },
];
