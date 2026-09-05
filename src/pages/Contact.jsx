import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState("");

  const phone = "+977 9844898004";
  const email = "vfaw2017@gmail.com";

  useEffect(() => {
    setVisible(true);
  }, []);

  const copyToClipboard = (text, type) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(type);

        setTimeout(() => {
          setCopied("");
        }, 1800);
      })
      .catch(() => {
        setCopied("");
      });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#07152d] text-white">

        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl"></div>

        <div className="absolute top-24 left-[12%] h-2 w-2 rounded-full bg-blue-300"></div>

        <div className="absolute top-[35%] right-[18%] h-3 w-3 rounded-full bg-cyan-300"></div>

        <div
          className={`relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32 transition-all duration-1000 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="max-w-4xl">

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-blue-400"></span>

              <span className="text-xs uppercase tracking-[0.18em] text-blue-100 sm:text-sm">
                Vets For Animal Welfare
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Let's connect.
              <span className="mt-2 block text-blue-300">
                We're here to help.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Have a question, partnership idea, volunteering opportunity,
              or simply want to learn more about VFAW? We'd love to hear from
              you.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#contact-information"
                className="rounded-xl bg-white px-6 py-3.5 font-semibold text-[#07152d] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
              >
                Contact Information
              </a>

              <Link
                to="/get-involved"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Get Involved
              </Link>

            </div>
          </div>
        </div>
      </section>


      {/* ================= CONTACT INFORMATION ================= */}
      <section
        id="contact-information"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >

        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Contact Information
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            We're always happy to hear from you.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Reach VFAW through any of the channels below. Whether you are
            interested in animal welfare, collaboration, volunteering, or
            educational activities, our team is ready to connect.
          </p>

        </div>


        <div className="grid gap-6 md:grid-cols-3">

          {/* ================= OFFICE ================= */}
          <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">

              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>

            </div>

            <h3 className="mt-6 text-xl font-semibold">
              Our Office
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Siddharthanagar-1,
              <br />
              Bhairahawa, Nepal
            </p>

          </div>


          {/* ================= PHONE ================= */}
          <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">

              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
              </svg>

            </div>

            <h3 className="mt-6 text-xl font-semibold">
              Phone
            </h3>

            <a
              href="tel:+9779844898004"
              className="mt-3 block text-slate-600 transition hover:text-blue-600"
            >
              {phone}
            </a>


            {/* COPY NUMBER */}
            <button
              type="button"
              onClick={() => copyToClipboard(phone, "phone")}
              className="mt-5 flex min-h-[50px] w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm transition duration-300 hover:border-blue-400 hover:bg-white hover:text-blue-700"
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
                    <rect
                      x="9"
                      y="9"
                      width="11"
                      height="11"
                      rx="2"
                    />

                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>

                  Copy Number
                </>
              )}

            </button>

          </div>


          {/* ================= EMAIL ================= */}
          <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">

              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>

            </div>

            <h3 className="mt-6 text-xl font-semibold">
              Email
            </h3>

            <a
              href="mailto:vfaw2017@gmail.com"
              className="mt-3 block break-all text-slate-600 transition hover:text-blue-600"
            >
              {email}
            </a>


            {/* COPY EMAIL */}
            <button
              type="button"
              onClick={() => copyToClipboard(email, "email")}
              className="mt-5 flex min-h-[50px] w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm transition duration-300 hover:border-blue-400 hover:bg-white hover:text-blue-700"
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
                    <rect
                      x="9"
                      y="9"
                      width="11"
                      height="11"
                      rx="2"
                    />

                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>

                  Copy Email
                </>
              )}

            </button>

          </div>

        </div>
      </section>


      {/* ================= OFFICE INFORMATION ================= */}
      <section className="border-y border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Office Information
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Visit or reach our team.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-slate-600">
                Our team works to support animal welfare initiatives,
                veterinary education, community engagement, and student-led
                outreach activities.
              </p>


              <div className="mt-8 space-y-6">

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-blue-600">

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

                    <h3 className="font-semibold">
                      Office Hours
                    </h3>

                    <p className="mt-1 text-slate-600">
                      Monday - Friday: 9:00 AM - 5:00 PM
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Saturday & Sunday: Closed
                    </p>

                  </div>

                </div>


                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-blue-600">

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

                    <h3 className="font-semibold">
                      Location
                    </h3>

                    <p className="mt-1 text-slate-600">
                      Siddharthanagar-1, Bhairahawa, Nepal
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* MAP */}
            <div className="relative h-[350px] overflow-hidden rounded-3xl border border-slate-200 shadow-xl">

              <iframe
                title="VFAW Office Location"
                src="https://www.google.com/maps?q=Siddharthanagar-1,Bhairahawa,Nepal&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Siddharthanagar-1,Bhairahawa,Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 right-5 rounded-xl bg-white px-4 py-3 font-semibold text-slate-900 shadow-lg transition duration-300 hover:-translate-y-1"
              >
                Open Maps
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* ================= SOCIAL MEDIA ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">

        <div className="mx-auto mb-10 max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Follow VFAW
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Stay connected with us.
          </h2>

          <p className="mt-4 text-slate-600">
            Follow our work, campaigns, educational programs, and animal
            welfare initiatives.
          </p>

        </div>


        <div className="grid gap-5 md:grid-cols-3">

          {/* FACEBOOK */}
          <a
            href="https://www.facebook.com/vetsforanimalwelfare"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
          >

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#1877F2] text-white shadow-lg transition duration-300 group-hover:scale-110">

              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6h1.8V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.5v3h2.8v8h3.2Z" />
              </svg>

            </div>

            <div>

              <h3 className="text-lg font-semibold">
                Facebook
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Follow our updates
              </p>

            </div>

            <svg
              className="ml-auto text-slate-400 transition duration-300 group-hover:translate-x-1 group-hover:text-blue-600"
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
            className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-pink-200 hover:shadow-xl"
          >

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] text-white shadow-lg transition duration-300 group-hover:scale-110">

              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                />

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

              <h3 className="text-lg font-semibold">
                Instagram
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                See our latest work
              </p>

            </div>

            <svg
              className="ml-auto text-slate-400 transition duration-300 group-hover:translate-x-1 group-hover:text-pink-600"
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
            href="https://www.linkedin.com/company/vets-for-animal-welfare/posts/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl"
          >

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0A66C2] text-white shadow-lg transition duration-300 group-hover:scale-110">

              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.5 8.5H3.2V21h3.3V8.5ZM4.85 3A1.95 1.95 0 1 0 4.85 6.9 1.95 1.95 0 0 0 4.85 3ZM21 13.85c0-3.76-2.01-5.51-4.7-5.51-2.17 0-3.14 1.19-3.68 2.03V8.5H9.33V21h3.29v-6.19c0-1.63.31-3.2 2.32-3.2 1.98 0 2 1.85 2 3.31V21H21v-7.15Z" />
              </svg>

            </div>

            <div>

              <h3 className="text-lg font-semibold">
                LinkedIn
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Connect professionally
              </p>

            </div>

            <svg
              className="ml-auto text-slate-400 transition duration-300 group-hover:translate-x-1 group-hover:text-sky-600"
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


      {/* ================= FINAL CTA ================= */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#07152d] text-white">

          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"></div>

          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"></div>

          <div className="relative flex flex-col gap-8 px-7 py-12 sm:px-12 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-20">

            <div className="max-w-2xl">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Get Involved
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Have an idea?
                <span className="block text-blue-300">
                  Let's make it happen.
                </span>
              </h2>

              <p className="mt-5 leading-7 text-slate-300">
                Join us in creating a more compassionate future for animals
                through education, action, and collaboration.
              </p>

            </div>

            <div className="flex flex-wrap gap-4">

              <a
                href="mailto:vfaw2017@gmail.com"
                className="rounded-xl bg-white px-6 py-3.5 font-semibold text-[#07152d] transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
              >
                Email VFAW
              </a>

              <Link
                to="/get-involved"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Get Involved
              </Link>

            </div>

          </div>
        </div>
      </section>


      {/* ================= MOBILE FIX ================= */}
      <style>{`
        @media (max-width: 640px) {
          button {
            -webkit-tap-highlight-color: transparent;
          }

          a {
            -webkit-tap-highlight-color: transparent;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

    </div>
  );
};

export default Contact;
