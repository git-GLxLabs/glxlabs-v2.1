import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      if (!isHome) {
        navigate('/');
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  const mainNavItems = [
    { label: 'About', href: '#about' },
    { label: 'Insights', href: '#insights' },
    { label: 'Case Studies', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-gulf-orange/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); handleNavClick('/'); }}
            className="text-2xl font-bold tracking-tight"
          >
            GLx<span className="text-gulf-orange">Labs</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gulf-orange hover:text-gulf-navy transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b-2 border-gulf-orange shadow-lg">
            <div className="flex flex-col p-6">
              <div className="flex flex-col space-y-4 mb-8">
                {mainNavItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium tracking-wide text-foreground hover:text-gulf-orange transition-colors duration-200 border-l-2 border-transparent hover:border-gulf-orange pl-3"
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Racing stripe separator */}
              <div className="border-t-2 border-gulf-orange mb-6 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gulf-navy transform translate-y-1"></div>
              </div>

              <div className="flex flex-col space-y-4">
                <a
                  href="#lab805"
                  className="text-lg font-bold tracking-wide text-gulf-orange hover:text-gulf-navy transition-colors duration-200 bg-gulf-orange/10 px-3 py-2 rounded border-l-4 border-gulf-orange"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#lab805'); }}
                >
                  Lab 805
                </a>
                <a
                  href="/legal"
                  className="text-lg font-bold tracking-wide text-gulf-orange hover:text-gulf-navy transition-colors duration-200 bg-gulf-orange/10 px-3 py-2 rounded border-l-4 border-gulf-orange"
                  onClick={(e) => { e.preventDefault(); handleNavClick('/legal'); }}
                >
                  Legal
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
