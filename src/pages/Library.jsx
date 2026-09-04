import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../Library.css";

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

        /*
         * JSONP-style Blogger feed via direct JSON endpoint
         */
        const response = await fetch(
          `${BLOGGER_BASE_URL}/feeds/posts/default?alt=json&max-results=100`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            `Unable to load Blogger articles. Status: ${response.status}`
          );
        }

        const data = await response.json();

        const entries = data?.feed?.entry || [];

        if (!entries.length) {
          setBlogs([]);
          return;
        }

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
           * Create safe React route ID
           */
          const slug =
            bloggerId ||
            alternateLink
              .replace(BLOGGER_BASE_URL, "")
              .replace(/^\/+/, "")
              .replace(/\/+$/, "")
              .replace(/\//g, "-")
              .replace(/[^a-zA-Z0-9-]/g, "")
              .toLowerCase();

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
           * Published date
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
          const content =
            entry.content?.$t ||
            entry.summary?.$t ||
            "";

          /*
           * Convert HTML to plain text
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
           * Category
           */
          const category =
            entry.category?.[0]?.term ||
            "Animal Welfare";

          /*
           * Find first image
           */
          let firstImage = null;

          const imageElement =
            tempDiv.querySelector("img");

          if (imageElement?.src) {
            firstImage = imageElement.src;
          }

          /*
           * If Blogger thumbnail exists
           */
          if (!firstImage && entry.media$thumbnail?.url) {
            firstImage = entry.media$thumbnail.url;
          }

          /*
           * Reading time
           */
          const wordCount = plainText
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
        console.error("Blogger fetch error:", err);

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
    (blog) =>
      blog.id === blogId ||
      blog.bloggerId === blogId
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
      const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop;

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
        Math.min(
          100,
          Math.max(0, progress)
        )
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

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
   * SCROLL TO TOP
   * ---------------------------------------------------------
   */

  useEffect(() => {
    if (selectedBlog) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [selectedBlog]);

  /*
   * ---------------------------------------------------------
   * SEARCH
   * ---------------------------------------------------------
   */

  const filteredBlogs = useMemo(() => {
    const query =
      search.trim().toLowerCase();

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
   * ARTICLE PAGE
   * ---------------------------------------------------------
   */

  if (blogId) {
    if (loading) {
      return (
        <div className="library-page">
          <div className="library-loading">
            <div className="library-loader" />

            <h3>Loading article</h3>

            <p>
              Please wait while the article is loading.
            </p>
          </div>
        </div>
      );
    }

    if (!selectedBlog) {
      return (
        <div className="library-page">
          <div className="library-empty">
            <div className="library-empty-icon">
              📄
            </div>

            <h3>Article not found</h3>

            <p>
              The article you are looking for could
              not be found.
            </p>

            <button
              type="button"
              className="library-empty-button"
              onClick={() =>
                navigate("/library")
              }
            >
              Back to Library
            </button>
          </div>
        </div>
      );
    }

    return (
      <div
        className={`article-page ${
          darkMode
            ? "article-dark-mode"
            : ""
        }`}
      >
        <div
          className="reading-progress"
          style={{
            width: `${readingProgress}%`,
          }}
        />

        <header className="article-header">
          <div className="article-header-inner">
            <button
              type="button"
              className="article-back-button"
              onClick={() =>
                navigate("/library")
              }
            >
              ← Back to Library
            </button>

            <button
              type="button"
              className="article-theme-button"
              onClick={() =>
                setDarkMode(
                  (previous) =>
                    !previous
                )
              }
              aria-label="Toggle dark mode"
            >
              {darkMode
                ? "☀️"
                : "🌙"}
            </button>
          </div>
        </header>

        <main className="article-document">
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

          <section className="blogger-reader-section">
            <div className="blogger-reader">
              <iframe
                src={selectedBlog.bloggerUrl}
                title={selectedBlog.title}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </section>

          <div className="article-end">
            <div className="article-end-line" />

            <p>
              You have reached the end of this
              article.
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
                  setSearch(
                    event.target.value
                  )
                }
                placeholder="Search articles, topics, or authors..."
                aria-label="Search articles"
              />

              {search && (
                <button
                  type="button"
                  className="library-search-clear"
                  onClick={() =>
                    setSearch("")
                  }
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}

            </div>
          </div>
        </div>
      </section>

      <main className="library-container library-main">

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

        {!loading &&
          !error &&
          filteredBlogs.length > 0 && (
            <div className="blog-grid">

              {filteredBlogs.map(
                (blog) => (
                  <article
                    key={blog.id}
                    className="blog-card"
                  >

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

                    <div className="blog-card-content">

                      <div className="blog-card-meta">
                        <span>
                          {blog.date}
                        </span>

                        <span>•</span>

                        <span>
                          {blog.readTime}
                        </span>
                      </div>

                      <h3 className="blog-card-title">
                        <Link
                          to={`/library/blog/${blog.id}`}
                        >
                          {blog.title}
                        </Link>
                      </h3>

                      <p className="blog-card-excerpt">
                        {blog.excerpt}
                      </p>

                      <div className="blog-card-footer">

                        <span className="blog-card-author">
                          By {blog.author}
                        </span>

                        <Link
                          to={`/library/blog/${blog.id}`}
                          className="blog-read-more"
                        >
                          Read Article
                          <span
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </Link>

                      </div>

                    </div>

                  </article>
                )
              )}

            </div>
          )}

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
