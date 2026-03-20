import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import StatusBanner from '@/components/StatusBanner';
import AboutServices from '@/components/AboutServices';
import Lab805 from '@/components/Lab805';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <StatusBanner />
      <AboutServices />
      <Lab805 />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
