const projectData = {
  seaMpa: {
    category: "Marine Spatial Planning",
    title: "Marine Protected Area Network Design for FMA715",
    summary:
      "A large-scale MPA network design for eastern Indonesia using GIS, Marxan, marine gap analysis, participatory expert mapping, habitat targets, and spatial constraints.",
    images: [
      "assets/images/sea-project.jpg",
      "assets/images/sea-shallow.jpg",
      "assets/images/sea-deep.jpg",
      "assets/images/sea-threat.jpg"
    ],
    overview:
      "This project designed a Marine Protected Area network for Fisheries Management Area 715 and six associated provinces in eastern Indonesia: West Papua, Maluku, North Maluku, North Sulawesi, Central Sulawesi, and Gorontalo. The work connected fisheries management, marine spatial planning, and national protected-area expansion goals through a GIS-based conservation planning workflow.",
    methods: [
      "Delineated a planning area of approximately 1.61 million km2, covering about 49.5% of Indonesia's marine waters.",
      "Compiled a large spatial database covering MPA status, shallow-water habitats, deepwater habitats, critical species areas, cultural sites, threats, and other marine uses.",
      "Ran Marxan in two stages: a shallow-water analysis using smaller planning units, then a combined shallow- and deepwater analysis using larger offshore planning units.",
      "Used locked-in, locked-out, and weighted cost-surface layers to account for existing MPAs, proposed MPAs, ports, military zones, oil and gas areas, underwater cables, fisheries, and other constraints.",
      "Combined systematic conservation planning with expert workshops and provincial stakeholder input to validate and refine Areas of Interest."
    ],
    outputs: [
      "MPA network design for FMA715 and six associated provinces.",
      "122 existing and proposed MPAs covering about 10.1 million hectares, plus 44 Areas of Interest covering about 5.3 million hectares.",
      "Decision-support maps for shallow-water habitats, deepwater habitats, cost surfaces, existing MPAs, proposed MPAs, and priority Areas of Interest.",
      "Contribution to GIS processing, conservation feature preparation, Marxan input support, gap analysis, and map-based planning outputs."
    ],
    tools: [
      "GIS",
      "ArcGIS",
      "Marxan",
      "Marine Spatial Planning",
      "Marine Gap Analysis",
      "Cost Surface Modeling",
      "Hexagonal Planning Units",
      "MPA Network Design",
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
    title: "Resilient MPA Network for the Arafura and Timor Seas",
    summary:
      "A transboundary MPA network design for the Arafura and Timor Seas using GIS, Marxan, protected-area gap analysis, cost surfaces, and stakeholder-informed spatial planning.",
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
    overview:
      "This project supported the design of a climate-resilient Marine Protected Area network for the Arafura and Timor Seas, a transboundary marine region shared by Indonesia, Timor-Leste, Australia, and Papua New Guinea. The work integrated conservation features, human-use constraints, marine threats, existing and proposed MPAs, and Areas of Interest into a regional spatial planning workflow.",
    methods: [
      "Prepared regional GIS layers for shallow-water habitats, deepwater habitats, key ecological features, existing and proposed MPAs, human uses, and threats.",
      "Used marine gap analysis to identify underrepresented habitats and priority ecological features across the ATS region.",
      "Developed weighted cost surfaces to reduce conflict with fishing pressure, shipping lanes, ports, oil and gas areas, cables, military zones, and other marine uses.",
      "Applied Marxan in staged shallow-water and combined shallow/deepwater analyses with locked-in and locked-out planning constraints.",
      "Supported stakeholder-informed refinement through regional review involving governments, scientists, NGOs, community representatives, and private-sector actors."
    ],
    outputs: [
      "A 301,055 km2 ATS MPA network design endorsed by the four ATS countries.",
      "Network design including 93 existing and proposed MPAs, 13 previously identified Areas of Interest, and seven new Areas of Interest.",
      "Spatial products showing conservation features, threats, cost surfaces, priority areas, and final network design.",
      "Contribution to GIS processing, conservation-feature mapping, gap analysis, Marxan input development, and interpretation of planning trade-offs."
    ],
    tools: [
      "GIS",
      "ArcGIS",
      "Marxan",
      "Marine Gap Analysis",
      "Systematic Conservation Planning",
      "Cost Surface Modeling",
      "Transboundary GIS",
      "MPA Network Design"
    ],
    links: []
  },

  urbanVegetation: {
    category: "Urban Remote Sensing & Deep Learning",
    title: "Stuttgart Urban Vegetation Mapping",
    summary:
      "U-Net semantic segmentation and YOLOv11 object detection for mapping tall and flat vegetation from high-resolution RGB and RGB+NIR aerial imagery.",
    images: [
      "assets/images/segmentation.jpg",
      "assets/images/detection.jpg"
    ],
    overview:
      "This project mapped urban vegetation from high-resolution aerial orthophotos of Stuttgart, Germany. The imagery was provided by the Stadtmessungsamt Stuttgart and included RGB and near-infrared bands at 8 cm ground sample distance. The project tested how computer vision models can support automatic detection and classification of vegetation in dense urban environments.",
    methods: [
      "Tiled high-resolution aerial imagery into smaller patches and manually annotated vegetation samples with LabelStudio.",
      "Separated vegetation into tall vegetation, such as trees and shrubs, and flat vegetation, such as grass and cultivated areas.",
      "Implemented U-Net semantic segmentation in PyTorch to classify vegetation at pixel level.",
      "Applied YOLOv11 object detection to localize vegetation features with bounding boxes.",
      "Compared RGB and RGB+NIR inputs and tested model generalization on out-of-distribution aerial imagery from Mannheim."
    ],
    outputs: [
      "Semantic segmentation outputs for precise vegetation boundaries.",
      "Object detection outputs for approximate localization and counting.",
      "Best semantic segmentation performance of 65.7% IoU and approximately 84% F1-score.",
      "Best object detection performance of 56.2% mAP50.",
      "Contribution to aerial image preparation, annotation, model experimentation, evaluation, and interpretation."
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

  greenRoof: {
    category: "Remote Sensing & Machine Learning",
    title: "Green Roof Detection in Baden-Wuerttemberg",
    summary:
      "A state-scale green roof detection workflow integrating LoD2 CityGML roof-plane geometry, PlanetScope multispectral imagery, NDVI feature extraction, and supervised machine learning.",
    images: [
      "assets/images/green_roof_poster.jpg",
      "assets/images/green-roof-detection.png"
    ],
    overview:
      "For this master's thesis project, I developed a roof-plane-level green roof detection workflow for Baden-Wuerttemberg, Germany. The goal was to create a scalable 2025 green roof inventory by combining official LoD2 CityGML building models with multispectral PlanetScope satellite imagery in a supervised machine learning framework.",
    methods: [
      "Extracted geometric and semantic features from LoD2 roof surfaces, including slope, area, aspect, height, roof type, and building function.",
      "Combined roof-plane features with seasonal spectral indicators from PlanetScope winter and summer imagery, especially NDVI-based vegetation statistics.",
      "Manually labelled roof planes in Stuttgart, Karlsruhe, Freiburg im Breisgau, and Tuebingen.",
      "Compared Random Forest and Multilayer Perceptron models using Leave-One-City-Out validation to test cross-city generalization.",
      "Generated probability-based threshold layers ranging from balanced detection to high-confidence green roof candidates."
    ],
    outputs: [
      "Probability-based 2025 green roof inventory for Baden-Wuerttemberg.",
      "Machine-learning-ready geospatial feature tables combining geometry, semantics, and spectral attributes.",
      "Model comparison showing Random Forest outperforming the MLP baseline.",
      "Feature importance and ablation results highlighting NDVI, roof area, slope, height, and semantic attributes.",
      "Planning-oriented candidate layers for exploratory analysis, municipal reporting, and manual verification."
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
      "A raster-based GIS suitability model for landfill allocation in Eastern Baden-Wuerttemberg using fuzzy membership functions, weighted scoring, and multiplicative overlay.",
    images: [
      "assets/images/fuzzy_scoring.jpg",
      "assets/images/fuzzy_overlay.jpg"
    ],
    overview:
      "This project identified suitable landfill allocation areas in Eastern Baden-Wuerttemberg using a raster-based fuzzy GIS suitability model. Instead of treating suitability as a rigid yes-or-no condition, the analysis represented gradual environmental, topographic, geological, and accessibility conditions with fuzzy membership values from 0 to 1.",
    methods: [
      "Prepared elevation, hydrographic, road, settlement, and geological protection datasets.",
      "Derived slope and aspect from a DEM and generated Euclidean distance rasters for rivers, roads, settlements, and aquifer boundaries.",
      "Converted each criterion into fuzzy membership rasters using raster calculator expressions and linear membership functions.",
      "Compared a weighted scoring model with a stricter multiplicative fuzzy overlay model.",
      "Interpreted candidate areas based on terrain, distance from rivers and settlements, geological protection, and road accessibility."
    ],
    outputs: [
      "Fuzzy weighted-scoring suitability map.",
      "Multiplicative fuzzy overlay suitability map.",
      "Identification of two strong landfill candidate areas in the southeastern part of the study area.",
      "Comparison of flexible and conservative decision-support approaches.",
      "Contribution to raster preprocessing, fuzzy membership design, overlay modeling, result interpretation, and cartographic outputs."
    ],
    tools: [
      "GIS",
      "Raster Analysis",
      "Spatial Analyst",
      "Raster Calculator",
      "Fuzzy Logic",
      "Suitability Modeling",
      "DEM Processing",
      "Environmental Planning",
      "Cartographic Visualization"
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
    overview:
      "This project analyzed long-term mangrove forest loss, aquaculture pond expansion, canopy structure, and biomass-related carbon stock in East Kalimantan, Indonesia. The work combined multi-temporal Landsat and Sentinel-2 imagery, field measurements, machine learning classification, object-based mapping, hemispherical photography, and NDVI-based biophysical modeling.",
    methods: [
      "Processed Landsat imagery for 1990 and 2000 and Sentinel-2 imagery for 2019 in Google Earth Engine.",
      "Generated annual mosaics and spectral indices including NDVI, NDBI, MNDWI, AWEI, CMRI, and Mangrove Index.",
      "Used Random Forest classification for historical mangrove and pond mapping and GEOBIA/visual interpretation for detailed 2019 mapping.",
      "Processed hemispherical canopy photographs in ImageJ to estimate Leaf Area Index from sky, trunk, and leaf proportions.",
      "Used DBH field measurements, species-specific allometric equations, and NDVI regression models to estimate LAI, biomass, and carbon stock spatially."
    ],
    outputs: [
      "Mangrove and pond maps for 1990, 2000, and 2019.",
      "Change analysis showing mangrove decline from 268,147 ha in 1990 to 215,514 ha in 2019, and pond expansion from 9,935 ha to 86,471 ha.",
      "Classification accuracies of 95.75% for 1990 and 93.95% for 2000.",
      "Spatial assessment of mangrove-to-pond conversion, including strong conversion pressure in the Mahakam Delta.",
      "Contribution to satellite processing, spectral-index generation, classification support, fieldwork, LAI estimation, biomass/carbon modeling, and map outputs."
    ],
    tools: [
      "Google Earth Engine",
      "Landsat",
      "Sentinel-2",
      "Random Forest",
      "GEOBIA",
      "NDVI",
      "ImageJ",
      "Hemispherical Photography",
      "LAI Estimation",
      "Allometric Equations",
      "Carbon Stock Estimation",
      "Spatial Change Detection"
    ],
    links: []
  },

  habitat: {
    category: "Marine Remote Sensing",
    title: "Shallow-Water Habitat Mapping",
    summary:
      "Benthic habitat mapping using field survey data, underwater photography, CPCE interpretation, remote sensing preprocessing, and Lyzenga water-column correction.",
    images: [
      "assets/images/benthic-gt1.jpg",
      "assets/images/benthic-gt2.jpg",
      "assets/images/benthic-gt3.jpg",
      "assets/images/benthic-img.jpg",
      "assets/images/benthic-img-grey.jpg",
      "assets/images/benthic-img-color.jpg"
    ],
    overview:
      "This project mapped shallow-water benthic habitats by combining field survey data, underwater photography, and remote sensing image processing. The aim was to classify coastal habitat types such as coral, seagrass, algae, sand, rubble, and mixed substrates in shallow marine environments.",
    methods: [
      "Designed field sampling locations and used a self-produced 50 cm x 50 cm PVC quadrat grid for benthic observations.",
      "Collected underwater photographs with a waterproof camera and interpreted benthic cover percentages using CPCE.",
      "Prepared imagery by clipping the study area, masking land and deep-water areas, and enhancing visible bands for shallow-water analysis.",
      "Applied Lyzenga water-column correction using sand samples from different depth zones to reduce depth-related spectral variation.",
      "Classified corrected imagery into major shallow-water habitat classes and validated results with field and CPCE reference data."
    ],
    outputs: [
      "Classified shallow-water habitat map showing benthic habitat distribution.",
      "Field reference dataset based on quadrat observations and underwater photographs.",
      "CPCE-derived benthic cover statistics.",
      "Water-column-corrected imagery and final cartographic visualization.",
      "Improved connection between observed seabed conditions and satellite-based habitat classification."
    ],
    tools: [
      "Field Survey",
      "PVC Quadrat",
      "Underwater Photography",
      "CPCE",
      "Remote Sensing",
      "Lyzenga Correction",
      "Habitat Classification",
      "GIS",
      "Map Layout"
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
