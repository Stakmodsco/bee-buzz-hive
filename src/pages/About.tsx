import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import goldenHourPollinators from "../assets/golden-hour-pollinators.jpg";

const beeSpecies = [
  {
    name: "Honeybee",
    scientific: "Apis mellifera",
    description: "Social bees that live in colonies and produce honey. Essential for pollinating crops worldwide.",
    habitat: "Hives, hollow trees",
    diet: "Nectar, pollen",
    conservation: "Stable",
    facts: ["Live in colonies of up to 80,000 bees", "Can fly up to 15 mph", "Visit 2-5 million flowers to make 1 pound of honey"]
  },
  {
    name: "Bumblebee",
    scientific: "Bombus species",
    description: "Fuzzy, robust bees excellent at buzz pollination. Active in cooler temperatures than other bees.",
    habitat: "Ground nests, gardens",
    diet: "Nectar, pollen",
    conservation: "Declining",
    facts: ["Can regulate body temperature", "Excellent pollinators of tomatoes", "Queen bees hibernate through winter"]
  },
  {
    name: "Leafcutter Bee",
    scientific: "Megachile species", 
    description: "Solitary bees that cut circular pieces from leaves to build their nests. Important native pollinators.",
    habitat: "Wood, stems, soil",
    diet: "Nectar, pollen",
    conservation: "Stable",
    facts: ["Cut perfect circles from leaves", "More efficient pollinators than honeybees", "Don't produce honey"]
  },
  {
    name: "Mason Bee",
    scientific: "Osmia species",
    description: "Gentle, non-aggressive bees that use mud to build their nests. Excellent early-season pollinators.",
    habitat: "Hollow stems, holes in wood",
    diet: "Nectar, pollen", 
    conservation: "Stable",
    facts: ["Don't live in colonies", "Active in early spring", "One bee can do the work of 100 honeybees"]
  }
];

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-['Playfair_Display'] text-bee mb-6">
              About Our Amazing Bees
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover the incredible diversity of bee species and learn how these 
              remarkable insects shape our world through pollination.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction - World of Bees with Background */}
      <section 
        className="py-16 relative honeycomb-overlay"
        style={{
          backgroundImage: `url(${goldenHourPollinators})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        {/* Floating bees */}
        <div className="floating-bee" style={{ top: '20%', left: '10%' }}>🐝</div>
        <div className="floating-bee" style={{ top: '60%', right: '15%' }}>🐝</div>
        <div className="floating-bee" style={{ bottom: '30%', left: '20%' }}>🐝</div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto">
            <div className="hexagon-border w-20 h-20 mx-auto mb-8">
              <div className="hexagon-content flex items-center justify-center w-full h-full">
                <span className="text-3xl">🐝</span>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-center mb-8 font-['Playfair_Display'] text-white">
              The World of Bees
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-lg leading-relaxed mb-4 text-white/90">
                  There are over 20,000 known species of bees worldwide, ranging from tiny 
                  stingless bees smaller than your fingernail to large carpenter bees. 
                  Each species has evolved unique characteristics and plays a vital role 
                  in their ecosystem.
                </p>
              </div>
              <div>
                <p className="text-lg leading-relaxed text-white/90">
                  Bees are responsible for pollinating approximately one-third of the food 
                  we eat. From almonds and apples to blueberries and coffee, these incredible 
                  insects make modern agriculture possible and support biodiversity worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bee Species Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-['Playfair_Display']">
            Featured Bee Species
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {beeSpecies.map((species, index) => (
              <Card key={species.name} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{species.name}</CardTitle>
                      <p className="text-sm text-muted-foreground italic mb-3">
                        {species.scientific}
                      </p>
                      <Badge 
                        variant={species.conservation === "Declining" ? "destructive" : "secondary"}
                        className="mb-3"
                      >
                        {species.conservation}
                      </Badge>
                    </div>
                    <div className="text-3xl">{index % 2 === 0 ? "🐝" : "🐛"}</div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {species.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <strong className="text-foreground">Habitat:</strong>
                      <p className="text-muted-foreground">{species.habitat}</p>
                    </div>
                    <div>
                      <strong className="text-foreground">Diet:</strong>
                      <p className="text-muted-foreground">{species.diet}</p>
                    </div>
                  </div>
                  
                  <div>
                    <strong className="text-foreground text-sm">Fun Facts:</strong>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      {species.facts.map((fact, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-honey mr-2">•</span>
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-['Playfair_Display']">
            Help Protect Our Bees
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn more about bee conservation efforts and discover how you can 
            make a difference in protecting these essential pollinators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/conservation"
              className="bg-honey hover:bg-primary/90 text-bee px-8 py-3 rounded-lg font-semibold shadow-honey transition-all inline-block"
            >
              Conservation Efforts
            </a>
            <a 
              href="/blog"
              className="border-2 border-nature text-nature hover:bg-nature hover:text-background px-8 py-3 rounded-lg font-semibold transition-all inline-block"
            >
              Read Our Blog
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;