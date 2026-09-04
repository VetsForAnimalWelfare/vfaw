import React, { useMemo, useState } from "react";
import "../Library.css";

const articles = [
  {
    id: 1,
    type: "article",
    category: "Animal Welfare",
    title: "The Importance of Humane Animal Welfare",
    excerpt:
      "Understanding the importance of compassion, ethical treatment, responsible ownership, and welfare-centered veterinary practice.",
    author: "Vets For Animal Welfare",
    date: "September 4, 2026",
    readTime: "5 min read",
    content: `
      <h2>Introduction</h2>

      <p>
        Animal welfare is an essential part of responsible veterinary practice.
        It focuses on the physical health, mental well-being, and quality of life
        of animals.
      </p>

      <p>
        Veterinary professionals play an important role in protecting animals
        from unnecessary pain, suffering, neglect, and poor management.
      </p>

      <h2>Why Animal Welfare Matters</h2>

      <p>
        Good animal welfare allows animals to live healthy and productive lives
        while ensuring that their physical and behavioural needs are respected.
      </p>

      <h2>The Role of Veterinary Professionals</h2>

      <p>
        Veterinarians are not only responsible for diagnosing and treating
        diseases. They also have an important responsibility to promote humane
        handling, pain management, preventive healthcare, responsible ownership,
        and ethical decision-making.
      </p>

      <h2>Conclusion</h2>

      <p>
        Animal welfare should be integrated into every aspect of veterinary
        practice. Compassionate care, scientific knowledge, and ethical
        responsibility together form the foundation of better animal welfare.
      </p>
    `,
  },

  {
    id: 2,
    type: "blogger",
    category: "VFAW Articles",
    title: "Milk Fever",
    excerpt:
      "An educational article about milk fever and its importance in veterinary practice.",
    author: "Vets For Animal Welfare",
    date: "September 2026",
    readTime: "Article",
    url: "https://vfaw.blogspot.com/2026/09/milk-fever.html",
  },

  {
    id: 3,
    type: "pdf",
    category: "Veterinary Notes",
    title: "Veterinary Hematology Notes",
    excerpt:
      "Reference material covering basic hematological tools, blood components, and common laboratory techniques.",
    author: "Vets For Animal Welfare",
    date: "2026",
    readTime: "PDF",
    pdfUrl: "/pdfs/veterinary-hematology.pdf",
  },

  {
    id: 4,
    type: "article",
    category: "Veterinary Medicine",
    title: "Understanding Blood Components",
    excerpt:
      "A simple introduction to whole blood, plasma, serum, red blood cells, white blood cells, and platelets.",
    author: "VFAW Education",
    date: "September 2026",
    readTime: "7 min read",
    content: `
      <h2>Introduction</h2>

      <p>
        Blood is a specialized connective tissue that performs several
        essential functions in the body. It transports oxygen and nutrients,
        removes metabolic waste, participates in immunity, and helps maintain
        homeostasis.
      </p>

      <h2>Whole Blood</h2>

      <p>
        Whole blood contains all major cellular and liquid components of blood.
        These include red blood cells, white blood cells, platelets, and plasma.
      </p>

      <h2>Plasma</h2>

      <p>
        Plasma is the liquid portion of anticoagulated blood. It contains water,
        proteins, electrolytes, nutrients, hormones, and other dissolved
        substances.
      </p>

      <h2>Serum</h2>

      <p>
        Serum is the liquid portion obtained after blood has clotted. Unlike
        plasma, serum does not contain fibrinogen and most clotting factors that
        have been consumed during coagulation.
      </p>

      <h2>Major Cellular Components</h2>

      <ul>
        <li><strong>Red blood cells:</strong> Primarily responsible for oxygen transport.</li>
        <li><strong>White blood cells:</strong> Important components of the immune system.</li>
        <li><strong>Platelets:</strong> Participate in primary hemostasis and blood clot formation.</li>
      </ul>

      <h2>Conclusion</h2>

      <p>
        Understanding the basic components of blood is essential before
        performing hematological investigations and interpreting laboratory
        results.
      </p>
    `,
  },

  {
    id: 5,
    type: "blogger",
    category: "VFAW Articles",
    title: "VFAW Educational Articles",
    excerpt:
      "Explore educational articles published by Vets For Animal Welfare.",
    author: "Vets For Animal Welfare",
    date: "2026",
    readTime: "External Article",
    url: "https://vfaw.blogspot.com/",
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
    return articles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        article.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || article.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const closeReader = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="library-page">
      {/* HERO */}
      <section className="library-hero">
        <div className="library-hero-content">
          <span className="library-label">VFAW KNOWLEDGE LIBRARY</span>

          <h1>
            Learn. Explore.
            <br />
            <span>Make a Difference.</span>
          </h1>

          <p>
            Explore veterinary articles, educational resources, research
            materials, and animal welfare publications.
          </p>
        </div>
      </section>

      {/* LIBRARY CONTENT */}
      <main className="library-container">
        <div className="library-header">
          <div>
            <span className="section-small-title">RESOURCE CENTER</span>

            <h2>Articles & Resources</h2>

            <p>
              Knowledge and educational resources for veterinary students,
              professionals, animal lovers, and welfare advocates.
            </p>
          </div>
        </div>

        {/* SEARCH + FILTER */}
        <div className="library-controls">
          <div className="library-search">
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>

            <input
              type="text"
              placeholder="Search articles, topics or resources..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                className="clear-search"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

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
        </div>

        {/* RESULTS */}
        <div className="library-results">
          <span>
            {filteredArticles.length}{" "}
            {filteredArticles.length === 1 ? "resource" : "resources"}
          </span>
        </div>

        {/* ARTICLE GRID */}
        {filteredArticles.length > 0 ? (
          <div className="library-grid">
            {filteredArticles.map((article) => (
              <article className="library-card" key={article.id}>
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
                  {article.type === "pdf"
                    ? "Read PDF"
                    : article.type === "blogger"
                    ? "Read Article"
                    : "Read Article"}

                  <span>→</span>
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div className="no-results-icon">⌕</div>

            <h3>No resources found</h3>

            <p>
              Try searching with another keyword or select a different
              category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </main>

      {/* READING MODAL */}
      {selectedArticle && (
        <div className="reader-overlay" onClick={closeReader}>
          <div
            className={`reader-modal ${
              selectedArticle.type === "pdf" ? "pdf-reader" : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* READER HEADER */}
            <div className="reader-header">
              <div>
                <span className="reader-category">
                  {selectedArticle.category}
                </span>

                <h2>{selectedArticle.title}</h2>
              </div>

              <button
                className="reader-close"
                onClick={closeReader}
                aria-label="Close reader"
              >
                ×
              </button>
            </div>

            {/* PDF */}
            {selectedArticle.type === "pdf" && (
              <div className="pdf-container">
                <iframe
                  src={selectedArticle.pdfUrl}
                  title={selectedArticle.title}
                  className="pdf-frame"
                />

                <div className="pdf-fallback">
                  <p>
                    If the PDF does not appear, open it directly in a new tab.
                  </p>

                  <a
                    href={selectedArticle.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open PDF
                  </a>
                </div>
              </div>
            )}

            {/* BLOGGER */}
            {selectedArticle.type === "blogger" && (
              <div className="blogger-container">
                <iframe
                  src={selectedArticle.url}
                  title={selectedArticle.title}
                  className="blogger-frame"
                  loading="lazy"
                />

                <div className="external-article">
                  <p>
                    If the article cannot be displayed inside the reader,
                    open it directly.
                  </p>

                  <a
                    href={selectedArticle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Original Article →
                  </a>
                </div>
              </div>
            )}

            {/* WRITTEN ARTICLE */}
            {selectedArticle.type === "article" && (
              <div className="article-reader">
                <div className="article-information">
                  <span>{selectedArticle.author}</span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>

                <div
                  className="article-body"
                  dangerouslySetInnerHTML={{
                    __html: selectedArticle.content,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Library;
