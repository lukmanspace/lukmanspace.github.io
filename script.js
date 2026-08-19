const projectData = {
  "seaMpa": {
    "category": "Marine Spatial Planning",
    "title": "Marine Protected Area Network Design for FMA715",
    "summary": "GIS- and Marxan-based conservation planning for FMA715 and six eastern Indonesian provinces, integrating ecological priorities with fisheries, infrastructure, and other spatial constraints. The analysis identified 44 Areas of Interest for potential new or expanded MPAs.",
    "images": [
      "assets/images/sea-project.jpg",
      "assets/images/sea-shallow.jpg",
      "assets/images/sea-deep.jpg",
      "assets/images/sea-threat.jpg"
    ],
    "overview": [
      "This project supported the design of a Marine Protected Area network for Fisheries Management Area 715 and six associated provinces in eastern Indonesia. The planning area covered approximately 1.61 million km² and brought together biodiversity, fisheries, marine spatial planning, and protected-area objectives across a large and ecologically diverse region.",
      "The analysis compiled 170 spatial layers covering habitats, critical species areas, cultural values, existing and proposed MPAs, threats, and marine uses. Marxan was applied in separate shallow-water and combined shallow/deepwater analyses, with locked-in areas, locked-out constraints, and a weighted cost surface used to keep the model grounded in real planning conditions.",
      "The final design combined systematic conservation planning with expert review and provincial stakeholder input. It included 122 existing or proposed MPAs and identified 44 additional Areas of Interest for potential new or expanded protection."
    ],
    "role": [
      "As part of the project team, I contributed to the GIS and spatial planning workflow: compiling and processing datasets, preparing conservation feature layers, supporting Marxan inputs, assessing existing and proposed MPAs, identifying conservation gaps, and producing map-based outputs.",
      "I also helped refine Areas of Interest by examining overlaps between conservation priorities, threats, human-use constraints, and existing Marine Spatial Plan allocations."
    ],
    "methods": [
      "Marine gap analysis and systematic conservation planning",
      "Conservation feature and threat mapping",
      "Hexagonal planning-unit preparation",
      "Two-stage shallow-water and deepwater Marxan analysis",
      "Locked-in, locked-out, and cost-surface modelling",
      "Participatory expert review and spatial refinement",
      "Post-hoc MPA network evaluation"
    ],
    "outputs": [
      "Regional MPA network design for FMA715 and six provinces.",
      "122 existing/proposed MPAs incorporated into the network design.",
      "44 Areas of Interest identified for potential new or expanded MPAs.",
      "Maps of habitats, threats, constraints, conservation gaps, and priority areas.",
      "Spatial evidence to support fisheries management and marine spatial planning."
    ],
    "tools": [
      "ArcGIS",
      "Marxan",
      "GIS",
      "Spatial Overlay",
      "Cost Surface Modelling",
      "Hexagonal Planning Units"
    ],
    "links": [
      {
        "label": "View Marxan Case Study",
        "url": "https://marxansolutions.org/community/designing-marine-protected-area-networks-in-indonesia/"
      }
    ]
  },
  "atseaMpa": {
    "category": "Transboundary Conservation Planning",
    "title": "Resilient MPA Network for the Arafura and Timor Seas",
    "summary": "A transboundary MPA planning project across Indonesia, Timor-Leste, Australia, and Papua New Guinea. GIS, marine gap analysis, Marxan, cost surfaces, and stakeholder consultation were combined to strengthen habitat representation and regional connectivity.",
    "images": [
      "assets/images/atsea-project.jpg",
      "assets/images/atsea-area.jpg",
      "assets/images/atsea-shallow.jpg",
      "assets/images/atsea-deep.jpg",
      "assets/images/atsea-kef.jpg",
      "assets/images/atsea-threat.jpg",
      "assets/images/atsea-cost.jpg",
      "assets/images/atsea-result.jpg"
    ],
    "overview": [
      "This project developed the first region-wide resilient Marine Protected Area network for the Arafura and Timor Seas, a transboundary marine region shared by Indonesia, Timor-Leste, Australia, and Papua New Guinea. The goal was to identify gaps in the existing protected-area system and improve ecological representation, connectivity, and resilience across national boundaries.",
      "The workflow integrated existing and proposed MPAs, ecological features, migratory and threatened-species areas, deepwater geomorphology, cultural values, fisheries pressure, shipping, infrastructure, and other marine uses. Marxan was used to identify efficient conservation priorities while locked-out areas and weighted costs represented practical planning constraints.",
      "Stakeholder workshops were used to review data, assumptions, and model outputs. The final network covered 301,055 km² and included 93 existing/proposed MPAs, 13 previously identified Areas of Interest, and seven new Areas of Interest."
    ],
    "role": [
      "As part of the core team, I contributed to the GIS and spatial analysis workflow by compiling and processing spatial datasets, preparing conservation feature layers, supporting marine gap analysis and systematic conservation planning inputs, and producing regional planning maps.",
      "I also contributed to interpreting habitat-representation gaps, evaluating overlaps between conservation priorities and human-use constraints, and refining potential Areas of Interest."
    ],
    "methods": [
      "Transboundary marine gap analysis",
      "Systematic conservation planning with Marxan",
      "Country and marine-ecoregion stratification",
      "Conservation feature and threat mapping",
      "Weighted cost-surface modelling",
      "Locked-in and locked-out spatial constraints",
      "Stakeholder-informed review and refinement"
    ],
    "outputs": [
      "301,055 km² regional MPA network design.",
      "93 existing/proposed MPAs and 13 previous AOIs incorporated.",
      "Seven new Areas of Interest identified across the region.",
      "Threat, cost-surface, ecological-feature, and final network maps.",
      "Spatial evidence supporting transboundary marine governance and conservation planning."
    ],
    "tools": [
      "ArcGIS",
      "Marxan",
      "GIS",
      "Protected Area Gap Analysis",
      "Cost Surface Modelling",
      "Transboundary GIS"
    ],
    "links": []
  },
  "greenRoof": {
    "category": "Remote Sensing & Machine Learning",
    "title": "Green Roof Detection in Baden-Württemberg",
    "summary": "A state-scale green roof detection workflow combining LoD2 roof-plane geometry with PlanetScope multispectral imagery. Random Forest classification produced a probability-based 2025 inventory with multiple confidence thresholds for planning and validation.",
    "images": [
      "assets/images/green_roof_poster.jpg",
      "assets/images/green-roof-detection.png"
    ],
    "overview": [
      "For my master’s thesis, I developed a roof-plane-level green roof detection workflow for Baden-Württemberg, Germany. The objective was to create a scalable 2025 inventory by combining official LoD2 CityGML building models with multispectral PlanetScope imagery.",
      "The pipeline extracted roof geometry and semantic attributes, including slope, area, aspect, height, roof type, and building function, then combined them with seasonal spectral and NDVI features. I manually labelled roof planes in Stuttgart, Karlsruhe, Freiburg im Breisgau, and Tübingen and compared Random Forest and Multilayer Perceptron models using Leave-One-City-Out validation.",
      "Random Forest performed best and was used for state-wide inference. The final product was a probability-based inventory rather than a single rigid binary layer, allowing balanced and high-confidence thresholds to support different planning and verification needs."
    ],
    "role": [
      "I designed and implemented the end-to-end workflow, including LoD2 preprocessing, PlanetScope feature extraction, manual labelling, model training and validation, feature analysis, state-wide inference, and preparation of planning-ready output layers."
    ],
    "methods": [
      "LoD2 CityGML roof-plane processing",
      "Seasonal PlanetScope and NDVI feature extraction",
      "Manual roof-plane labelling",
      "Random Forest and MLP comparison",
      "Leave-One-City-Out validation",
      "Feature-importance and ablation analysis",
      "Probability-based thresholding"
    ],
    "outputs": [
      "Probability-based 2025 green roof inventory for Baden-Württemberg.",
      "Balanced and high-confidence candidate layers.",
      "Random Forest selected over the MLP baseline.",
      "Planning-ready outputs for reporting and manual verification."
    ],
    "tools": [
      "Python",
      "GeoPandas",
      "Rasterio",
      "GDAL",
      "QGIS",
      "scikit-learn",
      "CityGML/LoD2",
      "PlanetScope"
    ],
    "links": []
  },
  "landfill": {
    "category": "GIS Suitability Analysis",
    "title": "Fuzzy GIS-Based Landfill Suitability Analysis",
    "summary": "A raster-based site-suitability analysis for Eastern Baden-Württemberg using fuzzy membership functions to represent gradual environmental and accessibility constraints. Weighted scoring and multiplicative overlay were compared to identify robust candidate areas.",
    "images": [
      "assets/images/fuzzy_scoring.jpg",
      "assets/images/fuzzy_overlay.jpg"
    ],
    "overview": [
      "This project evaluated potential landfill locations in Eastern Baden-Württemberg using fuzzy GIS rather than rigid Boolean suitability classes. The model represented environmental, topographic, geological, and accessibility conditions as gradual suitability values from 0 to 1.",
      "Slope and aspect were derived from a DEM, while Euclidean-distance rasters represented proximity to rivers, roads, settlements, and geological boundaries. These criteria were transformed into fuzzy membership layers and combined using two approaches: a weighted scoring model and a stricter multiplicative overlay.",
      "Both approaches highlighted two strong candidate areas in the southeastern part of the study area, with the second candidate showing the most consistent concentration of high-suitability pixels."
    ],
    "role": [
      "I worked on the raster GIS workflow, including data preprocessing, DEM-derived terrain analysis, distance modelling, fuzzy membership design, weighted and multiplicative overlays, result interpretation, candidate comparison, and final cartographic outputs."
    ],
    "methods": [
      "DEM-based slope and aspect analysis",
      "Euclidean-distance modelling",
      "Fuzzy membership functions",
      "Weighted suitability scoring",
      "Multiplicative fuzzy overlay",
      "Environmental constraint mapping",
      "Candidate-area comparison"
    ],
    "outputs": [
      "Fuzzy weighted-scoring suitability map.",
      "Multiplicative fuzzy-overlay suitability map.",
      "Two high-priority landfill candidate areas.",
      "Cartographic outputs and comparative candidate assessment."
    ],
    "tools": [
      "GIS",
      "Raster Analysis",
      "Spatial Analyst",
      "Raster Calculator",
      "Fuzzy Logic",
      "DEM Processing"
    ],
    "links": []
  },
  "urbanVegetation": {
    "category": "Urban Remote Sensing & Deep Learning",
    "title": "Stuttgart Urban Vegetation Mapping",
    "summary": "A deep-learning comparison of U-Net semantic segmentation and YOLOv11 object detection for mapping tall and flat vegetation from 8 cm aerial imagery. U-Net produced the strongest pixel-level results, while YOLO was more useful for approximate localization and counting.",
    "images": [
      "assets/images/segmentation.jpg",
      "assets/images/detection.jpg"
    ],
    "overview": [
      "This project explored automated urban vegetation mapping from high-resolution aerial orthophotos of Stuttgart. The imagery contained RGB and near-infrared bands at 8 cm ground sample distance and was manually annotated into tall vegetation and flat vegetation classes.",
      "Two computer-vision approaches were compared. A U-Net model performed pixel-level semantic segmentation, while YOLOv11 detected vegetation using bounding boxes. U-Net achieved the strongest overall mapping performance, with a best IoU of 65.7% and an F1-score of approximately 84%; YOLOv11 reached a best mAP50 of 56.2%.",
      "RGB-only and RGB+NIR inputs were also compared, and adding NIR did not substantially improve performance. The workflow was further tested on aerial imagery from Mannheim to assess generalization beyond the training area."
    ],
    "role": [
      "I contributed to aerial-image preparation, vegetation annotation, model experimentation, performance evaluation, out-of-distribution testing, and interpretation of the resulting vegetation maps."
    ],
    "methods": [
      "Aerial image tiling and preparation",
      "Manual annotation in LabelStudio",
      "RGB versus RGB+NIR comparison",
      "U-Net semantic segmentation",
      "YOLOv11 object detection",
      "Performance evaluation",
      "Out-of-distribution testing on Mannheim imagery"
    ],
    "outputs": [
      "Pixel-level vegetation maps from U-Net segmentation.",
      "YOLOv11 vegetation detection outputs.",
      "Best U-Net IoU of 65.7% and F1-score of approximately 84%.",
      "Best YOLOv11 mAP50 of 56.2%.",
      "Generalization assessment on Mannheim aerial imagery."
    ],
    "tools": [
      "Python",
      "PyTorch",
      "U-Net",
      "YOLOv11",
      "LabelStudio",
      "RGB/NIR Imagery",
      "GIS"
    ],
    "links": []
  },
  "mangrove": {
    "category": "Coastal Remote Sensing & Field Ecology",
    "title": "Mangrove and Aquaculture Dynamics in East Kalimantan",
    "summary": "A multi-temporal ecosystem monitoring project combining Landsat, Sentinel-2, field measurements, Random Forest, GEOBIA, LAI estimation, and biomass/carbon modelling to quantify mangrove loss and aquaculture expansion from 1990 to 2019.",
    "images": [
      "assets/images/apcrs-sentinel.jpg",
      "assets/images/apcrs-tree.jpg",
      "assets/images/apcrs-nipah.jpg",
      "assets/images/mangrove.png",
      "assets/images/pond.png",
      "assets/images/apcrs-field.jpg",
      "assets/images/apcrs-hemi.jpg",
      "assets/images/apcrs_poster.jpg"
    ],
    "overview": [
      "This project examined mangrove loss, aquaculture expansion, canopy structure, biomass, and carbon stock across East Kalimantan in 1990, 2000, and 2019. Landsat and Sentinel-2 imagery were processed in Google Earth Engine and combined with field measurements and statistical modelling.",
      "Historical mangrove and pond distributions were classified with Random Forest, while the 2019 mapping used Sentinel-2, visual interpretation, and GEOBIA for more detailed pond and mangrove classes. Field-based hemispherical photography and DBH measurements supported Leaf Area Index, biomass, and carbon-stock estimation, with NDVI-based regression used to extend field measurements spatially.",
      "The results showed mangrove area declining from 268,147 ha in 1990 to 215,514 ha in 2019, while pond area increased from 9,935 ha to 86,471 ha. Across both observation periods, 65% of total mangrove reduction was associated with conversion to ponds."
    ],
    "role": [
      "As part of the spatial team, I contributed to satellite processing, spectral-index generation, land-cover classification, change analysis, interpretation of mangrove-to-pond conversion, and map production.",
      "My field and biophysical work included navigating survey areas, collecting hemispherical canopy photographs and DBH measurements, processing canopy images in ImageJ, estimating LAI, applying species-specific allometric equations, and supporting NDVI-based upscaling of LAI, biomass, and carbon estimates."
    ],
    "methods": [
      "Multi-temporal Landsat and Sentinel-2 analysis",
      "Google Earth Engine image compositing",
      "Random Forest classification",
      "GEOBIA and visual interpretation",
      "Spectral-index and change analysis",
      "Hemispherical photography and ImageJ processing",
      "LAI, biomass, carbon, and NDVI-regression modelling"
    ],
    "outputs": [
      "Mangrove and pond maps for 1990, 2000, and 2019.",
      "Mangrove-to-pond conversion analysis.",
      "Mangrove decline from 268,147 ha to 215,514 ha across the study period.",
      "Pond expansion from 9,935 ha to 86,471 ha.",
      "LAI, biomass, and carbon-stock estimation workflow."
    ],
    "tools": [
      "Google Earth Engine",
      "Landsat",
      "Sentinel-2",
      "Random Forest",
      "GEOBIA",
      "ImageJ",
      "NDVI",
      "GIS"
    ],
    "links": []
  },
  "habitat": {
    "category": "Marine Remote Sensing",
    "title": "Shallow-Water Habitat Mapping",
    "summary": "A field-to-map workflow for benthic habitat classification that combined underwater photography, CPCE-based cover interpretation, image preprocessing, and Lyzenga water-column correction to improve separation of shallow-water habitat classes.",
    "images": [
      "assets/images/benthic-gt1.jpg",
      "assets/images/benthic-gt2.jpg",
      "assets/images/benthic-gt3.jpg",
      "assets/images/benthic-img.jpg",
      "assets/images/benthic-img-grey.jpg",
      "assets/images/benthic-img-color.jpg"
    ],
    "overview": [
      "This project mapped shallow-water benthic habitats by combining field observations with remote sensing. The target classes included coral, seagrass, algae, sand, rubble, and mixed substrates, where image interpretation is complicated by water depth, clarity, turbidity, and sunlight penetration.",
      "Field reference data were collected using a self-produced 50 × 50 cm PVC quadrat and underwater photography. The images were interpreted in CPCE to estimate percentage cover of benthic components and provide quantitative training and validation information.",
      "Before classification, imagery was clipped and masked and then corrected for water-column effects using the Lyzenga method. The corrected imagery was classified using the field and CPCE reference data, producing a final spatial map of shallow-water habitat classes."
    ],
    "role": [
      "I contributed to the field survey and remote-sensing workflow, including quadrat-based sampling, underwater image collection, CPCE interpretation, image preprocessing, Lyzenga water-column correction, habitat classification, validation, and final map production."
    ],
    "methods": [
      "Field survey design and sampling",
      "50 × 50 cm PVC quadrat observations",
      "Underwater photography",
      "CPCE-based benthic-cover analysis",
      "Satellite/aerial image preprocessing",
      "Lyzenga water-column correction",
      "Habitat classification and field validation"
    ],
    "outputs": [
      "Classified shallow-water benthic habitat map.",
      "Field reference and underwater-photo dataset.",
      "CPCE-derived benthic-cover statistics.",
      "Water-column-corrected imagery for habitat classification."
    ],
    "tools": [
      "Field Survey",
      "Underwater Photography",
      "CPCE",
      "Remote Sensing",
      "Lyzenga Correction",
      "GIS"
    ],
    "links": []
  }
};

const modal = document.getElementById("projectModal");
const modalClose = document.querySelector(".modal-close");

const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalSummary = document.getElementById("modalSummary");
const modalGallery = document.getElementById("modalGallery");
const modalOverview = document.getElementById("modalOverview");
const modalRole = document.getElementById("modalRole");
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
  renderParagraphs(modalOverview, project.overview);
  renderParagraphs(modalRole, project.role);

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
