import React, { useEffect, useMemo, useState } from "react";
import "../Library.css";

/* =========================================================
   INLINE ICONS
========================================================= */

const Icon = ({ name, size = 20, strokeWidth = 1.8 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    search: (
      <svg {...common}>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </svg>
    ),

    close: (
      <svg {...common}>
        <path d="M6 6l12 12" />
        <path d="M18 6 6 18" />
      </svg>
    ),

    arrow: (
      <svg {...common}>
        <path d="M5 12h13" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    ),

    book: (
      <svg {...common}>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
        <path d="M4 5.5v16" />
        <path d="M8 7h8" />
        <path d="M8 11h7" />
      </svg>
    ),

    file: (
      <svg {...common}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8" />
        <path d="M8 17h6" />
      </svg>
    ),

    presentation: (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="m8 10 2.5 2.5L16 8" />
      </svg>
    ),

    external: (
      <svg {...common}>
        <path d="M14 5h5v5" />
        <path d="M19 5 10 14" />
        <path d="M19 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
      </svg>
    ),

    download: (
      <svg {...common}>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
    ),

    fullscreen: (
      <svg {...common}>
        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
        <path d="M16 3h3a2 2 0 0 1 2 2v3" />
        <path d="M21 16v3a2 2 0 0 1-2 2h-3" />
        <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      </svg>
    ),

    calendar: (
      <svg {...common}>
        <rect x="3" y="4.5" width="18" height="16" rx="2" />
        <path d="M16 2.5v4" />
        <path d="M8 2.5v4" />
        <path d="M3 9h18" />
      </svg>
    ),

    spark: (
      <svg {...common}>
        <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
        <path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z" />
      </svg>
    ),

    filter: (
      <svg {...common}>
        <path d="M4 6h16" />
        <path d="M7 12h10" />
        <path d="M10 18h4" />
      </svg>
    ),
  };

  return icons[name] || null;
};

/* =========================================================
   LIBRARY RESOURCES
========================================================= */

const resources = [
  {
    id: 7,
    type: "pptx",
    category: "Presentations",
    title:
      "Basics of Hematological Tools and Techniques in Veterinary Practice",
    excerpt:
      "Educational presentation covering the fundamentals of hematological tools and techniques used in veterinary practice.",
    author: "Vets For Animal Welfare",
    date: "September 2026",
    meta: "2 Hours",
    pptxUrl:
      "https://docs.google.com/presentation/d/13NtC7DuyPTB6Syjx_xUCJLi5c6lykr0G/embed?start=false&loop=false&delayms=0",
  },

  {
    id: 1,
    type: "blogger",
    category: "Veterinary Medicine",
    title: "Milk Fever",
    excerpt:
      "Learn about milk fever, including its causes, clinical signs, diagnosis, treatment and prevention.",
    author: "Vets For Animal Welfare",
    date: "September 2026",
    meta: "Article",
    url: "https://vfaw.blogspot.com/2026/09/milk-fever.html",
  },

  {
    id: 2,
    type: "article",
    category: "Animal Welfare",
    title: "The Importance of Animal Welfare",
    excerpt:
      "Understanding why animal welfare is an essential responsibility for veterinarians, animal owners and society.",
    author: "Vets For Animal Welfare",
    date: "September 2026",
    meta: "5 min read",
    content: `
      <h2>Introduction</h2>

      <p>
        Animal welfare refers to the physical and mental well-being of animals.
        It includes proper nutrition, suitable housing, disease prevention,
        humane handling, and protection from unnecessary pain and suffering.
      </p>

      <h2>Why Animal Welfare Matters</h2>

      <p>
        Animals play important roles in agriculture, food production,
        companionship, research, ecosystems and society. Ensuring good welfare
        improves the quality of life of animals and supports sustainable animal
        production systems.
      </p>

      <h2>The Role of Veterinarians</h2>

      <p>
        Veterinarians diagnose and treat disease while also promoting humane
        treatment, preventive healthcare, responsible ownership and ethical
        animal management.
      </p>

      <h2>Practical Welfare Considerations</h2>

      <ul>
        <li>Providing adequate food and clean drinking water</li>
        <li>Maintaining appropriate housing and environmental conditions</li>
        <li>Preventing and treating disease and injury</li>
        <li>Reducing unnecessary fear, pain and distress</li>
        <li>Using humane handling and management practices</li>
      </ul>

      <h2>Conclusion</h2>

      <p>
        Animal welfare is not only about preventing cruelty. It is also about
        creating conditions that allow animals to live healthy, safe and
        comfortable lives.
      </p>
    `,
  },

  {
    id: 3,
    type: "article",
    category: "Veterinary Education",
    title: "Understanding Whole Blood, Plasma and Serum",
    excerpt:
      "A simple guide to understanding important blood components and the fractions obtained from blood.",
    author: "VFAW Education",
    date: "September 2026",
    meta: "7 min read",
    content: `
      <h2>Whole Blood</h2>

      <p>
        Whole blood contains cellular components together with the liquid
        component known as plasma. It represents blood in its relatively
        complete state before separation into individual components.
      </p>

      <h2>Major Components of Whole Blood</h2>

      <ul>
        <li>Red Blood Cells</li>
        <li>White Blood Cells</li>
        <li>Platelets</li>
        <li>Plasma</li>
      </ul>

      <h2>Plasma</h2>

      <p>
        Plasma is the liquid component of anticoagulated blood. It contains
        water, proteins, electrolytes, nutrients, hormones and clotting factors.
      </p>

      <h2>Serum</h2>

      <p>
        Serum is obtained after blood has clotted. Unlike plasma, it does not
        contain fibrinogen because fibrinogen participates in clot formation.
      </p>

      <h2>Plasma vs Serum</h2>

      <p>
        Plasma is obtained from anticoagulated blood, while serum is obtained
        after the blood has been allowed to clot. The appropriate sample depends
        on the laboratory test being performed.
      </p>

      <h2>Conclusion</h2>

      <p>
        Understanding the difference between whole blood, plasma and serum is
        fundamental for students and professionals working with veterinary
        laboratory diagnostics.
      </p>
    `,
  },

  {
    id: 4,
    type: "pdf",
    category: "Study Materials",
    title: "Basics of Veterinary Hematology",
    excerpt:
      "Study material covering important concepts and basic techniques used in veterinary hematology.",
    author: "VFAW Education",
    date: "2026",
    meta: "PDF",
    pdfUrl: "/pdfs/veterinary-hematology.pdf",
  },

  {
    id: 5,
    type: "article",
    category: "Veterinary Education",
    title: "Introduction to Hematological Examination",
    excerpt:
      "A basic introduction to blood examination and its importance in veterinary diagnosis.",
    author: "VFAW Education",
    date: "September 2026",
    meta: "6 min read",
    content: `
      <h2>What is Hematology?</h2>

      <p>
        Hematology is the study of blood and blood-forming organs. It plays an
        important role in the diagnosis and monitoring of many diseases.
      </p>

      <h2>Important Components</h2>

      <ul>
        <li>Red Blood Cells</li>
        <li>White Blood Cells</li>
        <li>Platelets</li>
        <li>Hemoglobin</li>
        <li>Hematocrit</li>
      </ul>

      <h2>Importance in Veterinary Practice</h2>

      <p>
        Hematological examination helps veterinarians identify anemia,
        infection, inflammation, blood loss and other pathological conditions.
        It can also be useful for monitoring the response of an animal to
        treatment.
      </p>

      <h2>Basic Approach</h2>

      <p>
        A proper hematological examination begins with appropriate sample
        collection and handling. Laboratory measurements and microscopic
        examination can then provide valuable information about the animal's
        health status.
      </p>

      <h2>Conclusion</h2>

      <p>
        Hematological examination is one of the most useful basic diagnostic
        tools available in veterinary practice.
      </p>
    `,
  },

  {
    id: 6,
    type: "pptx",
    category: "Presentations",
    title:
      "Basics of Hematological Tools and Techniques in Veterinary Practice",
    excerpt:
      "A professional educational presentation covering the basics of hematological tools and techniques used in veterinary practice.",
    author: "Vets For Animal Welfare",
    date: "September 2026",
    meta: "Presentation",
    pptxUrl:
      "https://docs.google.com/presentation/d/13NtC7DuyPTB6Syjx_xUCJLi5c6lykr0G/embed?start=false&loop=false&delayms=0",
  },
];

/* =========================================================
   HELPERS
========================================================= */

function getTypeLabel(type) {
  if (type === "blogger") return "BLOG";
  if (type === "pdf") return "PDF";
  if (type === "pptx") return "PRESENTATION";
  return "ARTICLE";
}

function getActionLabel(type) {
  if (type === "blogger") return "Read Article";
  if (type === "pdf") return "View PDF";
  if (type === "pptx") return "Open Presentation";
  return "Start Reading";
}

function getTypeIcon(type) {
  if (type === "blogger") return "external";
  if (type === "pdf") return "file";
  if (type === "pptx") return "presentation";
  return "book";
}

/* =========================================================
   LIBRARY
========================================================= */

function Library() {
  const [selectedResource, setSelectedResource] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    const uniqueCategories = [];

    resources.forEach((resource) => {
      if (!uniqueCategories.includes(resource.category)) {
        uniqueCategories.push(resource.category);
      }
    });

    return ["All", ...uniqueCategories];
  }, []);

  const filteredResources = useMemo(() => {
    const query = search.toLowerCase().trim();

    return resources.filter((resource) => {
      const searchableContent = [
        resource.title,
        resource.excerpt,
        resource.category,
        resource.author,
        resource.type,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchableContent.includes(query);

      const matchesCategory =
        category === "All" || resource.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  /* =======================================================
     BODY SCROLL LOCK
  ======================================================= */

  useEffect(() => {
    if (selectedResource) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedResource]);

  /* =======================================================
     ESC KEY
  ======================================================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedResource(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* =======================================================
     OPEN RESOURCE
  ======================================================= */

  const openResource = (resource) => {
    setSelectedResource(resource);
  };

  const closeReader = () => {
    setSelectedResource(null);
  };

  /* =======================================================
     PRESENTATION FULLSCREEN
  ======================================================= */

  const openPresentationFullscreen = async () => {
    const presentationStage = document.querySelector(
      ".presentation-stage"
    );

    if (!presentationStage) return;

    try {
      if (presentationStage.requestFullscreen) {
        await presentationStage.requestFullscreen();
      } else if (presentationStage.webkitRequestFullscreen) {
        presentationStage.webkitRequestFullscreen();
      } else {
        alert("Fullscreen is not supported by this browser.");
      }
    } catch (error) {
      console.error("Fullscreen error:", error);
    }
  };

  return (
    <div className="library-page">

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="library-hero">

        <div className="hero-pattern"></div>

        <div className="hero-glow hero-glow-left"></div>
        <div className="hero-glow hero-glow-right"></div>

        <div className="hero-content">

          <div className="hero-eyebrow">
            <span className="eyebrow-line"></span>

            <span>
              VFAW KNOWLEDGE LIBRARY
            </span>
          </div>

          <h1>
            Knowledge that
            <br />
            <span>creates impact.</span>
          </h1>

          <p>
            Explore veterinary knowledge, educational articles,
            professional presentations, study materials and resources
            created to support better veterinary practice and animal welfare.
          </p>

          <div className="hero-bottom">

            <div className="hero-info-card">
              <div className="hero-info-icon">
                <Icon name="book" size={18} />
              </div>

              <div>
                <strong>{resources.length}</strong>
                <span>Learning Resources</span>
              </div>
            </div>

            <div className="hero-info-card">
              <div className="hero-info-icon">
                <Icon name="spark" size={18} />
              </div>

              <div>
                <strong>VFAW</strong>
                <span>Veterinary Education</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================
          MAIN
      =================================================== */}

      <main className="library-container">

        {/* =================================================
            HEADING
        ================================================= */}

        <section className="library-heading">

          <div className="heading-copy">

            <span className="section-eyebrow">
              RESOURCE CENTER
            </span>

            <h2>
              Explore the Library
            </h2>

            <p>
              A growing collection of veterinary education,
              animal welfare knowledge and professional resources.
            </p>

          </div>

          <div className="resource-stat">

            <div className="resource-stat-icon">
              <Icon name="book" size={18} />
            </div>

            <strong>
              {resources.length}
            </strong>

            <span>
              Resources
            </span>

          </div>

        </section>

        {/* =================================================
            SEARCH
        ================================================= */}

        <section className="library-search-section">

          <div className="search-wrapper">

            <span className="search-icon">
              <Icon name="search" size={20} />
            </span>

            <input
              type="text"
              value={search}
              placeholder="Search articles, presentations, PDFs..."
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search library resources"
            />

            {search && (
              <button
                className="clear-search"
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <Icon name="close" size={16} />
              </button>
            )}

          </div>

        </section>

        {/* =================================================
            FILTER BAR
        ================================================= */}

        <div className="library-filter-header">

          <div className="filter-label">
            <Icon name="filter" size={16} />
            <span>Filter by category</span>
          </div>

          <span className="filter-count">
            {filteredResources.length} available
          </span>

        </div>

        <div className="category-row">

          {categories.map((item) => (
            <button
              type="button"
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}

        </div>

        <div className="result-summary">

          Showing{" "}

          <strong>
            {filteredResources.length}
          </strong>{" "}

          {filteredResources.length === 1
            ? "resource"
            : "resources"}

          {search && (
            <>
              {" "}
              for <strong>"{search}"</strong>
            </>
          )}

        </div>

        {/* =================================================
            RESOURCE GRID
        ================================================= */}

        {filteredResources.length > 0 ? (

          <section className="resource-grid">

            {filteredResources.map((resource, index) => (

              <article
                className="resource-card"
                key={resource.id}
                style={{
                  "--card-index": index,
                }}
              >

                <div className="card-glow"></div>

                <div className="card-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="card-top">

                  <span className="resource-category">
                    {resource.category}
                  </span>

                  <span className="resource-type">
                    <Icon
                      name={getTypeIcon(resource.type)}
                      size={13}
                    />

                    {getTypeLabel(resource.type)}
                  </span>

                </div>

                <div className="card-icon">

                  <Icon
                    name={getTypeIcon(resource.type)}
                    size={24}
                  />

                </div>

                <div className="card-main">

                  <h3>
                    {resource.title}
                  </h3>

                  <p>
                    {resource.excerpt}
                  </p>

                  <div className="card-meta">

                    <span>
                      {resource.author}
                    </span>

                    <i></i>

                    <span>
                      {resource.date}
                    </span>

                  </div>

                </div>

                <button
                  type="button"
                  className="resource-action"
                  onClick={() => openResource(resource)}
                >

                  <span>
                    {getActionLabel(resource.type)}
                  </span>

                  <b>
                    <Icon name="arrow" size={17} />
                  </b>

                </button>

              </article>

            ))}

          </section>

        ) : (

          <div className="empty-library">

            <div className="empty-icon">
              <Icon name="search" size={25} />
            </div>

            <span className="empty-label">
              SEARCH RESULTS
            </span>

            <h3>
              No resources found
            </h3>

            <p>
              Try another keyword or choose a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Reset Library
            </button>

          </div>

        )}

      </main>

      {/* ===================================================
          FULL SCREEN READER
      =================================================== */}

      {selectedResource && (

        <div className="library-reader">

          {/* =================================================
              READER HEADER
          ================================================= */}

          <header className="reader-header">

            <div className="reader-brand">

              <div className="reader-brand-mark">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="reader-brand-text">

                <strong>
                  VFAW
                </strong>

                <span>
                  KNOWLEDGE LIBRARY
                </span>

              </div>

            </div>

            <div className="reader-header-right">

              <span className="reader-type-label">
                {getTypeLabel(selectedResource.type)}
              </span>

              <button
                type="button"
                className="reader-close"
                onClick={closeReader}
                aria-label="Close reader"
              >
                <Icon name="close" size={20} />

                <span>
                  Close
                </span>
              </button>

            </div>

          </header>

          {/* =================================================
              ARTICLE
          ================================================= */}

          {selectedResource.type === "article" && (

            <div className="article-reader">

              <article className="article-content">

                <div className="article-top-line">

                  <span className="article-category">
                    {selectedResource.category}
                  </span>

                  <span className="article-type">
                    <Icon name="book" size={14} />
                    Article
                  </span>

                </div>

                <h1>
                  {selectedResource.title}
                </h1>

                <p className="article-introduction">
                  {selectedResource.excerpt}
                </p>

                <div className="article-meta">

                  <span>
                    {selectedResource.author}
                  </span>

                  <i></i>

                  <span>
                    {selectedResource.date}
                  </span>

                  <i></i>

                  <span>
                    {selectedResource.meta}
                  </span>

                </div>

                <div className="article-divider"></div>

                <div
                  className="article-body"
                  dangerouslySetInnerHTML={{
                    __html: selectedResource.content,
                  }}
                />

                <div className="article-end">

                  <div className="article-end-line"></div>

                  <span>
                    VFAW KNOWLEDGE LIBRARY
                  </span>

                  <div className="article-end-line"></div>

                </div>

              </article>

            </div>

          )}

          {/* =================================================
              BLOGGER
          ================================================= */}

          {selectedResource.type === "blogger" && (

            <div className="blog-reader">

              <div className="external-resource-bar">

                <div>

                  <span>
                    VETERINARY MEDICINE
                  </span>

                  <strong>
                    {selectedResource.title}
                  </strong>

                </div>

                <a
                  href={selectedResource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-resource-link"
                >
                  <span>
                    Open Original
                  </span>

                  <Icon name="external" size={15} />
                </a>

              </div>

              <iframe
                src={selectedResource.url}
                title={selectedResource.title}
                className="blog-frame"
                loading="eager"
              ></iframe>

            </div>

          )}

          {/* =================================================
              PDF
          ================================================= */}

          {selectedResource.type === "pdf" && (

            <div className="pdf-reader">

              <div className="pdf-header">

                <div className="viewer-title">

                  <div className="viewer-icon">
                    <Icon name="file" size={18} />
                  </div>

                  <div>

                    <span>
                      {selectedResource.category}
                    </span>

                    <strong>
                      {selectedResource.title}
                    </strong>

                  </div>

                </div>

                <a
                  href={selectedResource.pdfUrl}
                  download
                  className="download-pdf"
                >
                  <Icon name="download" size={15} />

                  <span>
                    Download PDF
                  </span>
                </a>

              </div>

              <iframe
                src={selectedResource.pdfUrl}
                title={selectedResource.title}
                className="pdf-frame"
              ></iframe>

            </div>

          )}

          {/* =================================================
              PRESENTATION
          ================================================= */}

          {selectedResource.type === "pptx" && (

            <div className="presentation-reader">

              <div className="presentation-toolbar">

                <div className="presentation-title">

                  <div className="presentation-icon">
                    <Icon name="presentation" size={19} />
                  </div>

                  <div>

                    <span>
                      {selectedResource.category}
                    </span>

                    <strong>
                      {selectedResource.title}
                    </strong>

                  </div>

                </div>

                <button
                  type="button"
                  className="presentation-fullscreen"
                  onClick={openPresentationFullscreen}
                >

                  <Icon name="fullscreen" size={17} />

                  <span>
                    Full Screen
                  </span>

                </button>

              </div>

              <div className="presentation-stage">

                <iframe
                  src={selectedResource.pptxUrl}
                  title={selectedResource.title}
                  className="presentation-frame"
                  allow="fullscreen"
                  allowFullScreen
                ></iframe>

              </div>

            </div>

          )}

        </div>

      )}

    </div>
  );
}

export default Library;
