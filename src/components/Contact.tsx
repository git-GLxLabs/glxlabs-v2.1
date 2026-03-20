import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Linkedin, Instagram, BookOpen } from 'lucide-react';
import { useContactForm } from '@/hooks/useContactForm';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { submitContactForm, isSubmitting } = useContactForm();
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitContactForm(formData);
    if (success) {
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/glxlabs?igsh=MWZ5YTR0NHFkNHp5dg==',
      description: 'Visual stories',
      bgColor: 'bg-gulf-navy',
      textColor: 'text-gulf-light',
      hoverBg: 'hover:bg-gulf-navy',
      hoverText: 'hover:text-gulf-orange'
    },
    {
      name: 'Substack',
      icon: BookOpen,
      url: 'https://substack.com/@glxlabs?utm_campaign=profile&utm_medium=profile-page',
      description: 'Newsletter & stories',
      bgColor: 'bg-gulf-orange',
      textColor: 'text-white',
      hoverBg: 'hover:bg-gulf-orange',
      hoverText: 'hover:text-gulf-orange'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/gll',
      description: 'Professional network',
      bgColor: 'bg-gulf-blue',
      textColor: 'text-white',
      hoverBg: 'hover:bg-gulf-blue',
      hoverText: 'hover:text-gulf-orange'
    }
  ];

  return (
    <section id="contact" className="py-12 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-display font-bold tracking-tight mb-6">
              Signal Received. Let's Talk.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Want to collaborate? Have a weird idea? Let's build something with shape, voice, and meaning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 border-0 bg-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full min-h-[120px]"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full btn-primary cursor-hover"
                  disabled={isSubmitting}
                >
                  Contact Me
                </Button>
              </form>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-8">
              
              {/* Social Links */}
              <Card className="p-8 border-0 bg-slate-600 text-white">
                <h3 className="text-xl font-bold mb-6 text-white">Connect :</h3>
                <div className="space-y-4">
                  {socialLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-300 cursor-hover group ${link.hoverBg} ${link.hoverText}`}
                      >
                        <div className={`w-10 h-10 ${link.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                          <IconComponent className={`h-5 w-5 ${link.textColor}`} />
                        </div>
                        <div>
                          <div className="font-medium text-white group-hover:font-bold transition-all">{link.name}</div>
                          <div className="text-sm text-slate-300 group-hover:opacity-90 transition-all">
                            {link.description}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;