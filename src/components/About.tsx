import { Card } from '@/components/ui/card';
import { Lightbulb, Zap, Target, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Story',
      description: 'Every pixel serves the narrative'
    },
    {
      icon: Zap,
      title: 'Speed',
      description: 'AI acceleration meets human intuition'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Surgical accuracy in every edit'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Technology enhances, never replaces craft'
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-display font-bold tracking-tight mb-6">
              A Studio at the Crossroads
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8 max-w-4xl mx-auto">
              This is a studio, not a service. A collective, not a [placeholder]. A notebook, not a funnel. Come for the stories, stay for what's next.
            </p>
          </div>
          
          {/* Founder Introduction */}
          <div className="prose prose-lg max-w-none text-center mb-20">
            <p className="text-xl leading-relaxed text-muted-foreground">
              Founded by <strong>Graeme Lowry</strong>, GLxLabs draws from 25 years of academic and editorial craft. From film sets to neural networks, we help people and platforms tell sharper, more targeted stories through consulting, systems thinking, and creative tech.
            </p>
          </div>
          
          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={value.title}
                  className="p-8 text-center border-0 bg-card hover:bg-gray-50 transition-colors duration-300 cursor-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;