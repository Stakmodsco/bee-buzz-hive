import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import HexagonBackground from "../components/ui/HexagonBackground";
import realisticBeeFlight from "@/assets/realistic-bee-flight.png";
import realisticBeeGolden from "@/assets/realistic-bee-golden.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-hero relative flex items-center justify-center">
      <HexagonBackground density="light" />
      
      {/* Floating realistic bees */}
      <img 
        src={realisticBeeFlight}
        alt="Realistic Bee in Flight"
        className="floating-bee w-10 h-10 object-contain" 
        style={{ top: '20%', left: '15%' }}
      />
      <img 
        src={realisticBeeGolden}
        alt="Golden Honey Bee"
        className="floating-bee w-8 h-8 object-contain" 
        style={{ top: '70%', right: '20%' }}
      />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Large 404 with hexagon design */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center">
              <span className="text-8xl md:text-9xl font-bold text-honey font-['Playfair_Display']">4</span>
              <div className="hexagon w-20 h-20 md:w-24 md:h-24 bg-honey mx-4 flex items-center justify-center">
                <img 
                  src={realisticBeeFlight}
                  alt="Realistic Bee in Flight"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>
              <span className="text-8xl md:text-9xl font-bold text-honey font-['Playfair_Display']">4</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-bee mb-4 font-['Playfair_Display']">
            Oops! This Page Has Flown Away
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Like a bee that's wandered from its hive, this page seems to have lost its way. 
            Don't worry though - we'll help you find your way back to the buzz!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              className="bg-honey hover:bg-primary/90 text-bee shadow-honey px-8 py-6 text-lg font-semibold"
            >
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Return to Hive
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-2 border-nature text-nature hover:bg-nature hover:text-background px-8 py-6 text-lg font-semibold"
              onClick={() => window.history.back()}
            >
              <button>
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </button>
            </Button>
          </div>
          
          <div className="mt-12 text-sm text-muted-foreground">
            <p>
              Lost path: <code className="bg-muted px-2 py-1 rounded text-honey">{location.pathname}</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
