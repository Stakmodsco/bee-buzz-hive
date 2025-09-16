import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import RealisticBeeScene from "./RealisticBee3D";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] bg-hero flex items-center overflow-hidden">
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
          <h1 className="text-5xl md:text-7xl font-bold font-['Playfair_Display'] text-bee leading-tight mb-6">
            Welcome to the
            <span className="text-honey block">Amazing World</span>
            of Bees
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Discover the fascinating lives of these incredible pollinators, 
            learn about conservation efforts, and join our mission to protect 
            bee populations worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
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
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-honey mb-1">20,000+</div>
              <div className="text-sm text-muted-foreground">Bee Species</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-nature mb-1">35%</div>
              <div className="text-sm text-muted-foreground">Food Pollinated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pollen mb-1">$235B</div>
              <div className="text-sm text-muted-foreground">Economic Value</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;