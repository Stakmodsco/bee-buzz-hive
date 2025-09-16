import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search, Tag } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Secret Life of Urban Bees: How Cities Are Becoming Bee Havens",
    excerpt: "Discover how urban environments are surprisingly becoming sanctuaries for bee populations, and what city dwellers can do to help.",
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Urban Beekeeping",
    tags: ["urban", "habitat", "conservation"],
    featured: true
  },
  {
    id: 2,
    title: "Understanding the Waggle Dance: How Bees Communicate",
    excerpt: "Explore the fascinating world of bee communication and learn how these incredible insects share information about food sources.",
    author: "Prof. Michael Chen",
    date: "2024-01-10",
    readTime: "7 min read", 
    category: "Bee Behavior",
    tags: ["communication", "behavior", "research"],
    featured: false
  },
  {
    id: 3,
    title: "Native Plants for Bee Gardens: A Complete Guide",
    excerpt: "Learn which native plants provide the best nutrition for local bee species and how to create a year-round bee-friendly garden.",
    author: "Emma Rodriguez",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "Gardening",
    tags: ["plants", "gardening", "native species"],
    featured: false
  },
  {
    id: 4,
    title: "Climate Change and Bee Populations: What We Know",
    excerpt: "Examining the latest research on how climate change affects bee populations and migration patterns worldwide.",
    author: "Dr. James Wilson",
    date: "2024-01-05",
    readTime: "8 min read",
    category: "Research",
    tags: ["climate", "research", "conservation"],
    featured: false
  },
  {
    id: 5,
    title: "Starting Your First Bee Hotel: A Beginner's Guide", 
    excerpt: "Step-by-step instructions for building bee hotels to support native solitary bee species in your backyard.",
    author: "Lisa Thompson",
    date: "2024-01-03",
    readTime: "4 min read",
    category: "DIY Projects",
    tags: ["DIY", "native bees", "habitat"],
    featured: false
  },
  {
    id: 6,
    title: "The Economics of Pollination: Bees and Agriculture",
    excerpt: "Understanding the economic impact of bee pollination on global agriculture and food security.",
    author: "Dr. Robert Martinez",
    date: "2024-01-01",
    readTime: "9 min read",
    category: "Agriculture",
    tags: ["agriculture", "economics", "pollination"],
    featured: false
  }
];

const categories = ["All", "Urban Beekeeping", "Bee Behavior", "Gardening", "Research", "DIY Projects", "Agriculture"];
const allTags = ["urban", "habitat", "conservation", "communication", "behavior", "research", "plants", "gardening", "native species", "climate", "DIY", "native bees", "agriculture", "economics", "pollination"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => post.tags.includes(tag));
    
    return matchesCategory && matchesSearch && matchesTags;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-['Playfair_Display'] text-bee mb-6">
              BuzzWorld
              <span className="text-honey block">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Stay updated with the latest research, tips, and stories 
              from the amazing world of bees.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge className="bg-honey text-bee mb-4">Featured Post</Badge>
              <Card className="overflow-hidden shadow-xl">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="aspect-video md:aspect-square bg-gradient-to-br from-honey/30 to-nature/30 flex items-center justify-center">
                      <span className="text-6xl">🏙️</span>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="border-honey text-honey">
                        {featuredPost.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                        <Clock className="w-4 h-4 ml-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-4 font-['Playfair_Display']">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">by {featuredPost.author}</span>
                      <Button className="bg-honey hover:bg-primary/90 text-bee">
                        Read Article
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Search and Filters */}
      <section className="py-8 bg-muted/30 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
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

            {/* Tag Filter */}
            <div>
              <h3 className="text-sm font-semibold mb-3 flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleTag(tag)}
                    className={selectedTags.includes(tag) ? 
                      "bg-nature hover:bg-secondary/90 text-background" : 
                      "border-nature text-nature hover:bg-nature/10"
                    }
                  >
                    #{tag}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(post => !post.featured).map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-honey/20 to-nature/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl group-hover:animate-buzz">
                        {post.category === "Urban Beekeeping" ? "🏙️" :
                         post.category === "Bee Behavior" ? "🐝" :
                         post.category === "Gardening" ? "🌻" :
                         post.category === "Research" ? "🔬" :
                         post.category === "DIY Projects" ? "🔨" : "🚜"}
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="border-honey text-honey">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-honey transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">
                        <div>by {post.author}</div>
                        <div className="flex items-center mt-1">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" className="text-honey hover:text-honey/80">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">No posts found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;