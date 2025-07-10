import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { InteractiveMap } from "./InteractiveMap";
const getCurrentStatus = () => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.

  // Closed on Sunday (day 0)
  if (currentDay === 0) {
    return {
      isOpen: false,
      message: "Sorry, we are closed right now but we are back open tomorrow at 8:00 AM"
    };
  }

  // Monday - Saturday: 8 AM to 3 PM
  if (currentHour >= 8 && currentHour < 15) {
    return {
      isOpen: true,
      message: "We are OPEN right now!! (until 3:00 PM)"
    };
  } else {
    const nextOpenTime = currentDay === 6 ? "Monday at 8:00 AM" : "tomorrow at 8:00 AM";
    return {
      isOpen: false,
      message: `Sorry, we are closed right now but we are back open ${nextOpenTime}`
    };
  }
};
const contactInfo = [{
  icon: Phone,
  title: "Order Ahead",
  details: ["📞 0257 2-976", "Skip the queue, we'll have it ready!"],
  cta: true
}, {
  icon: Mail,
  title: "Drop Us a Line",
  details: ["hello@scranaway.cafe", "We love hearing from you!"]
}];
export const Contact = () => {
  const status = getCurrentStatus();
  return <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {status.isOpen ? <>We are <span className="text-success">OPEN</span> right now!!</> : "Come Visit Us Soon!"}
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We can't wait to welcome you to ScranAway.Cafe. Drop by for a coffee or some scran, or give us a call to order ahead!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Interactive Map */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              Find Us
            </h3>
            <InteractiveMap />
            <p className="text-sm text-muted-foreground mt-2">73 Pontin Street, Chorley</p>
          </div>

          {/* Contact Cards */}
          {contactInfo.map((info, index) => <Card key={index} className="text-center shadow-cozy hover:shadow-warm transition-all duration-300">
              <CardHeader className="pb-4">
                <info.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                {info.details.map((detail, detailIndex) => <p key={detailIndex} className="text-muted-foreground text-sm mb-2">
                    {detail}
                  </p>)}
                {info.cta && <Button className="mt-3 shadow-cozy" onClick={() => window.open('tel:02572976', '_self')}>
                    🍴 Call Now!
                  </Button>}
              </CardContent>
            </Card>)}
        </div>
        
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Craving something tasty? 😋</h3>
          <p className="text-muted-foreground mb-6">Fresh ingredients, home cooking, and a proper brew await you at Scran Away Cafe</p>
        </div>
      </div>
    </section>;
};