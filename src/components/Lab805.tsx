import { ArrowRight } from 'lucide-react';

const Lab805 = () => {

  return (
    <section id="lab805" className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-display font-bold tracking-tight mb-8">
            Lab 805
          </h2>
          
          {/* Description */}
          <p className="text-xl leading-relaxed text-muted-foreground mb-16 max-w-3xl mx-auto">
            This the test kitchen. Some things break, some things spark. That's the point.
          </p>
          
          {/* Lab Entry Button */}
          <div className="flex flex-col items-center gap-4">
            <a 
              href="/lab805" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium text-lg"
            >
              See Inside the Lab
              <ArrowRight className="h-5 w-5" />
            </a>
            
            {/* Password Protection Disclaimer */}
            <p className="text-sm text-accent max-w-md text-center">
              *The lab is currently password protected while I get things set up
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lab805;