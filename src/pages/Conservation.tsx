import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Heart, Leaf, Shield, Users } from "lucide-react";
import HexagonBackground from "../components/ui/HexagonBackground";

const conservationProjects = [
  {
    title: "Urban Bee Corridors",
    description: "Creating bee-friendly pathways through cities to connect fragmented habitats.",
    progress: 75,
    raised: 45000,
    goal: 60000,
    supporters: 892,
    status: "Active"
  },
  {
    title: "Native Plant Restoration", 
    description: "Planting native flowering plants to provide natural food sources for bees.",
    progress: 60,
    raised: 32000,
    goal: 50000,
    supporters: 567,
    status: "Active"
  },
  {
    title: "Pesticide-Free Farming",
    description: "Supporting farmers in transitioning to bee-safe agricultural practices.",
    progress: 90,
    raised: 78000,
    goal: 85000,
    supporters: 1234,
    status: "Nearly Complete"
  }
];

const conservationTips = [
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Plant Native Flowers",
    description: "Choose native flowering plants that bloom throughout the growing season."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Avoid Pesticides", 
    description: "Use organic and bee-safe alternatives to chemical pesticides in your garden."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Support Local Beekeepers",
    description: "Buy honey and bee products from local, sustainable beekeeping operations."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Join Conservation Groups",
    description: "Participate in local bee conservation groups and citizen science projects."
  }
];

const Conservation = () => {
  return (
    <div className="min-h-screen honeycomb-overlay relative">
      <HexagonBackground density="light" />
      
      {/* Floating bees */}
      <div className="floating-bee" style={{ top: '20%', right: '12%' }}>🐝</div>
      <div className="floating-bee" style={{ top: '65%', left: '8%' }}>🐝</div>
      <div className="floating-bee" style={{ bottom: '40%', right: '20%' }}>🐝</div>
      
      {/* Hero Section */}
      <section className="bg-hero py-20 relative">
        <HexagonBackground density="medium" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-['Playfair_Display'] text-bee mb-6">
              Protecting Our 
              <span className="text-honey block">Pollinators</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Join our mission to conserve bee populations and create a sustainable 
              future for these essential pollinators.
            </p>
            <Button 
              size="lg" 
              className="bg-honey hover:bg-primary/90 text-bee shadow-honey px-8 py-6 text-lg font-semibold"
            >
              Donate Now
            </Button>
          </div>
        </div>
      </section>

      {/* Conservation Crisis */}
      <section className="py-16 relative">
        <HexagonBackground density="light" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 font-['Playfair_Display']">
              The Crisis We Face
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bee populations worldwide are declining at alarming rates due to habitat loss, 
              pesticide use, climate change, and disease. We must act now to protect these 
              vital pollinators before it's too late.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-destructive mb-2">40%</div>
                <p className="text-muted-foreground">Decline in honeybee colonies over the past decade</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-destructive mb-2">25%</div>
                <p className="text-muted-foreground">Of bumblebee species at risk of extinction</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-destructive mb-2">90%</div>
                <p className="text-muted-foreground">Loss of wildflower meadows since 1930</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Active Projects */}
      <section className="py-16 bg-muted/30 relative">
        <HexagonBackground density="medium" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 font-['Playfair_Display']">
            Our Conservation Projects
          </h2>
          
          <div className="grid gap-8 max-w-4xl mx-auto">
            {conservationProjects.map((project, index) => (
              <Card key={project.title} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <Badge variant="secondary" className="mb-3">
                        {project.status}
                      </Badge>
                    </div>
                    <div className="text-2xl">🌻</div>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-semibold text-honey">
                          ${project.raised.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground">Raised</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold">
                          ${project.goal.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground">Goal</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-nature">
                          {project.supporters}
                        </div>
                        <div className="text-xs text-muted-foreground">Supporters</div>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-honey hover:bg-primary/90 text-bee">
                      Support This Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="py-16 relative">
        <HexagonBackground density="light" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 font-['Playfair_Display']">
            How You Can Help
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {conservationTips.map((tip, index) => (
              <Card key={tip.title} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="hexagon w-16 h-16 bg-honey mx-auto mb-4 flex items-center justify-center text-bee">
                    {tip.icon}
                  </div>
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tip.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conservation;