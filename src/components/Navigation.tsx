import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavItems = [
    { label: 'About', href: '#about' },
    { label: 'Insights', href: '#insights' },
    { label: 'Case Studies', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  const labNavItem = { label: 'Lab 805', href: '#lab805' };
  const legalNavItem = { label: 'Legal', href: '/legal' };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-gulf-orange/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Gulf Racing Orange */}
          <a href="#" className="text-2xl font-bold tracking-tight">
            GLx<span className="text-gulf-orange">Labs</span>
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gulf-orange hover:text-gulf-navy transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Hamburger Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b-2 border-gulf-orange shadow-lg">
            <div className="flex flex-col p-6">
              {/* Main navigation items */}
              <div className="flex flex-col space-y-4 mb-8">
                {mainNavItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium tracking-wide text-foreground hover:text-gulf-orange transition-colors duration-200 border-l-2 border-transparent hover:border-gulf-orange pl-3"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              
              {/* Racing stripe separator */}
              <div className="border-t-2 border-gulf-orange mb-6 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gulf-navy transform translate-y-1"></div>
              </div>
              
              {/* Lab navigation with special treatment */}
              <div>
                <a
                  href={labNavItem.href}
                  className="text-lg font-bold tracking-wide text-gulf-orange hover:text-gulf-navy transition-colors duration-200 bg-gulf-orange/10 px-3 py-2 rounded border-l-4 border-gulf-orange"
                  onClick={() => setIsOpen(false)}
                >
                  {labNavItem.label}
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