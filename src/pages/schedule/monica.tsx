import Head from 'next/head';
import dynamic from 'next/dynamic';
import Header from '@components/Header';
import CalendlyBookingSection from '@components/CalendlyBookingSection';
import WhyAccidentPaymentsSection from '@components/WhyAccidentPaymentsSection';

const HowItWorksSection = dynamic(() => import('@components/HowItWorksSection'), {
  loading: () => <div className="min-h-[400px]" />,
});
const ExclusiveAccidentCasesSection = dynamic(() => import('@components/ExclusiveAccidentCasesSection'), {
  loading: () => <div className="min-h-[600px]" />,
});
const FAQSection = dynamic(() => import('@components/FAQSection'), {
  loading: () => <div className="min-h-[400px]" />,
});
const Footer = dynamic(() => import('@components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
});

export default function MonicaSchedulePage() {
  return (
    <>
      <Head>
        <title>Accident Payments | Schedule with Monica</title>
        <meta
          name="description"
          content="Schedule a call with Monica from Accident Payments."
        />
        <link rel="icon" href="/assets/favicon.ico" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="preload" href="/assets/logo-white.png" as="image" />
        <link rel="preload" href="/assets/background-bg-black.png" as="image" />
      </Head>
      <main>
        <Header />
        <CalendlyBookingSection calendlyUrl="https://calendly.com/monicagonzalez03/meeting" />
        <WhyAccidentPaymentsSection />
        <HowItWorksSection />
        <ExclusiveAccidentCasesSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}
