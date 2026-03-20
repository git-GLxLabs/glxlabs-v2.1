import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import StatusBanner from '@/components/StatusBanner';
import Insights from '@/components/Insights';
import AboutServices from '@/components/AboutServices';
// import FeaturedWork from '@/components/FeaturedWork';
import Lab805 from '@/components/Lab805';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <StatusBanner />
      {/* <Insights /> */}
      <AboutServices />
      <Lab805 />
      {/* <FeaturedWork /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
