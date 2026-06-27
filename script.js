const projectData = {
  seaMpa: {
    category: "Marine Spatial Planning",
    title: "Marine Protected Area Network Design for FMA715",
    summary:
      "A large-scale marine spatial planning project for eastern Indonesia, designing an MPA network across FMA715 and six provinces.",
    images: [
      "assets/images/sea-project.jpg",
      "assets/images/sea-shallow.jpg",
      "assets/images/sea-deep.jpg",
      "assets/images/sea-threat.jpg"
    ],
    content: [
      "This project focused on designing a Marine Protected Area network for Fisheries Management Area 715 and six associated provinces in eastern Indonesia: West Papua, Maluku, North Maluku, North Sulawesi, Central Sulawesi, and Gorontalo. The work was prepared by The Nature Conservancy Indonesia Oceans Program and the Coral Triangle Center for the USAID Sustainable Ecosystems Advanced Project.",
      "FMA715 is one of Indonesia's most important marine regions, located in the heart of the Coral Triangle and covering waters such as Tomini Bay, the Maluku Sea, Halmahera Sea, Seram Sea, and Berau Bay. The area contains globally significant marine biodiversity, productive fisheries, coral reefs, mangroves, seagrasses, deepwater habitats, and critical habitats for rare, threatened, and protected species such as sea turtles, cetaceans, manta rays, whale sharks, coelacanths, and endemic walking sharks.",
      "The main objective was to design an MPA network that could support fisheries management, biodiversity conservation, provincial marine spatial planning, and national protected area expansion goals. The project addressed a key planning problem in Indonesia: Fisheries Management Areas, Marine Protected Areas, and Marine Spatial Plans are all important spatial management instruments, but they are not always integrated clearly.",
      "The planning area covered approximately 1.61 million km2, or about 49.5% of Indonesia's marine waters. The analysis followed a five-step workflow: defining conservation goals and design criteria, delineating planning areas and stratification units, identifying conservation features and threats, compiling spatial datasets, and designing the MPA network using Marxan and manual GIS refinement.",
      "A large GIS database was developed for the project, compiling 170 spatial data layers. Of these, 58 layers were used directly in the Marxan analysis, while 103 additional layers were used manually to refine the final Areas of Interest.",
      "The final MPA network design included 122 existing and proposed MPAs already allocated in provincial Marine Spatial Plans, covering approximately 10.1 million hectares, plus 44 Areas of Interest for potential new or expanded MPAs, covering approximately 5.3 million hectares.",
      "As part of the project team, I contributed to the GIS and spatial planning workflow, including compiling and processing spatial datasets, preparing conservation feature layers, supporting Marxan input preparation, analyzing existing and proposed MPAs, identifying conservation gaps, and contributing to map-based outputs for regional and provincial MPA planning."
    ],
    methods: [
      "Marine spatial planning",
      "Systematic conservation planning",
      "Marxan analysis",
      "Marine gap analysis",
      "Conservation feature mapping",
      "Hexagonal planning units",
      "Locked-in and locked-out constraint modeling",
      "Cost surface development",
      "Participatory expert mapping",
      "Post-hoc MPA network evaluation"
    ],
    outputs: [
      "MPA network design for FMA715 and six associated provinces.",
      "122 existing/proposed MPAs and 44 Areas of Interest for new or expanded MPAs.",
      "Spatial decision-support maps for shallow-water habitats, deepwater habitats, threats, constraints, and priority conservation areas.",
      "GIS and map-based outputs supporting fisheries management, biodiversity protection, and provincial planning."
    ],
    tools: [
      "GIS",
      "ArcGIS",
      "Marxan",
      "Marine Spatial Planning",
      "Protected Area Gap Analysis",
      "Spatial Overlay",
      "Cost Surface Modeling",
      "Marine Ecoregions",
      "Environmental Planning"
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
    title: "Resilient MPA Network for the Arafura and Timor Seas",
    summary:
      "A regional MPA network design for the Arafura and Timor Seas using marine gap analysis, Marxan, spatial constraints, cost surfaces, and stakeholder consultation.",
    images: [
      "assets/images/atsea-project.jpg",
      "assets/images/atsea-area.jpg",
      "assets/images/atsea-shallow.jpg",
      "assets/images/atsea-deep.jpg",
      "assets/images/atsea-kef.jpg",
      "assets/images/atsea-threat.jpg",
      "assets/images/atsea-cost.jpg",
      "assets/images/atsea-result.jpg"
    ],
    content: [
      "This project supported the design of a resilient Marine Protected Area network for the Arafura and Timor Seas. The region spans waters of Indonesia, Timor-Leste, Australia, and Papua New Guinea, and contains important shallow-water habitats, deepwater habitats, migratory routes, critical ecological features, and high-value fisheries.",
      "The analysis considered human uses and threats that could conflict with conservation planning, including fishing pressure, shipping lanes, ports, oil and gas areas, underwater cables, military areas, sea mine areas, power plant impacts, mangrove logging, turtle egg poaching, blast fishing, poison fishing, reef gleaning, and shark finning.",
      "A weighted cost surface was developed to help identify priority conservation areas while minimizing conflict with fisheries, industry, transportation, and other existing marine uses.",
      "The project used Marxan, a systematic conservation planning tool, to identify priority areas for inclusion in the regional MPA network. The Marxan analysis was performed in two stages: first for shallow-water habitats using finer planning units, and then for combined shallow and deepwater habitats using larger planning units.",
      "A major strength of the project was that it combined technical spatial analysis with stakeholder consultation. National and regional workshops with governments, scientists, NGOs, women's groups, private-sector actors, and other stakeholders were used to review data layers, refine assumptions, validate results, and improve the final network design.",
      "The final ATS MPA Network design covered 301,055 km2 and included 93 existing and proposed MPAs, 13 previously identified Areas of Interest, and seven new Areas of Interest identified through this study.",
      "As part of the core team, I created and supported the GIS and spatial analysis workflow used for the ATS regional MPA network design, including compiling spatial datasets, preparing conservation feature layers, supporting marine gap analysis, developing spatial inputs for systematic conservation planning, and contributing to map-based outputs."
    ],
    methods: [
      "Marine spatial planning",
      "Marine gap analysis",
      "Systematic conservation planning",
      "Marxan analysis",
      "Cost surface modeling",
      "Weighted spatial overlay",
      "Planning unit generation",
      "Locked-in and locked-out spatial constraint analysis",
      "Habitat representation analysis",
      "Stakeholder-informed spatial planning"
    ],
    outputs: [
      "301,055 km2 ATS MPA network design.",
      "Network containing 93 existing/proposed MPAs, 13 previous AOIs, and seven new AOIs.",
      "Threat, cost-surface, key ecological feature, and final network maps.",
      "Spatial evidence for biodiversity protection, fisheries resilience, climate adaptation, and transboundary marine governance."
    ],
    tools: [
      "GIS",
      "ArcGIS",
      "Marxan",
      "Marine Spatial Planning",
      "Systematic Conservation Planning",
      "Protected Area Gap Analysis",
      "Cost Surface Modeling",
      "Transboundary GIS"
    ],
    links: []
  },

  greenRoof: {
    category: "Remote Sensing & Machine Learning",
    title: "Green Roof Detection in Baden-Wuerttemberg",
    summary:
      "A state-scale green roof detection workflow for Baden-Wuerttemberg integrating LoD2 CityGML roof-plane geometry with PlanetScope multispectral imagery.",
    images: [
      "assets/images/green_roof_poster.jpg",
      "assets/images/green-roof-detection.png"
    ],
    content: [
      "For my master's thesis, I developed a roof-plane-level green roof detection workflow for Baden-Wuerttemberg, Germany. The goal was to create a scalable 2025 green roof inventory by combining official LoD2 CityGML building models with multispectral PlanetScope satellite imagery in a supervised machine learning framework.",
      "The project addresses a practical urban planning problem: green roofs provide benefits such as stormwater retention, urban cooling, biodiversity support, and climate adaptation, but consistent spatial inventories are still limited at regional scale. Manual mapping is too slow for a state-wide dataset, so I built an automated geospatial pipeline that detects vegetated roof surfaces directly at roof-plane level.",
      "The workflow extracts geometric features from LoD2 roof surfaces, including slope, area, aspect, height, roof type, and building function. These features are combined with seasonal spectral indicators from PlanetScope winter and summer imagery, especially NDVI-based vegetation statistics.",
      "I manually labelled roof planes in Stuttgart, Karlsruhe, Freiburg im Breisgau, and Tuebingen, then trained and compared Random Forest and Multilayer Perceptron models using Leave-One-City-Out validation to test cross-city generalization.",
      "Random Forest performed best and was selected for state-wide inference. Feature importance and ablation experiments showed that NDVI, roof area, slope, height, and semantic building attributes were the strongest predictors.",
      "The final output is a probability-based 2025 green roof inventory for Baden-Wuerttemberg. Instead of producing only one rigid binary map, the workflow generates multiple threshold layers, from balanced detection to high-confidence candidate layers."
    ],
    methods: [
      "LoD2 CityGML roof-plane extraction",
      "Python-based geospatial processing",
      "Manual roof labelling",
      "NDVI feature extraction",
      "Random Forest classification",
      "MLP baseline comparison",
      "Leave-One-City-Out validation",
      "Probability thresholding"
    ],
    outputs: [
      "Probability-based 2025 green roof inventory.",
      "Balanced and high-confidence candidate threshold layers.",
      "Feature importance and ablation results.",
      "Planning-ready outputs for municipal reporting and manual verification."
    ],
    tools: [
      "Python",
      "GeoPandas",
      "Rasterio",
      "GDAL",
      "QGIS",
      "scikit-learn",
      "CityGML/LoD2",
      "PlanetScope",
      "NDVI",
      "Random Forest",
      "MLP"
    ],
    links: []
  },

  landfill: {
    category: "GIS Suitability Analysis",
    title: "Stuttgart Fuzzy GIS-Based Landfill Suitability Analysis",
    summary:
      "A raster-based GIS project for landfill site selection in Eastern Baden-Wuerttemberg using fuzzy membership, weighted scoring, and multiplicative overlay.",
    images: [
      "assets/images/fuzzy_scoring.jpg",
      "assets/images/fuzzy_overlay.jpg"
    ],
    content: [
      "This project focused on identifying suitable landfill allocation areas in Eastern Baden-Wuerttemberg using a raster-based GIS suitability model. The main challenge was that landfill site selection is rarely a simple yes-or-no problem. Environmental, topographic, geological, and accessibility conditions often have gradual boundaries, where a location may be partially suitable rather than completely suitable or unsuitable.",
      "To address this, the project applied fuzzy set theory instead of traditional Boolean classification. Each spatial criterion was converted into a fuzzy membership raster with values ranging from 0 to 1, where 1 represented highly suitable conditions and 0 represented unsuitable conditions.",
      "The analysis began with preparing key spatial layers from elevation, hydrographic, road, settlement, and geological datasets. A Digital Elevation Model was used to derive slope and aspect rasters, while Euclidean distance analysis was applied to rivers, roads, settlements, and aquifer boundaries.",
      "After generating the individual fuzzy layers, two suitability modeling approaches were compared. The first was a weighted scoring model, where each criterion was assigned a normalized importance weight and combined into a final suitability score. The second was a stricter multiplicative overlay model, where all criteria were multiplied together.",
      "The final results identified two strong landfill candidate areas in the southeastern part of the study area. Both candidates showed favorable terrain, acceptable distance from rivers and settlements, suitable geological conditions, and accessibility to major roads.",
      "I worked on the raster-based GIS workflow, including preprocessing spatial datasets, deriving slope and aspect from DEM data, generating Euclidean distance rasters, designing fuzzy membership functions, and combining criteria using both weighted scoring and overlay operations."
    ],
    methods: [
      "Raster suitability modeling",
      "Fuzzy membership functions",
      "DEM-based slope and aspect analysis",
      "Euclidean distance analysis",
      "Weighted overlay analysis",
      "Multiplicative fuzzy overlay",
      "Environmental constraint mapping"
    ],
    outputs: [
      "Fuzzy weighted-scoring suitability map.",
      "Multiplicative fuzzy overlay suitability map.",
      "Two high-priority landfill candidate areas.",
      "Final cartographic outputs and candidate-area interpretation."
    ],
    tools: [
      "GIS",
      "Raster Analysis",
      "Spatial Analyst",
      "Raster Calculator",
      "Fuzzy Logic",
      "Suitability Modeling",
      "DEM Processing",
      "Environmental Planning"
    ],
    links: []
  },

  urbanVegetation: {
    category: "Urban Remote Sensing & Deep Learning",
    title: "Stuttgart Urban Vegetation Mapping",
    summary:
      "Applied U-Net semantic segmentation and YOLOv11 object detection to map tall and flat vegetation from high-resolution aerial imagery of Stuttgart.",
    images: [
      "assets/images/segmentation.jpg",
      "assets/images/detection.jpg"
    ],
    content: [
      "This project focused on mapping urban vegetation from high-resolution aerial imagery using deep learning methods. Urban vegetation plays an important role in climate adaptation, green space planning, cooling, stormwater management, and municipal environmental monitoring.",
      "The study used high-resolution aerial orthophotos of Stuttgart, Germany, provided by the Stadtmessungsamt Stuttgart. The imagery included RGB and near-infrared bands with a ground sample distance of 8 cm. The dataset was tiled into smaller image patches and manually annotated using LabelStudio.",
      "Vegetation was classified into two main categories: tall vegetation, including trees and shrubs, and flat vegetation, including grass and cultivated areas.",
      "Two deep learning approaches were compared: semantic segmentation and object detection. For semantic segmentation, a U-Net model was implemented using PyTorch to classify each pixel into vegetation or background classes. For object detection, YOLOv11 was used to detect vegetation through bounding boxes.",
      "Semantic segmentation achieved the strongest overall performance, with a best IoU score of 65.7% and an F1-score of approximately 84%. Object detection reached a best mAP50 score of 56.2%.",
      "I contributed to the remote sensing and deep learning workflow, including aerial image preparation, vegetation annotation, model experimentation, evaluation, and interpretation of results."
    ],
    methods: [
      "Aerial image tiling",
      "Manual annotation in LabelStudio",
      "RGB and RGB+NIR comparison",
      "U-Net semantic segmentation",
      "YOLOv11 object detection",
      "Out-of-distribution testing with Mannheim imagery"
    ],
    outputs: [
      "Pixel-level vegetation segmentation maps.",
      "Bounding-box vegetation detection outputs.",
      "Model performance comparison between semantic segmentation and object detection.",
      "Generalization test results on different aerial imagery."
    ],
    tools: [
      "Python",
      "PyTorch",
      "U-Net",
      "YOLOv11",
      "LabelStudio",
      "RGB/NIR Imagery",
      "Semantic Segmentation",
      "Object Detection",
      "GIS"
    ],
    links: []
  },

  mangrove: {
    category: "Coastal Remote Sensing & Field Ecology",
    title: "Mangrove and Aquaculture Dynamics in East Kalimantan",
    summary:
      "A remote sensing and field-based ecosystem monitoring project analyzing mangrove loss, aquaculture expansion, LAI, biomass, and carbon stock from 1990 to 2019.",
    images: [
      "assets/images/apcrs-sentinel.jpg",
      "assets/images/apcrs-tree.jpg",
      "assets/images/apcrs-nipah.jpg",
      "assets/images/mangrove.png",
      "assets/images/pond.png",
      "assets/images/apcrs-field.jpg",
      "assets/images/apcrs-hemi.jpg",
      "assets/images/apcrs_poster.jpg"
    ],
    content: [
      "This project analyzed the long-term spatial dynamics of mangrove forest loss, aquaculture pond expansion, canopy structure, and biomass-related carbon stock in East Kalimantan, Indonesia. The study focused on understanding how mangrove ecosystems changed across 1990, 2000, and 2019 using multi-temporal satellite imagery, field measurements, machine learning classification, and biophysical modeling.",
      "The main objective was to quantify and map the conversion of mangrove forests into aquaculture ponds, particularly in coastal regions such as the Mahakam Delta, Kutai Kartanegara, Berau, Balikpapan, North Penajam Paser, and Paser.",
      "The remote sensing workflow used Google Earth Engine to process Landsat imagery from 1990 and 2000, alongside Sentinel-2 imagery for 2019. Multiple spectral indices were derived, including NDVI, NDBI, MNDWI, AWEI, CMRI, and Mangrove Index.",
      "For historical years, a Random Forest classifier was used to classify mangrove and pond distribution. For 2019, a more detailed mapping process used Sentinel-2 imagery, visual interpretation, and Geographic Object-Based Image Analysis.",
      "The project incorporated field-based Leaf Area Index assessment using hemispherical photographs processed in ImageJ. It also included above-ground biomass and carbon stock estimation using DBH measurements, species-specific allometric equations, and NDVI-based regression models.",
      "The results showed mangrove cover decreasing from 268,147 hectares in 1990 to 215,514 hectares in 2019, while pond area increased from 9,935 hectares to 86,471 hectares. The analysis found that 65% of total mangrove reduction was associated with conversion into ponds.",
      "As part of the spatial team, I contributed to satellite image processing, spectral index generation, land-cover classification support, spatial change analysis, fieldwork, hemispherical photo processing, LAI estimation, biomass/carbon modeling, and map-based outputs."
    ],
    methods: [
      "Multi-temporal satellite image analysis",
      "Google Earth Engine processing",
      "Random Forest classification",
      "GEOBIA / object-based image analysis",
      "Spectral index generation",
      "Hemispherical photography",
      "ImageJ canopy analysis",
      "LAI estimation",
      "Allometric biomass estimation",
      "Carbon stock modeling"
    ],
    outputs: [
      "Mangrove and pond maps for 1990, 2000, and 2019.",
      "Mangrove-to-pond conversion analysis.",
      "LAI, biomass, and carbon stock estimation workflow.",
      "Publication and map-based environmental assessment outputs."
    ],
    tools: [
      "Google Earth Engine",
      "Remote Sensing",
      "GIS",
      "Landsat",
      "Sentinel-2",
      "Random Forest",
      "GEOBIA",
      "NDVI",
      "ImageJ",
      "Hemispherical Photography",
      "Allometric Equations"
    ],
    links: []
  },

  habitat: {
    category: "Marine Remote Sensing",
    title: "Shallow-Water Habitat Mapping",
    summary:
      "Benthic habitat mapping using field survey data, underwater photography, CPCE interpretation, image preprocessing, and Lyzenga water-column correction.",
    images: [
      "assets/images/benthic-gt1.jpg",
      "assets/images/benthic-gt2.jpg",
      "assets/images/benthic-gt3.jpg",
      "assets/images/benthic-img.jpg",
      "assets/images/benthic-img-grey.jpg",
      "assets/images/benthic-img-color.jpg"
    ],
    content: [
      "This project focused on mapping shallow-water benthic habitats by combining field survey data, underwater photography, and remote sensing image processing. The aim was to identify and classify coastal habitat types such as coral, seagrass, algae, sand, rubble, and mixed substrates in shallow marine environments.",
      "Shallow-water habitat mapping is challenging because the spectral response captured by satellite imagery is influenced not only by the seafloor type, but also by water depth, water clarity, turbidity, and sunlight penetration. To improve classification reliability, the project integrated field-based reference data with image preprocessing techniques, including water column correction using the Lyzenga method.",
      "During the field survey, I used a self-produced quadrat grid made from PVC pipe with a size of 50 cm x 50 cm. Underwater photographs were taken with a waterproof camera for each sampling point and used to document actual habitat conditions.",
      "The underwater photographs were analyzed using CPCE to estimate the percentage cover of different habitat components, converting visual field observations into quantitative reference data.",
      "Remote sensing imagery was prepared through clipping, land and deep-water masking, visible-band enhancement, and Lyzenga water-column correction. Sand samples from different depth zones were used to estimate the relationship between depth and spectral values.",
      "The final output was a classified shallow-water habitat map showing the distribution of benthic habitat types across the coastal study area. The workflow strengthened the connection between direct seabed observations and satellite-based habitat classification."
    ],
    methods: [
      "Field survey design",
      "50 cm x 50 cm PVC quadrat sampling",
      "Underwater photography",
      "CPCE-based benthic cover analysis",
      "Satellite image preprocessing",
      "Lyzenga water-column correction",
      "Habitat classification",
      "Validation with field reference data"
    ],
    outputs: [
      "Classified shallow-water habitat map.",
      "Field reference dataset.",
      "Benthic cover statistics.",
      "Water-column-corrected imagery.",
      "Final cartographic visualization."
    ],
    tools: [
      "Field Survey",
      "PVC Quadrat",
      "Underwater Photography",
      "CPCE",
      "Remote Sensing",
      "Lyzenga Correction",
      "GIS",
      "Habitat Classification"
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

function renderParagraphs(container, paragraphs) {
  container.innerHTML = "";
  paragraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    container.appendChild(p);
  });
}

function openProject(projectKey) {
  const project = projectData[projectKey];

  if (!project) {
    return;
  }

  modalCategory.textContent = project.category;
  modalTitle.textContent = project.title;
  modalSummary.textContent = project.summary;
  renderParagraphs(modalOverview, project.content);

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
