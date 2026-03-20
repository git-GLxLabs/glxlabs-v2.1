import { Card } from '@/components/ui/card';
const AboutServices = () => {
  const services = [{
    name: 'Writing + Editorial Consulting',
    description: 'From brand voice to narrative architecture — I help you build from your idea up.'
  }, {
    name: 'Post Production + Video Editing',
    description: 'Streamlined editing, automation, and custom workflows rooted in story, enhanced by technology.'
  }, {
    name: 'Workflow Architecture',
    description: 'Automation frameworks tailored to small studios and creative teams.'
  }];
  return <section id="about" className="py-12 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-display font-bold tracking-tight mb-6">
              A Studio at the 
              <span className="text-gray-600"> Crossroads</span>
            </h2>
          </div>
          
          {/* About Content */}
          <div className="prose prose-lg max-w-none text-center mb-20">
            <p className="text-xl leading-relaxed text-muted-foreground">
              I founded GLxLabs after 25+ years of honing my editorial craft — from film sets and network televison to neural networks and seattle tech companies. I help people and platforms tell sharper stories through consulting, systems thinking, and creative tech; all with a foundation of video editing and post production.
            </p>
            <p className="text-xl leading-relaxed font-bold mt-6" style={{color: 'hsl(210 50% 25%)'}}>GLxLabs is a studio, a laboratory, and a notebook — not a funnel.</p>
            <p className="text-xl leading-relaxed text-accent font-bold mt-6">
              Come for the stories. Stay for what's next.
            </p>
            <div className="mt-8">
              <a 
                href="https://substack.com/@glxlabs/posts" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lg text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Read on Substack →
              </a>
            </div>
          </div>
          
          {/* Services Table */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">Services</h3>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Service</th>
                    <th className="px-6 py-4 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => <tr key={service.name} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                      <td className="px-6 py-4 font-medium">{service.name}</td>
                      <td className="px-6 py-4 text-muted-foreground">{service.description}</td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Section Tagline */}
          <div className="text-center">
            <p className="text-lg font-medium text-muted-foreground">
              Story-first. Tool-agnostic. Built to last.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutServices;