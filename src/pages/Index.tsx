import HeroBanner from "@/components/HeroBanner";
import FrameworkOverview from "@/components/FrameworkOverview";
import BenchmarkDomains from "@/components/BenchmarkDomains";
import Results from "@/components/Results";
import Insights from "@/components/Insights";
import AMAAgent from "@/components/AMAAgent";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroBanner />
      <FrameworkOverview />
      <BenchmarkDomains />
      <Results />
      <Insights />
      <AMAAgent />
      <Footer />
    </div>
  );
};

export default Index;
