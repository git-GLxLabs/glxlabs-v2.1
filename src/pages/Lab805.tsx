import { Button } from '@/components/ui/button';
import { ArrowRight, TestTube } from 'lucide-react';
import { Link } from 'react-router-dom';
import PasswordProtection from '@/components/PasswordProtection';

const Lab805 = () => {
  return (
    <PasswordProtection 
      resourceKey="lab805" 
      storageKey="lab805_access"
    >
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            GLx<span className="text-gray-500">Labs</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Inside the Lab Title */}
          <h1 className="text-display font-bold tracking-tight mb-8">Inside the Lab</h1>
          
          {/* Intro Copy */}
          <p className="text-xl leading-relaxed text-muted-foreground mb-16 max-w-3xl mx-auto">
            Welcome to the experimental zone where AI meets creativity. These projects push the boundaries of what's possible in digital storytelling and content creation.
          </p>
          
          {/* Project Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Avatar Voices */}
            <div className="border border-border rounded-lg p-6 bg-card text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <TestTube className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Avatar Voices</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-600 font-medium">Active Development</span>
                    <span className="text-muted-foreground">85% Complete</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                AI personality mapping for content creators with advanced neural voice synthesis.
              </p>
              <div className="w-full bg-muted rounded-full h-2 mb-4">
                <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
              </div>
              <Button variant="outline" className="w-full">Explore Project</Button>
            </div>

            {/* Motion Re-edits */}
            <div className="border border-border rounded-lg p-6 bg-card text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <ArrowRight className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Motion Re-edits</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-blue-600 font-medium">Beta Testing</span>
                    <span className="text-muted-foreground">70% Complete</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Automated video editing with story awareness and cinematic flow algorithms.
              </p>
              <div className="w-full bg-muted rounded-full h-2 mb-4">
                <div className="bg-primary h-2 rounded-full" style={{width: '70%'}}></div>
              </div>
              <Button variant="outline" className="w-full">Explore Project</Button>
            </div>

            {/* AI Rhythm Cuts */}
            <div className="border border-border rounded-lg p-6 bg-card text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <TestTube className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">AI Rhythm Cuts</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-orange-600 font-medium">Prototype</span>
                    <span className="text-muted-foreground">45% Complete</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Beat-synced editing driven by narrative flow and emotional resonance mapping.
              </p>
              <div className="w-full bg-muted rounded-full h-2 mb-4">
                <div className="bg-primary h-2 rounded-full" style={{width: '45%'}}></div>
              </div>
              <Button variant="outline" className="w-full">Explore Project</Button>
            </div>

            {/* Zine-style Research */}
            <div className="border border-border rounded-lg p-6 bg-card text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <TestTube className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Zine-style Research</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-purple-600 font-medium">Conceptual</span>
                    <span className="text-muted-foreground">25% Complete</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Visual research methods for creative teams with collaborative annotation tools.
              </p>
              <div className="w-full bg-muted rounded-full h-2 mb-4">
                <div className="bg-primary h-2 rounded-full" style={{width: '25%'}}></div>
              </div>
              <Button variant="outline" className="w-full">Explore Project</Button>
            </div>
          </div>
        </div>

        {/* Steam Tunnels Button - Bottom Left */}
        <div className="absolute bottom-8 left-6">
          <Link to="/lab805/steam-tunnels">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Steam Tunnels
            </Button>
          </Link>
        </div>
      </main>
    </div>
    </PasswordProtection>
  );
};

export default Lab805;