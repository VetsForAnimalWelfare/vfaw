import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [copied, setCopied] = useState('');

  const phone = '+977 9844898004';
  const email = 'vfaw2017@gmail.com';

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);

      setTimeout(() => {
        setCopied('');
      }, 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const contactCards = [
    {
      title: 'Visit Us',
      value: 'Siddharthanagar-1, Bhairahawa',
      description: 'Institute of Agriculture and Animal Science',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 10.5-7.5 10.5S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
      ),
    },
    {
      title: 'Call Us',
      value: phone,
      description: 'Available for inquiries',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293c-.44.586-1.253.79-1.902.477a12.035 12.035 0 0 1-6.8-6.8c-.313-.649-.109-1.462.477-1.902l1.293-.97c.43-.323.61-.88.417-1.173L6.1 3.852A1.125 1.125 0 0 0 5.009 3H3.75A2.25 2.25 0 0 0 1.5 5.25v1.5Z"
          />
        </svg>
      ),
    },
    {
      title: 'Email Us',
      value: email,
      description: 'We usually respond promptly',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615A2.25 2.25 0 0 1 2.25 6.993V6.75"
          />
        </svg>
      ),
    },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/vetsforanimalwelfare?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle
            cx="17.3"
            cy="6.7"
            r="1"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/vetsforanimalwelfare',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          aria-hidden="true"
        >
          <path d="M14.5 8.25V6.9c0-.62.42-.77.72-.77h1.84V3.02l-2.53-.02c-2.8 0-4.33 1.74-4.33 4.26v.99H8.1v3.25h2.1v9.48h3.9v-9.48h2.72l.4-3.25H14.5Z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/vets-for-animal-welfare/posts/?feedView=all',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          aria-hidden="true"
        >
          <path d="M5.16 3.5A2.16 2.16 0 1 1 5.16 7.82 2.16 2.16 0 0 1 5.16 3.5ZM3.3 8.75h3.72V20.5H3.3V8.75ZM9.18 8.75h3.57v1.6h.05c.5-.95 1.72-1.95 3.54-1.95 3.79 0 4.49 2.5 4.49 5.75v6.35h-3.72v-5.63c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.72H9.36V8.75h-.18Z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-gray-900 overflow-hidden">

      {/* HERO */}
      <section className="relative bg-[#07152f] bg-gradient-to-br from-[#07152f] via-[#10285a] to-[#173b79] overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-32 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-28 pb-32 sm:pt-32 sm:pb-40">
          <div className="max-w-4xl mx-auto text-center">

            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-5 py-2 text-xs sm:text-sm font-bold tracking-[0.18em] text-blue-100 uppercase shadow-lg">
              VETS FOR ANIMAL WELFARE
            </div>

            <h1 className="mt-7 text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
              Let's connect.
              <br />
              <span className="text-blue-300">
                We're here to help.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-8 text-blue-100/80">
              Whether you want to collaborate, volunteer, learn more about our
              work, or simply reach out, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="relative -mt-12 sm:-mt-16 z-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5 lg:gap-7">

            {contactCards.map((card, index) => (
              <div
                key={card.title}
                className="group relative bg-white rounded-3xl border-2 border-gray-100 p-7 lg:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.10)] hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(15,23,42,0.15)] transition-all duration-500"
              >
                <div className="absolute top-0 left-7 right-7 h-1 rounded-b-full bg-gradient-to-r from-indigo-600 to-blue-500"></div>

                <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 group-hover:bg-indigo-700 group-hover:text-white transition-all duration-500">
                  {card.icon}
                </div>

                <p className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-gray-500">
                  {card.title}
                </p>

                <p className="mt-2 text-lg font-extrabold text-indigo-700 break-words">
                  {card.value}
                </p>

                <p className="mt-2 text-sm text-gray-500 leading-6">
                  {card.description}
                </p>

                {card.title === 'Call Us' && (
                  <button
                    type="button"
                    onClick={() => copyToClipboard(phone, 'phone')}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm font-bold text-gray-700 shadow-sm hover:bg-white hover:border-indigo-200 hover:text-indigo-700 transition-all duration-300"
                  >
                    {copied === 'phone' ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        Copied
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          className="w-4 h-4"
                        >
                          <rect
                            width="14"
                            height="14"
                            x="8"
                            y="8"
                            rx="2"
                            ry="2"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"
                          />
                        </svg>
                        Copy Number
                      </>
                    )}
                  </button>
                )}

                {card.title === 'Email Us' && (
                  <button
                    type="button"
                    onClick={() => copyToClipboard(email, 'email')}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm font-bold text-gray-700 shadow-sm hover:bg-white hover:border-indigo-200 hover:text-indigo-700 transition-all duration-300"
                  >
                    {copied === 'email' ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        Copied
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          className="w-4 h-4"
                        >
                          <rect
                            width="14"
                            height="14"
                            x="8"
                            y="8"
                            rx="2"
                            ry="2"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"
                          />
                        </svg>
                        Copy Email
                      </>
                    )}
                  </button>
                )}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* MAIN CONTACT AREA */}
      <section className="py-24 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* LEFT */}
            <div>
              <span className="inline-flex rounded-full bg-indigo-50 border border-indigo-100 px-4 py-2 text-xs font-black tracking-[0.16em] uppercase text-indigo-700">
                Get in touch
              </span>

              <h2 className="mt-6 text-4xl sm:text-5xl font-black tracking-tight text-gray-900 leading-tight">
                We're always happy
                <br />
                <span className="text-indigo-700">
                  to connect.
                </span>
              </h2>

              <p className="mt-6 text-gray-600 text-base sm:text-lg leading-8 max-w-xl">
                VFAW believes that meaningful change begins with meaningful
                conversations. Reach out to us for partnerships, volunteering,
                educational programs, animal welfare initiatives, or any
                questions about our work.
              </p>

              <div className="mt-9 bg-white rounded-3xl border-2 border-gray-100 p-7 sm:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.8"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 7v5l3 2"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-gray-900">
                      Our Office
                    </h3>

                    <p className="mt-2 text-gray-600 leading-7">
                      Siddharthanagar-1, Bhairahawa
                      <br />
                      Institute of Agriculture and Animal Science
                      <br />
                      Paklihawa Campus
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 bg-gradient-to-br from-indigo-700 to-blue-800 rounded-3xl p-7 sm:p-8 text-white shadow-[0_20px_50px_rgba(49,46,129,0.25)]">
                <p className="text-xs font-black tracking-[0.18em] uppercase text-blue-200">
                  Quick Contact
                </p>

                <h3 className="mt-3 text-2xl font-black">
                  Have a question?
                </h3>

                <p className="mt-3 text-blue-100/80 leading-7">
                  Send us an email and our team will get back to you as soon
                  as possible.
                </p>

                <a
                  href={`mailto:${email}`}
                  className="mt-6 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 font-extrabold text-indigo-700 hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615A2.25 2.25 0 0 1 2.25 6.993V6.75"
                    />
                  </svg>
                  Email VFAW
                </a>
              </div>
            </div>

            {/* RIGHT MAP */}
            <div className="lg:pt-14">
              <div className="bg-white rounded-3xl border-2 border-gray-100 overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.10)]">

                <div className="p-6 sm:p-7 border-b border-gray-100">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-black tracking-[0.16em] uppercase text-indigo-600">
                        Find us
                      </p>

                      <h3 className="mt-2 text-2xl font-black text-gray-900">
                        Visit our location
                      </h3>
                    </div>

                    <div className="w-11 h-11 shrink-0 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.8"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 10.5-7.5 10.5S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="relative h-[420px] sm:h-[480px]">
                  <iframe
                    title="VFAW Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.624236186741!2d83.44431810941039!3d27.480955476214255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996998c34ee29e3%3A0xa8fe981339e44737!2sTribhuvan%20University%2C%20Institute%20of%20Agriculture%20and%20Animal%20Science%2C%20Paklihawa%20Campus!5e0!3m2!1sen!2snp!4v1746232409315!5m2!1sen!2snp"
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Tribhuvan+University+Institute+of+Agriculture+and+Animal+Science+Paklihawa+Campus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 rounded-xl bg-gray-900 px-5 py-3.5 text-white font-extrabold hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.8"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 10.5-7.5 10.5S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    Open in Google Maps
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA */}
      <section className="bg-white border-y border-gray-100 py-24 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex rounded-full bg-indigo-50 border border-indigo-100 px-4 py-2 text-xs font-black tracking-[0.16em] uppercase text-indigo-700">
              Stay connected
            </span>

            <h2 className="mt-5 text-4xl sm:text-5xl font-black tracking-tight text-gray-900">
              Follow our journey.
            </h2>

            <p className="mt-5 text-gray-600 text-base sm:text-lg leading-8">
              Follow VFAW across our social platforms and stay updated with
              our activities, programs, campaigns, and animal welfare work.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-5 lg:gap-7">

            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-50 border-2 border-gray-100 rounded-3xl p-7 sm:p-8 text-center hover:bg-white hover:border-indigo-100 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)] transition-all duration-500"
              >
                <div
                  className={`mx-auto w-16 h-16 rounded-2xl bg-white border-2 border-gray-100 flex items-center justify-center transition-all duration-500 ${
                    social.name === 'Instagram'
                      ? 'text-[#E1306C] group-hover:bg-gradient-to-br group-hover:from-[#833AB4] group-hover:via-[#E1306C] group-hover:to-[#FCAF45]'
                      : social.name === 'Facebook'
                      ? 'text-[#1877F2] group-hover:bg-[#1877F2]'
                      : 'text-[#0A66C2] group-hover:bg-[#0A66C2]'
                  } group-hover:text-white group-hover:border-transparent group-hover:scale-110`}
                >
                  {social.icon}
                </div>

                <h3 className="mt-6 text-xl font-black text-gray-900">
                  {social.name}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Follow VFAW
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-indigo-700 group-hover:gap-3 transition-all duration-300">
                  Visit profile

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </a>
            ))}

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 sm:py-28 bg-gradient-to-br from-[#07152f] via-[#10285a] to-[#173b79] relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">

          <p className="text-xs sm:text-sm font-black tracking-[0.2em] uppercase text-blue-300">
            Let's work together
          </p>

          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Have an idea?
            <br />
            <span className="text-blue-300">
              Let's make it happen.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-blue-100/80 text-base sm:text-lg leading-8">
            Your support, ideas, and participation can help us create a more
            compassionate future for animals and communities.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">

            <a
              href={`mailto:${email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-black text-indigo-700 shadow-xl hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615A2.25 2.25 0 0 1 2.25 6.993V6.75"
                />
              </svg>
              Email VFAW
            </a>

            <Link
              to="/get-involved"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-md px-7 py-4 font-black text-white hover:bg-white hover:text-indigo-700 hover:-translate-y-1 transition-all duration-300"
            >
              Get Involved

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;
