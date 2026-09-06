import { useState } from 'react';
import { Link } from 'react-router-dom';

const Donate = () => {
  const [copied, setCopied] = useState(false);

  const bankDetails = {
    accountName: 'PASHU SAHAYOGI HAATHARU',
    accountNumber: '0090154827100018',
    bankName: 'Prabhu Bank Limited',
    branch: 'Bhairahawa Branch',
    accountType: 'Current Account',
  };

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText(bankDetails.accountNumber);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy account number:', error);
    }
  };

  const impactAreas = [
    {
      number: '01',
      title: 'Animal Rescue',
      description:
        'Supporting animals that need immediate care, treatment, rescue, and rehabilitation.',
    },
    {
      number: '02',
      title: 'Animal Birth Control',
      description:
        'Helping control the stray animal population through humane sterilization programs.',
    },
    {
      number: '03',
      title: 'Vaccination & Prevention',
      description:
        'Supporting vaccination and preventive healthcare programs for animals and communities.',
    },
    {
      number: '04',
      title: 'Awareness & Education',
      description:
        'Promoting responsible animal care and creating awareness about animal welfare.',
    },
    {
      number: '05',
      title: 'Community Programs',
      description:
        'Supporting community-based animal welfare activities and outreach programs.',
    },
    {
      number: '06',
      title: 'Capacity Building',
      description:
        'Helping strengthen the skills and knowledge of people working for animal welfare.',
    },
  ];

  const donationSteps = [
    {
      number: '01',
      title: 'Choose a Method',
      description:
        'Use the bank transfer details or scan the QR code shown above.',
    },
    {
      number: '02',
      title: 'Make Your Donation',
      description:
        'Transfer your preferred donation amount using your chosen payment method.',
    },
    {
      number: '03',
      title: 'Keep Your Receipt',
      description:
        'Keep the transaction receipt or confirmation for your records.',
    },
    {
      number: '04',
      title: 'Make an Impact',
      description:
        'Your contribution helps us continue meaningful animal welfare work.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#0b1b3a]">
      {/* =========================================================
          HERO SECTION
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#07152f] text-white">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />

          <div className="absolute right-[15%] top-[20%] h-40 w-40 rounded-full border border-white/5" />
          <div className="absolute right-[18%] top-[23%] h-24 w-24 rounded-full border border-white/5" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Hero Content */}
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2">
                <span className="mr-2 h-2 w-2 rounded-full bg-red-500" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">
                  Support Animal Welfare
                </span>
              </div>

              <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Your Support
                <span className="block text-red-400">Creates Change.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
                Every contribution helps Vets for Animal Welfare continue
                creating a safer, healthier, and more compassionate environment
                for animals and communities.
              </p>

              {/* Hero Stats */}
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 sm:gap-5">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-xl font-black sm:text-2xl">Direct</p>
                  <p className="mt-1 text-xs text-white/50 sm:text-sm">
                    Animal Welfare
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-xl font-black sm:text-2xl">Easy</p>
                  <p className="mt-1 text-xs text-white/50 sm:text-sm">
                    Donation Methods
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-xl font-black sm:text-2xl">Impact</p>
                  <p className="mt-1 text-xs text-white/50 sm:text-sm">
                    That Matters
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Panel */}
            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl backdrop-blur-xl sm:p-7">
                {/* Payment Header */}
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">
                      Donation Payment
                    </p>

                    <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                      Donate to VFAW
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-500 shadow-lg shadow-red-500/20">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
                  {/* Bank Transfer */}
                  <div className="rounded-3xl border border-white/10 bg-[#0d2145] p-5">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 10l9-7 9 7"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 10v9M9 10v9M15 10v9M19 10v9M3 19h18"
                          />
                        </svg>
                      </div>

                      <div>
                        <p className="font-bold">Bank Transfer</p>
                        <p className="text-xs text-white/40">
                          Official donation account
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">
                          Account Name
                        </p>
                        <p className="mt-1 text-sm font-bold text-white">
                          {bankDetails.accountName}
                        </p>
                      </div>

                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">
                          Account Number
                        </p>

                        <div className="mt-1 flex items-center justify-between gap-2">
                          <p className="break-all text-sm font-bold text-white">
                            {bankDetails.accountNumber}
                          </p>

                          <button
                            type="button"
                            onClick={copyAccountNumber}
                            className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-white transition hover:border-red-400/40 hover:bg-red-500 hover:text-white"
                          >
                            {copied ? 'Copied' : 'Copy'}
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">
                            Bank
                          </p>
                          <p className="mt-1 text-sm font-semibold text-white">
                            {bankDetails.bankName}
                          </p>
                        </div>

                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">
                            Branch
                          </p>
                          <p className="mt-1 text-sm font-semibold text-white">
                            {bankDetails.branch}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">
                          Account Type
                        </p>
                        <p className="mt-1 text-sm font-semibold text-white">
                          {bankDetails.accountType}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div className="rounded-3xl border border-white/10 bg-white p-5 text-center text-[#07152f]">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-500">
                      Scan to Donate
                    </p>

                    <div className="mx-auto mt-4 flex aspect-square max-w-[220px] items-center justify-center overflow-hidden rounded-2xl border-4 border-[#edf2f8] bg-white p-2 shadow-lg">
                      <img
                        src="/bank.png"
                        alt="VFAW donation QR code"
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <p className="mt-4 text-sm font-bold">
                      Scan the QR code
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Use your supported banking or payment application to
                      complete the donation.
                    </p>
                  </div>
                </div>

                {/* Verification Notice */}
                <div className="mt-6 flex gap-3 rounded-2xl border border-amber-300/10 bg-amber-400/5 p-4">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-amber-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v4M12 17h.01"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.3 3.7L2.7 17a2 2 0 001.7 3h15.2a2 2 0 001.7-3L13.7 3.7a2 2 0 00-3.4 0z"
                    />
                  </svg>

                  <p className="text-xs leading-5 text-white/60">
                    Please verify the account name and account number before
                    completing your transfer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          IMPACT SECTION
      ========================================================== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-red-500">
              Your Contribution
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#07152f] sm:text-4xl">
              Where Your Support Makes a Difference
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-500">
              Your donation helps us support practical, community-focused
              animal welfare initiatives.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {impactAreas.map((item) => (
              <article
                key={item.number}
                className="group rounded-3xl border border-slate-200 bg-[#0d2145] p-7 text-white shadow-lg shadow-slate-200/50 transition duration-300 hover:-translate-y-2 hover:border-red-400 hover:shadow-2xl hover:shadow-red-500/10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-black tracking-wider text-red-400">
                    {item.number}
                  </span>

                  <div className="h-2 w-2 rounded-full bg-white/20 transition group-hover:bg-red-400" />
                </div>

                <h3 className="mt-10 text-xl font-black">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/60 transition group-hover:text-white/75">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW TO DONATE
      ========================================================== */}
      <section className="bg-[#f7f9fc] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            {/* Section Heading */}
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-red-500">
                Simple Process
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#07152f] sm:text-4xl">
                How to Donate
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-slate-500">
                Supporting animal welfare does not have to be complicated.
                Choose your preferred method and make your contribution.
              </p>

              <div className="mt-8 h-1 w-16 rounded-full bg-red-500" />
            </div>

            {/* Steps */}
            <div className="grid gap-4 sm:grid-cols-2">
              {donationSteps.map((step) => (
                <div
                  key={step.number}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-red-500">
                      {step.number}
                    </span>

                    <svg
                      className="h-5 w-5 text-slate-300 transition group-hover:text-red-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M13 6l6 6-6 6"
                      />
                    </svg>
                  </div>

                  <h3 className="mt-8 text-lg font-black text-[#07152f]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TRUST SECTION
      ========================================================== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-[#07152f] p-8 text-white shadow-2xl sm:p-12">
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-red-400">
                  Transparency & Trust
                </p>

                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  Every contribution matters.
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-white/60">
                  Your support enables VFAW to continue working toward
                  sustainable and compassionate animal welfare solutions.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-black text-[#07152f] transition hover:bg-red-500 hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-red-500 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Ready to Make a Difference?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/85">
            Your generosity can help create a better future for animals and
            strengthen compassionate communities.
          </p>

          <a
            href="#donate-payment"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-black text-red-500 shadow-lg transition hover:-translate-y-1 hover:bg-[#07152f] hover:text-white"
          >
            Donate Now
          </a>
        </div>
      </section>
    </main>
  );
};

export default Donate;
