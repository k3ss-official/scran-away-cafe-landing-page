import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";
const menuData = {
  breakfast: [{
    name: "Scran Away Muffin",
    price: "£4.95",
    description: "Our signature breakfast muffin"
  }, {
    name: "Egg & Cheese",
    price: "£3.00",
    description: "Simple but delicious"
  }, {
    name: "Egg, Hash Brown & Beans",
    price: "£4.95",
    description: "Perfect breakfast combo"
  }, {
    name: "Big Breakfast",
    price: "£6.95",
    description: "Everything you need to start the day"
  }, {
    name: "Egg, Sausage & Hash Brown",
    price: "£5.25",
    description: "Classic breakfast combination"
  }, {
    name: "Beans, Sausage, Egg",
    price: "£4.95",
    description: "Hearty morning meal"
  }, {
    name: "Brown Sauce & Fried Egg",
    price: "£3.25",
    description: "Simple but tasty"
  }, {
    name: "Egg, Hash Brown & Mushrooms",
    price: "£4.75",
    description: "Vegetarian friendly option"
  }],
  "cold-sandwiches": [{
    name: "Ham & Salad",
    price: "£4.75",
    description: "Fresh ham with crisp salad"
  }, {
    name: "Egg & Cress",
    price: "£3.75",
    description: "Classic egg mayonnaise with fresh cress"
  }, {
    name: "Cheese & Onion",
    price: "£3.75",
    description: "Mature cheddar with onion"
  }, {
    name: "Tuna & Sweetcorn",
    price: "£4.50",
    description: "Chunky tuna with sweetcorn"
  }, {
    name: "Chicken & Salad",
    price: "£4.95",
    description: "Tender chicken with fresh salad"
  }, {
    name: "BLT",
    price: "£4.75",
    description: "Bacon, lettuce and tomato"
  }, {
    name: "Sausage Roll",
    price: "£3.75",
    description: "Homemade sausage roll"
  }, {
    name: "Hot Roll",
    price: "£3.00",
    description: "Fresh baked roll"
  }],
  "hot-lunch": [{
    name: "Kids Beans",
    price: "£1.50",
    description: "Perfect portion for little ones"
  }, {
    name: "Kid Bites",
    price: "£4.50",
    description: "Child-friendly meal"
  }, {
    name: "Toasties",
    price: "£4.25",
    description: "Grilled cheese & onion or cheese & tomato"
  }, {
    name: "Cheese Toastie",
    price: "£4.25",
    description: "Classic melted cheese toastie"
  }, {
    name: "Cold Sandwiches",
    price: "£4.50",
    description: "Selection of fresh cold sandwiches"
  }, {
    name: "Paninis",
    price: "£5.25",
    description: "Hot pressed Italian sandwich"
  }, {
    name: "Jacket Potato",
    price: "£5.95",
    description: "Fluffy baked potato with choice of filling"
  }, {
    name: "Beans on Toast",
    price: "£4.25",
    description: "Classic comfort food"
  }, {
    name: "Cheese on Toast",
    price: "£4.25",
    description: "Melted cheese on toasted bread"
  }, {
    name: "Scrambled Egg on Toast",
    price: "£4.25",
    description: "Creamy scrambled eggs"
  }],
  drinks: [{
    name: "Tea",
    price: "£2.70",
    description: "Proper brew"
  }, {
    name: "Latte",
    price: "£2.75",
    description: "Smooth and creamy"
  }, {
    name: "Cappuccino",
    price: "£2.75",
    description: "Rich and frothy"
  }, {
    name: "Espresso",
    price: "£2.00",
    description: "Strong and bold"
  }, {
    name: "Latte",
    price: "£2.75",
    description: "Coffee with steamed milk"
  }, {
    name: "Chai Latte",
    price: "£3.00",
    description: "Spiced tea latte"
  }, {
    name: "Hot Chocolate",
    price: "£3.00",
    description: "Rich and creamy"
  }, {
    name: "Decaf Coffee",
    price: "£2.50",
    description: "All the taste, none of the caffeine"
  }, {
    name: "Mocha",
    price: "£3.25",
    description: "Coffee and chocolate combined"
  }, {
    name: "Tea",
    price: "£2.70",
    description: "Traditional British tea"
  }, {
    name: "Americano",
    price: "£2.50",
    description: "Black coffee with hot water"
  }, {
    name: "Orange Juice",
    price: "£1.50",
    description: "Fresh orange juice"
  }, {
    name: "Apple Juice",
    price: "£1.50",
    description: "Pure apple juice"
  }, {
    name: "Ribena",
    price: "£1.50",
    description: "Blackcurrant drink"
  }, {
    name: "Water",
    price: "£1.00",
    description: "Still or sparkling"
  }],
  "sweet-treats": [{
    name: "Cake",
    price: "£2.75",
    description: "Daily selection of homemade cakes"
  }, {
    name: "Chocolate Chip Cookies",
    price: "£2.50",
    description: "Fresh baked cookies"
  }, {
    name: "Scones",
    price: "£2.50",
    description: "With jam and cream"
  }, {
    name: "Muffins",
    price: "£2.75",
    description: "Various flavours available"
  }, {
    name: "Brownie",
    price: "£2.95",
    description: "Rich chocolate brownie"
  }, {
    name: "Flapjack",
    price: "£2.50",
    description: "Oaty goodness"
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
  id: "hot-lunch",
  name: "🍽️ Hot Lunch",
  emoji: "🍽️"
}, {
  id: "drinks",
  name: "☕ Drinks",
  emoji: "☕"
}, {
  id: "sweet-treats",
  name: "🧁 Sweet Treats",
  emoji: "🧁"
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