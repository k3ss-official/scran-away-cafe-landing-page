import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";

export const InteractiveMap = () => {
  const [showDirections, setShowDirections] = useState(false);

  const handleGetDirections = () => {
    const address = "73 Pontin Street, Chorley";
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="relative">
      <Card className="overflow-hidden shadow-warm hover:shadow-lg transition-all duration-300">
        <CardContent className="p-0 relative">
          {/* Simple Map Visual */}
          <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 relative overflow-hidden">
            {/* Map styling */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 w-16 h-16 bg-green-300 rounded-full"></div>
              <div className="absolute top-8 right-8 w-12 h-12 bg-green-400 rounded-lg"></div>
              <div className="absolute bottom-6 left-8 w-20 h-8 bg-green-300 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-8 h-16 bg-green-400 rounded-lg"></div>
            </div>
            
            {/* Location Pin */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <MapPin className="h-8 w-8 text-primary drop-shadow-lg" />
                <div className="absolute -top-2 -right-2">
                  <div className="w-4 h-4 bg-primary rounded-full animate-ping"></div>
                </div>
              </div>
            </div>

            {/* Yoo Hoo Bubble */}
            <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
              <div 
                className="bg-white rounded-full px-4 py-2 shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300 animate-bounce"
                onClick={() => setShowDirections(!showDirections)}
              >
                <span className="text-sm font-bold text-primary">Yoo Hoo! 👋</span>
              </div>
            </div>

            {/* Street Names */}
            <div className="absolute bottom-2 left-2 text-xs text-green-700 font-medium">
              Pontin Street
            </div>
            <div className="absolute top-2 right-2 text-xs text-green-700 font-medium">
              Chorley Town Centre
            </div>
          </div>

          {/* Directions Popup */}
          {showDirections && (
            <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in">
              <div className="text-center">
                <h3 className="text-xl font-bold text-primary mb-4">Let's get you to us! 🎯</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Destination:</strong> 73 Pontin Street, Chorley
                </p>
                <div className="space-y-3">
                  <Button 
                    onClick={handleGetDirections}
                    className="w-full shadow-cozy"
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Open in Google Maps
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowDirections(false)}
                    className="w-full"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};