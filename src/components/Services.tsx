import { Card } from '@/components/ui/card';
import { Bot, Video, Users, Mic } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI Post-Production',
      description: 'Intelligent editing workflows that amplify creative decisions'
    },
    {
      icon: Video,
      title: 'UGC & Content Strategy',
      description: 'Scale authentic storytelling across platforms'
    },
    {
      icon: Users,
      title: 'AI Workflow Consulting',
      description: 'Transform your pipeline with custom automation'
    },
    {
      icon: Mic,
      title: 'AI Voice & Avatar Integration',
      description: 'Next-gen synthetic media for dynamic content'
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-display font-bold tracking-tight mb-6">
              Services Built for
              <span className="text-gray-600"> Tomorrow</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We don't just use AI tools—we architect intelligent workflows 
              that scale creativity without sacrificing quality.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.title}
                  className="p-10 border-0 bg-card hover:bg-gray-50 transition-all duration-300 cursor-hover group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;