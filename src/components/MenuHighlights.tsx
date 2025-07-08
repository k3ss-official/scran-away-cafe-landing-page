import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const menuItems = [
  {
    category: "Breakfast",
    items: [
      { name: "Breakfast Sandwiches", description: "Fresh bread with your choice of filling", price: "£6.95" },
      { name: "Veggie Breakfast", description: "Vegetarian full breakfast with all the trimmings", price: "£6.95" },
      { name: "Hash Browns (Red, Chili & Cheese)", description: "Crispy hash browns with a spicy kick", price: "£6.95" },
      { name: "Hash Browns (Cheese)", description: "Golden hash browns loaded with melted cheese", price: "£6.95" },
      { name: "Eggs & Cheese", description: "Fresh eggs cooked to perfection with cheese", price: "£3.90" },
      { name: "Egg & Cheese Sandwich", description: "Toasted sandwich with eggs and cheese", price: "£3.90" },
      { name: "Eggs, Sausage & Cheese", description: "Hearty breakfast with eggs, sausage and cheese", price: "£4.20" },
      { name: "Beans, Sausage, Egg", description: "Classic combination with baked beans", price: "£4.20" },
      { name: "Bacon, Sausage", description: "Premium bacon and sausage selection", price: "£3.60" },
      { name: "Beans, Sausage, Egg, Bacon & Chips", description: "The ultimate breakfast feast", price: "£7.00" },
      { name: "Black Pudding, Fried Egg, Beans & Sausage", description: "Traditional hearty breakfast", price: "£6.20" },
      { name: "Fried Omelette (Mushroom)", description: "Fluffy omelette with fresh mushrooms", price: "£11.25" }
    ]
  },
  {
    category: "Cold Sandwiches",
    items: [
      { name: "Cheese & Salad", description: "Fresh cheese with crisp salad", price: "£4.50" },
      { name: "Ham", description: "Premium sliced ham sandwich", price: "£4.90" },
      { name: "Tuna Mayo", description: "Dolphin-friendly tuna with mayo", price: "£4.90" },
      { name: "Sausage Roll", description: "Homemade sausage roll, served warm", price: "£3.60" },
      { name: "Pasty", description: "Traditional Cornish-style pasty", price: "£4.50" },
      { name: "Fish Sandwich", description: "Fresh fish fillet with salad", price: "£6.95" },
      { name: "Chicken & Bacon Mix", description: "Grilled chicken with crispy bacon", price: "£6.95" },
      { name: "Sandwich & Bacon Mix", description: "House special sandwich combination", price: "£6.95" }
    ]
  },
  {
    category: "Hot Lunch & Kids",
    items: [
      { name: "Toasties", description: "Grilled sandwiches with various fillings", price: "£4.95" },
      { name: "Garlic & Herb Chicken", description: "Tender chicken with garlic and herbs", price: "£12.50" },
      { name: "Cheese & Onion Slice", description: "Savory slice with cheese and onion", price: "£3.85" },
      { name: "Chicken Tikka", description: "Spiced chicken tikka with rice", price: "£9.50" },
      { name: "Fish & Chips", description: "Beer-battered fish with hand-cut chips", price: "£6.75" },
      { name: "Sausage & Chips", description: "Premium sausages with chips", price: "£5.75" },
      { name: "Fish Cakes", description: "Homemade fish cakes with salad", price: "£5.95" },
      { name: "Fish & Chip Sandwich", description: "Our famous fish and chips in a sandwich", price: "£4.75" },
      { name: "Kid's Sausage", description: "Child-sized portion with sausage", price: "£4.50" },
      { name: "Kid's Fish Fingers", description: "Golden fish fingers for little ones", price: "£4.50" }
    ]
  },
  {
    category: "Hot Drinks",
    items: [
      { name: "Tea", description: "Traditional English breakfast tea", price: "£2.70" },
      { name: "Coffee", description: "Freshly brewed filter coffee", price: "£2.70" },
      { name: "Latte", description: "Smooth espresso with steamed milk", price: "£3.00" },
      { name: "Cappuccino", description: "Rich espresso with frothy milk", price: "£3.00" },
      { name: "Espresso", description: "Strong double shot espresso", price: "£2.70" },
      { name: "Decaf Coffee", description: "Decaffeinated filter coffee", price: "£2.75" },
      { name: "Hot Chocolate", description: "Rich chocolate drink with whipped cream", price: "£3.00" },
      { name: "Extra Shot", description: "Add an extra shot to any coffee", price: "£1.00" }
    ]
  },
  {
    category: "Cold Drinks",
    items: [
      { name: "Coca Cola", description: "Classic Coca-Cola", price: "£1.50" },
      { name: "Tango", description: "Orange flavored fizzy drink", price: "£1.50" },
      { name: "Chicken & Vegetable Soup", description: "Homemade soup with crusty bread", price: "£4.20" },
      { name: "Orange Juice", description: "Fresh squeezed orange juice", price: "£2.00" },
      { name: "Bottled Water", description: "Still or sparkling water", price: "£1.30" },
      { name: "Fruit Shoot", description: "Kids' fruit drink", price: "£1.50" },
      { name: "Various Soft Drinks", description: "Selection of canned drinks", price: "£1.50" }
    ]
  },
  {
    category: "Sweet Treats & Extras",
    items: [
      { name: "Homemade Chips", description: "Hand-cut chips cooked fresh", price: "£2.95" },
      { name: "Jacket Potato", description: "Fluffy baked potato with butter", price: "£3.65" },
      { name: "Scrambled Chips", description: "Chips with scrambled egg topping", price: "£2.00" },
      { name: "Extra Portion of Fruit", description: "Fresh seasonal fruit selection", price: "£1.00" },
      { name: "Extra Portion of Salad", description: "Mixed fresh salad", price: "£1.00" }
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
        
        <div className="grid lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {menuItems.map((section, index) => (
            <Card key={index} className="shadow-soft hover:shadow-warm transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-6 text-center border-b border-muted pb-3">
                  {section.category}
                </h3>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-muted/50 last:border-0 pb-3 last:pb-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium text-foreground text-sm leading-tight">{item.name}</h4>
                        <span className="text-primary font-semibold text-sm ml-2 flex-shrink-0">{item.price}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
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