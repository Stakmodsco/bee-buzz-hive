import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import RealisticBeeScene from "./RealisticBee3D";
import heroBackground from "@/assets/hero-background.jpg";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation on component mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section 
      className={`relative min-h-[80vh] flex items-center overflow-hidden bg-cover bg-center bg-no-repeat transition-all duration-1500 ease-out ${
        isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
      }`}
      style={{ 
        backgroundImage: `url(${heroBackground})`
      }}
    >
      {/* Dark overlay for content visibility */}
      <div className={`absolute inset-0 bg-black/40 z-5 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}></div>
      {/* Realistic 3D Bee */}
      <RealisticBeeScene />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        {/* Hexagon Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="hexagon absolute bg-honey"
              style={{
                width: `${Math.random() * 60 + 40}px`,
                height: `${Math.random() * 60 + 40}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Simplified 2D Animated Bees */}
        <div className="bee absolute top-20 right-10 text-4xl animate-fly opacity-70">🐝</div>
        <div 
          className="bee absolute bottom-32 left-1/4 text-2xl animate-hover opacity-60"
          style={{ animationDelay: '0.5s' }}
        >
          🐝
        </div>
        <div 
          className="bee absolute top-60 right-1/3 text-3xl animate-fly opacity-50"
          style={{ animationDelay: '2s' }}
        >
          🐝
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className={`text-5xl md:text-7xl font-bold font-['Playfair_Display'] text-white leading-tight mb-6 transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0 transform' 
              : 'opacity-0 translate-y-16 transform'
          }`}>
            <span className={`inline-block transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0' : '-translate-x-full'
            }`}>Welcome to the</span>
            <span className={`text-honey block transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'translate-x-0' : 'translate-x-full'
            }`}>Amazing World</span>
            <span className={`inline-block transition-all duration-1000 ease-out delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>of Bees</span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-white mb-8 leading-relaxed transition-all duration-1000 ease-out delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Discover the fascinating lives of these incredible pollinators, 
            learn about conservation efforts, and join our mission to protect 
            bee populations worldwide.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Button 
              asChild
              size="lg" 
              className="bg-honey hover:bg-primary/90 text-bee shadow-honey px-8 py-6 text-lg font-semibold"
            >
              <Link to="/about">
                Explore Bee Species
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-2 border-nature text-nature hover:bg-nature hover:text-background px-8 py-6 text-lg font-semibold"
            >
              <Link to="/conservation">
                Support Conservation
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50 transition-all duration-1000 ease-out delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center">
              <div className="text-3xl font-bold text-honey mb-1">20,000+</div>
              <div className="text-sm text-white">Bee Species</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-nature mb-1">35%</div>
              <div className="text-sm text-white">Food Pollinated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pollen mb-1">$235B</div>
              <div className="text-sm text-white">Economic Value</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;