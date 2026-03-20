import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Terminal, Code, Cpu, Database, ArrowUpDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import PasswordProtection from '@/components/PasswordProtection';

const SteamTunnels = () => {
  const basementProjects = [
    {
      icon: Terminal,
      title: 'Neural Prompt Engineering',
      description: 'Advanced prompt optimization using recursive feedback loops.',
      classification: 'CLASSIFIED',
      temperature: 'EXPERIMENTAL'
    },
    {
      icon: Code,
      title: 'Quantum Narrative Structures',
      description: 'Non-linear storytelling using quantum superposition principles.',
      classification: 'THEORETICAL',
      temperature: 'UNSTABLE'
    },
    {
      icon: Cpu,
      title: 'Consciousness Mapping',
      description: 'AI model introspection and self-awareness measurement protocols.',
      classification: 'RESTRICTED',
      temperature: 'VOLATILE'
    },
    {
      icon: Database,
      title: 'Memory Palace Architecture',
      description: 'Persistent AI memory systems with hierarchical knowledge graphs.',
      classification: 'PROTOTYPE',
      temperature: 'STABLE'
    }
  ];

  return (
    <PasswordProtection 
      resourceKey="steam_tunnels" 
      storageKey="steam_tunnels_access"
    >
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/lab805/inside" className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <ArrowUpDown className="h-4 w-4" />
              Surface Level
            </Link>
            <div className="text-xl font-mono text-green-400">
              STEAM_TUNNELS.SYS
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-4 border border-red-500/30 rounded-lg mb-6 bg-red-950/20">
              <h1 className="text-3xl font-mono font-bold tracking-tight text-red-400 mb-2">
                █ RESTRICTED ACCESS █
              </h1>
              <p className="text-sm text-red-300/80 font-mono">
                BASEMENT LEVEL • CLEARANCE REQUIRED • EXPERIMENTAL ZONE
              </p>
            </div>
            <p className="text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto font-mono">
              Welcome to the underground. These are the projects that don't make it to the surface. 
              Proceed with caution — some experiments are better left in the dark.
            </p>
          </div>
          
          {/* Warning Banner */}
          <div className="bg-yellow-950/50 border border-yellow-500/30 rounded-lg p-4 mb-12 text-center">
            <p className="text-yellow-300 font-mono text-sm">
              ⚠️ NOTICE: These projects may exhibit unpredictable behavior. User discretion advised. ⚠️
            </p>
          </div>
          
          {/* Basement Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {basementProjects.map((project, index) => {
              const IconComponent = project.icon;
              const getClassificationColor = (classification: string) => {
                switch (classification) {
                  case 'CLASSIFIED': return 'text-red-400 bg-red-950/30 border-red-500/30';
                  case 'THEORETICAL': return 'text-blue-400 bg-blue-950/30 border-blue-500/30';
                  case 'RESTRICTED': return 'text-orange-400 bg-orange-950/30 border-orange-500/30';
                  case 'PROTOTYPE': return 'text-green-400 bg-green-950/30 border-green-500/30';
                  default: return 'text-gray-400 bg-gray-950/30 border-gray-500/30';
                }
              };
              
              return (
                <Card 
                  key={project.title}
                  className="p-8 bg-gray-900 border-gray-700 hover:border-gray-600 transition-all duration-300 cursor-pointer group"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors duration-300">
                      <IconComponent className="h-7 w-7 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-mono font-bold mb-3 text-gray-100">{project.title}</h3>
                      <div className="flex flex-col gap-2">
                        <div className={`text-xs px-3 py-1 rounded-full font-mono font-medium border inline-block w-fit ${getClassificationColor(project.classification)}`}>
                          {project.classification}
                        </div>
                        <div className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full font-mono inline-block w-fit">
                          TEMP: {project.temperature}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6 font-mono text-sm">
                    {project.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="w-full bg-gray-800 border-gray-600 text-gray-200 hover:bg-gray-700 hover:border-gray-500 font-mono"
                  >
                    ACCESS RESTRICTED
                  </Button>
                </Card>
              );
            })}
          </div>
          
          {/* Footer Warning */}
          <div className="text-center mt-16">
            <p className="text-xs text-gray-500 font-mono">
              END OF ACCESSIBLE RECORDS • DEEPER LEVELS REQUIRE BIOMETRIC CLEARANCE
            </p>
          </div>
        </div>
      </main>
    </div>
    </PasswordProtection>
  );
};

export default SteamTunnels;