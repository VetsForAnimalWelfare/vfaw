import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Donate = () => {
  const [copied, setCopied] = useState('');

  const bankDetails = {
    accountName: 'PASHU SAHAYOGI HAATHARU',
    accountNumber: '0090154827100018',
    bankName: 'Prabhu Bank Limited',
    branch: 'Bhairahawa Branch',
    accountType: 'Current Account',
    label: 'PRIMARY',
  };

  const impactCards = [
    {
      number: '01',
      title: 'Animal Rescue',
      description:
        'Support emergency care, rescue operations, treatment and rehabilitation for animals in need.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21s-7-4.35-9.2-8.1C.9 9.7 2.6 5.5 6.5 5.2c2-.15 3.6.95 4.5 2.4.9-1.45 2.5-2.55 4.5-2.4 3.9.3 5.6 4.5 3.7 7.7C19 16.65 12 21 12 21z"
          />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Animal Birth Control',
      description:
        'Help expand humane sterilization and population-management initiatives for community animals.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.5 12.5c1.5-2.7 5.5-2.7 7 0"
          />
          <path strokeLinecap="round" d="M9 9h.01M15 9h.01" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Vaccination & Prevention',
      description:
        'Contribute to vaccination drives and preventive programs that protect animals and communities.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.5 5.5l4 4M4 20l4.5-1 9-9a2.83 2.83 0 00-4-4l-9 9L4 20z"
          />
          <path strokeLinecap="round" d="M13 8l3 3" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Awareness & Education',
      description:
        'Support educational activities that promote responsible, compassionate and humane animal care.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
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
          <path strokeLinecap="round" d="M8 7h8M8 11h6" />
        </svg>
      ),
    },
    {
      number: '05',
      title: 'Community Programs',
      description:
        'Help strengthen field programs, outreach initiatives and community-based animal welfare work.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
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
      ),
    },
    {
      number: '06',
      title: 'Capacity Building',
      description:
        'Enable training, knowledge sharing and professional development for people working in animal welfare.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3l8 4-8 4-8-4 8-4z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 12l8 4 8-4M4 17l8 4 8-4"
          />
        </svg>
      ),
    },
  ];

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(field);

      setTimeout(() => {
        setCopied('');
      }, 2200);
    } catch (error) {
      console.error('Unable to copy:', error);
    }
  };

  const CopyButton = ({ value, field }) => (
    <button
      type="button"
      onClick={() => copyToClipboard(value, field)}
      className="group flex-shrink-0 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500/30"
    >
      {copied === field ? (
        <>
          <svg
            className="h-4 w-4 text-emerald-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="9" y="9" width="11" height="11" rx="2" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
            />
          </svg>
          Copy
        </>
      )}
    </button>
  );

  return (
    <div className="min-h-screen overflow-hidden bg-[#f6f8fc] text-slate-900">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#07152f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.24),transparent_32%),radial-gradient(circle_at_85%_75%,rgba(220,38,38,0.16),transparent_30%)]" />

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/5" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-100 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_14px_rgba(239,68,68,0.8)]" />
              Support Animal Welfare
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Your Support
              <span className="block bg-gradient-to-r from-blue-200 via-white to-red-300 bg-clip-text text-transparent">
                Creates Change.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg md:text-xl">
              Every contribution helps VFAW strengthen animal welfare,
              support humane initiatives and create a safer future for
              animals and communities.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#donation-details"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-red-600 px-7 py-4 text-sm font-extrabold text-white shadow-[0_18px_45px_rgba(220,38,38,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-500 hover:shadow-[0_22px_55px_rgba(220,38,38,0.35)]"
              >
                Donate Now

                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5v14M19 12l-7 7-7-7"
                  />
                </svg>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
              >
                Contact VFAW
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md sm:grid-cols-3">

            <div className="border-b border-white/10 px-6 py-6 text-center sm:border-b-0 sm:border-r">
              <p className="text-2xl font-black">100%</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Mission Focused
              </p>
            </div>

            <div className="border-b border-white/10 px-6 py-6 text-center sm:border-b-0 sm:border-r">
              <p className="text-2xl font-black">Direct</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Bank Transfer
              </p>
            </div>

            <div className="px-6 py-6 text-center">
              <p className="text-2xl font-black">Secure</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                QR Payment
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-red-600">
              Make an Impact
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#07152f] sm:text-4xl lg:text-5xl">
              Give Where It Matters
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Your generosity helps turn compassion into practical action.
              Whether large or small, every contribution strengthens our
              ability to support animals and communities.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">

            {[
              ['01', 'Simple', 'Donate directly through bank transfer or QR payment.'],
              ['02', 'Meaningful', 'Your contribution supports real animal welfare activities.'],
              ['03', 'Impactful', 'Together, we can create lasting positive change.'],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-[0_15px_45px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-[0_20px_55px_rgba(15,23,42,0.09)]"
              >
                <div className="flex items-start gap-4">
                  <span className="text-xs font-black text-red-500">
                    {number}
                  </span>

                  <div>
                    <h3 className="font-black text-[#07152f]">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Donation Details */}
      <section
        id="donation-details"
        className="relative bg-[#f6f8fc] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mb-12 text-center">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-red-600">
              Donation Methods
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#07152f] sm:text-4xl">
              Choose How You'd Like to Give
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Use either direct bank transfer or scan the QR code for a
              convenient digital payment.
            </p>
          </div>

          <div className="grid items-stretch gap-8 lg:grid-cols-2">

            {/* Bank Transfer */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(15,23,42,0.13)]">

              <div className="h-1.5 bg-gradient-to-r from-[#07152f] via-blue-600 to-red-600" />

              <div className="p-7 sm:p-9">

                <div className="flex items-start justify-between gap-5">

                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#07152f] text-white shadow-lg shadow-blue-900/20">
                      <svg
                        className="h-7 w-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 10l9-7 9 7"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 10v8M9 10v8M15 10v8M19 10v8"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 18h18M2 21h20"
                        />
                      </svg>
                    </div>

                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                        Method 01
                      </p>

                      <h3 className="mt-1 text-xl font-black text-[#07152f]">
                        Bank Transfer
                      </h3>
                    </div>

                  </div>

                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-emerald-700">
                    Primary
                  </span>

                </div>

                <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">

                  <div className="flex flex-col gap-2 border-b border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-sm font-medium text-slate-500">
                      Account Name
                    </span>

                    <span className="text-sm font-extrabold text-[#07152f] sm:text-right">
                      {bankDetails.accountName}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3 border-b border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-sm font-medium text-slate-500">
                      Account Number
                    </span>

                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-extrabold tracking-wide text-[#07152f]">
                        {bankDetails.accountNumber}
                      </span>

                      <CopyButton
                        value={bankDetails.accountNumber}
                        field="account number"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 border-b border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-sm font-medium text-slate-500">
                      Bank
                    </span>

                    <span className="text-sm font-extrabold text-[#07152f] sm:text-right">
                      {bankDetails.bankName}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 border-b border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-sm font-medium text-slate-500">
                      Branch
                    </span>

                    <span className="text-sm font-extrabold text-[#07152f] sm:text-right">
                      {bankDetails.branch}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-sm font-medium text-slate-500">
                      Account Type
                    </span>

                    <span className="text-sm font-extrabold text-[#07152f] sm:text-right">
                      {bankDetails.accountType}
                    </span>
                  </div>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(
                      `Account Name: ${bankDetails.accountName}\nAccount Number: ${bankDetails.accountNumber}\nBank: ${bankDetails.bankName}\nBranch: ${bankDetails.branch}\nAccount Type: ${bankDetails.accountType}`,
                      'all details'
                    )
                  }
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                >
                  {copied === 'all details' ? (
                    <>
                      <svg
                        className="h-5 w-5 text-emerald-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Banking Details Copied
                    </>
                  ) : (
                    <>
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="9" y="9" width="11" height="11" rx="2" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
                        />
                      </svg>
                      Copy All Banking Details
                    </>
                  )}
                </button>

                <div className="mt-5 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">

                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path strokeLinecap="round" d="M12 10v6" />
                    <path strokeLinecap="round" d="M12 7h.01" />
                  </svg>

                  <p className="text-xs leading-5 text-blue-900/70">
                    Please verify the account name and number carefully
                    before completing your transfer.
                  </p>

                </div>

              </div>
            </div>

            {/* QR Donation */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(15,23,42,0.13)]">

              <div className="h-1.5 bg-gradient-to-r from-red-600 via-blue-600 to-[#07152f]" />

              <div className="flex h-full flex-col p-7 sm:p-9">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-600/20">
                    <svg
                      className="h-7 w-7"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect x="4" y="4" width="6" height="6" rx="1" />
                      <rect x="14" y="4" width="6" height="6" rx="1" />
                      <rect x="4" y="14" width="6" height="6" rx="1" />
                      <path
                        strokeLinecap="round"
                        d="M14 14h2v2h-2zM18 14h2M14 18h2M18 18h2"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                      Method 02
                    </p>

                    <h3 className="mt-1 text-xl font-black text-[#07152f]">
                      Scan & Donate
                    </h3>
                  </div>

                </div>

                <div className="mt-8 flex flex-1 items-center justify-center">

                  <div className="relative rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-inner">

                    <div className="absolute left-3 top-3 h-7 w-7 border-l-2 border-t-2 border-[#07152f]" />
                    <div className="absolute right-3 top-3 h-7 w-7 border-r-2 border-t-2 border-[#07152f]" />
                    <div className="absolute bottom-3 left-3 h-7 w-7 border-b-2 border-l-2 border-[#07152f]" />
                    <div className="absolute bottom-3 right-3 h-7 w-7 border-b-2 border-r-2 border-[#07152f]" />

                    <div className="rounded-2xl bg-white p-4 shadow-[0_18px_45px_rgba(15,23,42,0.10)]">

                      <img
                        src="/bank.png"
                        alt="VFAW donation QR code"
                        className="h-auto w-full max-w-[320px] rounded-lg object-contain"
                      />

                    </div>
                  </div>
                </div>

                <div className="mt-7 text-center">

                  <h4 className="text-lg font-black text-[#07152f]">
                    Scan the QR Code
                  </h4>

                  <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
                    Open your preferred payment application, scan the
                    code and complete your contribution securely.
                  </p>

                </div>

                <div className="mt-6 flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">

                  <svg
                    className="h-5 w-5 text-emerald-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>

                  <span className="text-xs font-bold text-slate-600">
                    Secure digital payment
                  </span>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-xs font-black uppercase tracking-[0.25em] text-red-600">
              Your Contribution
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#07152f] sm:text-4xl">
              Where Your Support Can Make a Difference
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Donations help strengthen the programs and activities that
              make animal welfare action possible.
            </p>

          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {impactCards.map((card) => (
              <div
                key={card.number}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-[#07152f] p-7 text-white shadow-[0_18px_55px_rgba(15,23,42,0.09)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_75px_rgba(15,23,42,0.16)]"
              >

                <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-blue-600/10 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">

                  <div className="flex items-start justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-red-400 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                      <div className="h-6 w-6">
                        {card.icon}
                      </div>
                    </div>

                    <span className="text-xs font-black tracking-[0.2em] text-white/30">
                      {card.number}
                    </span>

                  </div>

                  <h3 className="mt-7 text-xl font-black">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {card.description}
                  </p>

                  <div className="mt-6 h-px w-10 bg-red-500 transition-all duration-300 group-hover:w-20" />

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* How To Donate */}
      <section className="bg-[#f6f8fc] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <span className="text-xs font-black uppercase tracking-[0.25em] text-red-600">
                Simple Process
              </span>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#07152f] sm:text-4xl">
                How to Donate
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Making a contribution is simple. Follow the steps below
                to complete your donation.
              </p>

            </div>

            <div className="space-y-4">

              {[
                ['01', 'Choose a donation method', 'Select bank transfer or QR payment.'],
                ['02', 'Complete your contribution', 'Transfer your desired amount using the provided details.'],
                ['03', 'Keep your transaction record', 'Save your receipt or transaction reference for your records.'],
                ['04', 'Connect with VFAW', 'Contact us if you need assistance or want to know more about our work.'],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="group flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-x-1 hover:border-red-200 hover:shadow-md"
                >

                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#07152f] text-xs font-black text-white transition-colors duration-300 group-hover:bg-red-600">
                    {number}
                  </div>

                  <div>
                    <h3 className="font-black text-[#07152f]">
                      {title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {description}
                    </p>
                  </div>

                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[2rem] bg-[#07152f] p-8 text-white shadow-[0_25px_80px_rgba(7,21,47,0.20)] sm:p-12">

            <div className="absolute right-0 top-0 h-64 w-64 translate-x-20 -translate-y-20 rounded-full bg-blue-600/10 blur-2xl" />
            <div className="absolute bottom-0 left-0 h-52 w-52 -translate-x-20 translate-y-20 rounded-full bg-red-600/10 blur-2xl" />

            <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-center">

              <div>

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">

                    <svg
                      className="h-6 w-6 text-red-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4"
                      />
                    </svg>

                  </div>

                  <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-200">
                    Trust & Transparency
                  </span>

                </div>

                <h2 className="mt-6 text-3xl font-black sm:text-4xl">
                  Every contribution matters.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                  Your support helps sustain meaningful animal welfare
                  initiatives. If you have questions about donating,
                  our programs or how to get involved, our team is here
                  to help.
                </p>

              </div>

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#07152f] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-red-50"
              >
                Talk to Us

                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 6l6 6-6 6"
                  />
                </svg>

              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-red-600 text-white">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.12),transparent_25%),radial-gradient(circle_at_80%_50%,rgba(7,21,47,0.18),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl px-5 py-20 text-center sm:px-6 sm:py-24">

          <p className="text-xs font-black uppercase tracking-[0.3em] text-red-100">
            Be Part of the Change
          </p>

          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Compassion Becomes Powerful
            <span className="block">When We Act Together.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-red-100">
            Support animal welfare today and help build a more humane
            future for animals and communities.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

            <a
              href="#donation-details"
              className="rounded-2xl bg-white px-7 py-4 text-sm font-black text-red-600 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-red-50"
            >
              Donate Now
            </a>

            <Link
              to="/contact"
              className="rounded-2xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-black text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Donate;
