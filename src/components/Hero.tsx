import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';
const Hero = () => {
  return <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gulf-blue">
      {/* Gulf Racing Stripes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-2 bg-gulf-orange"></div>
        <div className="absolute top-2 left-0 w-full h-1 bg-gulf-navy"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gulf-orange"></div>
        <div className="absolute bottom-2 left-0 w-full h-1 bg-gulf-navy"></div>
        
        {/* Center racing stripes */}
        <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2">
          <div className="h-1 bg-gulf-orange mb-1"></div>
          <div className="h-2 bg-gulf-navy mb-1"></div>
          <div className="h-1 bg-gulf-orange mb-2"></div>
          <div className="h-1 bg-gulf-orange mb-1"></div>
          <div className="h-2 bg-gulf-navy mb-1"></div>
          <div className="h-1 bg-gulf-orange"></div>
        </div>
      </div>

      {/* Background Image with Gulf tint */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5" style={{
      backgroundImage: `url(${heroBackground})`
    }} />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gulf-blue/80 via-gulf-blue/90 to-gulf-blue" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-display-large font-bold tracking-tight mb-8 fade-in text-white">
            Start with the story.
            <br />
            <span className="text-gulf-cream">Build from there.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gulf-light max-w-3xl mx-auto mb-12 leading-relaxed fade-in stagger-delay">GLxLabs helps creators and companies find their voice, blending editorial craft with technology to make story-driven content that actually matters.</p>
          
          {/* CTA Buttons */}
          <div className="flex justify-center fade-in stagger-delay my-0">
            
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;