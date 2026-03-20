import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const FieldNotes = () => {
  const [showRail, setShowRail] = useState(false);
  const [articleContent, setArticleContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRail(true);
    }, 330);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.functions.invoke('fetch-substack', {
          body: {
            postUrl: 'https://glxlabs.substack.com/p/i-made-a-ugc-video-in-90-minutes'
          }
        });

        if (error) throw error;
        
        setArticleContent(data);
      } catch (err) {
        console.error('Error fetching article:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-6 flex">
          {/* Main Content Area */}
          <div className="max-w-4xl flex-1 pr-8">
            {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="mb-8 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Field Notes
          </Button>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {articleContent?.title || "No Actors. No Crew. Nothing But Code."}
            </h1>
            <p className="text-xl text-muted-foreground">
              {articleContent?.author && (
                <span>by {articleContent.author} • </span>
              )}
              {articleContent?.pubDate && new Date(articleContent.pubDate).toLocaleDateString()}
            </p>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none dark:prose-invert">
            <div className="bg-card rounded-lg p-8 border">
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">Loading article...</span>
                </div>
              ) : error ? (
                <div className="text-center py-12">
                  <p className="text-destructive mb-4">Failed to load article. Please try again later.</p>
                  <Button onClick={() => window.location.reload()} variant="outline">
                    Try Again
                  </Button>
                </div>
              ) : articleContent?.content ? (
                <div 
                  className="substack-content"
                  dangerouslySetInnerHTML={{ 
                    __html: DOMPurify.sanitize(articleContent.content, {
                      ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'a', 'h1', 'h2', 'h3', 'h4', 'ul', 'ol', 'li', 'img', 'blockquote', 'figure', 'figcaption', 'div', 'span', 'sub', 'sup'],
                      ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'target', 'rel']
                    })
                  }}
                />
              ) : (
                <p className="text-muted-foreground text-center">No content available</p>
              )}
            </div>
          </article>
          </div>

          {/* Right Hand Thumbnail Rail */}
          <aside className={`w-64 flex-shrink-0 transition-all duration-700 ease-out ${showRail ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-16'}`}>
            <div className="sticky top-28">
              <div className="bg-card/90 backdrop-blur-sm border rounded-lg p-4 shadow-lg">
                <h3 className="text-sm font-semibold text-muted-foreground mb-4 text-right">
                  More Field Notes
                </h3>
                <div className="space-y-3">
                  <div className="group cursor-pointer">
                    <div className="bg-muted/50 rounded h-20 w-full mb-2 hover:bg-muted transition-colors"></div>
                    <h4 className="text-sm font-medium text-right group-hover:text-primary transition-colors">
                      The Revenge of Post-Production
                    </h4>
                    <p className="text-xs text-muted-foreground text-right mt-1">
                      6 min read
                    </p>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="bg-muted/50 rounded h-20 w-full mb-2 hover:bg-muted transition-colors"></div>
                    <h4 className="text-sm font-medium text-right group-hover:text-primary transition-colors">
                      Powering the Machine
                    </h4>
                    <p className="text-xs text-muted-foreground text-right mt-1">
                      10 min read
                    </p>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="bg-muted/50 rounded h-20 w-full mb-2 hover:bg-muted transition-colors"></div>
                    <h4 className="text-sm font-medium text-right group-hover:text-primary transition-colors">
                      The Prompt Is the Spell
                    </h4>
                    <p className="text-xs text-muted-foreground text-right mt-1">
                      9 min read
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FieldNotes;