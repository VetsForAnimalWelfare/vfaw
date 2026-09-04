import { useMemo, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../Library.css";

/* =========================================================
   MANUALLY ADD YOUR BLOGGER ARTICLES HERE
   ========================================================= */

const articles = [
  {
    id: "milk-fever",
    title: "MILK FEVER",
    category: "Veterinary Medicine",
    author: "VFAW",
    date: "September 02, 2026",
    readTime: "10 min read",
    image: "",
    url: "https://vfaw.blogspot.com/2026/09/milk-fever.html",
    excerpt:
      "A detailed overview of milk fever in dairy cows, including hypocalcaemia, calcium homeostasis, risk factors, mineral management, DCAD, prevention, and transition cow management.",
  },

  /*
   * ADD MORE ARTICLES LIKE THIS:
   *
   * {
   *   id: "another-article",
   *   title: "Another Article",
   *   category: "Animal Welfare",
   *   author: "VFAW",
   *   date: "September 10, 2026",
   *   readTime: "5 min read",
   *   image: "",
   *   url: "https://vfaw.blogspot.com/2026/09/another-article.html",
   *   excerpt:
   *     "Short description of the article.",
   * },
   */
];

const Library = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  /* =========================================================
     SELECT ARTICLE
     ========================================================= */

  const selectedArticle = articles.find(
    (article) => article.id === blogId
  );

  /* =========================================================
     READING PROGRESS
     ========================================================= */

  useEffect(() => {
    if (!selectedArticle) {
      setReadingProgress(0);
      return;
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (documentHeight <= 0) {
        setReadingProgress(0);
        return;
      }

      const progress =
        (scrollTop / documentHeight) * 100;

      setReadingProgress(
        Math.min(100, Math.max(0, progress))
      );
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [selectedArticle]);

  /* =========================================================
     SCROLL TO TOP
     ========================================================= */

  useEffect(() => {
    if (selectedArticle) {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [selectedArticle]);

  /* =========================================================
     SEARCH
     ========================================================= */

  const filteredArticles = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return articles;
    }

    return articles.filter((article) => {
      return (
        article.title.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query) ||
        article.author.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query)
      );
    });
  }, [search]);

  /* =========================================================
     ARTICLE READING PAGE
     ========================================================= */

  if (selectedArticle) {
    return (
      <div
        className={`article-page ${
          darkMode ? "article-dark-mode" : ""
        }`}
      >
        {/* Reading progress */}
        <div
          className="reading-progress"
          style={{
            width: `${readingProgress}%`,
          }}
        />

        {/* Header */}
        <header className="article-header">
          <div className="article-header-inner">
            <button
              type="button"
              className="article-back-button"
              onClick={() => navigate("/library")}
            >
              ← Back to Library
            </button>

            <button
              type="button"
              className="article-theme-button"
              onClick={() =>
                setDarkMode((previous) => !previous)
              }
              aria-label="Toggle dark mode"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </header>

        {/* Article */}
        <main className="article-document">

          {/* Heading */}
          <div className="article-heading">

            <span className="article-category">
              {selectedArticle.category}
            </span>

            <h1 className="article-title">
              {selectedArticle.title}
            </h1>

            <div className="article-meta">

              <span>
                By {selectedArticle.author}
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
          </div>

          {/* Hero Image */}
          {selectedArticle.image && (
            <figure className="article-hero">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="article-hero-image"
              />
            </figure>
          )}

          {/* Blogger article */}
          <section className="blogger-reader-section">

            <div className="blogger-reader">

              <iframe
                src={selectedArticle.url}
                title={selectedArticle.title}
                loading="lazy"
                allowFullScreen
              />

            </div>

          </section>

          {/* Article footer */}
          <div className="article-end">

            <div className="article-end-line" />

            <p>
              You have reached the end of this article.
            </p>

            <button
              type="button"
              className="article-back-to-library"
              onClick={() => navigate("/library")}
            >
              ← Explore More Articles
            </button>

          </div>

        </main>
      </div>
    );
  }

  /* =========================================================
     LIBRARY PAGE
     ========================================================= */

  return (
    <div className="library-page">

      {/* HERO */}
      <section className="library-hero">

        <div className="library-container">

          <div className="library-hero-content">

            <span className="library-eyebrow">
              VFAW KNOWLEDGE CENTER
            </span>

            <h1 className="library-title">
              Articles & Resources
            </h1>

            <p className="library-description">
              Explore veterinary knowledge, animal welfare
              resources, educational articles, and practical
              information from VFAW.
            </p>

            {/* SEARCH */}
            <div className="library-search">

              <span
                className="library-search-icon"
                aria-hidden="true"
              >
                🔍
              </span>

              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search articles, topics, or authors..."
                aria-label="Search articles"
              />

              {search && (
                <button
                  type="button"
                  className="library-search-clear"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}

            </div>

          </div>

        </div>

      </section>

      {/* MAIN */}
      <main className="library-container library-main">

        {/* RESULTS HEADER */}
        <div className="library-results-header">

          <div>

            <h2>
              Latest Articles
            </h2>

            <p>
              {filteredArticles.length}{" "}
              {filteredArticles.length === 1
                ? "article"
                : "articles"}{" "}
              available
            </p>

          </div>

        </div>

        {/* BLOG GRID */}
        {filteredArticles.length > 0 ? (

          <div className="blog-grid">

            {filteredArticles.map((article) => (

              <article
                key={article.id}
                className="blog-card"
              >

                {/* IMAGE */}
                <Link
                  to={`/library/blog/${article.id}`}
                  className="blog-card-image-link"
                >

                  <div className="blog-card-image">

                    {article.image ? (
                      <img
                        src={article.image}
                        alt={article.title}
                        loading="lazy"
                      />
                    ) : (
                      <div className="blog-image-placeholder">
                        <span>VFAW</span>
                      </div>
                    )}

                    <span className="blog-card-category">
                      {article.category}
                    </span>

                  </div>

                </Link>

                {/* CONTENT */}
                <div className="blog-card-content">

                  <div className="blog-card-meta">

                    <span>
                      {article.date}
                    </span>

                    <span>•</span>

                    <span>
                      {article.readTime}
                    </span>

                  </div>

                  <h3 className="blog-card-title">

                    <Link
                      to={`/library/blog/${article.id}`}
                    >
                      {article.title}
                    </Link>

                  </h3>

                  <p className="blog-card-excerpt">
                    {article.excerpt}
                  </p>

                  <div className="blog-card-footer">

                    <span className="blog-card-author">
                      By {article.author}
                    </span>

                    <Link
                      to={`/library/blog/${article.id}`}
                      className="blog-read-more"
                    >
                      Read Article
                      <span aria-hidden="true">
                        →
                      </span>
                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>

        ) : (

          /* NO RESULTS */
          <div className="library-empty">

            <div className="library-empty-icon">
              🔎
            </div>

            <h3>
              No articles found
            </h3>

            <p>
              We couldn't find an article matching "
              {search}".
            </p>

            <button
              type="button"
              onClick={() => setSearch("")}
              className="library-empty-button"
            >
              Clear Search
            </button>

          </div>

        )}

      </main>

    </div>
  );
};

export default Library;
