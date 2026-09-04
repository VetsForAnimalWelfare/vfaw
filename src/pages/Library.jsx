import React, { useMemo, useState } from "react";
import "../Library.css";

/* =====================================================
   LIBRARY ARTICLES

   TYPES AVAILABLE:

   1. article  = Write the complete article inside content
   2. pdf      = Add a PDF link
   3. blogger  = Add a Blogger/article website link
===================================================== */

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
        Animals play an important role in agriculture, food production,
        companionship, research, ecosystems, and society. Ensuring good welfare
        improves both the quality of life of animals and the sustainability of
        animal production systems.
      </p>

      <h2>The Role of Veterinarians</h2>

      <p>
        Veterinarians have an important responsibility to diagnose and treat
        disease while also promoting humane treatment, preventive healthcare,
        responsible ownership, and ethical animal management.
      </p>

      <h2>Conclusion</h2>

      <p>
        Animal welfare is not only about preventing cruelty. It is about
        creating conditions that allow animals to live healthy and comfortable
        lives.
      </p>
    `,
  },

  {
    id: 3,
    type: "article",
    category: "Veterinary Education",
    title: "Understanding Whole Blood, Plasma and Serum",
    excerpt:
      "A simple guide to understanding the important components and fractions obtained from blood.",
    author: "VFAW Education",
    date: "September 2026",
    readTime: "7 min read",

    content: `
      <h2>Whole Blood</h2>

      <p>
        Whole blood is blood collected from the body that contains both cellular
        components and the liquid component called plasma.
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
        Plasma is the liquid part of anticoagulated blood. It contains water,
        proteins, electrolytes, nutrients, hormones, and clotting factors.
      </p>

      <h2>Serum</h2>

      <p>
        Serum is obtained after blood has clotted. It does not contain
        fibrinogen because fibrinogen is consumed during the clotting process.
      </p>

      <h2>Why is this Important?</h2>

      <p>
        Understanding these differences is important when collecting blood
        samples and interpreting laboratory tests in veterinary practice.
      </p>
    `,
  },

  /*
  =====================================================
  PDF EXAMPLE

  To use this article:

  1. Put your PDF inside:
     public/pdfs/

  Example:
     public/pdfs/hematology.pdf

  Then use:
     pdfUrl: "/pdfs/hematology.pdf"
  =====================================================
  */

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
      "A basic introduction to the examination of blood and its importance in veterinary diagnosis.",
    author: "VFAW Education",
    date: "September 2026",
    readTime: "6 min read",

    content: `
      <h2>What is Hematology?</h2>

      <p>
        Hematology is the study of blood and blood-forming organs. It plays an
        important role in the diagnosis and monitoring of many diseases.
      </p>

      <h2>Important Hematological Components</h2>

      <ul>
        <li>Red Blood Cells</li>
        <li>White Blood Cells</li>
        <li>Platelets</li>
        <li>Hemoglobin</li>
        <li>Hematocrit</li>
      </ul>

      <h2>Importance in Veterinary Practice</h2>

      <p>
        Hematological examination can help veterinarians identify anemia,
        infection, inflammation, blood loss, and many other pathological
        conditions.
      </p>

      <h2>Conclusion</h2>

      <p>
        Basic knowledge of hematology is essential for interpreting laboratory
        findings and making informed clinical decisions.
      </p>
    `,
  },
];


/* =====================================================
   LIBRARY COMPONENT
===================================================== */

function Library() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");


  /* Get all categories automatically */

  const categories = useMemo(() => {
    return ["All", ...new Set(articles.map((article) => article.category))];
  }, []);


  /* Search and category filtering */

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        article.title.toLowerCase().includes(searchText) ||
        article.excerpt.toLowerCase().includes(searchText) ||
        article.category.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" || article.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);


  /* Close article reader */

  const closeReader = () => {
    setSelectedArticle(null);
  };


  return (
    <div className="library-page">

      {/* ================= HERO ================= */}

      <section className="library-hero">
        <div className="library-hero-content">

          <span className="library-label">
            VFAW KNOWLEDGE LIBRARY
          </span>

          <h1>
            Learn. Explore.
            <br />
            <span>Make a Difference.</span>
          </h1>

          <p>
            Explore veterinary articles, educational resources,
            study materials, animal welfare publications, and
            professional learning resources.
          </p>

        </div>
      </section>


      {/* ================= MAIN CONTENT ================= */}

      <main className="library-container">

        <div className="library-header">

          <span className="section-small-title">
            RESOURCE CENTER
          </span>

          <h2>
            Articles & Resources
          </h2>

          <p>
            Explore educational articles, veterinary resources,
            study materials, PDFs, and publications from
            Vets For Animal Welfare.
          </p>

        </div>


        {/* ================= SEARCH ================= */}

        <div className="library-controls">

          <div className="library-search">

            <span>⌕</span>

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


          {/* ================= CATEGORY FILTER ================= */}

          <div className="category-filter">

            {categories.map((item) => (

              <button
                key={item}
                className={
                  category === item ? "active" : ""
                }
                onClick={() => setCategory(item)}
              >
                {item}
              </button>

            ))}

          </div>

        </div>


        {/* ================= RESULTS COUNT ================= */}

        <div className="library-results">

          {filteredArticles.length}{" "}

          {filteredArticles.length === 1
            ? "resource found"
            : "resources found"}

        </div>


        {/* ================= ARTICLE GRID ================= */}

        {filteredArticles.length > 0 ? (

          <div className="library-grid">

            {filteredArticles.map((article) => (

              <article
                className="library-card"
                key={article.id}
              >

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

                  <h3>
                    {article.title}
                  </h3>

                  <p>
                    {article.excerpt}
                  </p>


                  <div className="article-meta">

                    <span>
                      {article.author}
                    </span>

                    <span>•</span>

                    <span>
                      {article.date}
                    </span>

                    <span>•</span>

                    <span>
                      {article.readTime}
                    </span>

                  </div>

                </div>


                <button
                  className="read-button"
                  onClick={() => setSelectedArticle(article)}
                >

                  <span>
                    {article.type === "pdf"
                      ? "Read PDF"
                      : "Read Article"}
                  </span>

                  <span>
                    →
                  </span>

                </button>

              </article>

            ))}

          </div>

        ) : (

          <div className="no-results">

            <div className="no-results-icon">
              ⌕
            </div>

            <h3>
              No resources found
            </h3>

            <p>
              Try another search term or category.
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


      {/* =====================================================
          ARTICLE / PDF / BLOG READER
      ===================================================== */}

      {selectedArticle && (

        <div
          className="reader-overlay"
          onClick={closeReader}
        >

          <div
            className={
              `reader-modal ${
                selectedArticle.type === "pdf"
                  ? "pdf-reader"
                  : ""
              }`
            }
            onClick={(e) => e.stopPropagation()}
          >


            {/* ================= READER HEADER ================= */}

            <div className="reader-header">

              <div>

                <span className="reader-category">
                  {selectedArticle.category}
                </span>

                <h2>
                  {selectedArticle.title}
                </h2>

              </div>


              <button
                className="reader-close"
                onClick={closeReader}
                aria-label="Close article"
              >
                ×
              </button>

            </div>


            {/* ================= PDF ================= */}

            {selectedArticle.type === "pdf" && (

              <div className="pdf-container">

                <iframe
                  src={selectedArticle.pdfUrl}
                  title={selectedArticle.title}
                  className="pdf-frame"
                />

                <div className="pdf-fallback">

                  <p>
                    If the PDF does not load,
                    open it directly.
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


            {/* ================= BLOGGER / WEBSITE ARTICLE ================= */}

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
                    If the article does not display here,
                    open the original article.
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


            {/* ================= WRITTEN ARTICLE ================= */}

            {selectedArticle.type === "article" && (

              <div className="article-reader">

                <div className="article-information">

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
