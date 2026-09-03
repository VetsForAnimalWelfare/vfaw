import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../Library.css";

const BLOGGER_FEED =
  "https://vfaw.blogspot.com/feeds/posts/default?alt=json&max-results=100";

const BLOGGER_BASE_URL = "https://vfaw.blogspot.com";

const Library = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  /*
   * ---------------------------------------------------------
   * FETCH BLOGGER POSTS
   * ---------------------------------------------------------
   */

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(BLOGGER_FEED);

        if (!response.ok) {
          throw new Error("Unable to load Blogger articles.");
        }

        const data = await response.json();

        const entries = data?.feed?.entry || [];

        const formattedBlogs = entries.map((entry, index) => {
          /*
           * Get Blogger post URL
           */
          const alternateLink =
            entry.link?.find(
              (link) => link.rel === "alternate"
            )?.href || BLOGGER_BASE_URL;

          /*
           * Get Blogger post ID
           */
          const bloggerId =
            entry.id?.$t?.split(".post-")[1] ||
            `blog-${index}`;

          /*
           * Convert Blogger URL into a safe React route ID
           */
          const slug =
            alternateLink
              .replace(BLOGGER_BASE_URL, "")
              .replace(/^\/+/, "")
              .replace(/\/+$/, "")
              .replace(/\//g, "-")
              .replace(/[^a-zA-Z0-9-]/g, "")
              .toLowerCase() ||
            bloggerId;

          /*
           * Title
           */
          const title =
            entry.title?.$t || "Untitled Article";

          /*
           * Author
           */
          const author =
            entry.author?.[0]?.name?.$t || "VFAW";

          /*
           * Date
           */
          const publishedDate = entry.published?.$t
            ? new Date(entry.published.$t)
            : null;

          const date = publishedDate
            ? publishedDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "";

          /*
           * Blogger content
           */
          const content = entry.content?.$t || "";

          /*
           * Get plain text from HTML
           */
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = content;

          const plainText =
            tempDiv.textContent ||
            tempDiv.innerText ||
            "";

          /*
           * Excerpt
           */
          const excerpt =
            plainText.trim().length > 220
              ? `${plainText.trim().substring(0, 220)}...`
              : plainText.trim();

          /*
           * Category / label
           */
          const category =
            entry.category?.[0]?.term ||
            "Animal Welfare";

          /*
           * Find first image inside Blogger article
           */
          const firstImage =
            tempDiv.querySelector("img")?.src || null;

          /*
           * Estimate reading time
           */
          const wordCount =
            plainText
              .trim()
              .split(/\s+/)
              .filter(Boolean).length;

          const readingMinutes = Math.max(
            1,
            Math.ceil(wordCount / 200)
          );

          return {
            id: slug,
            bloggerId,
            title,
            author,
            date,
            category,
            excerpt,
            image: firstImage,
            bloggerUrl: alternateLink,
            content,
            wordCount,
            readTime: `${readingMinutes} min read`,
          };
        });

        setBlogs(formattedBlogs);
      } catch (err) {
        console.error("Blogger error:", err);
        setError(
          "We couldn't load the articles right now. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  /*
   * ---------------------------------------------------------
   * FIND SELECTED ARTICLE
   * ---------------------------------------------------------
   */

  const selectedBlog = blogs.find(
    (blog) => blog.id === blogId
  );

  /*
   * ---------------------------------------------------------
   * READING PROGRESS
   * ---------------------------------------------------------
   */

  useEffect(() => {
    if (!selectedBlog) {
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
  }, [selectedBlog]);

  /*
   * ---------------------------------------------------------
   * SCROLL TO TOP WHEN ARTICLE OPENS
   * ---------------------------------------------------------
   */

  useEffect(() => {
    if (selectedBlog) {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [selectedBlog]);

  /*
   * ---------------------------------------------------------
   * SEARCH
   * ---------------------------------------------------------
   */

  const filteredBlogs = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return blogs;
    }

    return blogs.filter((blog) => {
      return (
        blog.title
          .toLowerCase()
          .includes(query) ||
        blog.category
          .toLowerCase()
          .includes(query) ||
        blog.excerpt
          .toLowerCase()
          .includes(query) ||
        blog.author
          .toLowerCase()
          .includes(query)
      );
    });
  }, [blogs, search]);

  /*
   * ---------------------------------------------------------
   * ARTICLE READING PAGE
   * ---------------------------------------------------------
   */

  if (selectedBlog) {
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

        <main className="article-document">
          {/* Article heading */}
          <div className="article-heading">
            <span className="article-category">
              {selectedBlog.category}
            </span>

            <h1 className="article-title">
              {selectedBlog.title}
            </h1>

            <div className="article-meta">
              <span>
                By {selectedBlog.author}
              </span>

              <span>•</span>

              <span>
                {selectedBlog.date}
              </span>

              <span>•</span>

              <span>
                {selectedBlog.readTime}
              </span>
            </div>
          </div>

          {/* Hero image */}
          {selectedBlog.image && (
            <figure className="article-hero">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="article-hero-image"
                onError={(event) => {
                  event.currentTarget.style.display =
                    "none";
                }}
              />
            </figure>
          )}

          {/* Blogger article */}
          <section className="blogger-reader-section">
            <div className="blogger-reader">
              <iframe
                src={selectedBlog.bloggerUrl}
                title={selectedBlog.title}
                loading="lazy"
                allow="fullscreen"
              />
            </div>
          </section>

          {/* Article end */}
          <div className="article-end">
            <div className="article-end-line" />

            <p>
              You have reached the end of this article.
            </p>

            <button
              type="button"
              className="article-back-to-library"
              onClick={() =>
                navigate("/library")
              }
            >
              ← Explore More Articles
            </button>
          </div>
        </main>
      </div>
    );
  }

  /*
   * ---------------------------------------------------------
   * LIBRARY PAGE
   * ---------------------------------------------------------
   */

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
              Explore veterinary knowledge, animal
              welfare resources, educational articles,
              and practical information from VFAW.
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
              {loading
                ? "Loading articles..."
                : `${filteredBlogs.length} ${
                    filteredBlogs.length === 1
                      ? "article"
                      : "articles"
                  } available`}
            </p>
          </div>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="library-loading">
            <div className="library-loader" />

            <h3>
              Loading articles
            </h3>

            <p>
              Fetching the latest articles from VFAW.
            </p>
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="library-empty">
            <div className="library-empty-icon">
              ⚠️
            </div>

            <h3>
              Unable to load articles
            </h3>

            <p>
              {error}
            </p>

            <button
              type="button"
              className="library-empty-button"
              onClick={() =>
                window.location.reload()
              }
            >
              Try Again
            </button>
          </div>
        )}

        {/* BLOG GRID */}
        {!loading &&
          !error &&
          filteredBlogs.length > 0 && (
            <div className="blog-grid">
              {filteredBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="blog-card"
                >
                  {/* IMAGE */}
                  <Link
                    to={`/library/blog/${blog.id}`}
                    className="blog-card-image-link"
                    aria-label={`Read ${blog.title}`}
                  >
                    <div className="blog-card-image">
                      {blog.image ? (
                        <img
                          src={blog.image}
                          alt={blog.title}
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget.style.display =
                              "none";

                            event.currentTarget.parentElement.classList.add(
                              "blog-image-fallback"
                            );
                          }}
                        />
                      ) : (
                        <div className="blog-image-placeholder">
                          VFAW
                        </div>
                      )}

                      <span className="blog-card-category">
                        {blog.category}
                      </span>
                    </div>
                  </Link>

                  {/* CONTENT */}
                  <div className="blog-card-content">
                    {/* META */}
                    <div className="blog-card-meta">
                      <span>
                        {blog.date}
                      </span>

                      <span>
                        •
                      </span>

                      <span>
                        {blog.readTime}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3 className="blog-card-title">
                      <Link
                        to={`/library/blog/${blog.id}`}
                      >
                        {blog.title}
                      </Link>
                    </h3>

                    {/* EXCERPT */}
                    <p className="blog-card-excerpt">
                      {blog.excerpt}
                    </p>

                    {/* FOOTER */}
                    <div className="blog-card-footer">
                      <span className="blog-card-author">
                        By {blog.author}
                      </span>

                      <Link
                        to={`/library/blog/${blog.id}`}
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
          )}

        {/* NO RESULTS */}
        {!loading &&
          !error &&
          filteredBlogs.length === 0 && (
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
                onClick={() =>
                  setSearch("")
                }
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
