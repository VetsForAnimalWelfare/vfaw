import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

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
        <p>
          Animal welfare is an important part of building a compassionate and
          responsible society. It involves ensuring that animals are treated
          with care, respect, and kindness throughout their lives.
        </p>

        <h2>What is Animal Welfare?</h2>

        <p>
          Animal welfare refers to the physical and mental well-being of
          animals. It includes providing appropriate nutrition, shelter,
          healthcare, protection from unnecessary suffering, and opportunities
          for animals to express normal behaviour.
        </p>

        <blockquote>
          "Animal welfare is not only about preventing suffering; it is also
          about creating conditions in which animals can live healthy and
          fulfilling lives."
        </blockquote>

        <h2>Why Does Animal Welfare Matter?</h2>

        <p>
          Responsible animal care benefits both animals and people. Healthy
          animals contribute to healthier communities, while humane treatment
          promotes compassion and responsible ownership.
        </p>

        <p>
          Communities can contribute through responsible pet ownership,
          vaccination, sterilization, adoption, proper nutrition, and
          appropriate veterinary care.
        </p>

        <h2>The Role of the Community</h2>

        <p>
          Animal welfare cannot be achieved by organizations alone.
          Communities, students, veterinary professionals, local authorities,
          and animal owners all have an important role to play.
        </p>

        <ul>
          <li>Promoting responsible animal ownership</li>
          <li>Supporting humane population management</li>
          <li>Providing appropriate veterinary care</li>
          <li>Encouraging adoption and responsible breeding</li>
          <li>Creating awareness about animal welfare</li>
        </ul>

        <h2>Conclusion</h2>

        <p>
          Humane animal welfare requires continuous effort, education, and
          cooperation. Even small actions can contribute to a safer and more
          compassionate environment for animals and people.
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
        <p>
          Managing animal populations is an important component of animal
          welfare and public health. Effective programs should focus on humane,
          sustainable, and evidence-based approaches.
        </p>

        <h2>Understanding the Problem</h2>

        <p>
          Uncontrolled reproduction can contribute to increasing numbers of
          stray animals. This can create challenges for animals, communities,
          and local authorities.
        </p>

        <h2>Humane Solutions</h2>

        <p>
          Population management programs can include sterilization,
          vaccination, responsible ownership, adoption, identification, and
          public education.
        </p>

        <blockquote>
          Humane population management should prioritize animal welfare while
          addressing community concerns.
        </blockquote>

        <h2>Community Participation</h2>

        <p>
          Long-term success depends on community participation. Educating
          animal owners and encouraging responsible care can help prevent the
          problem from recurring.
        </p>

        <h2>Conclusion</h2>

        <p>
          Sustainable animal population management requires cooperation among
          veterinary professionals, communities, organizations, and
          authorities.
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
        <p>
          Veterinary students are future professionals who can play an
          important role in improving animal welfare. Their education provides
          them with knowledge of animal health, behaviour, disease prevention,
          and responsible care.
        </p>

        <h2>Education and Awareness</h2>

        <p>
          Students can help communities understand responsible ownership,
          vaccination, nutrition, disease prevention, and humane treatment.
        </p>

        <h2>Practical Experience</h2>

        <p>
          Participation in animal welfare programs provides students with
          practical experience while allowing them to contribute to the
          community.
        </p>

        <h2>Building a Better Future</h2>

        <p>
          Through education, volunteering, research, and community engagement,
          veterinary students can become strong advocates for animal welfare.
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

  const selectedBlog = blogs.find((blog) => blog.id === blogId);

  // Reading progress
  useEffect(() => {
    if (!selectedBlog) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      const bar = document.getElementById("reading-progress");

      if (bar) {
        bar.style.width = `${progress}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedBlog]);

  // BLOG READING MODE
  if (selectedBlog) {
    return (
      <div
        className={`min-h-screen transition-colors duration-500 ${
          darkMode
            ? "bg-gray-950 text-gray-200"
            : "bg-[#fafaf9] text-gray-800"
        }`}
      >
        {/* Reading Progress */}
        <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-gray-200/30">
          <div
            id="reading-progress"
            className="h-full bg-emerald-600 transition-all duration-100"
            style={{ width: "0%" }}
          />
        </div>

        {/* Reading Header */}
        <header
          className={`sticky top-0 z-50 backdrop-blur-xl border-b ${
            darkMode
              ? "bg-gray-950/90 border-gray-800"
              : "bg-white/90 border-gray-200"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <button
              onClick={() => navigate("/library")}
              className="flex items-center gap-2 font-semibold hover:text-emerald-600 transition-colors"
            >
              <span className="text-xl">←</span>
              <span className="hidden sm:inline">Back to Library</span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {darkMode ? "☀ Light" : "☾ Dark"}
            </button>
          </div>
        </header>

        {/* Article */}
        <article className="max-w-4xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
          {/* Category */}
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold uppercase tracking-wider">
              {selectedBlog.category}
            </span>
          </div>

          {/* Title */}
          <h1
            className={`mt-8 text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-center ${
              darkMode ? "text-white" : "text-gray-950"
            }`}
          >
            {selectedBlog.title}
          </h1>

          {/* Meta */}
          <div
            className={`mt-7 flex flex-wrap justify-center items-center gap-3 text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <span>{selectedBlog.author}</span>
            <span>•</span>
            <span>{selectedBlog.date}</span>
            <span>•</span>
            <span>{selectedBlog.readTime}</span>
          </div>

          {/* Hero Image */}
          <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-[280px] sm:h-[450px] object-cover"
            />
          </div>

          {/* Article Content */}
          <div
            className={`
              mt-14
              prose
              prose-lg
              sm:prose-xl
              max-w-none

              prose-headings:font-extrabold
              prose-headings:tracking-tight
              prose-p:leading-8
              prose-p:mb-7

              prose-li:leading-8

              prose-blockquote:border-l-4
              prose-blockquote:border-emerald-500
              prose-blockquote:pl-6
              prose-blockquote:italic

              ${
                darkMode
                  ? "prose-invert"
                  : "prose-gray"
              }
            `}
          >
            {selectedBlog.content}
          </div>

          {/* End Article */}
          <div className="mt-16 pt-10 border-t border-gray-300/30 text-center">
            <div className="text-3xl mb-4">✦</div>

            <h3
              className={`text-2xl font-extrabold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              End of Article
            </h3>

            <p
              className={`mt-2 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Thank you for reading.
            </p>

            <button
              onClick={() => navigate("/library")}
              className="mt-6 px-7 py-3 rounded-full bg-emerald-600 text-white font-bold hover:bg-emerald-700 hover:-translate-y-1 transition-all shadow-lg"
            >
              ← Explore More Articles
            </button>
          </div>
        </article>
      </div>
    );
  }

  // LIBRARY PAGE
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.category.toLowerCase().includes(search.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <section className="text-center py-12 sm:py-20">
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold tracking-wider">
            VFAW LIBRARY
          </span>

          <h1 className="mt-6 text-5xl sm:text-6xl font-black text-gray-950">
            Knowledge & Resources
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600 leading-relaxed">
            Explore articles, insights, educational resources, and stories
            related to veterinary science and animal welfare.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto mt-10 relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-6 py-4 pl-12 rounded-2xl bg-white border border-gray-200 shadow-lg outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />

            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
              🔍
            </span>
          </div>
        </section>

        {/* Blog Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-sm font-bold text-emerald-600 uppercase tracking-wider">
                Latest Articles
              </p>

              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2">
                Blogs
              </h2>
            </div>

            <span className="text-sm text-gray-500">
              {filteredBlogs.length} Articles
            </span>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/library/blog/${blog.id}`}
                className="group"
              >
                <article
                  className="
                    h-full
                    bg-white
                    rounded-3xl
                    overflow-hidden
                    border border-gray-100
                    shadow-[0_12px_35px_rgba(0,0,0,0.08)]
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:shadow-[0_25px_55px_rgba(0,0,0,0.15)]
                  "
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    <span className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-emerald-700 text-xs font-bold">
                      {blog.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-gray-900 leading-tight group-hover:text-emerald-700 transition-colors">
                      {blog.title}
                    </h3>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {blog.excerpt}
                    </p>

                    <div className="mt-7 flex items-center justify-between">
                      <span className="font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">
                        Read Article →
                      </span>

                      <span className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                        →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredBlogs.length === 0 && (
            <div className="text-center py-20">
              <div className="text-5xl mb-5">📚</div>

              <h3 className="text-2xl font-bold text-gray-900">
                No articles found
              </h3>

              <p className="mt-2 text-gray-500">
                Try searching for another topic.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Library;
