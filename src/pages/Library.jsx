import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../Library.css";

/* =========================================================
   BLOG DATA
========================================================= */

const blogs = [
  {
    id: "milk-fever",
    category: "Veterinary Medicine",
    title: "Milk Fever in Dairy Cows",
    excerpt:
      "A comprehensive guide to parturient paresis, hypocalcaemia, calcium homeostasis, risk factors, and prevention in dairy cows.",
    author: "VFAW",
    date: "September 2, 2026",
    readTime: "15 min read",
    image: "/images/milk-fever.jpg",

    /*
      Blogger article is displayed INSIDE the Library.
      No redirect is required.
    */
    bloggerUrl: "https://vfaw.blogspot.com/2026/09/milk-fever.html",
  },

  {
    id: "humane-animal-welfare",
    category: "Animal Welfare",
    title: "The Importance of Humane Animal Welfare",
    excerpt:
      "Understanding why compassionate and ethical animal welfare practices are essential for healthier animals and communities.",
    author: "VFAW",
    date: "August 2026",
    readTime: "6 min read",
    image: "/images/animal-welfare.jpg",

    content: (
      <>
        <p>
          Animal welfare is an important part of creating a healthy and
          compassionate society. It focuses on ensuring that animals are
          treated with respect, provided with proper care, and protected from
          unnecessary pain and suffering.
        </p>

        <h2>Why Animal Welfare Matters</h2>

        <p>
          Animals depend on humans in many different situations. Companion
          animals, livestock, working animals, and wildlife can all be affected
          by human decisions and activities.
        </p>

        <p>
          Humane treatment improves animal health and also contributes to
          public health, environmental sustainability, and responsible
          communities.
        </p>

        <h2>Our Responsibility</h2>

        <p>
          Promoting animal welfare requires cooperation between veterinarians,
          animal owners, communities, governments, and animal welfare
          organizations.
        </p>

        <p>
          Small actions such as providing adequate food, clean water, shelter,
          medical care, and protection from unnecessary suffering can create a
          significant difference in animal lives.
        </p>
      </>
    ),
  },

  {
    id: "animal-population-management",
    category: "Animal Welfare",
    title: "Humane Animal Population Management",
    excerpt:
      "Exploring responsible and humane approaches to managing stray animal populations while protecting animal welfare.",
    author: "VFAW",
    date: "August 2026",
    readTime: "7 min read",
    image: "/images/animal-population.jpg",

    content: (
      <>
        <p>
          Humane animal population management is an important component of
          responsible animal welfare. Uncontrolled animal populations can
          create challenges for both animals and communities.
        </p>

        <h2>Humane Population Control</h2>

        <p>
          Modern animal welfare programs emphasize humane methods such as
          sterilization, vaccination, responsible ownership, adoption, and
          community education.
        </p>

        <h2>Importance of Sterilization</h2>

        <p>
          Sterilization can help reduce unwanted births and gradually stabilize
          animal populations. It can also contribute to better population
          health when combined with vaccination and appropriate veterinary
          care.
        </p>

        <h2>Community Participation</h2>

        <p>
          Sustainable animal population management requires cooperation among
          animal owners, veterinary professionals, local authorities, and the
          wider community.
        </p>
      </>
    ),
  },

  {
    id: "veterinary-students-animal-welfare",
    category: "Education",
    title: "The Role of Veterinary Students in Animal Welfare",
    excerpt:
      "How veterinary students can contribute to animal welfare through education, clinical practice, advocacy, and community programs.",
    author: "VFAW",
    date: "August 2026",
    readTime: "5 min read",
    image: "/images/veterinary-students.jpg",

    content: (
      <>
        <p>
          Veterinary students have an important role in promoting animal
          welfare. Their education provides them with knowledge about animal
          health, behavior, disease prevention, and humane treatment.
        </p>

        <h2>Education and Awareness</h2>

        <p>
          Veterinary students can educate animal owners and communities about
          responsible animal care, vaccination, nutrition, disease prevention,
          and humane handling.
        </p>

        <h2>Community Service</h2>

        <p>
          Participation in vaccination campaigns, sterilization programs,
          awareness activities, and animal rescue initiatives can provide
          meaningful benefits to communities.
        </p>

        <h2>Future Veterinary Professionals</h2>

        <p>
          By developing strong ethical values during their education,
          veterinary students can become effective advocates for animal
          welfare throughout their professional careers.
        </p>
      </>
    ),
  },
];

/* =========================================================
   LIBRARY COMPONENT
========================================================= */

const Library = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [readingProgress, setReadingProgress] = useState(0);

  const selectedBlog = blogs.find((blog) => blog.id === blogId);

  /* =======================================================
     READING PROGRESS
  ======================================================= */

  useEffect(() => {
    if (!selectedBlog) {
      setReadingProgress(0);
      return;
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        setReadingProgress(0);
        return;
      }

      const progress = (scrollTop / documentHeight) * 100;

      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selectedBlog]);

  /* =======================================================
     RESET SCROLL WHEN OPENING ARTICLE
  ======================================================= */

  useEffect(() => {
    if (selectedBlog) {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [selectedBlog]);

  /* =======================================================
     FILTER BLOGS
  ======================================================= */

  const filteredBlogs = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return blogs;
    }

    return blogs.filter((blog) => {
      return (
        blog.title.toLowerCase().includes(query) ||
        blog.category.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query) ||
        blog.author.toLowerCase().includes(query)
      );
    });
  }, [search]);

  /* =======================================================
     ARTICLE READING MODE
  ======================================================= */

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

        {/* Article Header */}
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
              onClick={() => setDarkMode((previous) => !previous)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </header>

        {/* Article */}
        <main className="article-document">
          <div className="article-heading">
            <span className="article-category">
              {selectedBlog.category}
            </span>

            <h1 className="article-title">
              {selectedBlog.title}
            </h1>

            <div className="article-meta">
              <span>By {selectedBlog.author}</span>
              <span>•</span>
              <span>{selectedBlog.date}</span>
              <span>•</span>
              <span>{selectedBlog.readTime}</span>
            </div>
          </div>

          {/* Hero Image */}
          {selectedBlog.image && (
            <figure className="article-hero">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="article-hero-image"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </figure>
          )}

          {/* =================================================
              BLOGGER EMBED
          ================================================== */}

          {selectedBlog.bloggerUrl ? (
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
          ) : (
            /* =================================================
               NORMAL REACT ARTICLE
            ================================================== */

            <article className="article-content">
              {selectedBlog.content}
            </article>
          )}

          {/* End of article */}
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
     LIBRARY HOME
  ========================================================= */

  return (
    <div className="library-page">
      {/* =====================================================
          HERO
      ====================================================== */}

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
              Explore practical knowledge, veterinary insights,
              animal welfare resources, and educational articles
              created to promote healthier animals and stronger
              communities.
            </p>

            {/* Search */}
            <div className="library-search">
              <span className="library-search-icon">
                🔍
              </span>

              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search articles..."
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

      {/* =====================================================
          BLOG LIST
      ====================================================== */}

      <main className="library-container library-main">
        {/* Result information */}
        <div className="library-results-header">
          <div>
            <h2>Latest Articles</h2>

            <p>
              {filteredBlogs.length}{" "}
              {filteredBlogs.length === 1
                ? "article"
                : "articles"}{" "}
              available
            </p>
          </div>
        </div>

        {/* ===================================================
            BLOG GRID
        ==================================================== */}

        {filteredBlogs.length > 0 ? (
          <div className="blog-grid">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="blog-card"
              >
                {/* Image */}
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

                    {/* Category badge */}
                    <span className="blog-card-category">
                      {blog.category}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span>{blog.date}</span>

                    <span>•</span>

                    <span>{blog.readTime}</span>
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
          /* =================================================
             NO SEARCH RESULTS
          ================================================== */

          <div className="library-empty">
            <div className="library-empty-icon">
              🔎
            </div>

            <h3>No articles found</h3>

            <p>
              We couldn't find an article matching
              "{search}".
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
