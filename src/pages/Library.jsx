import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./Library.css";

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
          states of well-being. Humane animal welfare means ensuring that
          animals receive appropriate care, protection, and respect throughout
          their lives.
        </p>

        <p>
          Animal welfare extends beyond simply preventing cruelty. It involves
          providing animals with adequate nutrition, clean water, suitable
          shelter, appropriate healthcare, protection from unnecessary
          suffering, and opportunities to express normal behaviours.
        </p>

        <h2>What Is Animal Welfare?</h2>

        <p>
          Animal welfare refers to the physical and mental well-being of an
          animal in relation to the conditions in which it lives and dies.
          Good welfare means that an animal is healthy, comfortable, safe, and
          able to experience positive states while being protected from
          unnecessary pain, fear, and distress.
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
          "Animal welfare is not only about preventing suffering; it is also
          about creating conditions in which animals can live healthy and
          fulfilling lives."
        </blockquote>

        <h2>The Five Freedoms</h2>

        <p>
          One widely recognized framework for understanding animal welfare is
          the Five Freedoms. These principles provide a practical foundation
          for evaluating and improving the conditions in which animals are
          kept.
        </p>

        <ul>
          <li>
            <strong>Freedom from hunger and thirst:</strong> Access to fresh
            water and an appropriate diet that maintains health and vigour.
          </li>

          <li>
            <strong>Freedom from discomfort:</strong> Suitable shelter,
            resting areas, and a comfortable living environment.
          </li>

          <li>
            <strong>Freedom from pain, injury, and disease:</strong> Prevention,
            rapid diagnosis, and appropriate veterinary treatment.
          </li>

          <li>
            <strong>Freedom to express normal behaviour:</strong> Adequate
            space, appropriate facilities, and opportunities for natural
            behaviours.
          </li>

          <li>
            <strong>Freedom from fear and distress:</strong> Conditions and
            handling that minimize unnecessary psychological suffering.
          </li>
        </ul>

        <h2>Why Does Animal Welfare Matter?</h2>

        <h3>1. Ethical Responsibility</h3>

        <p>
          Humans have a significant responsibility toward animals because many
          animals depend directly on people for food, shelter, healthcare,
          protection, and survival. Treating animals humanely reflects
          compassion, responsibility, and respect for living beings.
        </p>

        <p>
          Preventing unnecessary pain, neglect, abandonment, and cruelty is a
          fundamental component of responsible animal care. Ethical animal
          welfare encourages people to consider not only what animals provide
          to humans but also the quality of life experienced by the animals
          themselves.
        </p>

        <h3>2. Better Animal Health</h3>

        <p>
          Animal welfare and animal health are closely connected. Proper
          nutrition, clean water, suitable housing, disease prevention,
          veterinary care, and appropriate handling can significantly improve
          an animal's health and quality of life.
        </p>

        <p>
          Poor living conditions and prolonged stress can negatively affect
          animals and may increase their vulnerability to disease. Improving
          welfare therefore supports healthier animals and can contribute to
          better outcomes in both companion animal care and livestock
          production.
        </p>

        <h3>3. Public Health and Community Well-Being</h3>

        <p>
          Animal welfare is also closely connected with human health.
          Responsible animal management can help reduce risks associated with
          zoonotic diseases and improve hygiene within communities.
        </p>

        <p>
          Vaccination, responsible ownership, humane population management,
          appropriate sanitation, and timely veterinary care all contribute to
          healthier relationships between people and animals.
        </p>

        <h3>4. Responsible Livestock Production</h3>

        <p>
          Animal welfare is particularly important in livestock farming.
          Cattle, buffalo, goats, sheep, poultry, and other farm animals make
          important contributions to food security and rural livelihoods.
        </p>

        <p>
          Providing adequate nutrition, comfortable housing, disease
          prevention, humane transportation, appropriate handling, and proper
          veterinary care supports both animal well-being and sustainable
          production.
        </p>

        <h3>5. Reducing Cruelty and Neglect</h3>

        <p>
          Animal cruelty may occur through intentional abuse, neglect,
          abandonment, inappropriate handling, or inadequate living
          conditions. Education and awareness can help communities identify
          these problems and encourage responsible behaviour.
        </p>

        <h2>The Role of Veterinary Professionals</h2>

        <p>
          Veterinary professionals have a central role in protecting and
          promoting animal welfare. Their responsibilities extend beyond
          diagnosing and treating diseases. Veterinarians also contribute to
          preventive healthcare, pain management, humane handling, nutrition,
          responsible breeding, disease control, and ethical decision-making.
        </p>

        <p>
          Veterinary students and professionals can also educate animal
          owners, farmers, communities, and policymakers about responsible
          animal care. Their scientific knowledge allows welfare principles to
          be translated into practical actions.
        </p>

        <h2>The Importance of Community Participation</h2>

        <p>
          Animal welfare cannot be achieved by veterinarians and animal welfare
          organizations alone. Communities play an equally important role in
          creating lasting change.
        </p>

        <ul>
          <li>Promoting responsible animal ownership</li>
          <li>Supporting humane population management</li>
          <li>Providing appropriate veterinary care</li>
          <li>Encouraging responsible adoption and breeding</li>
          <li>Providing proper nutrition and shelter</li>
          <li>Reporting cases of cruelty and neglect</li>
          <li>Creating awareness about responsible animal care</li>
        </ul>

        <h2>Education and Awareness</h2>

        <p>
          Education is one of the most effective tools for improving animal
          welfare. Teaching children and young people to respect animals can
          help establish compassionate attitudes from an early age.
        </p>

        <p>
          Schools, veterinary institutions, animal welfare organizations,
          community groups, and digital platforms can all contribute to
          spreading accurate information about animal care and responsible
          ownership.
        </p>

        <h2>Building a Humane Future</h2>

        <p>
          Improving animal welfare requires cooperation between individuals,
          veterinary professionals, farmers, communities, organizations, and
          governments. Effective welfare programs should combine education,
          preventive healthcare, responsible ownership, humane population
          management, and evidence-based practices.
        </p>

        <p>
          Even small actions can make a meaningful difference. Providing clean
          water, helping an injured animal receive veterinary care, adopting
          responsibly, preventing unwanted reproduction, or educating another
          person about animal welfare can contribute to broader positive
          change.
        </p>

        <h2>Conclusion</h2>

        <p>
          Humane animal welfare is not simply about protecting animals from
          cruelty. It is about creating conditions in which animals can live
          healthier, safer, and more dignified lives. It reflects the values of
          compassion, responsibility, science, and respect for life.
        </p>

        <p>
          A humane society is built through everyday choices. By promoting
          responsible ownership, providing appropriate veterinary care,
          preventing unnecessary suffering, and educating communities, we can
          create a better environment for both animals and people.
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
          Effective population management should focus on humane, sustainable,
          and evidence-based approaches.
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
          Long-term success depends on community participation. Educating
          animal owners and encouraging responsible care can help prevent
          unwanted reproduction and reduce abandonment.
        </p>

        <h2>Conclusion</h2>

        <p>
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
          practical experience while allowing them to contribute meaningfully
          to their communities.
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
            : "bg-[#f5f5f3] text-gray-800"
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
        <main className="px-4 sm:px-6">
          <article className="max-w-4xl mx-auto py-14 sm:py-20">
            {/* Category */}
            <div className="text-center">
              <span
                className={`inline-block px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider ${
                  darkMode
                    ? "bg-emerald-950 text-emerald-400"
                    : "bg-emerald-100 text-emerald-700"
                }`}
              >
                {selectedBlog.category}
              </span>
            </div>

            {/* Title */}
            <h1
              className={`mt-7 text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] text-center tracking-tight ${
                darkMode ? "text-white" : "text-gray-950"
              }`}
            >
              {selectedBlog.title}
            </h1>

            {/* Meta */}
            <div
              className={`mt-7 flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              <span className="font-semibold">{selectedBlog.author}</span>
              <span>•</span>
              <span>{selectedBlog.date}</span>
              <span>•</span>
              <span>{selectedBlog.readTime}</span>
            </div>

            {/* Hero Image */}
            <div className="mt-12 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-[260px] sm:h-[420px] object-cover"
              />
            </div>

            {/* Article Paper */}
            <div
              className={`mt-10 sm:mt-14 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 shadow-sm border ${
                darkMode
                  ? "bg-gray-900 border-gray-800"
                  : "bg-white border-gray-200"
              }`}
            >
              {/* Article Content */}
              <div
                className={`
                  prose
                  prose-lg
                  sm:prose-xl
                  max-w-none

                  prose-headings:font-extrabold
                  prose-headings:tracking-tight

                  prose-h2:text-2xl
                  sm:prose-h2:text-3xl
                  prose-h2:mt-14
                  prose-h2:mb-5

                  prose-h3:text-xl
                  sm:prose-h3:text-2xl
                  prose-h3:mt-10
                  prose-h3:mb-4

                  prose-p:leading-[1.9]
                  prose-p:mb-7

                  prose-li:leading-[1.8]
                  prose-li:mb-2

                  prose-blockquote:border-l-4
                  prose-blockquote:border-emerald-500
                  prose-blockquote:pl-6
                  prose-blockquote:py-2
                  prose-blockquote:italic

                  prose-blockquote:text-gray-600
                  prose-blockquote:my-10

                  prose-strong:font-bold

                  ${darkMode ? "prose-invert" : "prose-gray"}
                `}
              >
                {selectedBlog.content}
              </div>
            </div>

            {/* End Article */}
            <div
              className={`mt-14 pt-10 border-t text-center ${
                darkMode ? "border-gray-800" : "border-gray-300"
              }`}
            >
              <div className="text-3xl mb-4 text-emerald-600">✦</div>

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
        </main>
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
