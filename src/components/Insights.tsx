import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock } from 'lucide-react';

const Insights = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const articles = [
    {
      title: 'No Actors. No Crew.',
      subtitle: 'Nothing But Code.',
      excerpt: 'AI replaced my entire film crew when I made a UGC style spot in 90 minutes with nothing but prompts.',
      readTime: null,
      date: null,
      category: null,
      slug: '/field-notes/no-actors-no-crew'
    },
    {
      title: 'The Revenge of',
      subtitle: 'Post-Production',
      excerpt: 'Post didn\'t die—it evolved. Editorial precision meets AI speed and scrappy rebellion.',
      readTime: '6 min read',
      date: 'Dec 28, 2023',
      category: 'Evolution',
      slug: '/revenge-of-post'
    },
    {
      title: 'Powering the Machine',
      excerpt: 'The hidden cost of intelligence: lithium, heat, and the ghost in the grid.',
      readTime: '10 min read',
      date: 'Dec 10, 2023',
      category: 'Infrastructure',
      slug: '/power-needs'
    },
    {
      title: 'Synchronized Shitting',
      excerpt: 'A Veo3 fever dream: kittens, chaos, and the absurd poetry of the prompt.',
      readTime: '7 min read',
      date: 'Nov 22, 2023',
      category: 'Chaos',
      slug: '/synchronized-shitting'
    },
    {
      title: 'The Prompt Is the Spell',
      excerpt: 'Writing for AI is spellcraft. Clarity, emotion, and story as the new syntax of control.',
      readTime: '9 min read',
      date: 'Nov 8, 2023',
      category: 'Craft',
      slug: '/prompt-is-spell'
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
    <section id="insights" className="py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-display font-bold tracking-tight mb-6">
              Field Notes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dispatches from the studio — essays, frameworks, and rants from the cutting room floor.
            </p>
          </div>
          
          {/* Horizontal Scroll Container */}
          <div className="relative overflow-hidden">
            <div 
              ref={scrollContainerRef}
              className="horizontal-scroll-container flex space-x-8 pb-4"
            >
              {articles.map((article, index) => (
                <Card 
                  key={article.title}
                  className={`flex-shrink-0 bg-card border-2 border-black shadow-lg transition-colors duration-300 cursor-pointer group overflow-hidden ${
                    index === 0 || index === 1 ? 'w-64 h-[480px]' : 
                    index === 2 ? 'w-[32rem] h-[480px]' : 'w-80 h-96'
                  }`}
                  onClick={() => window.location.href = article.slug}
                >
                  {index === 0 || index === 1 || index === 2 ? (
                    /* Featured Article Layout */
                    <div className="h-full flex flex-col">
                      {/* Title Header */}
                      <div className="p-4 bg-background border-b border-gray-200">
                        <h3 className="text-lg font-bold group-hover:text-gray-600 transition-colors leading-tight font-serif">
                          {article.title}
                        </h3>
                        {article.subtitle && (
                          <h4 className="text-lg font-bold group-hover:text-gray-600 transition-colors leading-tight font-serif">
                            {article.subtitle}
                          </h4>
                        )}
                      </div>
                      
                      {/* Large Image with Comic Border */}
                      <div className="flex-1 overflow-hidden flex items-center justify-center bg-background p-4">
                        <div className="border-4 border-black shadow-lg bg-white">
                          <img 
                            src={
                              index === 0 ? "/lovable-uploads/466425a7-82aa-4715-b09b-e026bc33545f.png" : 
                              index === 1 ? "/lovable-uploads/b34b7ff9-9c63-4063-8918-a3a13608c2d1.png" :
                              "/lovable-uploads/7090efc1-cca0-4cf6-892b-768b6d3c99cd.png"
                            }
                            alt={
                              index === 0 ? "Vintage illustration of woman at computer dreaming of beach" : 
                              index === 1 ? "Retro comic illustration with X-ray specs and Hollywood theme" :
                              "Retro comic illustration about powering the machine with various energy sources"
                            }
                            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      
                      {/* Description Footer */}
                      <div className="p-4 bg-background border-t border-gray-200">
                        <div className="text-muted-foreground leading-relaxed text-sm font-serif">
                          {index === 0 ? (
                            <>
                              <div>AI replaced my entire film crew</div>
                              <div>when I made a UGC style spot in</div>
                              <div>90 minutes with nothing but prompts.</div>
                            </>
                          ) : index === 1 ? (
                            <>
                              <div>Post didn't die—it evolved.</div>
                              <div>Editorial precision meets AI speed</div>
                              <div>and scrappy rebellion.</div>
                            </>
                          ) : (
                            <>
                              <div>The hidden cost of intelligence:</div>
                              <div>lithium, heat, and the ghost</div>
                              <div>in the grid.</div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Regular Article Layout */
                    <div className="h-full flex flex-col p-6">
                      <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-2">
                        {article.category && (
                          <span className="text-sm font-medium text-muted-foreground font-serif">
                            {article.category}
                          </span>
                        )}
                        {article.readTime && (
                          <div className="flex items-center text-sm text-muted-foreground font-serif">
                            <Clock className="h-4 w-4 mr-1" />
                            {article.readTime}
                          </div>
                        )}
                      </div>
                      
                      <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-gray-600 transition-colors leading-tight font-serif">
                          {article.title}
                        </h3>
                        {article.subtitle && (
                          <h4 className="text-xl font-bold group-hover:text-gray-600 transition-colors leading-tight font-serif">
                            {article.subtitle}
                          </h4>
                        )}
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow font-serif">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                        {article.date && (
                          <span className="text-sm text-muted-foreground font-serif">
                            {article.date}
                          </span>
                        )}
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-primary hover:text-primary/80 p-0 h-auto font-medium group-hover:translate-x-1 transition-transform font-serif"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = article.slug;
                          }}
                        >
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
            
            {/* Scroll Hint */}
            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                Scroll to explore articles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;