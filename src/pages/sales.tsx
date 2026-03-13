import Head from 'next/head';

import Header from '../components/Header';
import SectionArrow from '../components/sales/SectionArrow';
// import LoomVideoSection from '../components/sales/LoomVideoSection';
import FirstAccessSection from '../components/sales/FirstAccessSection';
import TraditionalVsSignedSection from '../components/sales/TraditionalVsSignedSection';
import TraditionalAdvertisingSection from '../components/sales/TraditionalAdvertisingSection';
import WeDoDifferentSection from '../components/sales/WeDoDifferentSection';
import TraditionalLeadsSection from '../components/sales/TraditionalLeadsSection';
import SignedRetainersSection from '../components/sales/SignedRetainersSection';
import CancellationRateSection from '../components/sales/CancellationRateSection';
import GrowBusinessSection from '../components/sales/GrowBusinessSection';
import HighQualityLeadsSection from '../components/sales/HighQualityLeadsSection';
import Filter01IntentSection from '../components/sales/Filter01IntentSection';
import Filter02EducationSection from '../components/sales/Filter02EducationSection';
import Filter03QualificationSection from '../components/sales/Filter03QualificationSection';
import WantMoreCasesSection from '../components/sales/WantMoreCasesSection';
import HelpedLawFirmsSection from '../components/sales/HelpedLawFirmsSection';
import ImageSection19 from '../components/sales/ImageSection19';
import ImageSection20 from '../components/sales/ImageSection20';
import FinalCTASection from '../components/sales/FinalCTASection';

export default function SalesPage() {
  return (
    <>
      <Head>
        <title>Sales | Accident Payments</title>
        <meta name="description" content="Accident Payments sales page." />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <main className="h-screen bg-[#d9d9d9] text-[#111]">
        <Header secondaryHref="/" secondaryLabel="HOME" secondaryIcon="home" primaryHref="/#booking" position="fixed" />
        <div className="h-screen overflow-y-auto snap-y snap-mandatory">
          {/* <LoomVideoSection /> */}
          {/* <SectionArrow /> */}
          <FirstAccessSection />
          <SectionArrow />
          <TraditionalVsSignedSection />
          <SectionArrow />
          <TraditionalAdvertisingSection />
          <SectionArrow />
          <WeDoDifferentSection />
          <SectionArrow />
          <TraditionalLeadsSection />
          <SectionArrow />
          <SignedRetainersSection />
          <SectionArrow />
          <CancellationRateSection />
          <SectionArrow />
          <GrowBusinessSection />
          <SectionArrow />
          <HighQualityLeadsSection />
          <SectionArrow />
          <Filter01IntentSection />
          <SectionArrow />
          <Filter02EducationSection />
          <SectionArrow />
          <Filter03QualificationSection />
          <SectionArrow />
          <WantMoreCasesSection />
          <SectionArrow />
          <HelpedLawFirmsSection />
          <SectionArrow />
          <ImageSection19 />
          <SectionArrow />
          <ImageSection20 />
          <SectionArrow />
          <FinalCTASection />
        </div>
      </main>
    </>
  );
}
