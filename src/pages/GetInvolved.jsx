import React from 'react';

const GetInvolved = () => {
  const membershipOptions = [
    {
      title: 'Lifetime Membership',
      shortTitle: 'Lifetime',
      description:
        'Become a driving force for animal welfare and contribute to building a better world. As a member of VFAW, you will have the opportunity to actively engage in impactful initiatives, including awareness campaigns, Animal Birth Control programs, vaccination drives, virtual sessions, the Veterinary Talk Series, leadership development activities, animal welfare projects, and other specialized online programs.',
      price: '3,000',
      period: 'lifetime',
      type: 'premium',
      benefits: [
        'Permanent Membership Status: Enjoy lifelong affiliation with VFAW without the need for annual renewals',
        'Exclusive Event Participation: Access to all VFAW events, programs, and training sessions',
        'Leadership and Volunteering Opportunities: Take part in leadership roles, project teams, and welfare campaigns',
        'Professional Networking: Connect with veterinarians, animal welfare experts, and professionals across various fields',
        'Recognition: Receive a lifetime membership certificate acknowledging your commitment to animal welfare',
        'Meaningful Contribution: Play an ongoing role in improving animal welfare standards and promoting humane practices'
      ],
      formLink:
        'https://docs.google.com/forms/d/e/1FAIpQLScQODnpyoZpB4o4JJyDqqUIN9Zm6OBdS0-pU4DVzs1hn1JpGw/viewform',
      buttonText: 'Apply for Lifetime Membership'
    },
    {
      title: 'Yearly Membership',
      shortTitle: 'Yearly',
      description:
        'Join VFAW and contribute to building a better world for animals. As a member, you will have the opportunity to engage in a range of impactful initiatives, including awareness campaigns, animal birth control programs, vaccination drives, virtual sessions, the Veterinary Talk Series, leadership development activities, animal welfare projects, and other educational programs.',
      price: '250',
      period: 'year',
      type: 'standard',
      benefits: [
        'Participation in exclusive events',
        'Opportunity to improve animal welfare standards',
        'Valuable networking opportunities',
        'A platform to contribute to meaningful change'
      ],
      formLink:
        'https://docs.google.com/forms/d/e/1FAIpQLSfZdM4_81s7b_d4_L55XttYlgHvlPK_mOAzbK8Ocd_0RaFYow/viewform',
      buttonText: 'Apply for Yearly Membership'
    }
  ];

  const whyJoin = [
    {
      number: '01',
      title: 'Education & Action',
      description:
        'Advance animal welfare through comprehensive education programs and hands-on initiatives that make a real difference.',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className="h-7 w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 19.5A2.5 2.5 0 016.5 17H20"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 6h8M8 10h8"
          />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Professional Network',
      description:
        'Build valuable connections with veterinarians, animal welfare experts, and professionals across various fields.',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className="h-7 w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
          />
          <circle cx="9" cy="7" r="4" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
          />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Leadership Development',
      description:
        'Develop essential leadership skills through hands-on experience in organizing and managing animal welfare initiatives.',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className="h-7 w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2l2.4 6.1L21 9l-5 4.3L17.5 20 12 16.6 6.5 20 8 13.3 3 9l6.6-.9L12 2z"
          />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Meaningful Impact',
      description:
        'Participate in meaningful animal welfare initiatives that create lasting positive change in your community.',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className="h-7 w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"
          />
        </svg>
      )
    },
    {
      number: '05',
      title: 'Welfare Standards',
      description:
        'Contribute to raising animal welfare standards through education, advocacy, and practical initiatives.',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className="h-7 w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4"
          />
        </svg>
      )
    },
    {
      number: '06',
      title: 'Continuous Growth',
      description:
        'Engage in ongoing learning and development opportunities to enhance your knowledge and skills in animal welfare.',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className="h-7 w-7"
        >
          <circle cx="12" cy="12" r="9" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7v5l3 2"
          />
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-blue-950">

        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-blue-800/50" />

        <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-blue-800/40" />

        <div className="pointer-events-none absolute -bottom-48 -left-48 h-[550px] w-[550px] rounded-full border border-blue-800/40" />

        <div className="pointer-events-none absolute right-[15%] top-[25%] h-3 w-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />

        <div className="pointer-events-none absolute bottom-[25%] left-[12%] h-2 w-2 rounded-full bg-blue-400" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">

          <div className="mx-auto max-w-5xl text-center">

            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-blue-700 bg-blue-900/80 px-5 py-2.5">

              <span className="h-2 w-2 rounded-full bg-red-500" />

              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-200">
                Become Part of the Movement
              </span>

            </div>

            {/* Main heading */}
            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">

              Join
              <span className="text-red-500"> Vets for Animal Welfare</span>

            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">

              Become a driving force for animal welfare and contribute
              to building a more compassionate and responsible world
              for animals.

            </p>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">

              <div className="rounded-2xl border border-blue-700 bg-blue-900/80 px-5 py-4 backdrop-blur-sm sm:px-7">

                <p className="text-2xl font-black text-white">
                  02
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-blue-300">
                  Membership Plans
                </p>

              </div>

              <div className="rounded-2xl border border-blue-700 bg-blue-900/80 px-5 py-4 backdrop-blur-sm sm:px-7">

                <p className="text-2xl font-black text-white">
                  100%
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-blue-300">
                  Impact Driven
                </p>

              </div>

              <div className="rounded-2xl border border-red-800 bg-red-950/80 px-5 py-4 backdrop-blur-sm sm:px-7">

                <p className="text-2xl font-black text-red-400">
                  VFAW
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-red-300">
                  Animal Welfare
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          MEMBERSHIP INTRO
      ========================================================= */}
      <section className="bg-slate-950 px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-20">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-black uppercase tracking-[0.3em] text-red-500">
              Membership
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Choose Your Way to Contribute
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Whether you choose lifelong commitment or yearly
              participation, your membership helps strengthen the
              mission of VFAW and support meaningful animal welfare work.
            </p>

          </div>

        </div>
      </section>

      {/* =========================================================
          MEMBERSHIP CARDS
      ========================================================= */}
      <section className="bg-slate-950 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">

          {membershipOptions.map((option, index) => {

            const isLifetime = option.type === 'premium';

            return (
              <article
                key={option.title}
                className={`
                  group relative overflow-hidden rounded-[2rem]
                  border bg-blue-950
                  transition-all duration-500
                  hover:-translate-y-3
                  ${
                    isLifetime
                      ? 'border-red-700/70 shadow-[0_25px_70px_rgba(220,38,38,0.12)] hover:border-red-500 hover:shadow-[0_35px_90px_rgba(220,38,38,0.25)]'
                      : 'border-blue-800 shadow-[0_25px_70px_rgba(0,0,0,0.3)] hover:border-red-500 hover:shadow-[0_35px_90px_rgba(220,38,38,0.18)]'
                  }
                `}
              >

                {/* Top accent */}
                <div
                  className={`
                    absolute left-0 right-0 top-0 h-1
                    ${
                      isLifetime
                        ? 'bg-red-500'
                        : 'bg-blue-600'
                    }
                  `}
                />

                {/* Decorative corner */}
                <div
                  className={`
                    absolute -right-20 -top-20
                    h-52 w-52 rounded-full
                    border
                    ${
                      isLifetime
                        ? 'border-red-800/40'
                        : 'border-blue-800/40'
                    }
                  `}
                />

                <div className="relative p-6 sm:p-8 lg:p-10">

                  {/* Card top */}
                  <div className="flex items-start justify-between gap-5">

                    <div className="flex items-center gap-4">

                      {/* Icon */}
                      <div
                        className={`
                          flex h-14 w-14 flex-shrink-0
                          items-center justify-center
                          rounded-2xl border
                          ${
                            isLifetime
                              ? 'border-red-700 bg-red-950 text-red-400'
                              : 'border-blue-700 bg-blue-900 text-blue-300'
                          }
                        `}
                      >

                        {isLifetime ? (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            className="h-7 w-7"
                          >
                            <circle cx="12" cy="8" r="3" />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 21c.8-4 3.1-6 7-6s6.2 2 7 6"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 4l1.5 2L8 5"
                            />
                          </svg>
                        ) : (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            className="h-7 w-7"
                          >
                            <circle cx="12" cy="8" r="3" />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 21c.8-4 3.1-6 7-6s6.2 2 7 6"
                            />
                          </svg>
                        )}

                      </div>

                      <div>

                        <p
                          className={`
                            text-[10px] font-black uppercase
                            tracking-[0.22em]
                            ${
                              isLifetime
                                ? 'text-red-400'
                                : 'text-blue-300'
                            }
                          `}
                        >
                          Membership
                        </p>

                        <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">
                          {option.title}
                        </h3>

                      </div>

                    </div>

                    {/* Badge */}
                    <span
                      className={`
                        hidden rounded-full border px-3 py-1.5
                        text-[9px] font-black uppercase
                        tracking-widest sm:inline-block
                        ${
                          isLifetime
                            ? 'border-red-700 bg-red-950 text-red-300'
                            : 'border-blue-700 bg-blue-900 text-blue-300'
                        }
                      `}
                    >
                      {isLifetime ? 'Best Value' : 'Popular'}
                    </span>

                  </div>

                  {/* Price */}
                  <div className="mt-8 rounded-2xl border border-blue-800 bg-slate-950/50 p-5">

                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                      Membership Contribution
                    </p>

                    <div className="mt-2 flex items-end gap-3">

                      <span
                        className={`
                          text-4xl font-black tracking-tight
                          ${
                            isLifetime
                              ? 'text-red-400'
                              : 'text-blue-300'
                          }
                        `}
                      >
                        NPR {option.price}
                      </span>

                      <span className="mb-1 text-xs font-medium text-slate-500">
                        per {option.period}
                      </span>

                    </div>

                  </div>

                  {/* Description */}
                  <p className="mt-7 text-sm leading-7 text-slate-400">
                    {option.description}
                  </p>

                  {/* Divider */}
                  <div className="my-8 h-px bg-blue-800" />

                  {/* Benefits */}
                  <div>

                    <div className="mb-5 flex items-center gap-3">

                      <span
                        className={`
                          h-1.5 w-1.5 rounded-full
                          ${
                            isLifetime
                              ? 'bg-red-500'
                              : 'bg-blue-500'
                          }
                        `}
                      />

                      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">
                        Membership Benefits
                      </h4>

                    </div>

                    <ul className="space-y-4">

                      {option.benefits.map((benefit) => (

                        <li
                          key={benefit}
                          className="flex items-start gap-3"
                        >

                          <span
                            className={`
                              mt-0.5 flex h-5 w-5
                              flex-shrink-0 items-center
                              justify-center rounded-full
                              ${
                                isLifetime
                                  ? 'bg-red-950 text-red-400'
                                  : 'bg-blue-900 text-blue-300'
                              }
                            `}
                          >

                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              className="h-3 w-3"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12l4 4L19 7"
                              />
                            </svg>

                          </span>

                          <span className="text-sm leading-6 text-slate-300">
                            {benefit}
                          </span>

                        </li>

                      ))}

                    </ul>

                  </div>

                  {/* Apply button */}
                  <a
                    href={option.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group/button mt-9 flex w-full
                      items-center justify-center gap-3
                      rounded-xl border
                      px-6 py-4
                      text-sm font-black
                      transition-all duration-300
                      ${
                        isLifetime
                          ? 'border-red-500 bg-red-600 text-white hover:bg-red-700 hover:shadow-[0_15px_40px_rgba(220,38,38,0.3)]'
                          : 'border-blue-600 bg-blue-700 text-white hover:border-red-500 hover:bg-red-600 hover:shadow-[0_15px_40px_rgba(220,38,38,0.25)]'
                      }
                    `}
                  >

                    <span>
                      {option.buttonText}
                    </span>

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 6l6 6-6 6"
                      />
                    </svg>

                  </a>

                  <p className="mt-4 text-center text-[10px] font-medium uppercase tracking-widest text-slate-600">
                    Secure application through Google Forms
                  </p>

                </div>

              </article>
            );
          })}

        </div>
      </section>

      {/* =========================================================
          WHY JOIN
      ========================================================= */}
      <section className="bg-blue-950 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">

            <p className="text-xs font-black uppercase tracking-[0.3em] text-red-500">
              The VFAW Difference
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Why Join VFAW?
            </h2>

            <p className="mt-5 text-sm leading-7 text-blue-200 sm:text-base">
              As a member of VFAW, you become part of a community
              dedicated to making a meaningful and lasting difference
              in animal welfare.
            </p>

          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

            {whyJoin.map((item) => (

              <article
                key={item.number}
                className="
                  group relative overflow-hidden
                  rounded-3xl
                  border border-blue-800
                  bg-blue-900
                  p-7
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-red-500
                  hover:bg-blue-800
                  hover:shadow-[0_25px_60px_rgba(220,38,38,0.16)]
                "
              >

                {/* Number */}
                <span className="absolute right-6 top-5 text-5xl font-black text-blue-800/70 transition-colors duration-500 group-hover:text-red-900/60">
                  {item.number}
                </span>

                {/* Icon */}
                <div className="
                  relative
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  border border-blue-700
                  bg-blue-950
                  text-blue-300
                  transition-all duration-500
                  group-hover:border-red-500
                  group-hover:bg-red-600
                  group-hover:text-white
                ">
                  {item.icon}
                </div>

                <h3 className="relative mt-6 text-xl font-black text-white">
                  {item.title}
                </h3>

                <p className="relative mt-3 text-sm leading-7 text-blue-200/80">
                  {item.description}
                </p>

                <div className="mt-6 h-px w-10 bg-red-500 transition-all duration-500 group-hover:w-full" />

              </article>

            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-slate-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="
            relative
            overflow-hidden
            rounded-[2rem]
            border border-red-800
            bg-red-950
            shadow-[0_30px_80px_rgba(220,38,38,0.12)]
          ">

            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-red-800/50" />

            <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full border border-red-800/40" />

            <div className="relative px-6 py-14 text-center sm:px-10 sm:py-16 lg:px-20">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-red-700 bg-red-900 text-red-300">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"
                  />
                </svg>

              </div>

              <p className="mt-6 text-xs font-black uppercase tracking-[0.3em] text-red-300">
                Your Contribution Matters
              </p>

              <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Make a Difference?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-red-100/80 sm:text-base">
                Fill out the membership form today and become part
                of a movement dedicated to making the world better
                for animals.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

                <a
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    border border-white
                    bg-white
                    px-7 py-3.5
                    text-sm font-black
                    text-red-700
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-slate-100
                    hover:shadow-xl
                  "
                >
                  Contact Us

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 6l6 6-6 6"
                    />
                  </svg>

                </a>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default GetInvolved;
