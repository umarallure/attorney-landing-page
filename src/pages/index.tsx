import Head from 'next/head';
import Header from '@components/Header';
import CalendlyBookingSection from '@components/CalendlyBookingSection';
import WhyAccidentPaymentsSection from '@components/WhyAccidentPaymentsSection';
import HowItWorksSection from '@components/HowItWorksSection';
import ExclusiveAccidentCasesSection from '@components/ExclusiveAccidentCasesSection';
import FAQSection from '@components/FAQSection';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Accident Payments | High-Intent Case Pipeline</title>
        <meta
          name="description"
          content="You don't need more leads. You need more signed cases. Human-vetted, exclusive, high-intent case acquisition for attorneys."
        />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <main>
        <Header />
        <CalendlyBookingSection />
        <WhyAccidentPaymentsSection />
        <HowItWorksSection />
        <ExclusiveAccidentCasesSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}
