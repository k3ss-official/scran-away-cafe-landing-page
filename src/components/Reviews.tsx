import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah Mitchell",
    rating: 5,
    text: "Absolutely fantastic! The full English breakfast was cooked to perfection and the coffee was divine. The staff are so friendly and welcoming. This has become our regular weekend spot!",
    date: "2 weeks ago",
    verified: true
  },
  {
    name: "James Thompson",
    rating: 5,
    text: "Best fish and chips in town! The batter is crispy and light, and the chips are proper hand-cut ones. The portions are generous and the prices are very reasonable. Highly recommend!",
    date: "1 month ago",
    verified: true
  },
  {
    name: "Emma Davis",
    rating: 5,
    text: "Such a cozy little place! I love the breakfast sandwiches here - always fresh and tasty. The atmosphere is perfect for catching up with friends or having a quiet coffee break.",
    date: "3 weeks ago",
    verified: true
  },
  {
    name: "Michael Brown",
    rating: 5,
    text: "The garlic and herb chicken is incredible! You can tell everything is made fresh to order. The staff remember your name and your usual order - it feels like a home away from home.",
    date: "1 week ago",
    verified: true
  },
  {
    name: "Lisa Parker",
    rating: 5,
    text: "Perfect spot for lunch! The toasties are amazing and the homemade chips are to die for. Clean, friendly, and great value for money. My colleagues and I come here regularly.",
    date: "2 weeks ago",
    verified: true
  },
  {
    name: "David Wilson",
    rating: 5,
    text: "Outstanding breakfast! The black pudding and sausages are top quality. This place has that authentic British cafe feel that's hard to find these days. Will definitely be back!",
    date: "1 month ago",
    verified: true
  },
  {
    name: "Rachel Green",
    rating: 5,
    text: "Love bringing my kids here! The children's portions are perfect and the staff are so patient with little ones. The hot chocolate is a real treat. Family-friendly and delicious!",
    date: "2 weeks ago",
    verified: true
  },
  {
    name: "Tom Anderson",
    rating: 5,
    text: "Great coffee and even better food! The tuna mayo sandwich was fresh and tasty. The prices are very fair and the service is quick. Perfect for a working lunch.",
    date: "5 days ago",
    verified: true
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
        />
      ))}
    </div>
  );
};

export const Reviews = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-primary">
            Customer Reviews
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from the people who make Scrany Way special
          </p>
        </div>

        {/* Overall Rating */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-4 bg-card p-6 rounded-lg shadow-soft">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5.0</div>
              <StarRating rating={5} />
              <p className="text-sm text-muted-foreground mt-2">Based on 120+ reviews</p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="shadow-soft hover:shadow-warm transition-all duration-300 transform hover:scale-105 relative">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={review.rating} />
                  {review.verified && (
                    <Badge variant="secondary" className="text-xs">
                      Verified
                    </Badge>
                  )}
                </div>
                
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  "{review.text}"
                </p>
                
                <div className="border-t border-muted pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{review.name}</h4>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to share your experience? We'd love to hear from you!
          </p>
          <div className="text-sm text-muted-foreground">
            Find us on Google Reviews • TripAdvisor • Facebook
          </div>
        </div>
      </div>
    </section>
  );
};