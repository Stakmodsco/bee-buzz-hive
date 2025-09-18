import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    id: 1,
    title: "Honeybee on Sunflower",
    category: "Honeybees",
    photographer: "Nature Pro",
    description: "A honeybee collecting nectar from a vibrant sunflower on a sunny summer day."
  },
  {
    id: 2, 
    title: "Bumblebee in Flight",
    category: "Bumblebees",
    photographer: "Wildlife Expert",
    description: "Captured mid-flight, this bumblebee shows the incredible agility of these pollinators."
  },
  {
    id: 3,
    title: "Bee Colony Hexagons",
    category: "Hive Life",
    photographer: "Macro Master",
    description: "The perfect geometric patterns of honeycomb showcasing nature's engineering."
  },
  {
    id: 4,
    title: "Mason Bee Nest",
    category: "Native Bees",
    photographer: "Garden Photographer",
    description: "A mason bee carefully constructing its mud nest in a wooden block."
  },
  {
    id: 5,
    title: "Wildflower Meadow",
    category: "Habitat",
    photographer: "Landscape Lover",
    description: "A diverse wildflower meadow providing essential food sources for various bee species."
  },
  {
    id: 6,
    title: "Bee-friendly Garden",
    category: "Habitat",
    photographer: "Green Thumb",
    description: "A beautifully designed garden space that supports local bee populations year-round."
  }
];

const categories = ["All", "Honeybees", "Bumblebees", "Native Bees", "Hive Life", "Habitat"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <div className="min-h-screen honeycomb-overlay">
      {/* Floating bees */}
      <div className="floating-bee" style={{ top: '15%', left: '85%' }}>🐝</div>
      <div className="floating-bee" style={{ top: '45%', right: '80%' }}>🐝</div>
      <div className="floating-bee" style={{ bottom: '25%', left: '10%' }}>🐝</div>
      
      {/* Hero Section */}
      <section className="bg-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-['Playfair_Display'] text-bee mb-6">
              Bee Photo
              <span className="text-honey block">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore stunning photography capturing the beauty and diversity 
              of bees in their natural habitats.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background sticky top-16 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 
                  "bg-honey hover:bg-primary/90 text-bee" : 
                  "border-honey text-honey hover:bg-honey/10"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <Card key={image.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-square bg-gradient-to-br from-honey/20 to-nature/20 relative overflow-hidden">
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl group-hover:animate-buzz">
                      {image.category === "Honeybees" ? "🐝" : 
                       image.category === "Bumblebees" ? "🐛" :
                       image.category === "Hive Life" ? "⬡" :
                       image.category === "Native Bees" ? "🐝" : "🌻"}
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Image Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Badge variant="secondary" className="mb-2 bg-honey/90 text-bee">
                      {image.category}
                    </Badge>
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90">by {image.photographer}</p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm text-muted-foreground">by {image.photographer}</p>
                    </div>
                    <Badge variant="outline" className="border-honey text-honey">
                      {image.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {image.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No images found</h3>
              <p className="text-muted-foreground">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-['Playfair_Display']">
            Share Your Bee Photos
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have amazing bee photography to share? We'd love to feature your work 
            in our gallery and help spread awareness about these incredible insects.
          </p>
          <Button 
            size="lg" 
            className="bg-honey hover:bg-primary/90 text-bee shadow-honey px-8 py-6 text-lg font-semibold"
          >
            Submit Your Photos
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;