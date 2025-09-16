import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-bee text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="hexagon w-10 h-10 bg-honey flex items-center justify-center">
                <span className="text-bee font-bold text-lg">🐝</span>
              </div>
              <span className="font-bold text-xl font-['Playfair_Display']">
                BuzzWorld
              </span>
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Dedicated to protecting and celebrating the amazing world of bees. 
              Join us in our mission to preserve these essential pollinators for future generations.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Stay Updated</h3>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button variant="secondary" className="bg-honey hover:bg-primary/90 text-bee">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-background/80 hover:text-background transition-colors">About Bees</Link></li>
              <li><Link to="/conservation" className="text-background/80 hover:text-background transition-colors">Conservation</Link></li>
              <li><Link to="/gallery" className="text-background/80 hover:text-background transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="text-background/80 hover:text-background transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-background/80 hover:text-background transition-colors">Contact Us</Link></li>
              <li><Link to="/conservation" className="text-background/80 hover:text-background transition-colors">Donate</Link></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Partner With Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/80 text-sm">
            © 2024 BuzzWorld. Made with <Heart className="w-4 h-4 inline text-honey" /> for bees.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/80 hover:text-background text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/80 hover:text-background text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;