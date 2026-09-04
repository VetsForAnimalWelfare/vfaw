import React, { useEffect, useMemo, useState } from "react";
import "../Library.css";

/* =========================================================
   LIBRARY RESOURCES
========================================================= */

const resources = [
  {
  id: 7,
  type: "pptx",
  category: "Presentations",
  title: "Basics of Hematological Tools and  Techniques in Veterinary Practice",
  excerpt:
    "Educational presentation By BalKrishna Acharya.",
  author: "Vets For Animal Welfare",
  date: "September 2026",
  readTime: "2 Hours",

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
        component known as plasma.
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
        after the blood has been allowed to clot.
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
   HELPER FUNCTIONS
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

  /* Prevent background scrolling when reader is open */
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

  /* ESC closes reader */
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
     PRESENTATION FULL SCREEN
  ======================================================= */

  const openPresentationFullscreen = async () => {
    const presentationStage = document.querySelector(
      ".presentation-stage"
    );

    if (!presentationStage) {
      return;
    }

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
            VFAW KNOWLEDGE LIBRARY
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

        </div>
      </section>

      {/* ===================================================
          MAIN LIBRARY
      =================================================== */}

      <main className="library-container">

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
            <strong>{resources.length}</strong>
            <span>Resources</span>
          </div>

        </section>

        {/* =================================================
            SEARCH
        ================================================= */}

        <section className="library-search-section">

          <div className="search-wrapper">

            <span className="search-icon">
              ⌕
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
                ×
              </button>
            )}

          </div>

        </section>

        {/* =================================================
            CATEGORIES
        ================================================= */}

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
          <strong>{filteredResources.length}</strong>{" "}
          {filteredResources.length === 1
            ? "resource"
            : "resources"}
        </div>

        {/* =================================================
            RESOURCE GRID
        ================================================= */}

        {filteredResources.length > 0 ? (
          <section className="resource-grid">

            {filteredResources.map((resource) => (
              <article
                className="resource-card"
                key={resource.id}
              >

                <div className="card-glow"></div>

                <div className="card-top">

                  <span className="resource-category">
                    {resource.category}
                  </span>

                  <span className="resource-type">
                    {getTypeLabel(resource.type)}
                  </span>

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
                  onClick={() => setSelectedResource(resource)}
                >
                  <span>
                    {getActionLabel(resource.type)}
                  </span>

                  <b>
                    →
                  </b>
                </button>

              </article>
            ))}

          </section>
        ) : (
          <div className="empty-library">

            <div className="empty-icon">
              ⌕
            </div>

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

          {/* READER HEADER */}

          <header className="reader-header">

            <div className="reader-brand">

              <strong>
                VFAW
              </strong>

              <span></span>

              <small>
                KNOWLEDGE LIBRARY
              </small>

            </div>

            <button
              type="button"
              className="reader-close"
              onClick={() => setSelectedResource(null)}
              aria-label="Close reader"
            >
              ×
            </button>

          </header>

          {/* =================================================
              ARTICLE READER
          ================================================= */}

          {selectedResource.type === "article" && (
            <div className="article-reader">

              <article className="article-content">

                <span className="article-category">
                  {selectedResource.category}
                </span>

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

              </article>

            </div>
          )}

          {/* =================================================
              BLOGGER READER
          ================================================= */}

          {selectedResource.type === "blogger" && (
            <div className="blog-reader">

              <iframe
                src={selectedResource.url}
                title={selectedResource.title}
                className="blog-frame"
                loading="eager"
              ></iframe>

            </div>
          )}

          {/* =================================================
              PDF VIEWER
          ================================================= */}

          {selectedResource.type === "pdf" && (
            <div className="pdf-reader">

              <div className="pdf-header">

                <div className="viewer-title">

                  <span>
                    {selectedResource.category}
                  </span>

                  <strong>
                    {selectedResource.title}
                  </strong>

                </div>

                <a
                  href={selectedResource.pdfUrl}
                  download
                  className="download-pdf"
                >
                  <span>↓</span>
                  Download PDF
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
              PRESENTATION VIEWER
          ================================================= */}

          {selectedResource.type === "pptx" && (
            <div className="presentation-reader">

              <div className="presentation-toolbar">

                <div className="presentation-title">

                  <span>
                    {selectedResource.category}
                  </span>

                  <strong>
                    {selectedResource.title}
                  </strong>

                </div>

                <button
                  type="button"
                  className="presentation-fullscreen"
                  onClick={openPresentationFullscreen}
                >
                  <span className="fullscreen-icon">
                    ⛶
                  </span>

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
