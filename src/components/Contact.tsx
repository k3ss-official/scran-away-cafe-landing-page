import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Find Us",
    details: ["73 Pontin Street", "Your City"]
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: ["Monday - Saturday", "8:00 AM - 3:00 PM", "Sunday: Closed"]
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["0257 2-976", "For reservations & takeaway"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@scranyway.com", "We'd love to hear from you"]
  }
];

export const Contact = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Visit Us Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We can't wait to welcome you to Scrany Way. Drop by for a delicious meal 
            or get in touch to make a reservation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center shadow-soft hover:shadow-warm transition-all duration-300">
              <CardHeader className="pb-4">
                <info.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-muted-foreground text-sm">
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="mr-4">
            Get Directions
          </Button>
          <Button variant="outline" size="lg">
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
};