import Head from 'next/head';

export default function SalesPage() {
  return (
    <>
      <Head>
        <title>Sales | Accident Payments</title>
        <meta name="description" content="Accident Payments sales page." />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <main className="h-screen bg-[#d9d9d9] text-[#111]">
        <div className="h-screen overflow-y-auto snap-y snap-mandatory">
          <section className="snap-start h-screen w-full">
            <div className="h-full w-full bg-[#d9d9d9]">
              <div className="flex h-full w-full items-center justify-center">
                <span
                  className="font-medium text-[32px] leading-none tracking-[0.02em] text-[#1a1a1a] sm:text-[52px]"
                  style={{ fontFamily: 'cursive' }}
                >
                  loom video
                </span>
              </div>
            </div>
          </section>

          <section className="snap-start h-screen w-full flex items-center justify-center px-4 sm:px-10">
            <div className="w-full max-w-[1200px] text-center">
              <div className="mx-auto flex w-full max-w-[980px] flex-col items-center">
                <img
                  src="/assets/computer.png"
                  alt="Accident Payments preview"
                  className="w-full max-w-[760px] h-auto select-none"
                  loading="lazy"
                />

                <div className="mt-6 inline-flex items-center justify-center bg-[#111] px-4 py-1.5 text-[14px] font-extrabold uppercase tracking-[0.18em] text-white sm:text-[16px]">
                  FIRST ACCESS
                </div>

                <h2 className="mt-6 text-[26px] font-semibold leading-[1.15] text-[#111] sm:text-[38px]">
                  Custom And Tailored MVA Cases Built For <span className="font-extrabold">YOUR</span> Company
                </h2>

                <h3 className="mt-3 text-[22px] font-extrabold uppercase leading-[1.15] text-brand sm:text-[34px]">
                  BRANDED ADS PREMIUM CASE FEED
                </h3>

                <div className="mt-6 inline-flex items-center justify-center bg-[#111] px-6 py-2 text-[14px] font-extrabold uppercase tracking-[0.12em] text-white sm:px-8 sm:py-2.5 sm:text-[16px]">
                  GET HIGH CONVERT CASES ON TAP
                </div>
              </div>
            </div>
          </section>

          <section className="snap-start h-screen w-full px-4 sm:px-10">
            <div className="flex h-full w-full items-center justify-center">
              <div className="w-full max-w-[1200px]">
                <div className="grid grid-cols-1 items-center justify-items-center gap-8 text-center sm:gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-8">
                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/4.png"
                      alt="Traditional advertising"
                      className="h-[190px] w-[190px] object-contain sm:h-[240px] sm:w-[240px] md:h-[280px] md:w-[280px]"
                      loading="lazy"
                    />

                    <div className="mt-6">
                      <p className="text-[22px] font-extrabold uppercase leading-[1.05] tracking-[0.04em] text-brand sm:text-[32px]">
                        TRANDITIONAL
                        <br />
                        ADVERTISING
                      </p>
                      <p className="mt-2 text-[16px] font-extrabold uppercase tracking-[0.06em] text-[#111] sm:text-[24px]">
                        “OTHER COMPANIES”
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <span className="text-[22px] font-extrabold uppercase tracking-[0.04em] text-[#111] sm:text-[26px]">vs.</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/contract.png"
                      alt="Signed retainers"
                      className="h-[190px] w-[190px] object-contain sm:h-[240px] sm:w-[240px] md:h-[280px] md:w-[280px]"
                      loading="lazy"
                    />

                    <div className="mt-6 text-center">
                      <p className="text-[22px] font-extrabold uppercase leading-[1.05] tracking-[0.04em] text-brand sm:text-[32px]">
                        SIGNED
                        <br />
                        RETAINERS
                      </p>
                      <img
                        src="/assets/logo-horizontal.png"
                        alt="Accident Payments"
                        className="mt-3 h-8 w-auto select-none sm:h-10"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="snap-start h-screen w-full px-4 py-10 sm:px-10 sm:py-14">
            <div className="flex h-full w-full items-center justify-center">
              <div className="w-full max-w-[980px] text-center">
                <img
                  src="/assets/5.png"
                  alt="Traditional advertising"
                  className="mx-auto h-[150px] w-[150px] object-contain sm:h-[210px] sm:w-[210px] md:h-[260px] md:w-[260px]"
                  loading="lazy"
                />

                <p className="mt-8 text-[22px] font-extrabold uppercase leading-[1.05] tracking-[0.04em] text-brand sm:text-[30px] md:text-[34px]">
                  TRANDITIONAL ADVERTISING
                </p>
                <p className="mt-2 text-[16px] font-extrabold uppercase tracking-[0.06em] text-[#111] sm:text-[20px]">
                  “OTHER COMPANIES”
                </p>

                <p className="mt-8 text-[16px] font-semibold leading-relaxed text-[#111] sm:text-[20px]">
                  Standard Marketing Agencies, Lead Generation Comapanies
                  <br />
                  Are Currently Using...
                </p>

                <div className="mt-10 flex flex-col items-center gap-4 sm:gap-5">
                  <div className="flex items-center justify-center gap-3">
                    <img
                      src="/assets/8.png"
                      alt="Billboard"
                      className="h-8 w-8 object-contain sm:h-10 sm:w-10"
                      loading="lazy"
                    />
                    <span className="text-[18px] font-extrabold uppercase tracking-[0.03em] text-[#111] sm:text-[22px]">
                      BILLBOARD ADVERTISING
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-3">
                    <img
                      src="/assets/6.png"
                      alt="Radio"
                      className="h-8 w-8 object-contain sm:h-10 sm:w-10"
                      loading="lazy"
                    />
                    <span className="text-[18px] font-extrabold uppercase tracking-[0.03em] text-[#111] sm:text-[22px]">
                      RADIO ADVERTISING
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-3">
                    <img
                      src="/assets/7.png"
                      alt="Television"
                      className="h-8 w-8 object-contain sm:h-10 sm:w-10"
                      loading="lazy"
                    />
                    <span className="text-[18px] font-extrabold uppercase tracking-[0.03em] text-[#111] sm:text-[22px]">
                      TELEVISION ADVERTISING
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="snap-start h-screen w-full">
            <div className="flex h-full w-full items-center justify-center">
              <div className="w-full max-w-[980px] text-center text-[#111]">
                <h2 className="text-[20px] font-extrabold leading-[1.25] sm:text-[28px]">
                  But Here At <span className="text-brand">Accident Payments</span>, We Do Everything Different.
                </h2>

                <img
                  src="/assets/9.png"
                  alt="Signed retainers"
                  className="mx-auto mt-8 h-[170px] w-[170px] object-contain sm:h-[240px] sm:w-[240px] md:h-[290px] md:w-[290px]"
                  loading="lazy"
                />

                <p className="mt-8 text-[22px] font-extrabold uppercase leading-[1.05] tracking-[0.04em] text-brand sm:text-[30px] md:text-[34px]">
                  SIGNED RETAINERS
                </p>

                <img
                  src="/assets/logo-horizontal.png"
                  alt="Accident Payments"
                  className="mx-auto mt-2 h-8 w-auto select-none sm:h-10"
                  loading="lazy"
                />

                <div className="mx-auto mt-10 max-w-[900px] space-y-6 text-[14px] font-semibold leading-relaxed text-[#111] sm:text-[18px]">
                  <p>
                    We specialize in motor vehicle accident cases and are currently working with over 100 law firms across 44 states closing over 65 fully
                    signed cases per day.
                  </p>
                  <p>
                    We don’t do outdated marketing strategies like: Radio, Television, Billboards, or Cold Calling.
                  </p>
                  <p>
                    We don't charge our clients anything upfront or any monthly services fees or term agreements where you have to commit to working with us
                    before even provided services.
                  </p>
                  <p>
                    We fully handle the process for you. We will provide you with the complete signed retainer, including Accident, Injury and police report.
                    There's no need for your secretary or staff to be involved. You’ll only need to submit the retainer on your end, and we’ll take care of
                    everything else.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="snap-start h-screen w-full px-4 py-6 sm:px-10 sm:py-14">
            <div className="flex h-full w-full items-center justify-center">
              <div className="w-full max-w-[1200px]">
                <div className="grid grid-cols-1 items-center gap-10 text-center md:grid-cols-[420px_1fr] md:gap-14 md:text-left">
                  <div className="mx-auto flex w-full max-w-[420px] flex-col items-center md:items-start">
                    <img
                      src="/assets/4.png"
                      alt="Traditional advertising"
                      className="h-[210px] w-[210px] object-contain sm:h-[260px] sm:w-[260px]"
                      loading="lazy"
                    />

                    <div className="mt-6">
                      <p className="text-[22px] font-extrabold uppercase leading-[1.05] tracking-[0.04em] text-brand sm:text-[28px]">
                        TRADITIONAL
                        <br />
                        ADVERTISING
                      </p>
                      <p className="mt-2 text-[44px] font-extrabold uppercase leading-[0.95] tracking-[0.02em] text-[#111] sm:text-[56px]">
                        LEADS
                      </p>
                      <p className="mt-2 text-[16px] font-extrabold uppercase tracking-[0.06em] text-[#111] sm:text-[18px]">
                        “OTHER COMPANIES”
                      </p>
                    </div>
                  </div>

                  <div className="mx-auto grid w-full max-w-[760px] grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6">
                    <div className="flex min-h-[56px] items-center justify-center rounded-none bg-[#111] px-5 py-3 text-center text-[15px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
                      Don’t Answer
                    </div>
                    <div className="flex min-h-[56px] items-center justify-center rounded-none bg-[#111] px-5 py-3 text-center text-[15px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
                      Don’t Convert to
                      <br />
                      Settlements
                    </div>

                    <div className="flex min-h-[56px] items-center justify-center rounded-none bg-[#111] px-5 py-3 text-center text-[15px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
                      Inconsistent Pricing
                    </div>
                    <div className="flex min-h-[56px] items-center justify-center rounded-none bg-[#111] px-5 py-3 text-center text-[15px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
                      Cost Too much
                    </div>

                    <div className="flex min-h-[56px] items-center justify-center rounded-none bg-[#111] px-5 py-3 text-center text-[15px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
                      Inconsistent Volume
                    </div>
                    <div className="flex min-h-[56px] items-center justify-center rounded-none bg-[#111] px-5 py-3 text-center text-[15px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
                      Are out of Area
                    </div>

                    <div className="flex min-h-[56px] items-center justify-center rounded-none bg-[#111] px-5 py-3 text-center text-[15px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
                      Inconsistent Quality
                    </div>
                    <div className="flex min-h-[56px] items-center justify-center rounded-none bg-[#111] px-5 py-3 text-center text-[15px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
                      Cancel Before Court
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="snap-start h-screen w-full px-4 py-6 sm:px-10 sm:py-14">
            <div className="flex h-full w-full items-center justify-center overflow-hidden">
              <div className="w-full max-w-[1200px]">
                <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_420px] md:gap-14">
                  <div className="order-2 mx-auto grid w-full max-w-[760px] grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6 md:order-1">
                    <div className="flex min-h-[56px] items-center justify-center rounded-none bg-[#111] px-5 py-3 text-center text-[15px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
                      Actively Searching
                      <br />
                      for your Service
                    </div>
                    <div className="flex min-h-[56px] items-center justify-center rounded-none bg-[#111] px-5 py-3 text-center text-[15px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
                      Low Cancellation Rate
                    </div>

                    <div className="flex min-h-[56px] items-center justify-center rounded-none bg-[#111] px-5 py-3 text-center text-[15px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
                      Convert to
                      <br />
                      Settlements
                    </div>
                    <div className="flex min-h-[56px] items-center justify-center rounded-none bg-[#111] px-5 py-3 text-center text-[15px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
                      Consistent Lead Flow
                    </div>

                    <div className="flex min-h-[56px] items-center justify-center rounded-none bg-[#111] px-5 py-3 text-center text-[15px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
                      Fixed Rate Pricing
                    </div>
                    <div className="flex min-h-[56px] items-center justify-center rounded-none bg-[#111] px-5 py-3 text-center text-[15px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
                      Zip code Specific
                    </div>

                    <div className="flex min-h-[56px] items-center justify-center rounded-none bg-[#111] px-5 py-3 text-center text-[15px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
                      High Quality
                    </div>
                    <div className="flex min-h-[56px] items-center justify-center rounded-none bg-[#111] px-5 py-3 text-center text-[15px] font-extrabold text-white sm:min-h-[80px] sm:px-6 sm:py-4 sm:text-[18px]">
                      Control of your
                      <br />
                      Lead Flow
                    </div>
                  </div>

                  <div className="order-1 mx-auto flex w-full max-w-[420px] flex-col items-center text-center text-[#111] md:order-2">
                    <p className="text-[34px] font-extrabold uppercase leading-[0.95] tracking-[0.02em] text-brand sm:text-[50px]">
                      SIGNED
                      <br />
                      RETAINERS
                    </p>

                    <img
                      src="/assets/logo-horizontal.png"
                      alt="Accident Payments"
                      className="mt-2 h-8 w-auto select-none sm:h-10"
                      loading="lazy"
                    />

                    <p className="mt-2 text-base font-extrabold uppercase tracking-[0.06em] text-[#111] sm:mt-3 sm:text-xl">
                      PROVIDES YOUR LAW FIRM
                    </p>

                    <img
                      src="/assets/contract.png"
                      alt="Signed retainers contract"
                      className="mt-3 h-[150px] w-[150px] object-contain sm:mt-6 sm:h-[260px] sm:w-[260px]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="snap-start h-screen w-full px-4 py-8 sm:px-10 sm:py-10">
            <div className="flex h-full w-full items-center justify-center">
              <div className="w-full max-w-[1200px] text-center text-[#111]">
                <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto_1fr] md:gap-12">
                  <div className="text-center">
                    <p className="text-[18px] font-extrabold uppercase tracking-[0.06em] text-[#111] sm:text-[24px]">
                      OUR CLIENTS HAVE A LESS THAN
                    </p>
                    <p className="mt-1 text-[150px] font-extrabold leading-[0.85] text-brand sm:text-[210px] md:text-[260px]">
                      10%
                    </p>
                    <p className="mt-1 text-[18px] font-extrabold uppercase tracking-[0.06em] text-[#111] sm:text-[24px]">
                      CANCELLATION RATE
                    </p>
                  </div>

                  <div className="hidden h-[360px] w-[3px] bg-[#111]/50 md:block" />

                  <div className="text-center md:text-left">
                    <p className="text-[18px] font-extrabold uppercase tracking-[0.06em] text-[#111] sm:text-[24px]">
                      BECAUSE OUR LEADS ARE
                    </p>
                    <div className="mt-5 space-y-6">
                      <div className="flex items-start justify-center gap-4 md:justify-start">
                        <img src="/assets/10.png" alt="Check" className="mt-1 h-8 w-8 object-contain sm:h-9 sm:w-9" loading="lazy" />
                        <p className="text-[20px] font-extrabold uppercase tracking-[0.04em] text-[#111] sm:text-[24px]">QUALIFIED</p>
                      </div>
                      <div className="flex items-start justify-center gap-4 md:justify-start">
                        <img src="/assets/10.png" alt="Check" className="mt-1 h-8 w-8 object-contain sm:h-9 sm:w-9" loading="lazy" />
                        <p className="text-[20px] font-extrabold uppercase tracking-[0.04em] text-[#111] sm:text-[24px]">INTERESTED</p>
                      </div>
                      <div className="flex items-start justify-center gap-4 md:justify-start">
                        <img src="/assets/10.png" alt="Check" className="mt-1 h-8 w-8 object-contain sm:h-9 sm:w-9" loading="lazy" />
                        <p className="text-[20px] font-extrabold uppercase tracking-[0.04em] text-[#111] sm:text-[24px]">
                          USING SEARCH ENGINE
                          <br />
                          PLATFORMS
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex justify-center">
                  <div className="bg-[#111] px-2 py-2 text-center text-[14px] sm:text-3xl font-extrabold uppercase tracking-[0.06em] text-white">
                    DON’T PUT YOURSELF AT RISK WITH OUTDATED MARKETING
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="snap-start h-screen w-full px-4 py-10 sm:px-10 sm:py-14">
            <div className="flex h-full w-full items-center justify-center">
              <div className="w-full max-w-[1200px] text-center text-[#111]">
                <img
                  src="/assets/11.png"
                  alt="Accident Payments"
                  className="mx-auto h-[70px] w-auto object-contain sm:h-[90px] md:h-[110px]"
                  loading="lazy"
                />

                <p className="mt-8 text-[22px] font-extrabold uppercase leading-[1.15] tracking-[0.04em] text-[#111] sm:text-[32px]">
                  WE WANT TO HELP
                  <br />
                  GROW YOUR BUSINESS
                </p>

                <p className="mt-4 text-[2px] font-extrabold leading-[1.2] text-[#111] sm:text-[30px]">
                  Not Just Give You Busy work
                </p>

                <div className="mt-10 flex justify-center">
                  <div className="bg-brand px-2 py-2 text-center text-3xl sm:text-7xl font-extrabold uppercase leading-none tracking-[0.04em] text-[#d9d9d9] ">
                    SO HOW DOES IT WORK
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="snap-start h-screen w-full px-4 py-10 sm:px-10 sm:py-14">
            <div className="flex h-full w-full items-center justify-center">
              <div className="w-full max-w-[1200px]">
                <div className="grid grid-cols-1 items-center gap-10 text-center md:grid-cols-[420px_1fr] md:gap-14 md:text-left">
                  <div className="mx-auto flex w-full max-w-[420px] items-center justify-center">
                    <img
                      src="/assets/12.png"
                      alt="High quality leads"
                      className="h-48 w-48 object-contain sm:h-60 sm:w-60 md:h-72 md:w-72"
                      loading="lazy"
                    />
                  </div>

                  <div className="text-center md:text-left">
                    <p className="text-5xl font-extrabold uppercase tracking-wide text-brand sm:text-6xl md:text-7xl">
                      HIGH QUALITY
                    </p>
                    <p className="mt-2 text-2xl font-extrabold uppercase tracking-wide text-brand sm:text-3xl md:text-4xl">
                      SEARCH-ENGINE-DRIVEN LEADS
                    </p>
                    <p className="mt-2 text-2xl font-extrabold uppercase tracking-wide text-[#111] sm:text-3xl md:text-4xl">
                      GENERATED FROM USERS ACTIVELY
                      <br />
                      LOOKING FOR YOUR SERVICES
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="snap-start h-screen w-full px-4 py-6 sm:px-10 sm:py-10">
            <div className="flex h-full w-full items-center justify-center overflow-hidden">
              <div className="w-full max-w-[1000px] text-center text-[#111]">
                <img
                  src="/assets/13.png"
                  alt="Filter 01 intent"
                  className="mx-auto h-56 w-auto object-contain sm:h-64 md:h-72"
                  loading="lazy"
                />

                <p className="mt-4 text-xl font-extrabold uppercase tracking-wide sm:text-2xl">
                  FILTER #01
                </p>
                <p className="mt-1 text-3xl font-extrabold uppercase tracking-wide text-brand sm:text-4xl md:text-5xl">
                  INTENT
                </p>

                <p className="mx-auto mt-4 max-w-[860px] text-lg font-extrabold leading-snug sm:text-xl md:text-2xl">
                  The first step to capture and convert on high quality leads is having those prospects knocking on our door and not the other way around like most marketing agencies.
                </p>

                <p className="mx-auto mt-4 max-w-[900px] text-lg font-extrabold leading-snug sm:text-xl md:text-2xl">
                  We want our prospects searching on Google, Yahoo, &amp; Bing with searches that are specific to YOUR industry.
                </p>

                <p className="mx-auto mt-4 max-w-[980px] text-lg font-extrabold leading-snug sm:text-xl md:text-2xl">
                  We want our prospects using searches that indicate they are actively looking for a product or service we can deliver, and not like most agencies where they are twisting the prospects arm.
                </p>
              </div>
            </div>
          </section>

          <section className="snap-start h-screen w-full px-4 py-6 sm:px-10 sm:py-10">
            <div className="flex h-full w-full items-center justify-center overflow-hidden">
              <div className="w-full max-w-[1000px] text-center text-[#111]">
                <img
                  src="/assets/14.png"
                  alt="Filter 02 education"
                  className="mx-auto h-56 w-auto object-contain sm:h-64 md:h-72"
                  loading="lazy"
                />

                <p className="mt-4 text-xl font-extrabold uppercase tracking-wide sm:text-2xl">
                  FILTER #02
                </p>
                <p className="mt-1 text-3xl font-extrabold uppercase tracking-wide text-brand sm:text-4xl md:text-5xl">
                  EDUCATION
                </p>

                <p className="mx-auto mt-4 max-w-[980px] text-lg font-extrabold leading-snug sm:text-xl md:text-2xl">
                  Prospects will land on one of our thousands of local presence landing pages, informational web pages, educational blogs, or ClickFunnels websites.
                </p>

                <p className="mx-auto mt-4 max-w-[980px] text-lg font-extrabold leading-snug sm:text-xl md:text-2xl">
                  From those online funnels they will be promoted to completed a long form fill survey where prospects will have their information qualified to see if they will be qualified for your law firm.
                </p>

                <p className="mx-auto mt-4 max-w-[980px] text-lg font-extrabold leading-snug sm:text-xl md:text-2xl">
                  The entire customer journey, prospects are being educated with transparent information that they will have to qualify for and be approved for submitting settlement claims prior to being connected with your firm.
                </p>
              </div>
            </div>
          </section>

          <section className="snap-start h-screen w-full px-4 py-6 sm:px-10 sm:py-10">
            <div className="flex h-full w-full items-center justify-center overflow-hidden">
              <div className="w-full max-w-[1000px] text-center text-[#111]">
                <img
                  src="/assets/15.png"
                  alt="Filter 03 qualification"
                  className="mx-auto h-56 w-auto object-contain sm:h-64 md:h-72"
                  loading="lazy"
                />

                <p className="mt-4 text-xl font-extrabold uppercase tracking-wide sm:text-2xl">
                  FILTER #03
                </p>
                <p className="mt-1 text-3xl font-extrabold uppercase tracking-wide text-brand sm:text-4xl md:text-5xl">
                  QUALIFICATION
                </p>

                <p className="mx-auto mt-4 max-w-[980px] text-lg font-extrabold leading-snug sm:text-xl md:text-2xl">
                  The last step is to qualify the information that was submitted by prospects who are activity searching for your solutions.
                </p>

                <p className="mx-auto mt-4 max-w-[980px] text-lg font-extrabold leading-snug sm:text-xl md:text-2xl">
                  Prospect characteristics are the first information that is vetted and qualified, information such as police report, injury report, accident report and more.
                </p>

                <p className="mx-auto mt-4 max-w-[980px] text-lg font-extrabold leading-snug sm:text-xl md:text-2xl">
                  As long as all prospect characteristics have been vetted and are qualified specifically for your law firm, these signed retainers will be API’d into your Custom CRM for you to review the case file.
                </p>
              </div>
            </div>
          </section>

          <section className="snap-start h-screen w-full px-4 py-10 sm:px-10 sm:py-14">
            <div className="flex h-full w-full items-center justify-center overflow-hidden">
              <div className="w-full max-w-[1200px] text-center text-[#111]">
                <p className="text-3xl font-extrabold uppercase tracking-wide sm:text-4xl md:text-5xl">
                  YOU WANT MORE CASES?
                </p>

                <div className="mx-auto mt-10 grid max-w-[1050px] grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 md:mt-14 md:gap-12">
                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/16.png"
                      alt="Online advertising"
                      className="h-24 w-24 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32"
                      loading="lazy"
                    />
                    <p className="mt-5 text-xl font-extrabold uppercase leading-tight tracking-wide sm:text-2xl">
                      ONLINE
                      <br />
                      ADVERTISING
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/17.png"
                      alt="Real-time and exclusive"
                      className="h-24 w-24 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32"
                      loading="lazy"
                    />
                    <p className="mt-5 text-xl font-extrabold uppercase leading-tight tracking-wide sm:text-2xl">
                      REAL-TIME &amp;
                      <br />
                      EXCLUSIVE
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/18.png"
                      alt="Pre-qualified"
                      className="h-24 w-24 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32"
                      loading="lazy"
                    />
                    <p className="mt-5 text-xl font-extrabold uppercase leading-tight tracking-wide sm:text-2xl">
                      PRE-
                      <br />
                      QUALIFIED
                    </p>
                  </div>
                </div>

                <img
                  src="/assets/logo-horizontal.png"
                  alt="Accident Payments"
                  className="mx-auto mt-12 h-10 w-auto object-contain sm:mt-14 sm:h-12 md:mt-16 md:h-14"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          <section className="snap-start h-screen w-full px-4 py-10 sm:px-10 sm:py-14">
            <div className="flex h-full w-full items-center justify-center overflow-hidden">
              <div className="w-full max-w-[1200px]">
                <div className="grid grid-cols-1 items-center gap-10 text-center md:grid-cols-[1fr_auto_1fr] md:gap-14 md:text-left">
                  <div className="text-center">
                    <p className="text-2xl font-extrabold uppercase tracking-wide text-[#111] sm:text-3xl">
                      WE HAVE HELPED OVER
                    </p>
                    <p className="mt-4 text-[120px] font-extrabold leading-none text-brand sm:text-[160px] md:text-[190px]">
                      150
                    </p>
                    <p className="mt-4 text-2xl font-extrabold uppercase tracking-wide text-[#111] sm:text-3xl">
                      LAW FIRMS
                    </p>
                  </div>

                  <div className="mx-auto hidden h-72 w-px bg-[#111] md:block" />

                  <div className="text-center md:text-left">
                    <p className="text-2xl font-extrabold uppercase tracking-wide text-[#111] sm:text-3xl">
                      IT’S TIME TO GET STARTED
                    </p>
                    <p className="mt-5 text-xl font-extrabold leading-snug text-[#111] sm:text-2xl">
                      We Have Room for FIVE More
                      <br />
                      People In This Program.
                    </p>
                    <div className="mt-6">
                      <span className="inline-block bg-[#111] px-3 py-1 text-lg font-extrabold uppercase tracking-wide text-[#d9d9d9] sm:text-xl">
                        HOW CAN WE HELP YOU?
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="snap-start h-screen w-full">
            <img
              src="/assets/19.png"
              alt="Accident Payments"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </section>

          <section className="snap-start h-screen w-full">
            <img
              src="/assets/20.png"
              alt="Accident Payments"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </section>

          <section className="snap-start h-screen w-full px-4 py-10 sm:px-10 sm:py-14">
            <div className="flex h-full w-full items-center justify-center overflow-hidden">
              <div className="w-full max-w-[1200px] text-center text-[#111]">
                <p className="text-3xl font-extrabold uppercase leading-none tracking-wide text-[#111] sm:text-4xl md:text-5xl">
                  ARE YOU READY TO
                </p>
                <p className="mt-1 text-5xl font-extrabold uppercase leading-none tracking-wide text-[#111] sm:text-6xl md:text-7xl">
                  SCALE YOUR
                </p>
                <p className="mt-2 text-7xl font-extrabold uppercase leading-none tracking-wide text-brand sm:text-8xl md:text-9xl">
                  FIRM?
                </p>

                <a
                  className="mx-auto mt-10 inline-flex items-center justify-center rounded-full bg-brand px-10 py-4 text-lg font-extrabold uppercase tracking-wide text-white sm:mt-12 sm:px-14 sm:py-5 sm:text-xl"
                  href="/#booking"
                >
                  SCHEDULE A CALL
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
