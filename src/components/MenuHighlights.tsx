import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const menuItems = [
  {
    category: "Breakfast Favorites",
    items: [
      { name: "Scrany Special", description: "Our signature breakfast with eggs, bacon, sausage, and toast", price: "£6.50" },
      { name: "Breakfast Sandwich", description: "Fresh bread with eggs, bacon, and cheese", price: "£4.95" },
      { name: "Full English Breakfast", description: "Traditional full breakfast with all the trimmings", price: "£6.95" }
    ]
  },
  {
    category: "Lunch Delights",
    items: [
      { name: "Fish & Chips", description: "Fresh cod with hand-cut chips and mushy peas", price: "£7.45" },
      { name: "Chicken Caesar Salad", description: "Crisp lettuce, grilled chicken, and Caesar dressing", price: "£6.25" },
      { name: "Beef & Mushroom Pie", description: "Homemade pie with tender beef and vegetables", price: "£6.75" }
    ]
  },
  {
    category: "Sweet Treats",
    items: [
      { name: "Chocolate Brownie", description: "Rich chocolate brownie served warm with cream", price: "£3.95" },
      { name: "Victoria Sponge", description: "Classic sponge cake with jam and cream", price: "£3.50" },
      { name: "Apple Crumble", description: "Traditional apple crumble with custard", price: "£4.25" }
    ]
  }
];

export const MenuHighlights = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-primary">
            Our Menu
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Delicious Food, Made Fresh Daily
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From hearty breakfasts to satisfying lunches and sweet treats, 
            every dish is prepared with love and the finest ingredients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((section, index) => (
            <Card key={index} className="shadow-soft hover:shadow-warm transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-6 text-center">
                  {section.category}
                </h3>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-muted last:border-0 pb-4 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-foreground">{item.name}</h4>
                        <span className="text-primary font-semibold">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};