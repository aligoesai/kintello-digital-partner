import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import ClientSlider from "@/components/ClientSlider";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <PillarsSection />
        <ClientSlider />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
