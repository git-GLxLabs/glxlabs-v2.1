import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const FeaturedWork = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'Indie Collective',
      description: 'UGC scaling for creators — modular content systems that maintain authentic voice while enabling rapid production.',
      category: 'UGC Strategy',
      year: '2024'
    },
    {
      title: 'TechStart',
      description: 'AI voice integration for emerging platforms — building story-driven automation that feels human.',
      category: 'AI Integration',
      year: '2024'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInView) {
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        const maxScroll = container.scrollWidth - container.clientWidth;
        container.scrollLeft = scrollProgress * maxScroll;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="work" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display font-bold tracking-tight mb-6">
            Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Projects that make systems feel like stories.
          </p>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div className="relative overflow-hidden">
          <div 
            ref={scrollContainerRef}
            className="horizontal-scroll-container flex space-x-8 pb-4"
          >
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="flex-shrink-0 w-80 h-96 p-8 border-0 bg-card hover:bg-white transition-all duration-300 cursor-hover group"
              >
                <div className="h-full flex flex-col justify-between">
                  {/* Project Visual Placeholder */}
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-6 flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                    <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center">
                      <ExternalLink className="h-8 w-8 text-gray-600" />
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-muted-foreground">
                        {project.category}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {project.year}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Scroll Hint */}
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Scroll to explore projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;