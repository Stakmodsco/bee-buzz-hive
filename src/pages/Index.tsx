import HeroSection from "../components/home/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Shield, Users } from "lucide-react";

const features = [
  {
    icon: <Leaf className="w-8 h-8 text-nature" />,
    title: "Learn About Bees",
    description: "Discover different bee species, their behaviors, and their crucial role in our ecosystem.",
    link: "/about"
  },
  {
    icon: <Shield className="w-8 h-8 text-honey" />,
    title: "Conservation Efforts", 
    description: "Support our mission to protect bee populations through research and habitat restoration.",
    link: "/conservation"
  },
  {
    icon: <Users className="w-8 h-8 text-pollen" />,
    title: "Join Our Community",
    description: "Connect with fellow bee enthusiasts, researchers, and conservationists worldwide.",
    link: "/blog"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 font-['Playfair_Display']">
            Explore BuzzWorld
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Dive into the fascinating world of bees with our comprehensive resources, 
            conservation initiatives, and vibrant community.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={feature.title} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-honey/20">
                <CardHeader className="text-center pb-4">
                  <div className="hexagon w-20 h-20 bg-honey/10 mx-auto mb-6 flex items-center justify-center group-hover:bg-honey/20 transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl mb-3">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <Button asChild variant="outline" className="border-honey text-honey hover:bg-honey hover:text-bee group-hover:shadow-honey">
                    <Link to={feature.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter-section" className="py-20 bg-bee">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-background mb-6 font-['Playfair_Display']">
              Stay Updated with BuzzWorld
            </h2>
            <p className="text-background/80 text-lg leading-relaxed mb-8">
              Get the latest news on bee research, conservation efforts, and tips 
              for creating bee-friendly environments delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-honey"
              />
              <Button className="bg-honey hover:bg-primary/90 text-bee shadow-honey px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-background/60 text-sm mt-4">
              Join over 10,000 bee enthusiasts worldwide
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
