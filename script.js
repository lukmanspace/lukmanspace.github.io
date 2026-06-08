const projectData = {
  mpa: {
    category: "Conservation Planning",
    title: "Marine Protected Area Network Design",
    summary:
      "Spatial prioritization and MARXAN-based conservation planning to support a resilient Marine Protected Area network.",
    images: [
      "assets/images/projects/mpa-network-1.jpg",
      "assets/images/projects/mpa-network-2.jpg"
    ],
    overview:
      "This project focused on supporting the design and optimization of Marine Protected Area networks using spatial prioritization methods. The analysis considered shallow-water habitats, deep-water habitats, and key biodiversity or conservation features. The main objective was to support an ecologically representative and efficient conservation network guided by the principles of connectivity, adequacy, representativeness, and efficiency.",
    methods: [
      "Prepared and harmonized spatial datasets representing habitats, conservation features, planning units, and management zones.",
      "Applied MARXAN-based spatial prioritization to identify efficient conservation configurations.",
      "Used gap analysis to evaluate how well existing and proposed areas represented key ecological features.",
      "Supported interpretation of spatial prioritization outputs for conservation planning and stakeholder communication."
    ],
    outputs: [
      "Decision-support maps for Marine Protected Area network planning.",
      "Spatial prioritization outputs identifying important conservation areas.",
      "Technical map products and geospatial datasets for interdisciplinary conservation work.",
      "Contribution to conservation planning workflows involving NGOs, researchers, and government stakeholders."
    ],
    tools: [
      "MARXAN",
      "QGIS",
      "ArcGIS",
      "Spatial Prioritization",
      "Gap Analysis",
      "Conservation Planning"
    ],
    links: []
  },

  greenRoof: {
    category: "Remote Sensing & Machine Learning",
    title: "Green Roof Detection in Baden-Württemberg",
    summary:
      "Roof-plane-level green roof detection using LoD2 building geometry, PlanetScope imagery, and machine learning.",
    images: [
      "assets/images/projects/green-roof-1.jpg",
      "assets/images/projects/green-roof-2.jpg"
    ],
    overview:
      "This project developed a geospatial machine learning workflow to detect vegetated roof surfaces across Baden-Württemberg. The workflow combined LoD2 roof-plane geometry, semantic building attributes, and PlanetScope satellite imagery to support the creation of a 2025 green roof inventory.",
    methods: [
      "Processed LoD2 CityGML roof-plane geometries and derived geometric features such as area, slope, aspect, and height-related attributes.",
      "Extracted satellite-derived spectral features from PlanetScope imagery for roof-plane-level classification.",
      "Prepared machine-learning-ready spatial datasets using Python and GeoPandas.",
      "Applied quality control and reproducible geodata processing steps for large-scale official spatial datasets.",
      "Evaluated model performance and prepared outputs for state-scale green roof inventory mapping."
    ],
    outputs: [
      "Roof-plane-level green roof prediction layers.",
      "Feature extraction and preprocessing workflows.",
      "Machine-learning-ready geospatial datasets.",
      "Inventory-oriented outputs supporting public-sector green infrastructure analysis."
    ],
    tools: [
      "Python",
      "GeoPandas",
      "PlanetScope",
      "LoD2 CityGML",
      "scikit-learn",
      "QGIS",
      "Machine Learning"
    ],
    links: []
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
