import { Heart, MapPin, Phone, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Scrany Way</h3>
            <p className="text-primary-foreground/80 mb-4">
              Where every meal is a moment of joy. Fresh, delicious food served with warmth and care.
            </p>
            <div className="flex items-center text-primary-foreground/80">
              <Heart className="h-4 w-4 mr-2" />
              <span>Made with love since day one</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3" />
                <span>73 Pontin Street</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3" />
                <span>0257 2-976</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-3" />
                <span>Mon-Sat: 8am-3pm</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#menu" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Our Menu
              </a>
              <a href="#about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </a>
              <a href="#contact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Book a Table
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Scrany Way Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};