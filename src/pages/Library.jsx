import React, { useMemo, useState, useEffect } from "react";
import "../Library.css";

const articles = [
  {
    id: 1,
    type: "blogger",
    category: "Veterinary Medicine",
    title: "Milk Fever",
    excerpt:
      "Learn about milk fever, its causes, clinical signs, diagnosis, treatment, and prevention in animals.",
    author: "Vets For Animal Welfare",
    date: "September 2026",
    readTime: "Article",
    url: "https://vfaw.blogspot.com/2026/09/milk-fever.html",
  },

  {
    id: 2,
    type: "article",
    category: "Animal Welfare",
    title: "The Importance of Animal Welfare",
    excerpt:
      "Understanding why animal welfare is an essential responsibility for veterinarians, owners, and society.",
    author: "Vets For Animal Welfare",
    date: "September 2026",
    readTime: "5 min read",
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
        companionship, research, ecosystems, and society. Ensuring good welfare
        improves the quality of life of animals and supports sustainable animal
        production systems.
      </p>

      <h2>The Role of Veterinarians</h2>

      <p>
        Veterinarians diagnose and treat disease while also promoting humane
        treatment, preventive healthcare, responsible ownership, and ethical
        animal management.
      </p>

      <h2>Conclusion</h2>

      <p>
        Animal welfare is not only about preventing cruelty. It is also about
        creating conditions that allow animals to live healthy, safe, and
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
    readTime: "7 min read",
    content: `
      <h2>Whole Blood</h2>

      <p>
        Whole blood contains both cellular components and the liquid component
        known as plasma.
      </p>

      <h2>Major Components</h2>

      <ul>
        <li>Red Blood Cells</li>
        <li>White Blood Cells</li>
        <li>Platelets</li>
        <li>Plasma</li>
      </ul>

      <h2>Plasma</h2>

      <p>
        Plasma is the liquid component of anticoagulated blood. It contains
        water, proteins, electrolytes, nutrients, hormones, and clotting factors.
      </p>

      <h2>Serum</h2>

      <p>
        Serum is obtained after blood has clotted. Unlike plasma, it does not
        contain fibrinogen because fibrinogen participates in clot formation.
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
    readTime: "PDF",
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
    readTime: "6 min read",
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
        infection, inflammation, blood loss, and other pathological conditions.
      </p>
    `,
  },
];

function Library() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...new Set(articles.map((article) => article.category))];
  }, []);

  const filteredArticles = useMemo(() => {
    const searchText = search.toLowerCase();

    return articles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchText) ||
        article.excerpt.toLowerCase().includes(searchText) ||
        article.category.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" || article.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const closeReader = () => {
    setSelectedArticle(null);
  };

  /* Lock background scrolling when reading */
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedArticle]);

  return (
    <div className="library-page">

      {/* HERO */}

      <section className="library-hero">
        <div className="library-hero-content">

          <div className="library-badge">
            VFAW KNOWLEDGE LIBRARY
          </div>

          <h1>
            Explore Knowledge.
            <br />
            <span>Expand Your Impact.</span>
          </h1>

          <p>
            Discover veterinary articles, educational resources,
            professional publications, study materials and
            animal welfare knowledge.
          </p>

        </div>
      </section>


      {/* LIBRARY */}

      <main className="library-container">

        <div className="library-header">

          <div>
            <span className="section-small-title">
              KNOWLEDGE RESOURCE CENTER
            </span>

            <h2>Explore Our Library</h2>

            <p>
              Carefully selected articles, veterinary resources,
              educational materials and professional publications.
            </p>
          </div>

          <div className="library-count">
            {articles.length}
            <span> Resources</span>
          </div>

        </div>


        {/* SEARCH */}

        <div className="library-controls">

          <div className="library-search">
            <span className="search-icon">⌕</span>

            <input
              type="text"
              placeholder="Search articles and resources..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                className="clear-search"
                onClick={() => setSearch("")}
              >
                ×
              </button>
            )}
          </div>

        </div>


        {/* CATEGORY FILTER */}

        <div className="category-filter">

          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}

        </div>


        {/* RESULTS */}

        <div className="library-results">
          Showing {filteredArticles.length} resources
        </div>


        {/* ARTICLE CARDS */}

        {filteredArticles.length > 0 ? (

          <div className="library-grid">

            {filteredArticles.map((article) => (

              <article
                className="library-card"
                key={article.id}
              >

                <div className="card-glow"></div>

                <div className="card-top">

                  <span className="article-category">
                    {article.category}
                  </span>

                  <span className="article-type">
                    {article.type === "pdf"
                      ? "PDF"
                      : article.type === "blogger"
                      ? "BLOG"
                      : "ARTICLE"}
                  </span>

                </div>


                <div className="card-content">

                  <h3>{article.title}</h3>

                  <p>{article.excerpt}</p>

                  <div className="article-meta">

                    <span>{article.author}</span>

                    <span>•</span>

                    <span>{article.date}</span>

                  </div>

                </div>


                <button
                  className="read-button"
                  onClick={() => setSelectedArticle(article)}
                >
                  <span>
                    {article.type === "pdf"
                      ? "View PDF"
                      : "Start Reading"}
                  </span>

                  <span className="button-arrow">→</span>
                </button>

              </article>

            ))}

          </div>

        ) : (

          <div className="no-results">

            <div className="no-results-icon">⌕</div>

            <h3>No resources found</h3>

            <p>
              Try searching with another keyword or category.
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


      {/* =================================================
          FULL SCREEN READING MODE
      ================================================= */}

      {selectedArticle && (

        <div className="reader-overlay">

          {/* READER TOP BAR */}

          <header className="reader-header">

            <div className="reader-brand">

              <span className="reader-logo">
                VFAW
              </span>

              <span className="reader-divider"></span>

              <span className="reader-section">
                LIBRARY
              </span>

            </div>


            <div className="reader-actions">

              {/* DOWNLOAD PDF */}

              {selectedArticle.type === "pdf" && (

                <a
                  href={selectedArticle.pdfUrl}
                  download
                  className="download-button"
                >
                  ↓ Download PDF
                </a>

              )}


              {/* OPEN ORIGINAL BLOG */}

              {selectedArticle.type === "blogger" && (

                <a
                  href={selectedArticle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="original-button"
                >
                  Open Original ↗
                </a>

              )}


              {/* CLOSE */}

              <button
                className="reader-close"
                onClick={closeReader}
                aria-label="Close reader"
              >
                ×
              </button>

            </div>

          </header>


          {/* =================================================
              PDF READING MODE
          ================================================= */}

          {selectedArticle.type === "pdf" && (

            <main className="fullscreen-pdf">

              <div className="reader-title-area">

                <span>{selectedArticle.category}</span>

                <h1>
                  {selectedArticle.title}
                </h1>

              </div>

              <iframe
                src={selectedArticle.pdfUrl}
                title={selectedArticle.title}
                className="fullscreen-pdf-frame"
              />

            </main>

          )}


          {/* =================================================
              BLOGGER READING MODE
          ================================================= */}

          {selectedArticle.type === "blogger" && (

            <main className="fullscreen-blog">

              <iframe
                src={selectedArticle.url}
                title={selectedArticle.title}
                className="fullscreen-blog-frame"
              />

              <div className="blog-fallback">

                <p>
                  If embedding is restricted by the publisher,
                  open the original article.
                </p>

                <a
                  href={selectedArticle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Original Article
                </a>

              </div>

            </main>

          )}


          {/* =================================================
              WRITTEN ARTICLE READING MODE
          ================================================= */}

          {selectedArticle.type === "article" && (

            <main className="fullscreen-article">

              <div className="reading-container">

                <div className="reading-category">
                  {selectedArticle.category}
                </div>

                <h1>
                  {selectedArticle.title}
                </h1>

                <p className="reading-excerpt">
                  {selectedArticle.excerpt}
                </p>


                <div className="reading-meta">

                  <span>
                    {selectedArticle.author}
                  </span>

                  <span>•</span>

                  <span>
                    {selectedArticle.date}
                  </span>

                  <span>•</span>

                  <span>
                    {selectedArticle.readTime}
                  </span>

                </div>


                <div className="reading-line"></div>


                <article
                  className="article-body"
                  dangerouslySetInnerHTML={{
                    __html: selectedArticle.content,
                  }}
                />

              </div>

            </main>

          )}

        </div>

      )}

    </div>
  );
}

export default Library;
