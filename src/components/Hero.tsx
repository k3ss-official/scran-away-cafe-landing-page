import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone } from "lucide-react";
import heroImage from "/lovable-uploads/79bfdbcf-b3ed-4a25-b84d-6dd22d5e1de1.png";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-75 origin-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          ScranAway.Cafe
        </h1>
        <p className="text-xl sm:text-2xl mb-8 animate-slide-up opacity-90 max-w-2xl mx-auto">
          Where every meal is a moment of joy. Fresh, delicious food served with warmth and care.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
          <Button variant="hero" size="lg">
            🍽️ View Our Menu
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.open('tel:02572976', '_self')}>
            📞 Order Ahead
          </Button>
        </div>
        
        {/* Quick Info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm sm:text-base animate-fade-in">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span>73 Pontin Street</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>Mon-Sat 8am-3pm</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <span>0257 2-976</span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
};