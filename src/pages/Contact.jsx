import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);

      setTimeout(() => {
        setCopied('');
      }, 2000);
    } catch (error) {
      console.error('Unable to copy:', error);
    }
  };

  const contactInfo = [
    {
      title: 'Visit Our Office',
      shortTitle: 'Office',
      value: 'Siddharthanagar-1, Bhairahawa',
      description:
        'Connect with the VFAW team at our office during regular working hours.',
      type: 'location',
    },
    {
      title: 'Call Us',
      shortTitle: 'Phone',
      value: '+977 9844898004',
      description:
        'Reach our team directly during business hours for assistance and inquiries.',
      type: 'phone',
    },
    {
      title: 'Email Us',
      shortTitle: 'Email',
      value: 'vfaw2017@gmail.com',
      description:
        'Send us your questions, ideas, collaboration proposals, or general inquiries.',
      type: 'email',
    },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/vetsforanimalwelfare?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      letter: 'IG',
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/vetsforanimalwelfare',
      letter: 'FB',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/vets-for-animal-welfare/posts/?feedView=all',
      letter: 'LI',
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-gray-900 overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#07152f] text-white">

        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#07152f] via-[#10285a] to-[#173b79]" />

        <div className="absolute -top-40 -right-40 w-[550px] h-[550px] rounded-full bg-blue-500/15 blur-3xl" />

        <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full bg-indigo-500/15 blur-3xl" />

        {/* Decorative circles */}
        <div className="absolute top-16 right-[12%] w-32 h-32 rounded-full border border-white/10" />

        <div className="absolute bottom-12 left-[8%] w-20 h-20 rounded-full border border-white/10" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-28 lg:py-36">

          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              visible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >

            {/* Label */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm font-semibold tracking-wide">

              <span className="w-2.5 h-2.5 rounded-full bg-blue-300 shadow-[0_0_14px_rgba(147,197,253,0.9)]" />

              VETS FOR ANIMAL WELFARE

            </div>

            {/* Heading */}
            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1]">

              Let's connect.
              <span className="block mt-2 text-blue-300">
                We're here to help.
              </span>

            </h1>

            {/* Description */}
            <p className="max-w-2xl mx-auto mt-7 text-lg sm:text-xl text-white/70 leading-relaxed">

              Whether you want to learn more about our work,
              collaborate with us, volunteer, or support animal welfare,
              we'd love to hear from you.

            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          CONTACT CARDS
      ========================================================= */}

      <section className="relative -mt-12 sm:-mt-16 z-20">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid md:grid-cols-3 gap-5">

            {contactInfo.map((item, index) => (

              <div
                key={item.title}
                className={`group relative bg-white rounded-3xl border-2 border-gray-100 p-7 lg:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.10)] hover:shadow-[0_30px_70px_rgba(15,23,42,0.18)] hover:-translate-y-3 transition-all duration-500 ${
                  visible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
              >

                {/* Top accent */}
                <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r from-indigo-600 to-blue-500" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 font-black group-hover:bg-indigo-700 group-hover:text-white transition-all duration-500">

                  {item.type === 'location' && (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M12 21s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z"
                      />
                      <circle
                        cx="12"
                        cy="9"
                        r="2.5"
                        strokeWidth="1.8"
                      />
                    </svg>
                  )}

                  {item.type === 'phone' && (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M5 4h3l2 5-2 1.5a14 14 0 006.5 6.5L16 15l5 2v3a1 1 0 01-1 1C11.7 21 3 12.3 3 4a1 1 0 011-1h1z"
                      />
                    </svg>
                  )}

                  {item.type === 'email' && (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        strokeWidth="1.8"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M4 7l8 6 8-6"
                      />
                    </svg>
                  )}

                </div>

                <p className="mt-6 text-xs uppercase tracking-[0.2em] font-bold text-indigo-600">
                  {item.shortTitle}
                </p>

                <h2 className="mt-2 text-2xl font-black text-gray-950">
                  {item.title}
                </h2>

                {/* Clickable values */}
                {item.type === 'phone' ? (
                  <a
                    href="tel:+9779844898004"
                    className="block mt-4 text-lg font-bold text-indigo-700 hover:text-indigo-900 transition-colors"
                  >
                    {item.value}
                  </a>
                ) : item.type === 'email' ? (
                  <a
                    href="mailto:vfaw2017@gmail.com"
                    className="block mt-4 text-base sm:text-lg font-bold text-indigo-700 hover:text-indigo-900 transition-colors break-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-4 text-lg font-bold text-indigo-700">
                    {item.value}
                  </p>
                )}

                <p className="mt-4 text-gray-500 leading-relaxed">
                  {item.description}
                </p>

                {/* Copy button */}
                {(item.type === 'phone' || item.type === 'email') && (
                  <button
                    onClick={() =>
                      copyToClipboard(
                        item.value,
                        item.type
                      )
                    }
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-indigo-700 transition-colors"
                  >

                    {copied === item.type ? (
                      <>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>

                        Copied
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            x="9"
                            y="9"
                            width="10"
                            height="10"
                            rx="2"
                            strokeWidth="2"
                          />
                          <path
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
                          />
                        </svg>

                        Copy {item.type === 'phone' ? 'number' : 'email'}
                      </>
                    )}

                  </button>
                )}

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          MAIN CONTACT AREA
      ========================================================= */}

      <section className="py-24 lg:py-32">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-12">

            {/* LEFT */}
            <div>

              {/* Section heading */}
              <div className="mb-10">

                <div className="flex items-center gap-3 mb-5">

                  <span className="w-10 h-px bg-indigo-600" />

                  <span className="text-sm font-bold tracking-[0.2em] uppercase text-indigo-600">
                    Contact VFAW
                  </span>

                </div>

                <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-950">
                  We're always
                  <span className="block text-indigo-700">
                    happy to connect.
                  </span>
                </h2>

                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  Have a question about our programs, want to collaborate,
                  or interested in supporting our work? Reach out through
                  any of the channels below.
                </p>

              </div>


              {/* Office Hours */}
              <div className="bg-white rounded-3xl border-2 border-gray-100 shadow-lg p-7 sm:p-8">

                <div className="flex items-start justify-between gap-5">

                  <div>

                    <p className="text-xs uppercase tracking-[0.2em] font-bold text-indigo-600">
                      Office Information
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-gray-950">
                      Office Hours
                    </h3>

                  </div>

                  <div className="w-12 h-12 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center">

                    <span className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.6)]" />

                  </div>

                </div>

                <div className="mt-7 space-y-4">

                  <div className="flex items-center justify-between py-3 border-b border-gray-100">

                    <span className="text-gray-600">
                      Monday – Friday
                    </span>

                    <span className="font-bold text-gray-900">
                      9:00 AM – 5:00 PM
                    </span>

                  </div>

                  <div className="flex items-center justify-between py-3">

                    <span className="text-gray-600">
                      Saturday – Sunday
                    </span>

                    <span className="font-bold text-gray-900">
                      Closed
                    </span>

                  </div>

                </div>

              </div>


              {/* Quick Contact */}
              <div className="mt-5 relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 to-blue-800 text-white p-7 sm:p-8 shadow-xl">

                <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full border border-white/10" />

                <div className="relative">

                  <p className="text-xs uppercase tracking-[0.2em] font-bold text-blue-200">
                    Quick Contact
                  </p>

                  <h3 className="mt-3 text-2xl font-black">
                    Need to speak with us?
                  </h3>

                  <p className="mt-3 text-white/75 leading-relaxed">
                    For direct assistance, call our team during office
                    hours.
                  </p>

                  <a
                    href="tel:+9779844898004"
                    className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-indigo-800 font-bold hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                  >

                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 4h3l2 5-2 1.5a14 14 0 006.5 6.5L16 15l5 2v3a1 1 0 01-1 1C11.7 21 3 12.3 3 4a1 1 0 011-1h1z"
                      />
                    </svg>

                    Call VFAW

                  </a>

                </div>

              </div>

            </div>


            {/* RIGHT - MAP */}
            <div>

              <div className="bg-white rounded-3xl border-2 border-gray-100 shadow-xl overflow-hidden">

                {/* Map header */}
                <div className="p-6 sm:p-7 border-b border-gray-100">

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                    <div>

                      <p className="text-xs uppercase tracking-[0.2em] font-bold text-indigo-600">
                        Find Us
                      </p>

                      <h3 className="mt-2 text-2xl font-black text-gray-950">
                        Visit VFAW
                      </h3>

                    </div>

                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Tribhuvan+University+Institute+of+Agriculture+and+Animal+Science+Paklihawa+Campus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border-2 border-gray-200 text-sm font-bold text-gray-800 hover:bg-indigo-700 hover:text-white hover:border-indigo-700 transition-all duration-300"
                    >

                      Open Maps

                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-6-8l8-8m0 0v6m0-6h-6"
                        />
                      </svg>

                    </a>

                  </div>

                  <p className="mt-4 text-gray-500">
                    Siddharthanagar-1, Bhairahawa
                  </p>

                </div>


                {/* Map */}
                <div className="relative h-[420px] sm:h-[500px]">

                  <iframe
                    title="VFAW Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.624236186741!2d83.44431810941039!3d27.480955476214255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996998c34ee29e3%3A0xa8fe981339e44737!2sTribhuvan%20University%2C%20Institute%20of%20Agriculture%20and%20Animal%20Science%2C%20Paklihawa%20Campus!5e0!3m2!1sen!2snp!4v1746232409315!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          SOCIAL MEDIA
      ========================================================= */}

      <section className="py-24 bg-white border-y border-gray-100">

        <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">

          <div className="max-w-2xl mx-auto">

            <div className="flex items-center justify-center gap-3 mb-5">

              <span className="w-8 h-px bg-indigo-600" />

              <span className="text-sm font-bold tracking-[0.2em] uppercase text-indigo-600">
                Stay Connected
              </span>

              <span className="w-8 h-px bg-indigo-600" />

            </div>

            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              Follow our journey.
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Stay updated with our programs, activities,
              educational initiatives, and animal welfare work.
            </p>

          </div>


          <div className="grid sm:grid-cols-3 gap-5 mt-12">

            {socialLinks.map((social) => (

              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-50 border-2 border-gray-100 rounded-3xl p-7 hover:bg-white hover:border-indigo-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
              >

                <div className="mx-auto w-16 h-16 rounded-2xl bg-white border-2 border-gray-100 flex items-center justify-center text-indigo-700 font-black text-lg group-hover:bg-indigo-700 group-hover:text-white group-hover:border-indigo-700 transition-all duration-500">

                  {social.letter}

                </div>

                <h3 className="mt-5 text-xl font-black text-gray-900">
                  {social.name}
                </h3>

                <div className="mt-3 inline-flex items-center gap-2 text-indigo-600 font-bold">

                  Follow VFAW

                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>

                </div>

              </a>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#07152f] text-white">

        <div className="absolute inset-0 bg-gradient-to-br from-[#07152f] via-indigo-950 to-blue-950" />

        <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full border border-white/5" />

        <div className="absolute -bottom-64 -left-48 w-[700px] h-[700px] rounded-full border border-white/5" />

        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 py-28 text-center">

          <div className="inline-flex px-5 py-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-sm text-white/70">
            Let's work together
          </div>

          <h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Have an idea?
            <span className="block text-blue-300">
              Let's make it happen.
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-lg text-white/70 leading-relaxed">
            We welcome partnerships, collaborations, educational
            initiatives, and people who share our commitment to
            improving animal welfare.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <a
              href="mailto:vfaw2017@gmail.com"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-indigo-950 font-bold text-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >

              Email VFAW

              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>

            </a>

            <Link
              to="/get-involved"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/25 bg-white/5 backdrop-blur-md text-white font-bold text-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              Get Involved
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          ANIMATIONS
      ========================================================= */}

      <style>{`

        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: rgba(79, 70, 229, 0.2);
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

    </main>
  );
};

export default Contact;
