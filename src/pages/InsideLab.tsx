import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Brain, Scissors, Zap, TestTube, ArrowLeft, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const InsideLab = () => {
  const featuredProjects = [
    {
      icon: Brain,
      title: 'Avatar Voices',
      description: 'AI personality mapping for content creators with advanced neural voice synthesis.',
      status: 'Active Development',
      progress: 85
    },
    {
      icon: Scissors,
      title: 'Motion Re-edits',
      description: 'Automated video editing with story awareness and cinematic flow algorithms.',
      status: 'Beta Testing',
      progress: 70
    },
    {
      icon: Zap,
      title: 'AI Rhythm Cuts',
      description: 'Beat-synced editing driven by narrative flow and emotional resonance mapping.',
      status: 'Prototype',
      progress: 45
    },
    {
      icon: TestTube,
      title: 'Zine-style Research',
      description: 'Visual research methods for creative teams with collaborative annotation tools.',
      status: 'Conceptual',
      progress: 25
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      backgroundColor: '#f8fafb',
      backgroundImage: `
        linear-gradient(rgba(37, 99, 235, 0.3) 1px, transparent 1px),
        linear-gradient(90deg, rgba(37, 99, 235, 0.3) 1px, transparent 1px),
        linear-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: '25px 25px, 25px 25px, 5px 5px, 5px 5px'
    }}>
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/lab805" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Lab 805
            </Link>
            <Link to="/" className="text-2xl font-bold tracking-tight">
              GLx<span className="text-gray-500">Labs</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-display font-bold tracking-tight mb-6">
              Inside the Lab
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              Welcome to the experimental zone where AI meets creativity. These projects push the boundaries 
              of what's possible in digital storytelling and content creation.
            </p>
          </div>
          
          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card 
                  key={project.title}
                  className="p-8 border-2 hover:border-primary/50 transition-all duration-300 cursor-pointer group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                          {project.status}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {project.progress}% Complete
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary/10 transition-colors duration-300"
                  >
                    Explore Project
                  </Button>
                </Card>
              );
            })}
          </div>
          
          {/* Secret Easter Egg Button */}
          <div className="text-center">
            <div className="relative inline-block">
              <Link to="/lab805/steam-tunnels">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-xs text-muted-foreground/50 hover:text-muted-foreground hover:bg-background opacity-30 hover:opacity-100 transition-all duration-500 border border-dashed border-muted-foreground/20 hover:border-muted-foreground/50"
                >
                  <Sparkles className="h-3 w-3 mr-1" />
                  Steam Tunnels
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InsideLab;