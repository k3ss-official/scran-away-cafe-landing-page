import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";
const menuData = {
  breakfast: [{
    name: "Full Breakfast",
    price: "£6.95",
    description: "2 Bacon, 2 Sausage, Egg, Hash Brown, Beans, Tomato, Mushrooms, Toast"
  }, {
    name: "Large Breakfast",
    price: "£8.95",
    description: "3 Bacon, 3 Sausage, 2 Egg, 2 Hash Brown, Beans, Tomato, Mushrooms, Toast"
  }, {
    name: "Half Breakfast",
    price: "£5.35",
    description: "1 Bacon, 1 Sausage, Egg, Beans, Toast"
  }, {
    name: "Vegetarian Breakfast",
    price: "£6.95",
    description: "2 Veg Sausage, 2 Egg, 2 Hash Brown, Beans, Tomato, Mushrooms, Spinach, Toast"
  }, {
    name: "Bacon Sandwich",
    price: "£3.00",
    description: "Choice of Barm, Toast, Wrap, or GF Bread"
  }, {
    name: "Sausage Sandwich",
    price: "£3.00",
    description: "Choice of Barm, Toast, Wrap, or GF Bread"
  }, {
    name: "Egg Sandwich",
    price: "£2.50",
    description: "Choice of Barm, Toast, Wrap, or GF Bread"
  }, {
    name: "Bacon & Egg",
    price: "£3.50",
    description: "Choice of Barm, Toast, Wrap, or GF Bread"
  }, {
    name: "Bacon, Sausage & Egg",
    price: "£4.00",
    description: "Choice of Barm, Toast, Wrap, or GF Bread"
  }, {
    name: "Scran Away Muffin",
    price: "£3.30-£3.95",
    description: "Muffin with choice of fillings"
  }],
  "cold-sandwiches": [{
    name: "Cheese",
    price: "£5.35",
    description: "Choice of Barm, Wrap, or GF Bread. Includes side salad"
  }, {
    name: "Ham",
    price: "£5.35",
    description: "Choice of Barm, Wrap, or GF Bread. Includes side salad"
  }, {
    name: "Tuna Mayo",
    price: "£5.35",
    description: "Choice of Barm, Wrap, or GF Bread. Includes side salad"
  }, {
    name: "Egg Mayo",
    price: "£5.35",
    description: "Choice of Barm, Wrap, or GF Bread. Includes side salad"
  }, {
    name: "Chicken Tikka",
    price: "£5.95",
    description: "Choice of Barm, Wrap, or GF Bread. Includes side salad"
  }, {
    name: "Shredded Chicken",
    price: "£5.95",
    description: "Choice of Barm, Wrap, or GF Bread. Includes side salad"
  }, {
    name: "Peri Peri",
    price: "£5.95",
    description: "Choice of Barm, Wrap, or GF Bread. Includes side salad"
  }, {
    name: "Chicken & Bacon Mix",
    price: "£5.95",
    description: "Choice of Barm, Wrap, or GF Bread. Includes side salad"
  }, {
    name: "Prawn Marie",
    price: "£6.35",
    description: "Choice of Barm, Wrap, or GF Bread. Includes side salad"
  }],
  "hot-food": [{
    name: "Cheese & Onion Panini",
    price: "£5.25",
    description: "Comes with Side Salad & Scran Away House Slaw"
  }, {
    name: "Tuna Melt Panini",
    price: "£5.75",
    description: "Comes with Side Salad & Scran Away House Slaw"
  }, {
    name: "Ham & Cheese Panini",
    price: "£5.75",
    description: "Comes with Side Salad & Scran Away House Slaw"
  }, {
    name: "BBQ Chicken & Cheese Panini",
    price: "£5.95",
    description: "Comes with Side Salad & Scran Away House Slaw"
  }, {
    name: "Cheese Toastie",
    price: "£4.95",
    description: "Includes Side Salad & Coleslaw"
  }, {
    name: "Ham & Cheese Toastie",
    price: "£5.50",
    description: "Includes Side Salad & Coleslaw"
  }, {
    name: "Jacket Potato - Cheese & Beans",
    price: "£5.25",
    description: "Includes salad, house slaw, & 1 filling"
  }, {
    name: "Jacket Potato - Tuna Mayo",
    price: "£5.35",
    description: "Includes salad, house slaw, & 1 filling"
  }, {
    name: "Meat & Potato Pie",
    price: "£2.10",
    description: "Traditional homemade pie"
  }, {
    name: "Steak Pie",
    price: "£2.20",
    description: "Traditional homemade pie"
  }, {
    name: "Pie & Peas with Gravy",
    price: "£3.50",
    description: "Classic Northern comfort food"
  }],
  drinks: [{
    name: "Tea",
    price: "£1.50",
    description: "Proper brew"
  }, {
    name: "Coffee",
    price: "£2.00",
    description: "Fresh ground coffee"
  }, {
    name: "Latte",
    price: "£2.70",
    description: "Smooth and creamy"
  }, {
    name: "Cappuccino",
    price: "£2.70",
    description: "Rich and frothy"
  }, {
    name: "Espresso",
    price: "£2.00",
    description: "Strong and bold"
  }, {
    name: "Hot Chocolate",
    price: "£2.70",
    description: "Rich and creamy"
  }, {
    name: "Mocha",
    price: "£2.75",
    description: "Coffee and chocolate combined"
  }, {
    name: "Bottled Water",
    price: "£1.00",
    description: "Still water"
  }, {
    name: "Cans",
    price: "£1.00",
    description: "Various soft drinks"
  }, {
    name: "Orange Juice",
    price: "£2.00",
    description: "Fresh orange juice"
  }, {
    name: "Apple Juice",
    price: "£2.00",
    description: "Pure apple juice"
  }, {
    name: "Milkshakes",
    price: "£2.00",
    description: "Various flavours"
  }],
  "sweet-treats": [{
    name: "Brownie",
    price: "£2.75",
    description: "Rich chocolate brownie"
  }, {
    name: "Flapjack",
    price: "£2.75",
    description: "Oaty goodness"
  }, {
    name: "Caramel Shortcake",
    price: "£2.75",
    description: "Sweet and indulgent"
  }, {
    name: "Muffin",
    price: "£2.75",
    description: "Various flavours available"
  }, {
    name: "Ginger Cake",
    price: "£2.75",
    description: "Spiced cake slice"
  }, {
    name: "Cherry Bakewell",
    price: "£2.75",
    description: "Traditional almond tart"
  }, {
    name: "Victoria Sponge",
    price: "£2.75",
    description: "Classic sponge cake"
  }],
  "salads-boxes": [{
    name: "Cheese Salad Box",
    price: "£6.25",
    description: "Lettuce, cucumber, tomato, beetroot, boiled egg, pasta, coleslaw"
  }, {
    name: "Ham Salad Box",
    price: "£6.25",
    description: "Lettuce, cucumber, tomato, beetroot, boiled egg, pasta, coleslaw"
  }, {
    name: "Tuna Salad Box",
    price: "£6.25",
    description: "Lettuce, cucumber, tomato, beetroot, boiled egg, pasta, coleslaw"
  }, {
    name: "Chicken Tikka Salad Box",
    price: "£6.50",
    description: "Lettuce, cucumber, tomato, beetroot, boiled egg, pasta, coleslaw"
  }, {
    name: "Cold Box",
    price: "£4.50",
    description: "Sandwich, crisps, choc biscuit, and drink"
  }, {
    name: "Kids Hot Lunch Box",
    price: "£4.50",
    description: "Choice of Chicken Nuggets or Sausage, plus Chips & Drink"
  }]
};
const categories = [{
  id: "breakfast",
  name: "🍳 Breakfast",
  emoji: "🍳"
}, {
  id: "cold-sandwiches",
  name: "🥪 Cold Sarnies",
  emoji: "🥪"
}, {
  id: "hot-food",
  name: "🍽️ Hot Food",
  emoji: "🍽️"
}, {
  id: "drinks",
  name: "☕ Drinks",
  emoji: "☕"
}, {
  id: "sweet-treats",
  name: "🧁 Sweet Treats",
  emoji: "🧁"
}, {
  id: "salads-boxes",
  name: "🥗 Salads & Boxes",
  emoji: "🥗"
}];
const callCTAs = ["Give us a bell! 📞", "Ring us up! 🔔", "Fancy a chat? Call us! ☎️", "Pick up the phone! 📱", "Drop us a line! 📞"];
export const InteractiveMenu = () => {
  const [activeCategory, setActiveCategory] = useState("breakfast");
  const getRandomCTA = () => callCTAs[Math.floor(Math.random() * callCTAs.length)];
  return <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-primary shadow-cozy">
            Our Menu
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Proper Good Scran
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fresh, tasty food made with love. Click on any category to see what we've got!
          </p>
        </div>
        
        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => <Button key={category.id} variant={activeCategory === category.id ? "default" : "outline"} onClick={() => setActiveCategory(category.id)} className={`px-6 py-3 text-lg font-medium transition-all duration-300 shadow-cozy ${activeCategory === category.id ? "transform scale-105 shadow-warm" : "hover:scale-105"}`}>
              {category.name}
            </Button>)}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuData[activeCategory].map((item, index) => <Card key={index} className="shadow-cozy hover:shadow-warm transition-all duration-300 transform hover:scale-105">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-semibold">{item.name}</CardTitle>
                  <Badge variant="secondary" className="ml-2 text-primary font-bold">
                    {item.price}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">{item.description}</p>
                <Button variant="outline" size="sm" className="w-full group hover:bg-primary hover:text-primary-foreground" onClick={() => window.open('tel:02572976', '_self')}>
                  <Phone className="h-4 w-4 mr-2" />
                  {getRandomCTA()}
                </Button>
              </CardContent>
            </Card>)}
        </div>

        {/* Menu to Phone Feature */}
        <div className="text-center mt-12">
          <Card className="inline-block p-6 shadow-warm">
            <h3 className="text-xl font-semibold mb-3">📱 Get Our Menu on Your Phone!</h3>
            <p className="text-muted-foreground mb-4">(Psst ..QR code coming soon</p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={() => {
              const menuText = Object.entries(menuData).map(([category, items]) => `${categories.find(c => c.id === category)?.name}\n${items.map(item => `${item.name} - ${item.price}`).join('\n')}`).join('\n\n');
              if (navigator.share) {
                navigator.share({
                  title: 'ScranAway.Cafe Menu',
                  text: menuText
                });
              } else {
                navigator.clipboard.writeText(menuText);
                alert('Menu copied to clipboard!');
              }
            }}>
                📤 Share Menu
              </Button>
              <Button variant="default" onClick={() => window.open('sms:?body=Check out ScranAway.Cafe menu at https://scranaway.cafe', '_self')}>
                💬 Text Menu Link
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};