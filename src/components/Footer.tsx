const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-gulf-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold tracking-tight text-gulf-navy">
              GLx<span className="text-gulf-orange">Labs</span>
            </div>
            <p className="text-sm font-semibold text-gulf-navy mt-2">
              A Romper Room of Ideas
            </p>
          </div>
          
          {/* Copyright */}
          <div className="text-sm text-gulf-navy text-center md:text-right">
            <p>© 2025 GLxLabs. All rights reserved.</p>
            <p className="mt-1">
              Crafted with precision and purpose.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;