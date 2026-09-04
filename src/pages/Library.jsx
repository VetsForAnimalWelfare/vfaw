import React, { useEffect, useMemo, useState } from "react";
import "../Library.css";

const articles = [
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
        improves the quality of life of animals and supports sustainable
        animal production systems.
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
        Whole blood contains both cellular components and the liquid component
        known as plasma.
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
    title: "Basics of Hematological Tools and Techniques in Veterinary Practice",
    excerpt:
      "A professional educational presentation covering the basics of hematological tools and techniques used in veterinary practice.",
    author: "Vets For Animal Welfare",
    date: "September 2026",
    meta: "Presentation",
    pptxUrl:
      "https://docs.google.com/presentation/d/1C9YANQ-xYPAqrC8ePiNfeSZIE4UVTzHR/embed?start=false&loop=false&delayms=0",
  },
];

function Library() {
  const [selectedResource, setSelectedResource] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    const uniqueCategories = [];

    articles.forEach((article) => {
      if (!uniqueCategories.includes(article.category)) {
        uniqueCategories.push(article.category);
      }
    });

    return ["All", ...uniqueCategories];
  }, []);

  const filteredResources = useMemo(() => {
    const query = search.toLowerCase().trim();

    return articles.filter((article) => {
      const searchableText = [
        article.title,
        article.excerpt,
        article.category,
        article.author,
      ]
        .join(" ")
        .toLowerCase();

      const searchMatch = searchableText.includes(query);

      const categoryMatch =
        category === "All" || article.category === category;

      return searchMatch && categoryMatch;
    });
  }, [search, category]);

  useEffect(() => {
    document.body.style.overflow = selectedResource ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedResource]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedResource(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const getTypeLabel = (type) => {
    if (type === "blogger") return "BLOG";
    if (type === "pdf") return "PDF";
    if (type === "pptx") return "PRESENTATION";
    return "ARTICLE";
  };

  const getButtonText = (type) => {
    if (type === "blogger") return "Read Article";
    if (type === "pdf") return "View PDF";
    if (type === "pptx") return "Start Presentation";
    return "Start Reading";
  };

  return (
    <div className="library-page">

      {/* HERO */}
      <section className="library-hero">
        <div className="hero-grid"></div>

        <div className="hero-circle hero-circle-one"></div>
        <div className="hero-circle hero-circle-two"></div>

        <div className="library-hero-content">
          <div className="library-label">
            <span></span>
            VFAW KNOWLEDGE LIBRARY
          </div>

          <h1>
            Explore Knowledge.
            <br />
            <strong>Expand Your Impact.</strong>
          </h1>

          <p>
            Discover veterinary knowledge, educational articles,
            presentations, study materials and animal welfare resources.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <main className="library-container">

        <section className="library-introduction">
          <div>
            <span className="library-overline">
              KNOWLEDGE RESOURCE CENTER
            </span>

            <h2>Explore Our Library</h2>

            <p>
              Access carefully prepared resources designed for
              veterinary students, professionals and animal welfare
              enthusiasts.
            </p>
          </div>

          <div className="resource-total">
            <strong>{articles.length}</strong>
            <span>Resources</span>
          </div>
        </section>

        {/* SEARCH */}
        <section className="library-tools">
          <div className="search-box">
            <span className="search-symbol">⌕</span>

            <input
              type="text"
              value={search}
              placeholder="Search the library..."
              onChange={(event) => setSearch(event.target.value)}
            />

            {search && (
              <button
                className="search-clear"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </section>

        {/* FILTER */}
        <div className="library-filters">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "selected" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="library-result-count">
          Showing <strong>{filteredResources.length}</strong>{" "}
          {filteredResources.length === 1 ? "resource" : "resources"}
        </div>

        {/* RESOURCE CARDS */}
        {filteredResources.length > 0 ? (
          <section className="resource-grid">
            {filteredResources.map((resource) => (
              <article className="resource-card" key={resource.id}>

                <div className="card-background-effect"></div>

                <div className="resource-top">
                  <span className="resource-category">
                    {resource.category}
                  </span>

                  <span className="resource-type">
                    {getTypeLabel(resource.type)}
                  </span>
                </div>

                <div className="resource-content">
                  <h3>{resource.title}</h3>

                  <p>{resource.excerpt}</p>

                  <div className="resource-meta">
                    <span>{resource.author}</span>
                    <i></i>
                    <span>{resource.date}</span>
                  </div>
                </div>

                <button
                  className="resource-button"
                  onClick={() => setSelectedResource(resource)}
                >
                  <span>{getButtonText(resource.type)}</span>
                  <b>→</b>
                </button>
              </article>
            ))}
          </section>
        ) : (
          <div className="empty-library">
            <div className="empty-symbol">⌕</div>

            <h3>No resources found</h3>

            <p>
              Try another search term or select a different category.
            </p>

            <button
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

      {/* READING / VIEWER */}
      {selectedResource && (
        <div className="library-reader">

          <header className="reader-topbar">

            <div className="reader-brand">
              <strong>VFAW</strong>
              <span></span>
              <small>LIBRARY</small>
            </div>

            <button
              className="reader-close"
              onClick={() => setSelectedResource(null)}
              aria-label="Close"
            >
              ×
            </button>
          </header>

          {/* NORMAL ARTICLE */}
          {selectedResource.type === "article" && (
            <div className="article-reader">
              <article className="article-reading-area">

                <span className="article-reading-category">
                  {selectedResource.category}
                </span>

                <h1>{selectedResource.title}</h1>

                <p className="article-lead">
                  {selectedResource.excerpt}
                </p>

                <div className="article-information">
                  <span>{selectedResource.author}</span>
                  <i></i>
                  <span>{selectedResource.date}</span>
                  <i></i>
                  <span>{selectedResource.meta}</span>
                </div>

                <div className="article-rule"></div>

                <div
                  className="article-text"
                  dangerouslySetInnerHTML={{
                    __html: selectedResource.content,
                  }}
                />
              </article>
            </div>
          )}

          {/* BLOGGER ARTICLE */}
          {selectedResource.type === "blogger" && (
            <div className="blog-reader">
              <iframe
                src={selectedResource.url}
                title={selectedResource.title}
                className="blog-frame"
              ></iframe>
            </div>
          )}

          {/* PDF */}
          {selectedResource.type === "pdf" && (
            <div className="pdf-reader">

              <div className="pdf-toolbar">
                <div>
                  <span>{selectedResource.category}</span>
                  <strong>{selectedResource.title}</strong>
                </div>

                <a
                  href={selectedResource.pdfUrl}
                  download
                  className="pdf-download"
                >
                  ↓ Download PDF
                </a>
              </div>

              <iframe
                src={selectedResource.pdfUrl}
                title={selectedResource.title}
                className="pdf-frame"
              ></iframe>
            </div>
          )}

          {/* GOOGLE SLIDES */}
          {selectedResource.type === "pptx" && (
            <div className="presentation-reader">

              <div className="presentation-header">
                <div>
                  <span>{selectedResource.category}</span>
                  <strong>{selectedResource.title}</strong>
                </div>
              </div>

              <div className="presentation-stage">
                <iframe
                  src={selectedResource.pptxUrl}
                  title={selectedResource.title}
                  className="presentation-frame"
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
