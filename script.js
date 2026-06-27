const projectData = {
  seaMpa: {
    category: "Conservation Planning",
    title: "SEA Project: MPA Network Design in Indonesia",
    summary:
      "Marxan-based MPA network design for Fisheries Management Area 715 and six associated provinces in eastern Indonesia.",
    images: [
      "assets/images/sea-project.jpg"
    ],
    overview:
      "Under the USAID Sustainable Ecosystems Advanced (SEA) Project, this work supported The Nature Conservancy, MMAF Indonesia, and Coral Triangle Center in designing Marine Protected Area networks for Fisheries Management Area 715 and six associated provinces: West Papua, Maluku, North Maluku, North Sulawesi, Central Sulawesi, and Gorontalo. The work translated scientific design criteria, ecological features, threats, and existing/proposed protected areas into a spatial decision-support process for MPA and marine spatial planning.",
    methods: [
      "Compiled and processed spatial layers from BIG, MMAF, participatory expert mapping, Global Fishing Watch, Global Seafloor, and YKAN.",
      "Delineated a 1,613,457 km2 planning area and stratified the analysis by province and ecoregion to represent political and ecological variation.",
      "Ran Marxan in two stages: first for shallow-water habitats, then a combined shallow- and deep-water analysis with the shallow-water best solution locked in.",
      "Explored scenarios using conservation targets, costs, locked-in and locked-out areas, and compactness settings to reduce fragmentation.",
      "Reviewed Marxan outputs through scientific workshop discussion and manual refinement of priority areas."
    ],
    outputs: [
      "MPA network design for FMA 715 and six associated provinces in eastern Indonesia.",
      "Spatial prioritization outputs from 100 Marxan runs, including individual solutions, sum solution, and best solution products.",
      "Decision-support maps showing existing MPAs, proposed MPAs, and priority areas for new or expanded protection.",
      "Cartographic contribution to the published MPA network design map for the SEA Project.",
      "Technical support for integrating MPA network priorities with marine spatial planning and fisheries management objectives."
    ],
    tools: [
      "Marxan",
      "QGIS",
      "ArcGIS",
      "Spatial Prioritization",
      "Marine Spatial Planning",
      "Conservation Planning",
      "Participatory Mapping"
    ],
    links: [
      {
        label: "View Marxan Case Study",
        url: "https://marxansolutions.org/community/designing-marine-protected-area-networks-in-indonesia/"
      }
    ]
  },

  atseaMpa: {
    category: "Transboundary Conservation Planning",
    title: "ATSEA-2: Arafura-Timor Seas MPA Network",
    summary:
      "Regional gap analysis and systematic conservation planning for a resilient MPA network across the Arafura and Timor Seas.",
    images: [
      "assets/images/atsea-project.jpg"
    ],
    overview:
      "The ATSEA-2 project developed the first resilient Marine Protected Area network design for the Arafura and Timor Seas, a transboundary region shared by Indonesia, Timor-Leste, Australia, and Papua New Guinea. The design addressed critical habitats and species, fisheries connectivity, rare and threatened species, existing and proposed MPAs, and pressures such as fishing and climate change.",
    methods: [
      "Used GIS processing to assess gaps in the regional MPA network based on existing protected areas, proposed MPAs, and Areas of Interest in each country.",
      "Applied systematic conservation planning to identify new Areas of Interest for establishing MPAs that fill representation and connectivity gaps.",
      "Considered transboundary ecological features, shallow-water habitats, deepwater habitats, critical habitats, special and unique habitats, threats, and other marine uses.",
      "Used Marxan outputs to support network design, conflict review, and refinement of priority areas.",
      "Linked technical spatial analysis with regional review so the network could be considered by all four littoral countries."
    ],
    outputs: [
      "A 301,055 km2 ATS MPA network design endorsed by Indonesia, Timor-Leste, Australia, and Papua New Guinea.",
      "Regional network incorporating 93 existing MPAs, proposed MPAs, previously identified Areas of Interest, and seven new Areas of Interest from the study.",
      "Evidence base for Indonesia's national MPA network planning, Timor-Leste MPA development, and Australian consideration of potential new MPAs.",
      "Publication contribution to the Coastal Management article on resilient MPA network design in the Arafura and Timor Seas.",
      "Spatial decision-support products for communicating conservation priorities across a multi-country marine region."
    ],
    tools: [
      "Marxan",
      "GIS",
      "Gap Analysis",
      "Systematic Conservation Planning",
      "Transboundary Conservation",
      "Marine Protected Areas"
    ],
    links: [
      {
        label: "Open ATSEA-2 PDF",
        url: "assets/files/atsea.pdf"
      }
    ]
  },

  greenRoof: {
    category: "Remote Sensing & Machine Learning",
    title: "Green Roof Detection in Baden-Wuerttemberg",
    summary:
      "Scalable roof-plane classification for vegetated rooftop detection using LoD2 3D building data, PlanetScope imagery, and machine learning.",
    images: [
      "assets/images/green-roof-detection.png"
    ],
    overview:
      "This thesis project developed a scalable geospatial workflow for detecting green roofs at roof-plane level across Baden-Wuerttemberg. The approach combines LoD2 3D building roof surfaces, semantic building information, and PlanetScope monthly basemap imagery to classify vegetated and non-vegetated roofs and support a reproducible 2025 green roof inventory.",
    methods: [
      "Ingested LoD2 CityGML data, handled namespaces, decoded roof-surface vertices, and extracted roof-plane objects.",
      "Derived roof-plane descriptors including footprint geometry, 3D area, slope, aspect, height, height relief, roof type, and building function.",
      "Integrated PlanetScope monthly basemaps and computed roof-level spectral indicators, including NDVI aggregates, pixel counts, and alpha-band quality measures.",
      "Prepared labelled green and non-green roof samples, using approximately 60% visible vegetation coverage as the practical green-roof rule of thumb.",
      "Compared Random Forest and Multilayer Perceptron models under the same feature set and evaluation strategy.",
      "Assessed probability thresholds and post-processing rules to understand their effect on final inventory size and spatial distribution."
    ],
    outputs: [
      "Roof-plane-level green roof classification workflow for state-scale inventory mapping.",
      "Machine-learning-ready feature tables combining geometry, semantics, and satellite-derived spectral attributes.",
      "Model comparison outputs for Random Forest and Multilayer Perceptron classification.",
      "Probability-based prediction outputs and post-processed green roof inventory layers.",
      "Thesis and poster materials communicating the methodology, limitations, and planning relevance."
    ],
    tools: [
      "Python",
      "GeoPandas",
      "PlanetScope",
      "LoD2 CityGML",
      "Random Forest",
      "Multilayer Perceptron",
      "NDVI",
      "scikit-learn",
      "QGIS",
      "Machine Learning"
    ],
    links: [
      {
        label: "Open Thesis PDF",
        url: "assets/files/Thesis.pdf"
      },
      {
        label: "Open Poster PDF",
        url: "assets/files/poster_Hakim_WiSe202526.pdf"
      }
    ]
  },

  landfill: {
    category: "GIS Suitability Analysis",
    title: "Stuttgart Landfill Suitability Analysis",
    summary:
      "GIS-based multi-criteria analysis for identifying suitable landfill candidate areas.",
    images: [
      "assets/images/projects/landfill-1.jpg",
      "assets/images/projects/landfill-2.jpg"
    ],
    overview:
      "This project applied GIS-based suitability analysis to evaluate potential landfill locations in the Stuttgart region. The workflow integrated spatial constraints, exclusion areas, environmental sensitivity, accessibility, and planning-relevant criteria to identify candidate zones.",
    methods: [
      "Collected and prepared spatial layers related to land use, settlement areas, transport access, environmental constraints, and exclusion zones.",
      "Applied buffer analysis, spatial overlay, and reclassification to model suitability conditions.",
      "Combined multiple criteria into a suitability assessment workflow.",
      "Produced map outputs showing unsuitable, moderately suitable, and potentially suitable areas."
    ],
    outputs: [
      "Landfill suitability map.",
      "Spatial constraint and exclusion-zone analysis.",
      "Candidate area identification for planning discussion.",
      "Cartographic outputs for communicating suitability results."
    ],
    tools: [
      "QGIS",
      "ArcGIS Pro",
      "Spatial Overlay",
      "Buffer Analysis",
      "Multi-Criteria Analysis",
      "Cartography"
    ],
    links: []
  },

  ikea: {
    category: "Location Intelligence",
    title: "IKEA Franchise Location Expansion Analysis",
    summary:
      "GIS-based business location analysis for franchise expansion and market reach assessment.",
    images: [
      "assets/images/projects/ikea-1.jpg",
      "assets/images/projects/ikea-2.jpg"
    ],
    overview:
      "This project explored potential IKEA franchise or retail expansion locations using GIS-based location intelligence. The analysis considered population distribution, accessibility, transport connectivity, market reach, and spatial competition factors.",
    methods: [
      "Prepared spatial datasets related to population, road access, urban centers, and existing commercial locations.",
      "Analyzed accessibility and potential catchment areas for candidate locations.",
      "Evaluated market reach and spatial suitability using GIS-based decision-support methods.",
      "Created maps and visual summaries to communicate potential expansion areas."
    ],
    outputs: [
      "Candidate location suitability maps.",
      "Accessibility and catchment area analysis.",
      "Market reach visualization.",
      "Spatial decision-support outputs for retail location planning."
    ],
    tools: [
      "GIS",
      "Accessibility Analysis",
      "Market Area Analysis",
      "Location Intelligence",
      "Spatial Decision Support"
    ],
    links: []
  },

  urbanVegetation: {
    category: "Urban Remote Sensing",
    title: "Urban Vegetation Mapping",
    summary:
      "High-resolution urban vegetation mapping using aerial imagery and deep learning.",
    images: [
      "assets/images/projects/urban-vegetation-1.jpg",
      "assets/images/projects/urban-vegetation-2.jpg"
    ],
    overview:
      "This project focused on mapping urban vegetation from high-resolution aerial imagery using deep learning methods. The work supports urban ecological assessment, green infrastructure analysis, and spatial understanding of vegetation distribution in complex urban environments.",
    methods: [
      "Prepared high-resolution aerial imagery for vegetation extraction.",
      "Supported image classification and deep-learning-based mapping workflows.",
      "Evaluated vegetation mapping outputs in urban environments with mixed land-cover patterns.",
      "Prepared spatial outputs suitable for GIS visualization and further analysis."
    ],
    outputs: [
      "Urban vegetation classification outputs.",
      "Spatial layers representing vegetation distribution.",
      "Map products supporting urban green infrastructure assessment.",
      "Contribution to publication-oriented research workflow."
    ],
    tools: [
      "Aerial Imagery",
      "Deep Learning",
      "Image Classification",
      "GIS",
      "Urban Vegetation Mapping"
    ],
    links: []
  },

  mangrove: {
    category: "Coastal Remote Sensing",
    title: "Multitemporal Mangrove and Aquaculture Mapping",
    summary:
      "Monitoring mangrove and aquaculture dynamics using multi-temporal satellite imagery.",
    images: [
      "assets/images/projects/mangrove-1.jpg",
      "assets/images/projects/mangrove-2.jpg"
    ],
    overview:
      "This project used remote sensing and GIS workflows to monitor mangrove and aquaculture changes over time. The analysis supported coastal environmental monitoring and helped assess landscape dynamics in Indonesian coastal areas.",
    methods: [
      "Processed multi-temporal satellite imagery from sensors such as Landsat, Sentinel, and Planet NICFI.",
      "Used Google Earth Engine for image preparation, classification, and temporal analysis.",
      "Mapped mangrove and aquaculture distribution across different time periods.",
      "Analyzed spatial change patterns to support environmental monitoring and reporting."
    ],
    outputs: [
      "Multitemporal mangrove and aquaculture maps.",
      "Change detection outputs showing coastal landscape dynamics.",
      "Spatial datasets supporting conservation and coastal management.",
      "Publication and technical reporting contributions."
    ],
    tools: [
      "Google Earth Engine",
      "Landsat",
      "Sentinel",
      "Planet NICFI",
      "Remote Sensing",
      "Change Detection"
    ],
    links: []
  },

  habitat: {
    category: "Marine Remote Sensing",
    title: "Shallow-Water Habitat Mapping",
    summary:
      "Remote sensing classification of coral, seagrass, sand, and rubble habitats in Indonesian coastal waters.",
    images: [
      "assets/images/projects/habitat-1.jpg",
      "assets/images/projects/habitat-2.jpg"
    ],
    overview:
      "This project applied remote sensing methods to classify shallow-water coastal habitats, including coral, seagrass, sand, and rubble. The outputs supported coastal and marine conservation planning by providing spatial information on benthic habitat distribution.",
    methods: [
      "Prepared satellite imagery for shallow-water habitat classification.",
      "Applied remote sensing classification techniques to distinguish benthic habitat classes.",
      "Validated and interpreted classification outputs for coastal conservation purposes.",
      "Produced maps and spatial datasets for marine planning and reporting."
    ],
    outputs: [
      "Shallow-water habitat classification maps.",
      "Spatial layers for coral, seagrass, sand, and rubble classes.",
      "Coastal GIS outputs supporting marine conservation planning.",
      "Technical and publication-oriented map products."
    ],
    tools: [
      "Remote Sensing",
      "Satellite Imagery",
      "Coastal GIS",
      "Habitat Classification",
      "Marine Conservation"
    ],
    links: []
  }
};

const modal = document.getElementById("projectModal");
const modalClose = document.querySelector(".modal-close");

const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalSummary = document.getElementById("modalSummary");
const modalGallery = document.getElementById("modalGallery");
const modalOverview = document.getElementById("modalOverview");
const modalMethods = document.getElementById("modalMethods");
const modalOutputs = document.getElementById("modalOutputs");
const modalTools = document.getElementById("modalTools");
const modalLinks = document.getElementById("modalLinks");

function openProject(projectKey) {
  const project = projectData[projectKey];

  if (!project) {
    return;
  }

  modalCategory.textContent = project.category;
  modalTitle.textContent = project.title;
  modalSummary.textContent = project.summary;
  modalOverview.textContent = project.overview;

  modalGallery.innerHTML = "";
  project.images.forEach((imagePath) => {
    const img = document.createElement("img");
    img.src = imagePath;
    img.alt = project.title;
    img.onerror = function () {
      this.remove();
    };
    modalGallery.appendChild(img);
  });

  modalMethods.innerHTML = "";
  project.methods.forEach((method) => {
    const li = document.createElement("li");
    li.textContent = method;
    modalMethods.appendChild(li);
  });

  modalOutputs.innerHTML = "";
  project.outputs.forEach((output) => {
    const li = document.createElement("li");
    li.textContent = output;
    modalOutputs.appendChild(li);
  });

  modalTools.innerHTML = "";
  project.tools.forEach((tool) => {
    const span = document.createElement("span");
    span.textContent = tool;
    modalTools.appendChild(span);
  });

  modalLinks.innerHTML = "";
  if (project.links && project.links.length > 0) {
    project.links.forEach((link) => {
      const a = document.createElement("a");
      a.href = link.url;
      a.textContent = link.label;
      a.target = "_blank";
      a.rel = "noopener";
      modalLinks.appendChild(a);
    });
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProject() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    const projectKey = card.dataset.project;
    openProject(projectKey);
  });
});

modalClose.addEventListener("click", closeProject);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeProject();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("active")) {
    closeProject();
  }
});
