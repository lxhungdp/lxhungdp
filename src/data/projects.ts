export type ProjectCategory = "Bridge engineering" | "Engineering software";

export type Project = {
  slug: string;
  path?: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  overview: string;
  introLink?: { label: string; href: string };
  demoNote?: string;
  registration?: { statement: string; label: string; href: string };
  location?: string;
  role?: string;
  status?: string;
  hideHeroMetadata?: boolean;
  tags: string[];
  technicalCapabilities?: {
    problem: string;
    scope: Array<
      | string
      | {
          text: string;
          link?: { label: string; href: string };
        }
    >;
  };
  mediaNote?: string;
  gallery?: { src: string; alt: string; caption: string; width: number; height: number }[];
  inPractice?: string;
  outcome?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  video?: { youtubeId: string; title: string };
  links?: { label: string; href: string }[];
  featured?: boolean;
  related?: string[];
};

const internalProjectDemoNote =
  "This demo is a limited preview of an internally developed project.";

export const projects: Project[] = [
  {
    slug: "south-commuter-railway",
    title: "South Commuter Railway",
    category: "Bridge engineering",
    summary: "Structural design and construction engineering for prestressed segmental railway bridges in the Philippines.",
    overview:
      "The South Commuter Railway includes concrete railway bridges built using balanced-cantilever and precast segmental methods. The work calls for close coordination between structural analysis, construction stages and geometric control.",
    location: "Philippines",
    role: "Lead structural design and construction engineering",
    tags: ["Railway bridges", "Segmental concrete", "Staged construction"],
    featured: true,
    related: ["castcontrol"],
  },
  {
    slug: "saemangeum-ring-road",
    title: "Saemangeum Ring Road",
    category: "Bridge engineering",
    summary: "Global modelling, seismic evaluation and structural verification for a cable-stayed bridge.",
    overview:
      "A steel cable-stayed bridge with a circular pylon on the Saemangeum Ring Road TK project. The engineering scope combined global structural behaviour with detailed verification under earthquake loading.",
    location: "South Korea",
    role: "Structural modelling and verification",
    tags: ["Cable-stayed bridge", "Seismic analysis", "Steel structures"],
    featured: true,
  },
  {
    slug: "hyeongok-second-bridge",
    title: "Hyeongok 2nd Bridge",
    category: "Bridge engineering",
    summary: "Analysis and design verification of a steel composite box-girder bridge and its temporary works.",
    overview:
      "Part of the Ihwa–Samgye Road widening project, Hyeongok 2nd Bridge required structural modelling and checks for the permanent steel composite box girder and construction-related components.",
    location: "South Korea",
    role: "Structural analysis and design checks",
    tags: ["Steel box girder", "Connections", "Temporary works"],
    featured: true,
  },
  {
    slug: "an-nghia-bridge",
    title: "An Nghia Bridge",
    category: "Bridge engineering",
    summary: "Detailed design and construction-stage analysis for a balanced-cantilever bridge.",
    overview:
      "Balanced-cantilever bridge work in Can Gio, Ho Chi Minh City, with analysis focused on the structural behaviour of the bridge during construction.",
    location: "Vietnam",
    role: "Structural design and construction-stage analysis",
    tags: ["Balanced cantilever", "Construction stages", "Concrete bridge"],
    featured: true,
  },
  {
    slug: "castcontrol",
    path: "/castcontrol",
    title: "CastControl",
    category: "Engineering software",
    summary: "Digital platform for managing and automating geometry control in short-line segmental bridge construction.",
    overview:
      "CastControl is a digital platform designed to manage and automate geometry control for segmental bridge construction using the short-line casting method. The platform determines multi-span and segment coordinates for complex alignments. It also connects site and design engineers in one centralized workflow: field engineers submit requests and survey data, while design engineers can review, correct, approve and distribute coordinates manually, or let the system automate the entire process.",
    introLink: { label: "Open CastControl", href: "https://castcontrol.vercel.app/" },
    registration: {
      statement: "CastControl was officially registered as an industrial software application in South Korea.",
      label: "View registration record",
      href: "https://www.cros.or.kr/psnsys/cmmn/infoPage.do?w2xPath=/ui/twc/cmmn/convenientDtl.xml&regId=C-2025-057358",
    },
    role: "Engineering workflow and software development",
    status: "Live product",
    hideHeroMetadata: true,
    tags: ["Bridge geometry", "Construction control", "Web application"],
    image: "/images/castcontrol.png",
    imageAlt: "CastControl product page describing the digital geometry-control platform for segmental bridge construction",
    imageWidth: 1440,
    imageHeight: 900,
    video: { youtubeId: "Cvx660pE6-Q", title: "CastControl project introduction" },
    gallery: [
      { src: "/images/castcontrol/1-introduction.png", alt: "Diagram summarizing geometry-control software features from data preparation to mobile access", caption: "Geometry-control software capabilities", width: 1547, height: 867 },
      { src: "/images/castcontrol/2-alignment.png", alt: "Alignment definition screen with horizontal geometry, vertical profile and station data", caption: "Horizontal and vertical alignment definition", width: 1591, height: 872 },
      { src: "/images/castcontrol/3-castcontrol.png", alt: "Casting geometry control screen with segment coordinates and correction charts", caption: "Casting geometry control and correction review", width: 1593, height: 888 },
      { src: "/images/castcontrol/4-survey.png", alt: "Survey results input screen showing form-setting and after-casting coordinates", caption: "Survey results and coordinate review", width: 1585, height: 883 },
    ],
    inPractice:
      "CastControl is being used for geometry control across more than 1,000 bridge spans on the NSCR South project in the Philippines. The South Commuter Railway is an approximately 56 km section of the North–South Commuter Railway, connecting Solis in Metro Manila with Calamba in Laguna. The project is intended to improve public transport access, ease road congestion and reduce transport emissions.",
    outcome: "The documented workflow reduced manual engineering effort by up to 95%.",
    featured: true,
    related: ["south-commuter-railway"],
  },
  {
    slug: "rc-designer",
    path: "/RCdesigner",
    title: "Reinforced Concrete Section Designer",
    category: "Engineering software",
    summary: "Browser-based section resistance and factored demand checks for reinforced concrete under axial force and biaxial bending.",
    overview:
      "Browser-based P–Mx–My resistance and factored-demand checks for short reinforced-concrete sections with arbitrary geometry, openings and discrete reinforcement.",
    introLink: { label: "Open live demo", href: "https://pmdesigner.vercel.app/" },
    demoNote: internalProjectDemoNote,
    role: "Engineering method and software development",
    status: "Live demo",
    hideHeroMetadata: true,
    tags: ["Reinforced concrete", "P–Mx–My", "Numerical analysis"],
    technicalCapabilities: {
      problem:
        "The calculation path remains explicit: section geometry → compatible strain field → P, Mx, My → resistance surface → factored-demand utilization.",
      scope: [
        "Purpose-built integration kernel: arbitrary polygons and openings are triangulated, then three Gauss points per triangle recover P, Mx and My exactly for a linear stress field and retain the stress gradient for nonlinear materials. No element stiffness matrices or global FEM assembly are required; the kernel runs locally in a browser Web Worker for immediate updates.",
        "Two independent mechanics pipelines: nonlinear stress–strain integration and an equivalent rectangular stress block with exact polygon clipping. Each pipeline provides forward resistance-surface generation and inverse factored-demand solving.",
        "Control the number of strain-domain stations and bending directions, or use adaptive sampling to refine them against convergence tolerances for smoother P–Mx–My surfaces, directional meridians and fixed-P contours.",
        "Import and export project or section data through Excel and DXF drawings; generate calculation workbooks and PDF design-preview reports. Code profiles include KDS Main and KDS 14 20 20:2022 Appendix (implemented section checks), plus ACI 318-19(22), EN 1992-1-1:2004, AS 3600:2018 Amendments 1 and 2, and custom/user-defined profiles (calculation previews).",
      ],
    },
    image: "/images/rcdesigner/interaction-surface-and-slices.png",
    imageAlt: "Three-dimensional P–Mx–My resistance surface with a directional meridian, fixed-axial-force contour and section data",
    imageWidth: 3006,
    imageHeight: 1846,
    gallery: [
      { src: "/images/rcdesigner/mesh-gauss-points.png", alt: "Verified concrete integration mesh with Gauss points and discrete reinforcement fibers", caption: "Numerical mesh and Gauss integration points", width: 3006, height: 1846 },
      { src: "/images/rcdesigner/directional-and-fixed-p-results.png", alt: "Directional P–M resistance curve with a three-dimensional surface and fixed-axial-force Mx–My contour", caption: "Directional resistance and fixed-axial-force results", width: 3006, height: 1846 },
      { src: "/images/rcdesigner/demand-check-section-field.png", alt: "Factored demand check with utilization, converged section strain field and resistance charts", caption: "Demand check and compatible section field", width: 3006, height: 1846 },
    ],
    links: [{ label: "Source code and engineering documentation", href: "https://github.com/lxhungdp/RC-concrete-section" }],
    featured: true,
  },
  {
    slug: "pus-pro",
    path: "/pus",
    title: "PUS Pro Program",
    category: "Engineering software",
    summary: "A Windows application for the design and verification of Prestressed Concrete Composited Opening U-type Steel Box Girder bridges.",
    overview:
      "PUS Pro Program is a complete workspace for designing and checking this type of steel box-girder bridge. It connects bridge geometry, structural analysis, design-code checks, calculation sheets, and quantity take-offs in one Windows application.",
    technicalCapabilities: {
      problem:
        "Bridge design teams often complete preliminary design, modelling, internal-force extraction, code checks, revisions, final calculations, and quantity take-offs in separate tools. PUS Pro brings these tasks together and includes checks for secondary bridge components. It has reduced design time by more than 90%, from about one week to a few hours.",
      scope: [
        "Horizontal and vertical alignment input, supporting multiple alignments for different bridge layouts.",
        "Automatic load calculation.",
        "Built-in solver, with the option to use external solvers.",
        "Live design-code checks.",
        "Main girder and secondary component checks, including splices, stiffeners, stringers, crossbeams, bracing systems, diaphragms, bearings, shear connectors, and welds.",
        "Excel and PDF calculation sheets and quantity tables.",
      ],
    },
    image: "/images/pus/1-modelling.png",
    imageAlt: "PUS Pro bridge model and node and element modelling workspace",
    imageWidth: 1461,
    imageHeight: 954,
    video: { youtubeId: "e2XkFhsxWxo", title: "PUS Pro Program introduction" },
    gallery: [
      { src: "/images/pus/2-crossection.png", alt: "PUS Pro deck slab and barrier modelling screen with bridge cross section", caption: "Deck slab and barrier geometry", width: 1461, height: 954 },
      { src: "/images/pus/3-bracing.png", alt: "PUS Pro bracing and stiffener layout with station table", caption: "Bracing and stiffener layout", width: 1461, height: 954 },
      { src: "/images/pus/4-dimmension.png", alt: "PUS Pro girder dimension diagram and component table", caption: "Girder component dimensions", width: 1461, height: 954 },
      { src: "/images/pus/5-load.png", alt: "PUS Pro load definition screen and bridge model", caption: "Load definition", width: 1462, height: 856 },
      { src: "/images/pus/6-result.png", alt: "PUS Pro internal force diagram on the bridge model", caption: "Analysis results and force diagrams", width: 1462, height: 856 },
      { src: "/images/pus/7-table.png", alt: "PUS Pro internal force graph and result table", caption: "Internal force graphs and tables", width: 1459, height: 845 },
      { src: "/images/pus/8-splice.png", alt: "PUS Pro splice design drawings and input table", caption: "Splice design", width: 1466, height: 854 },
      { src: "/images/pus/9-bracing.png", alt: "PUS Pro bracing system design layout and component table", caption: "Bracing system design", width: 1469, height: 851 },
      { src: "/images/pus/10-stiffener.png", alt: "PUS Pro stiffener design check table", caption: "Stiffener checks", width: 1456, height: 852 },
      { src: "/images/pus/11-quantity.png", alt: "PUS Pro steel quantity summary table", caption: "Quantity summary", width: 1455, height: 847 },
      { src: "/images/pus/12-stresschecking.png", alt: "PUS Pro sectional stress and resistance check graphs", caption: "Sectional stress and resistance checks", width: 1457, height: 859 },
      { src: "/images/pus/13-exportitem.png", alt: "PUS Pro calculation sheet export dialog", caption: "Calculation sheet export", width: 553, height: 755 },
    ],
    inPractice:
      "Wookyung Construction has used PUS Pro Program to design and verify dozens of steel box-girder bridge projects in South Korea.",
    tags: [],
  },
  {
    slug: "truss-designer",
    path: "/truss",
    title: "Truss Bridge Designer",
    category: "Engineering software",
    summary: "Automated truss-bridge design workspace with FEM analysis, code checks and pedestrian vibration analysis.",
    overview:
      "Automated design workspace for steel truss bridges, combining FEM analysis, member checks, moving-load influence lines and pedestrian vibration analysis.",
    introLink: { label: "Open Truss demo", href: "https://struct-tools.vercel.app/truss/" },
    demoNote: internalProjectDemoNote,
    role: "Bridge engineering and software development",
    status: "In development",
    hideHeroMetadata: true,
    tags: ["Truss bridges", "FEM analysis", "Vibration analysis"],
    technicalCapabilities: {
      problem:
        "Geometry, loading, analysis and verification remain linked to one structural model.",
      scope: [
        "Use a purpose-built, high-performance frame solver for immediate reactions, deformed shapes and member-force results as the model or loading changes.",
        "Use a modelling wizard to rapidly generate typical pony-truss bridge configurations.",
        "Run vibration analysis for pedestrian bridges.",
        "Perform code-based steel member checks within the implemented scope.",
        "Generate and compare influence lines for selected truss members.",
      ],
    },
    image: "/images/truss/1-pony-truss-bridge.png",
    imageAlt: "Pony truss pedestrian bridge model with U-frame behaviour and no overhead bracing",
    imageWidth: 1830,
    imageHeight: 1082,
    gallery: [
      { src: "/images/truss/2-member-influence-lines.png", alt: "Truss elevation with selected members and their axial-force influence lines", caption: "Influence lines for selected truss members", width: 1834, height: 1142 },
      { src: "/images/truss/3-structural-model-and-sections.png", alt: "Three-dimensional truss model with steel section properties and applied loads", caption: "Structural model and section properties", width: 1654, height: 809 },
      { src: "/images/truss/4-member-force-results.png", alt: "Truss bridge model with an internal-force diagram displayed over the members", caption: "Member-force result diagram", width: 1658, height: 816 },
      { src: "/images/truss/5-steel-member-code-check.png", alt: "KDS 2024 LRFD code-check panel with member utilization displayed on the truss model", caption: "Steel member code checks", width: 1655, height: 758 },
    ],
  },
  {
    slug: "bridge-alignment",
    path: "/alignment",
    title: "Bridge Alignment",
    category: "Engineering software",
    summary: "Bridge Model workspace combining alignments, superelevation and girder grids with FEM model generation.",
    overview:
      "Workspace for building a Bridge Model from horizontal and vertical alignments, superelevation and girder grids, then generating the FEM nodes and elements used for structural analysis.",
    introLink: { label: "Open Alignment demo", href: "https://struct-tools.vercel.app/alignment/" },
    demoNote: internalProjectDemoNote,
    role: "Engineering geometry and software development",
    status: "In development",
    hideHeroMetadata: true,
    tags: ["Bridge geometry", "Horizontal alignment", "Vertical profile"],
    technicalCapabilities: {
      problem:
        "One geometric source controls the alignment, deck surface, girder layout and FEM topology.",
      scope: [
        "Apply multiple transition-curve formulations used by road and bridge alignment standards, including Clothoid, Bloss, Sinusoidal and Bi-quadratic curves.",
        "Generate geometrically consistent 3D deck surfaces for bridges with simultaneous horizontal curvature, vertical profile and variable superelevation.",
        "Export the Bridge Model as an FEM model with generated node and element topology for downstream structural analysis.",
      ],
    },
    image: "/images/alignment/1-alignment.png",
    imageAlt: "Bridge Alignment editor with horizontal PI and vertical profile tables beside plan and elevation plots",
    imageWidth: 1657,
    imageHeight: 814,
    gallery: [
      { src: "/images/alignment/2-bridge-deck-edge-alignments.png", alt: "Composite bridge deck editor showing independent left and right edge alignments in plan and vertical profile", caption: "Independent deck-edge alignments and profiles", width: 3104, height: 2024 },
      { src: "/images/alignment/3-generated-deck-surface.png", alt: "Three-dimensional curved bridge deck surface generated from the edge alignment geometry", caption: "Three-dimensional deck surface generated from alignment geometry", width: 3104, height: 2024 },
    ],
    featured: true,
  },
  {
    slug: "steel-bridge-analysis",
    path: "/steelbridge",
    title: "Composite Bridge Designer",
    category: "Engineering software",
    summary: "Design workspace for steel-concrete composite I-girder and box-girder bridges.",
    overview:
      "Design workspace for steel-concrete composite I-girder and box-girder bridges, from geometric bridge definition to FEM analysis, design checks and quantities.",
    introLink: { label: "Open Bridge demo", href: "https://struct-tools.vercel.app/bridge/" },
    demoNote: internalProjectDemoNote,
    role: "Bridge engineering and software development",
    status: "In development",
    hideHeroMetadata: true,
    tags: ["Composite bridges", "I and box girders", "FEM analysis"],
    technicalCapabilities: {
      problem:
        "The physical bridge definition remains the source model for analysis, design checks and quantities throughout each design revision.",
      scope: [
        "Build the physical Bridge Model from alignments, superelevation, deck and girder configuration, and section details; automatically generate the corresponding FEM Model.",
        {
          text: "Moving-load analysis is handled by an in-house solver developed specifically for this project. For each linear prismatic Euler–Bernoulli source element, four independent unit-load states determine a continuous cubic influence branch, H(s) = As³ + Bs² + Cs + D. While the truck axles remain on their current branches, the total response is also cubic; the solver evaluates every interval endpoint and each valid root of M′(x) = 0 to locate the governing truck position, axle positions and individual axle contributions. This removes the position grid, avoids a new FEM solve for every vehicle position and prevents a peak between sampled positions from being missed.",
          link: {
            label: "Read the moving-load solver explanation",
            href: "/blogs/finding-the-governing-truck-position",
          },
        },
        "Review reactions, girder-force diagrams and section-stress envelopes together with the governing load case and moving-load position.",
        "Perform code-based checks for composite I-girder and box-girder systems, then export material quantity take-offs.",
      ],
    },
    image: "/images/composite-bridge/1-composite-i-girder-model.png",
    imageAlt: "Composite Bridge Designer showing a steel-concrete composite I-girder bridge model and section properties",
    imageWidth: 1656,
    imageHeight: 761,
    gallery: [
      { src: "/images/composite-bridge/2-composite-box-girder-model.png", alt: "Steel-concrete composite box-girder bridge model with box-section input fields", caption: "Composite box-girder model", width: 1660, height: 763 },
      { src: "/images/composite-bridge/3-girder-detail-drawing.png", alt: "Girder detail drawing showing flange, web and connection dimensions along the bridge length", caption: "Girder layout and detail drawing", width: 1657, height: 763 },
      { src: "/images/composite-bridge/4-girder-moment-diagram.png", alt: "Three-dimensional composite bridge model with a girder bending-moment diagram for a selected load case", caption: "Girder moment diagram", width: 1654, height: 756 },
      { src: "/images/composite-bridge/5-section-stress-envelope.png", alt: "Three-dimensional composite bridge model with a selected top-flange stress envelope", caption: "Section-stress envelope", width: 1662, height: 760 },
    ],
    featured: true,
  },
  {
    slug: "scaffold-frame",
    path: "/scaffolding",
    title: "Scaffolding Designer",
    category: "Engineering software",
    summary: "Integrated design workspace for pylon-mounted scaffolding used in cable-stayed bridge construction.",
    overview:
      "Scaffolding Designer is a desktop and web workspace for designing pylon-mounted scaffolding used during cable-stayed bridge construction. It connects the structural model, real-time FEM analysis, code-based checks, connection and anchor design, quantities, drawings and downstream detailing in one workflow.",
    role: "Bridge temporary-works engineering and software development",
    status: "In development",
    hideHeroMetadata: true,
    tags: ["Bridge scaffolding", "Connections and anchors", "Design automation"],
    technicalCapabilities: {
      problem:
        "The global frame, critical connections, pylon anchorages and fabrication outputs remain coordinated in one model.",
      scope: [
        "Use a purpose-built, high-performance frame solver for immediate reactions, deformed shapes and member-force results as the model or loading changes.",
        "Use modelling wizards to generate predefined scaffolding configurations, including pylon-mounted systems for cable-stayed bridge construction.",
        "Define scaffolding-specific load cases for floor, wind and temperature loads.",
        "Rank connections by demand, design critical steel joints and pylon anchorages, and exchange models with IDEA StatiCa and Hilti anchor-design software.",
        "Export construction drawings and quantity schedules, with model coordination links to Tekla.",
      ],
    },
    image: "/images/scaffolding/1-fem-analysis-model.png",
    imageAlt: "Scaffolding Designer FEM workspace showing a pylon-mounted steel scaffolding model and analysis statistics",
    imageWidth: 3104,
    imageHeight: 2024,
    gallery: [
      { src: "/images/scaffolding/2-connection-demand-ranking.png", alt: "Scaffolding connection list sorted by relative demand beside the three-dimensional structural model", caption: "Demand-based connection ranking", width: 3056, height: 2024 },
      { src: "/images/scaffolding/3-connection-design-module.png", alt: "Three-dimensional steel joint in the Scaffolding Designer connection module", caption: "Connection design module", width: 3056, height: 2024 },
      { src: "/images/scaffolding/4-global-moment-diagram.png", alt: "Scaffolding FEM result view with a global member moment diagram", caption: "Global frame moment diagram", width: 3056, height: 2024 },
      { src: "/images/scaffolding/5-critical-frame-result.png", alt: "Detailed FEM result view around a critical region of the scaffolding frame", caption: "Critical-region force result", width: 3056, height: 2024 },
      { src: "/images/scaffolding/6-full-model-force-results.png", alt: "Full scaffolding model with member-force result diagrams and numerical labels", caption: "Full-model member-force review", width: 3056, height: 2024 },
      { src: "/images/scaffolding/7-floor-load-definition.png", alt: "Scaffolding load editor showing floor-load definition on the structural model", caption: "Floor-load definition and load-case review", width: 3056, height: 2024 },
    ],
  },
  {
    slug: "anchor-designer",
    path: "/anchor",
    title: "Anchor Designer",
    category: "Engineering software",
    summary: "A web workspace for anchor-to-concrete checks and finite-element analysis of base plates.",
    overview:
      "Anchor Designer brings connection geometry, factored load cases, base-plate analysis and anchor-to-concrete verification into one reviewable workflow. Its OpenSeesPy backend models plate response, concrete contact and anchor tension; only results that pass the required analysis gates can feed the current KDS checks. The project is a development baseline, not design certification or a complete connection-design release.",
    introLink: { label: "Open Anchor Designer", href: "https://anchor-designer.vercel.app/" },
    demoNote: internalProjectDemoNote,
    role: "Engineering method and software development",
    status: "In development",
    hideHeroMetadata: true,
    tags: ["Anchor connections", "Base-plate FEM", "KDS checks"],
    technicalCapabilities: {
      problem:
        "An anchor connection needs a traceable path from the physical model and applied loads to plate response, anchor demand and code checks. Anchor Designer keeps those steps together while showing when an analysis result is eligible for verification.",
      scope: [
        "Model the concrete block, base plate, steel profile and physical anchor layout in a three-dimensional workspace.",
        "Define factored load cases and review the applied forces and moments on the connection model.",
        "Generate a plate mesh and analyse a flexible plate with compression-only concrete contact and tension-only anchor springs using OpenSeesPy.",
        "Inspect plate stress contours and retain solver, equilibrium and mesh-convergence evidence before promoting FEM demand.",
        "Run the implemented KDS anchor/concrete checks and load-case envelope from accepted demand; full connection release and ACI checks remain incomplete.",
        "Export a read-only Excel record of inputs, convergence, demands, checks and diagnostics.",
      ],
    },
    image: "/images/anchor/1-model.png",
    imageAlt: "Anchor Designer modelling workspace with a three-dimensional base plate, steel profile, anchors and concrete block",
    imageWidth: 1608,
    imageHeight: 948,
    gallery: [
      { src: "/images/anchor/2-load.png", alt: "Anchor Designer load-case editor beside the three-dimensional anchor connection and applied load arrows", caption: "Factored load cases and applied forces", width: 1607, height: 943 },
      { src: "/images/anchor/3-fem.png", alt: "Triangular finite-element mesh on the base plate and steel profile in the Anchor Designer analysis view", caption: "Base-plate finite-element mesh", width: 1610, height: 939 },
      { src: "/images/anchor/4-result.png", alt: "Finite-element stress contour across the base plate with higher values around the central profile", caption: "Base-plate stress contour", width: 1656, height: 945 },
      { src: "/images/anchor/4-result2.png", alt: "Finite-element result contour displayed on the central steel profile", caption: "Profile result view", width: 1661, height: 941 },
      { src: "/images/anchor/4-result3.png", alt: "Finite-element result contour displayed on the plate stiffeners and profile connection", caption: "Stiffener and connection result view", width: 1661, height: 943 },
    ],
  },
  {
    slug: "moving-load",
    path: "/movingload",
    title: "Moving Load",
    category: "Engineering software",
    summary: "Continuous influence-line solver for locating governing moving-load positions on bridge girders.",
    overview:
      "Bridge-girder analysis workspace that uses continuous influence functions to locate governing truck, lane and combined truck/lane positions without stepping loads across a discrete position grid.",
    introLink: { label: "Open Beam demo", href: "https://struct-tools.vercel.app/beam/" },
    demoNote: internalProjectDemoNote,
    role: "Structural analysis and software development",
    status: "In development",
    hideHeroMetadata: true,
    tags: ["Moving loads", "Beam analysis", "Influence lines"],
    technicalCapabilities: {
      problem:
        "The governing moving-load response can occur between sampled vehicle positions; reducing the spacing may still miss the exact peak while requiring many repeated FEM solutions.",
      scope: [
        "Build a continuous influence function for the selected response. For each linear prismatic Euler–Bernoulli source element, four independent unit-load states provide four response values, which determine the coefficients of the cubic branch H(s) = As³ + Bs² + Cs + D. The response can then be evaluated at any position within that branch instead of only at sampled points.",
        "Partition the vehicle travel range into intervals at the positions where an axle changes influence-line branch. Within each interval, the response of a truck at position x is M(x) = ΣPᵢH(x + aᵢ), where Pᵢ is an axle load and aᵢ is its offset from the truck reference position. Because every active H branch is cubic, their weighted sum is also cubic: M(x) = αx³ + βx² + γx + δ.",
        "Find every possible internal extreme by solving M′(x) = 3αx² + 2βx + γ = 0. For each interval, evaluate its left endpoint, right endpoint and the zero, one or two derivative roots that lie inside the interval, giving no more than four candidate truck positions.",
        "Compare the candidates from all intervals to obtain the governing response, truck position, every axle position and each axle contribution. This finds extrema between conventional sampling points without a position grid and without repeating the FEM solution for every vehicle location.",
        "Apply the solver to truck-only, lane-only and combined truck/lane cases, then display the governing physical load placement, influence lines and maximum/minimum force envelopes.",
      ],
    },
    image: "/images/moving-load/1-truckload.png",
    imageAlt: "Beam demo showing a vehicle on a girder beside a moving-load influence line for bending moment",
    imageWidth: 1655,
    imageHeight: 760,
    gallery: [
      { src: "/images/moving-load/2-laneload.png", alt: "Girder influence line with a vehicle and distributed lane load placement", caption: "Lane loading on the influence line", width: 1659, height: 762 },
      { src: "/images/moving-load/3-truck-lane.png", alt: "Beam analysis view showing concurrent vehicle and lane loading over a multi-span girder", caption: "Combined truck and lane loading", width: 1655, height: 809 },
      { src: "/images/moving-load/4-envelope.png", alt: "Maximum and minimum bending-moment envelope plotted along a continuous girder", caption: "Moving-load bending-moment envelope", width: 1659, height: 757 },
    ],
  },
  {
    slug: "timesheets",
    path: "/timesheets",
    title: "Timesheets",
    category: "Engineering software",
    summary: "A shared workspace for time records, approvals, project staffing and financial oversight.",
    overview:
      "Timesheets connects day-to-day work records with project execution and financial tracking. Team members record time against projects and tasks; managers review weekly submissions, monitor staffing and follow project activity, labor costs and budgets in one web workspace.",
    introLink: { label: "Open Timesheets", href: "https://www.timesheets.co.kr/" },
    role: "Full-stack software development",
    status: "Live product",
    hideHeroMetadata: true,
    tags: ["Timesheets", "Project staffing", "Financial analytics"],
    technicalCapabilities: {
      problem:
        "Project-driven teams need a consistent view of who worked on each project, which timesheets have been approved, and how staff time relates to project progress and cost.",
      scope: [
        "Record daily work by project and task, then submit, review, return, approve and audit weekly timesheets.",
        "Support Admin, Manager and Employee access, with clients, contacts, tasks and project structures managed in the same system.",
        "Review portfolio-level project activity, team contribution and staffing allocation over time.",
        "Explore project time distribution and employee–project hours through heatmaps, charts and relationship views.",
        "Track budgets, contract changes, labor costs, cost ratios and financial trends for individual projects.",
      ],
    },
    image: "/images/timesheets/1-dashboard.png",
    imageAlt: "Timesheets dashboard showing work activity and project and task distribution charts",
    imageWidth: 1573,
    imageHeight: 900,
    gallery: [
      { src: "/images/timesheets/2-timesheets.png", alt: "Weekly timesheet with daily project hours, submission status and work distribution chart", caption: "Weekly timesheet entry and submission", width: 1602, height: 932 },
      { src: "/images/timesheets/3-project.png", alt: "Project portfolio grid with activity charts and time-distribution graphics for multiple projects", caption: "Project portfolio overview", width: 1612, height: 921 },
      { src: "/images/timesheets/4-timedistribution.png", alt: "Heatmap showing the share of work time distributed across projects and months", caption: "Project time-distribution heatmap", width: 1564, height: 906 },
      { src: "/images/timesheets/5-workinghour.png", alt: "Employee-by-project table showing monthly working hours and allocation percentages", caption: "Employee and project working hours", width: 1595, height: 877 },
      { src: "/images/timesheets/6-chart.png", alt: "Flow chart connecting projects on the left with contributing employees on the right", caption: "Project-to-employee contribution view", width: 1542, height: 953 },
      { src: "/images/timesheets/7-projectdetail.png", alt: "Project labor-cost view with accumulated hours chart and employee contribution breakdown", caption: "Project labor cost and hours", width: 1572, height: 895 },
      { src: "/images/timesheets/8-allocation.png", alt: "Project allocation page with working-hour contribution chart and employee contribution heatmap", caption: "Project staffing and allocation", width: 1553, height: 1008 },
    ],
    inPractice:
      "Timesheets is used internally at the company and by several construction consulting firms.",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const bridgeEngineeringProjects = projects.filter(
  (project) => project.category === "Bridge engineering",
);

const softwareProjectOrder = [
  "pus-pro",
  "castcontrol",
  "rc-designer",
  "scaffold-frame",
  "truss-designer",
  "steel-bridge-analysis",
  "anchor-designer",
  "bridge-alignment",
  "moving-load",
  "timesheets",
] as const;

export const softwareProjects = softwareProjectOrder.map((slug) => {
  const project = projects.find((entry) => entry.slug === slug);
  if (!project?.path) throw new Error(`Missing public path for ${slug}`);
  return project;
});

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectByPath(path: string) {
  return softwareProjects.find((project) => project.path === path);
}
