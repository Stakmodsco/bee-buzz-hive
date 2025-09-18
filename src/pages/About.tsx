import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import goldenHourPollinators from "../assets/golden-hour-pollinators.jpg";

// Import bee images
import westernHoneyBee from "../assets/bees/western-honey-bee.jpg";
import asianHoneyBee from "../assets/bees/asian-honey-bee.jpg";
import giantHoneyBee from "../assets/bees/giant-honey-bee.jpg";
import buffTailedBumblebee from "../assets/bees/buff-tailed-bumblebee.jpg";
import commonEasternBumblebee from "../assets/bees/common-eastern-bumblebee.jpg";
import mayanStinglessBee from "../assets/bees/mayan-stingless-bee.jpg";
import easternCarpenterBee from "../assets/bees/eastern-carpenter-bee.jpg";
import violetCarpenterBee from "../assets/bees/violet-carpenter-bee.jpg";
import tawnyMiningBee from "../assets/bees/tawny-mining-bee.jpg";
import leafcutterBee from "../assets/bees/leafcutter-bee.jpg";
import blueOrchardMasonBee from "../assets/bees/blue-orchard-mason-bee.jpg";
import sweatBee from "../assets/bees/sweat-bee.jpg";
import cuckooBee from "../assets/bees/cuckoo-bee.jpg";
import orchidBee from "../assets/bees/orchid-bee.jpg";

const beeCategories = [
  {
    category: "Honey Bees",
    genus: "Apis",
    description: "Social bees that live in large colonies and produce honey. They are the most well-known pollinators.",
    species: [
      {
        name: "Western Honey Bee",
        scientific: "Apis mellifera",
        description: "The most common honey bee species worldwide, essential for agriculture and honey production.",
        habitat: "Hives, hollow trees, managed apiaries",
        diet: "Nectar, pollen",
        conservation: "Stable",
        image: westernHoneyBee,
        facts: [
          "Live in colonies of up to 80,000 bees",
          "Can fly up to 15 mph",
          "Visit 2-5 million flowers to make 1 pound of honey"
        ]
      },
      {
        name: "Asian Honey Bee",
        scientific: "Apis cerana",
        description: "Native to Asia, smaller than Western honey bees with natural resistance to Varroa mites.",
        habitat: "Tree cavities, traditional hives",
        diet: "Nectar, pollen",
        conservation: "Stable",
        image: asianHoneyBee,
        facts: [
          "Natural resistance to Varroa destructor mites",
          "Can absond from hives when disturbed",
          "Traditional beekeeping species in Asia"
        ]
      },
      {
        name: "Giant Honey Bee",
        scientific: "Apis dorsata",
        description: "The largest honey bee species, building massive single-comb nests in the open.",
        habitat: "High tree branches, cliff faces",
        diet: "Nectar, pollen",
        conservation: "Declining",
        image: giantHoneyBee,
        facts: [
          "Can build combs up to 1 meter in length",
          "Highly defensive with painful stings",
          "Migrate seasonally following flower blooms"
        ]
      }
    ]
  },
  {
    category: "Bumblebees",
    genus: "Bombus",
    description: "Large, fuzzy bees excellent at buzz pollination. They can fly in cooler weather than other bees.",
    species: [
      {
        name: "Buff-Tailed Bumblebee",
        scientific: "Bombus terrestris",
        description: "One of the most common European bumblebees, important for greenhouse pollination.",
        habitat: "Gardens, fields, underground nests",
        diet: "Nectar, pollen",
        conservation: "Stable",
        image: buffTailedBumblebee,
        facts: [
          "Queens hibernate through winter",
          "Excellent pollinators of tomatoes",
          "Can regulate body temperature"
        ]
      },
      {
        name: "Common Eastern Bumblebee",
        scientific: "Bombus impatiens",
        description: "The most common bumblebee in eastern North America, commercially raised for pollination.",
        habitat: "Various habitats, ground nests",
        diet: "Nectar, pollen",
        conservation: "Stable",
        image: commonEasternBumblebee,
        facts: [
          "Used commercially for crop pollination",
          "Active from early spring to fall",
          "Can buzz pollinate crops like blueberries"
        ]
      }
    ]
  },
  {
    category: "Stingless Bees",
    tribe: "Meliponini",
    description: "Tropical social bees without functional stingers, important for rainforest pollination.",
    species: [
      {
        name: "Mayan Stingless Bee",
        scientific: "Melipona beecheii",
        description: "Sacred to the Maya civilization, producing prized medicinal honey.",
        habitat: "Tropical forests, tree cavities",
        diet: "Nectar, pollen",
        conservation: "Vulnerable",
        image: mayanStinglessBee,
        facts: [
          "Produces medicinal honey with antibacterial properties",
          "Sacred to Maya culture for over 2000 years",
          "Cannot sting but can bite"
        ]
      }
    ]
  },
  {
    category: "Carpenter Bees",
    genus: "Xylocopa",
    description: "Large, robust bees that excavate tunnels in wood for nesting. Important pollinators of open-faced flowers.",
    species: [
      {
        name: "Eastern Carpenter Bee",
        scientific: "Xylocopa virginica",
        description: "Large black bees that drill perfectly round holes in wood for nesting.",
        habitat: "Wooden structures, dead wood",
        diet: "Nectar, pollen",
        conservation: "Stable",
        image: easternCarpenterBee,
        facts: [
          "Males are harmless but territorial",
          "Can hover like hummingbirds",
          "Drill perfectly round 16mm holes"
        ]
      },
      {
        name: "Violet Carpenter Bee",
        scientific: "Xylocopa violacea",
        description: "European species with distinctive purple-violet wings and metallic sheen.",
        habitat: "Dead wood, bamboo, wooden structures",
        diet: "Nectar, pollen",
        conservation: "Stable",
        image: violetCarpenterBee,
        facts: [
          "Wings have beautiful purple iridescence",
          "Can reuse nesting tunnels for years",
          "Important pollinators of sage and lavender"
        ]
      }
    ]
  },
  {
    category: "Mining Bees",
    genus: "Andrena",
    description: "Ground-nesting solitary bees that emerge in early spring. Important pollinators of fruit trees.",
    species: [
      {
        name: "Tawny Mining Bee",
        scientific: "Andrena fulva",
        description: "Distinctive orange-brown females that nest in sandy soil.",
        habitat: "Sandy soils, gardens, parks",
        diet: "Nectar, pollen",
        conservation: "Stable",
        image: tawnyMiningBee,
        facts: [
          "Females are bright orange-brown",
          "Males are darker and emerge first",
          "Important early pollinators of fruit trees"
        ]
      }
    ]
  },
  {
    category: "Leafcutter & Mason Bees",
    family: "Megachilidae",
    description: "Solitary bees that use plant materials or mud to construct nests. Highly efficient pollinators.",
    species: [
      {
        name: "Leafcutter Bee",
        scientific: "Megachile rotundata",
        description: "Cut perfect circles from leaves to line their nest cells. More efficient pollinators than honey bees.",
        habitat: "Hollow stems, wood cavities",
        diet: "Nectar, pollen",
        conservation: "Stable",
        image: leafcutterBee,
        facts: [
          "Cut perfect circles from rose leaves",
          "More efficient pollinators than honey bees",
          "Each female works alone"
        ]
      },
      {
        name: "Blue Orchard Mason Bee",
        scientific: "Osmia lignaria",
        description: "Excellent early-season pollinators with metallic blue-black coloration.",
        habitat: "Hollow reeds, drilled wood blocks",
        diet: "Nectar, pollen",
        conservation: "Stable",
        image: blueOrchardMasonBee,
        facts: [
          "One bee does the work of 100 honey bees",
          "Active in early spring",
          "Don't live in colonies"
        ]
      }
    ]
  },
  {
    category: "Sweat Bees",
    family: "Halictidae",
    description: "Small, often metallic bees attracted to human perspiration for its salt content.",
    species: [
      {
        name: "Sweat Bee",
        scientific: "Halictus spp.",
        description: "Small metallic green bees attracted to human sweat and important wildflower pollinators.",
        habitat: "Ground nests, various habitats",
        diet: "Nectar, pollen",
        conservation: "Stable",
        image: sweatBee,
        facts: [
          "Attracted to human sweat for salt",
          "Many species have metallic coloration",
          "Range from solitary to social"
        ]
      }
    ]
  },
  {
    category: "Cuckoo Bees",
    subfamily: "Nomadinae",
    description: "Parasitic bees that lay eggs in other bees' nests, similar to cuckoo birds.",
    species: [
      {
        name: "Cuckoo Bee",
        scientific: "Nomada spp.",
        description: "Wasp-like parasitic bees that don't collect pollen, instead laying eggs in other bees' nests.",
        habitat: "Areas with host bee populations",
        diet: "Nectar (adults), host larvae (young)",
        conservation: "Variable",
        image: cuckooBee,
        facts: [
          "Don't collect pollen or build nests",
          "Wasp-like appearance",
          "Young develop by eating host bee larvae"
        ]
      }
    ]
  },
  {
    category: "Orchid Bees",
    tribe: "Euglossini",
    description: "Brilliantly colored tropical bees that collect orchid fragrances and are crucial rainforest pollinators.",
    species: [
      {
        name: "Orchid Bee",
        scientific: "Euglossa spp.",
        description: "Spectacularly iridescent tropical bees that collect fragrances from orchids.",
        habitat: "Tropical rainforests",
        diet: "Nectar, pollen",
        conservation: "Vulnerable",
        image: orchidBee,
        facts: [
          "Males collect orchid fragrances",
          "Brilliant metallic colors",
          "Long tongues for deep flowers"
        ]
      }
    ]
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

      {/* Comprehensive Bee Species Guide */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-['Playfair_Display']">
            Complete Guide to Bee Species
          </h2>
          
          {beeCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              {/* Category Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-bee mb-2 font-['Playfair_Display']">
                  {category.category}
                </h3>
                <p className="text-muted-foreground text-lg italic mb-2">
                  {category.genus && `Genus: ${category.genus}`}
                  {category.family && `Family: ${category.family}`}
                  {category.tribe && `Tribe: ${category.tribe}`}
                </p>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Species Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.species.map((species, speciesIndex) => (
                  <Card key={speciesIndex} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                    {/* Species Image */}
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={species.image} 
                        alt={species.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">{species.name}</CardTitle>
                          <p className="text-sm text-muted-foreground italic mb-3">
                            {species.scientific}
                          </p>
                          <Badge 
                            variant={
                              species.conservation === "Declining" || species.conservation === "Vulnerable" 
                                ? "destructive" 
                                : "secondary"
                            }
                            className="mb-3"
                          >
                            {species.conservation}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        {species.description}
                      </p>
                      
                      <div className="grid grid-cols-1 gap-3 mb-4 text-sm">
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
                        <strong className="text-foreground text-sm">Fascinating Facts:</strong>
                        <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                          {species.facts.map((fact, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-honey mr-2 text-xs">•</span>
                              <span className="text-xs leading-tight">{fact}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
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