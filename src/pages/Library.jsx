import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../Library.css";

const blogs = [
  {
    id: "humane-animal-welfare",
    category: "Animal Welfare",
    title: "The Importance of Humane Animal Welfare",
    excerpt:
      "Understanding why compassionate, ethical, and responsible animal welfare practices matter for animals and communities.",
    author: "VFAW",
    date: "September 2, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1600&q=80",

    content: (
      <>
        <p className="lead">
          Animal welfare is an essential part of building a compassionate,
          responsible, and sustainable society. Animals are sentient beings
          capable of experiencing pain, fear, stress, comfort, and positive
          states of well-being.
        </p>

        <p>
          Humane animal welfare means ensuring that animals receive appropriate
          care, protection, and respect throughout their lives. Animal welfare
          extends beyond simply preventing cruelty. It involves providing
          adequate nutrition, clean water, suitable shelter, appropriate
          healthcare, protection from unnecessary suffering, and opportunities
          to express normal behaviours.
        </p>

        <h2>What Is Animal Welfare?</h2>

        <p>
          Animal welfare refers to the physical and mental well-being of an
          animal in relation to the conditions in which it lives and dies. Good
          welfare means that an animal is healthy, comfortable, safe, and able
          to experience positive states while being protected from unnecessary
          pain, fear, and distress.
        </p>

        <p>
          Humane animal welfare applies to companion animals, livestock,
          working animals, wildlife, and animals under human care. The
          responsibilities may differ between species, but the fundamental
          principle remains the same: animals should be treated with care,
          respect, and consideration for their biological and behavioural
          needs.
        </p>

        <blockquote>
          Animal welfare is not only about preventing suffering; it is also
          about creating conditions in which animals can live healthy and
          fulfilling lives.
        </blockquote>

        <h2>The Five Freedoms</h2>

        <p>
          The Five Freedoms provide a widely recognized framework for
          understanding animal welfare.
        </p>

        <ul>
          <li>
            <strong>Freedom from hunger and thirst:</strong> Access to fresh
            water and an appropriate diet.
          </li>

          <li>
            <strong>Freedom from discomfort:</strong> Suitable shelter and
            comfortable living conditions.
          </li>

          <li>
            <strong>Freedom from pain, injury, and disease:</strong> Prevention,
            rapid diagnosis, and appropriate treatment.
          </li>

          <li>
            <strong>Freedom to express normal behaviour:</strong> Adequate
            space and opportunities for natural behaviours.
          </li>

          <li>
            <strong>Freedom from fear and distress:</strong> Conditions that
            minimize unnecessary psychological suffering.
          </li>
        </ul>

        <h2>Why Does Animal Welfare Matter?</h2>

        <h3>1. Ethical Responsibility</h3>

        <p>
          Humans have a significant responsibility toward animals because many
          animals depend directly on people for food, shelter, healthcare,
          protection, and survival.
        </p>

        <p>
          Treating animals humanely reflects compassion, responsibility, and
          respect for living beings. Preventing unnecessary pain, neglect,
          abandonment, and cruelty is a fundamental component of responsible
          animal care.
        </p>

        <h3>2. Better Animal Health</h3>

        <p>
          Animal welfare and animal health are closely connected. Proper
          nutrition, clean water, suitable housing, disease prevention,
          veterinary care, and appropriate handling can significantly improve
          an animal's health and quality of life.
        </p>

        <h3>3. Public Health and Community Well-Being</h3>

        <p>
          Animal welfare is also connected with human health. Responsible animal
          management, vaccination, appropriate sanitation, and timely veterinary
          care contribute to healthier communities.
        </p>

        <h3>4. Responsible Livestock Production</h3>

        <p>
          Providing livestock with adequate nutrition, comfortable housing,
          disease prevention, humane transportation, and proper veterinary care
          supports both animal well-being and sustainable production.
        </p>

        <h2>The Role of Veterinary Professionals</h2>

        <p>
          Veterinary professionals have a central role in protecting and
          promoting animal welfare. Their responsibilities extend beyond
          diagnosing and treating diseases.
        </p>

        <p>
          Veterinarians contribute to preventive healthcare, pain management,
          humane handling, nutrition, responsible breeding, disease control, and
          ethical decision-making.
        </p>

        <h2>Community Participation</h2>

        <p>
          Animal welfare cannot be achieved by veterinarians and animal welfare
          organizations alone. Communities play an equally important role in
          creating lasting change.
        </p>

        <ul>
          <li>Promoting responsible animal ownership</li>
          <li>Supporting humane population management</li>
          <li>Providing appropriate veterinary care</li>
          <li>Encouraging responsible adoption</li>
          <li>Providing proper nutrition and shelter</li>
          <li>Reporting cases of cruelty and neglect</li>
          <li>Creating awareness about responsible animal care</li>
        </ul>

        <h2>Building a Humane Future</h2>

        <p>
          Improving animal welfare requires cooperation between individuals,
          veterinary professionals, farmers, communities, organizations, and
          governments.
        </p>

        <p className="final-statement">
          Ultimately, promoting humane animal welfare is not only an act of
          kindness—it is a shared responsibility toward a healthier, more
          compassionate, and sustainable society.
        </p>
      </>
    ),
  },

  {
    id: "animal-population-management",
    category: "Animal Welfare",
    title: "Humane Animal Population Management",
    excerpt:
      "Exploring responsible and humane approaches to managing stray and companion animal populations.",
    author: "VFAW",
    date: "August 28, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1600&q=80",

    content: (
      <>
        <p className="lead">
          Managing animal populations is an important component of animal
          welfare, public health, and responsible community development.
        </p>

        <p>
          Effective population management should focus on humane, sustainable,
          and evidence-based approaches rather than temporary or harmful
          solutions.
        </p>

        <h2>Understanding the Problem</h2>

        <p>
          Uncontrolled reproduction can contribute to increasing populations of
          stray and free-roaming animals. This can create challenges for
          animals, communities, animal welfare organizations, and local
          authorities.
        </p>

        <h2>Humane Solutions</h2>

        <p>
          Humane population management can include sterilization, vaccination,
          responsible ownership, adoption, identification, disease prevention,
          and public education.
        </p>

        <blockquote>
          Humane population management should prioritize animal welfare while
          addressing legitimate community concerns.
        </blockquote>

        <h2>Community Participation</h2>

        <p>
          Long-term success depends on community participation. Educating animal
          owners and encouraging responsible care can help prevent unwanted
          reproduction and reduce abandonment.
        </p>

        <h2>Conclusion</h2>

        <p className="final-statement">
          Sustainable animal population management requires cooperation among
          veterinary professionals, communities, organizations, animal owners,
          and local authorities.
        </p>
      </>
    ),
  },

  {
    id: "veterinary-students-animal-welfare",
    category: "Veterinary Education",
    title: "The Role of Veterinary Students in Animal Welfare",
    excerpt:
      "How veterinary students can contribute to better animal care, public awareness, and welfare initiatives.",
    author: "VFAW",
    date: "August 20, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1600&q=80",

    content: (
      <>
        <p className="lead">
          Veterinary students are future professionals who can play an important
          role in improving animal welfare.
        </p>

        <p>
          Their education provides knowledge of animal health, behaviour,
          disease prevention, nutrition, and responsible animal care.
        </p>

        <h2>Education and Awareness</h2>

        <p>
          Veterinary students can help communities understand responsible
          ownership, vaccination, nutrition, disease prevention, and humane
          treatment.
        </p>

        <h2>Practical Experience</h2>

        <p>
          Participation in animal welfare programs provides students with
          practical experience while allowing them to contribute meaningfully to
          their communities.
        </p>

        <h2>Building a Better Future</h2>

        <p>
          Through education, volunteering, research, and community engagement,
          veterinary students can become strong advocates for animal welfare.
        </p>

        <p className="final-statement">
          The knowledge and compassion developed during veterinary education can
          create a lasting positive impact on animals and communities.
        </p>
      </>
    ),
  },
];

const Library = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [progress, setProgress] = useState(0);

  const selectedBlog = blogs.find((blog) => blog.id === blogId);

  // Reading progress
  useEffect(() => {
    if (!selectedBlog) return;

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollProgress =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setProgress(
        Math.min(100, Math.max(0, scrollProgress))
      );
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selectedBlog]);

  // =====================================
  // FULL ARTICLE READING MODE
  // =====================================

  if (selectedBlog) {
    return (
      <div
        className={`reading-mode ${
          darkMode ? "reading-dark" : "reading-light"
        }`}
      >
        {/* Reading Progress */}
        <div className="reading-progress-container">
          <div
            className="reading-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Reading Header */}
        <header className="reading-header">
          <div className="reading-header-content">
            <button
              className="back-library-btn"
              onClick={() => navigate("/library")}
            >
              <span>←</span>

              <span className="back-text">
                Back to Library
              </span>
            </button>

            <span className="reading-progress-text">
              {Math.round(progress)}% read
            </span>

            <button
              className="theme-btn"
              onClick={() =>
                setDarkMode(!darkMode)
              }
            >
              {darkMode
                ? "☀ Light"
                : "☾ Dark"}
            </button>
          </div>
        </header>

        {/* Article */}
        <main className="reading-main">
          <article className="reading-article">

            {/* Category */}
            <div className="article-category">
              {selectedBlog.category}
            </div>

            {/* Title */}
            <h1 className="article-title">
              {selectedBlog.title}
            </h1>

            {/* Metadata */}
            <div className="article-meta">
              <span className="article-author">
                {selectedBlog.author}
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

            {/* Hero Image */}
            <div className="article-image-wrapper">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="article-image"
              />
            </div>

            {/* Article Paper */}
            <div className="article-paper">
              <div className="article-content">
                {selectedBlog.content}
              </div>
            </div>

            {/* End Article */}
            <div className="article-ending">
              <div className="ending-symbol">
                ✦
              </div>

              <h3>
                End of Article
              </h3>

              <p>
                Thank you for reading.
              </p>

              <button
                className="explore-btn"
                onClick={() =>
                  navigate("/library")
                }
              >
                ← Explore More Articles
              </button>
            </div>
          </article>
        </main>
      </div>
    );
  }

  // =====================================
  // SEARCH FILTER
  // =====================================

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      blog.category
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      blog.excerpt
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  // =====================================
  // LIBRARY HOME PAGE
  // =====================================

  return (
    <div className="library-page">

      {/* Hero */}
      <section className="library-hero">
        <span className="library-badge">
          VFAW LIBRARY
        </span>

        <h1>
          Knowledge &
          <span>
            Resources
          </span>
        </h1>

        <p>
          Explore articles, insights,
          educational resources, and stories
          related to veterinary science and
          animal welfare.
        </p>

        {/* Search */}
        <div className="library-search">
          <span className="search-icon">
            🔍
          </span>

          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          {search && (
            <button
              className="clear-search"
              onClick={() =>
                setSearch("")
              }
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
      </section>

      {/* Articles */}
      <section className="library-section">

        <div className="library-section-header">
          <div>
            <span className="section-label">
              LATEST ARTICLES
            </span>

            <h2>
              Blogs
            </h2>
          </div>

          <span className="article-count">
            {filteredBlogs.length} Articles
          </span>
        </div>

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="blog-grid">

            {filteredBlogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/library/blog/${blog.id}`}
                style={{
                  textDecoration: "none",
                }}
              >
                <article className="blog-card">

                  {/* Image */}
                  <div className="blog-image-wrapper">

                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="blog-image"
                    />

                    <div className="blog-image-overlay" />

                    <span className="blog-category">
                      {blog.category}
                    </span>
                  </div>

                  {/* Content */}
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

                    <h3>
                      {blog.title}
                    </h3>

                    <p>
                      {blog.excerpt}
                    </p>

                    <div className="read-article-btn">
                      <span>
                        Read Article
                      </span>

                      <span className="read-arrow">
                        →
                      </span>
                    </div>
                  </div>

                </article>
              </Link>
            ))}

          </div>
        ) : (
          /* No Results */
          <div className="no-results">

            <div className="no-results-icon">
              📚
            </div>

            <h3>
              No articles found
            </h3>

            <p>
              Try searching for another topic.
            </p>

            <button
              className="reset-search-btn"
              onClick={() =>
                setSearch("")
              }
            >
              Show All Articles
            </button>

          </div>
        )}

      </section>
    </div>
  );
};

export default Library;
