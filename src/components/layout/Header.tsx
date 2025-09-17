import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const scrollToNewsletter = () => {
  const newsletterSection = document.querySelector('#newsletter-section');
  if (newsletterSection) {
    newsletterSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    // If not on home page, navigate to home and then scroll
    window.location.href = '/#newsletter-section';
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Bees", href: "/about" },
    { name: "Conservation", href: "/conservation" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="hexagon w-10 h-10 bg-honey flex items-center justify-center">
              <span className="text-bee font-bold text-lg">🐝</span>
            </div>
            <span className="font-bold text-xl text-bee font-['Playfair_Display']">
              BuzzWorld
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-honey transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="glow" 
              onClick={scrollToNewsletter}
              className="transform hover:scale-110 transition-all duration-300"
            >
              Newsletter
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-honey transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                variant="glow" 
                onClick={scrollToNewsletter}
                className="w-fit mt-4 transform hover:scale-110 transition-all duration-300"
              >
                Newsletter
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;