import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

const StatusBanner = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mississippi Public Defender Conference link */}
      <div className="w-full text-center py-2 bg-transparent">
        <a
          href="/legal"
          className="text-sm font-medium"
          style={{ color: '#228B22' }}
        >
          For information on the Mississippi Public Defender Spring Conference, click here.
        </a>
      </div>

      <section className="py-4 bg-gulf-orange relative overflow-hidden">
        {/* Racing stripe accents */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gulf-navy"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gulf-navy"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="h-6 w-6 text-white mr-3" />
              <h2 className="text-2xl font-bold text-white">
                Just Flickering Online
              </h2>
            </div>
            
            <p className="text-gulf-cream mb-6 text-lg">
              This site is still under construction. Most links aren't working yet, 
              but you can reach out if you'd like to connect.
            </p>
            
            <Button 
              onClick={scrollToContact}
              variant="secondary"
              size="lg"
              className="bg-white text-gulf-orange hover:bg-gulf-cream hover:text-gulf-orange font-semibold"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatusBanner;
