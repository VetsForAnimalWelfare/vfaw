```jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    setVisible(true);
  }, []);

  const copyText = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);

      setTimeout(() => {
        setCopied("");
      }, 1800);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const phone = "+977 9844898004";
  const email = "vfaw2017@gmail.com";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative bg-[#07152d] text-white overflow-hidden">
        {/* Background effects */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-48 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="absolute top-20 right-[15%] w-3 h-3 rounded-full bg-blue-400/70" />
        <div className="absolute top-[45%] left-[10%] w-2 h-2 rounded-full bg-cyan-300/60" />

        <div
          className={`relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 sm:py-28 lg:py-32 transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md mb-7">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs sm:text-sm tracking-[0.18em] uppercase text-blue-100">
                Vets For Animal Welfare
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
              Let's connect.
              <span className="block text-blue-300 mt-2">
                We're here to help.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base sm:text-lg lg:text-xl leading-8 text-slate-300">
              Have a question, partnership idea, volunteering opportunity,
              or simply want to learn more about VFAW? We'd love to hear from
              you.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <a
                href="#contact-information"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-[#07152d] font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                Contact Information
              </a>

              <Link
                to="/get-involved"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CARDS
      ========================================================== */}
      <section
        id="contact-information"
        className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24"
      >
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3">
            Contact Information
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
            We're always happy to hear from you.
          </h2>

          <p className="mt-5 text-slate-600 leading-7">
            Reach VFAW through any of the channels below. Whether you are
            interested in animal welfare, collaboration, volunteering, or
            educational activities, our team is ready to connect.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {/* OFFICE */}
          <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              Our Office
            </h3>

            <p className="mt-3 text-slate-600 leading-7">
              Siddharthanagar-1,
              <br />
              Bhairahawa, Nepal
            </p>
          </div>

          {/* PHONE */}
          <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
              </svg>
            </div>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              Phone
            </h3>

            <a
              href="tel:+9779844898004"
              className="block mt-3 text-slate-600 hover:text-blue-600 transition-colors break-words"
            >
              {phone}
            </a>

            {/* FIXED COPY BOX */}
            <button
              type="button"
              onClick={() => copyText(phone, "phone")}
              className="mt-5 w-full min-h-[48px] px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-700 hover:bg-white hover:border-blue-400 hover:text-blue-700 active:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-sm"
            >
              {copied === "phone" ? (
                <>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                  Number Copied
                </>
              ) : (
                <>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="9" y="9" width="11" height="11" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  Copy Number
                </>
              )}
            </button>
          </div>

          {/* EMAIL */}
          <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </div>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              Email
            </h3>

            <a
              href={`mailto:${email}`}
              className="block mt-3 text-slate-600 hover:text-blue-600 transition-colors break-all"
            >
              {email}
            </a>

            {/* FIXED COPY BOX */}
            <button
              type="button"
              onClick={() => copyText(email, "email")}
              className="mt-5 w-full min-h-[48px] px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-700 hover:bg-white hover:border-blue-400 hover:text-blue-700 active:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-sm"
            >
              {copied === "email" ? (
                <>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                  Email Copied
                </>
              ) : (
                <>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="9" y="9" width="11" height="11" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  Copy Email
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          OFFICE INFORMATION
      ========================================================== */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Office Information
              </p>

              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                Visit or reach our team.
              </h2>

              <p className="mt-5 text-slate-600 leading-7 max-w-xl">
                Our team works to support animal welfare initiatives,
                veterinary education, community engagement, and student-led
                outreach activities.
              </p>

              <div className="mt-8 space-y-5">

                <div className="flex gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-slate-100 flex items-center justify-center text-blue-600">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Office Hours
                    </h3>
                    <p className="text-slate-600 mt-1">
                      Monday – Friday: 9:00 AM – 5:00 PM
                    </p>
                    <p className="text-slate-500 text-sm mt-1">
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-slate-100 flex items-center justify-center text-blue-600">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Location
                    </h3>
                    <p className="text-slate-600 mt-1">
                      Siddharthanagar-1, Bhairahawa, Nepal
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* MAP */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl min-h-[350px]">
              <iframe
                title="VFAW Office Location"
                src="https://www.google.com/maps?q=Siddharthanagar-1,+Bhairahawa,+Nepal&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <a
                href="https://www.google.com/maps/search/?api=1&query=Siddharthanagar-1,+Bhairahawa,+Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 right-5 inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                Open Maps
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SOCIAL MEDIA
      ========================================================== */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">

        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Follow VFAW
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            Stay connected with us.
          </h2>

          <p className="mt-4 text-slate-600">
            Follow our work, campaigns, educational programs, and animal
            welfare initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">

          {/* FACEBOOK */}
          <a
            href="https://www.facebook.com/vetsforanimalwelfare"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-blue-200 transition-all duration-300"
          >
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#1877F2] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              {/* REAL FACEBOOK ICON */}
              <svg
                viewBox="0 0 24 24"
                width="30"
                height="30"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6h1.8V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.5v3h2.8v8h3.2Z" />
              </svg>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 text-lg">
                Facebook
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Follow our updates
              </p>
            </div>

            <svg
              className="ml-auto text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/vetsforanimalwelfare"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-pink-200 transition-all duration-300"
          >
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              {/* REAL INSTAGRAM ICON */}
              <svg
                viewBox="0 0 24 24"
                width="29"
                height="29"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 text-lg">
                Instagram
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                See our latest work
              </p>
            </div>

            <svg
              className="ml-auto text-slate-400 group-hover:text-pink-600 group-hover:translate-x-1 transition-all"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/company/vets-for-animal-welfare/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-sky-200 transition-all duration-300"
          >
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#0A66C2] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              {/* REAL LINKEDIN ICON */}
              <svg
                viewBox="0 0 24 24"
                width="29"
                height="29"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.5 8.5H3.2V21h3.3V8.5ZM4.85 3A1.95 1.95 0 1 0 4.85 6.9 1.95 1.95 0 0 0 4.85 3ZM21 13.85c0-3.76-2.01-5.51-4.7-5.51-2.17 0-3.14 1.19-3.68 2.03V8.5H9.33V21h3.29v-6.19c0-1.63.31-3.2 2.32-3.2 1.98 0 2 1.85 2 3.31V21H21v-7.15Z" />
              </svg>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 text-lg">
                LinkedIn
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Connect professionally
              </p>
            </div>

            <svg
              className="ml-auto text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>

        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="px-5 sm:px-8 lg:px-12 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[2rem] bg-[#07152d] text-white">

          <div className="absolute -right-32 -top-32 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -left-32 -bottom-32 w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative px-7 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Get involved
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                Have an idea?
                <span className="block text-blue-300">
                  Let's make it happen.
                </span>
              </h2>

              <p className="mt-5 text-slate-300 leading-7">
                Join us in creating a more compassionate future for animals
                through education, action, and collaboration.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-[#07152d] font-semibold hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300"
              >
                Email VFAW
              </a>

              <Link
                to="/get-involved"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
              >
                Get Involved
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          MOBILE / ACCESSIBILITY FIXES
      ========================================================== */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        button,
        a {
          -webkit-tap-highlight-color: transparent;
        }

        @media (max-width: 640px) {
          /*
            Prevent long contact details from breaking
            the mobile card layout.
          */
          .break-all {
            overflow-wrap: anywhere;
          }

          /*
            Make buttons easier to tap on mobile.
          */
          button {
            min-height: 48px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
};

export default Contact;
```
