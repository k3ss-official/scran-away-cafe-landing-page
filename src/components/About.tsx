import { Badge } from "@/components/ui/badge";
import { Heart, Users, Award, Coffee } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dish is prepared with care and passion for great food"
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "A welcoming space for families, couples, and solo diners"
  },
  {
    icon: Award,
    title: "Quality Ingredients",
    description: "We source the finest local ingredients for our dishes"
  },
  {
    icon: Coffee,
    title: "Perfect Coffee",
    description: "Expertly brewed coffee to complement your meal"
  }
];

export const About = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-4 text-primary">
              About Us
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              A Cozy Corner of Comfort
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Scrany Way, we believe that great food brings people together. 
              Our charming cafe has been serving the community with delicious, 
              freshly prepared meals in a warm and welcoming atmosphere.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From our signature breakfast dishes to hearty lunches and sweet treats, 
              everything is made with the finest ingredients and a generous helping of love. 
              Come join us for a meal and become part of our extended family.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-lg shadow-soft hover:shadow-warm transition-all duration-300">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};