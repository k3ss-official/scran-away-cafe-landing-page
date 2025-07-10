import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";

const menuData = {
  breakfast: [
    { name: "Full English Breakfast", price: "£8.50", description: "Two eggs, bacon, sausage, black pudding, beans, mushrooms, grilled tomato, toast" },
    { name: "Breakfast Sandwich", price: "£4.50", description: "Bacon or sausage with egg in fresh bread" },
    { name: "Vegetarian Breakfast", price: "£7.50", description: "Two eggs, vegetarian sausage, beans, mushrooms, grilled tomato, toast" },
  ],
  "cold-sandwiches": [
    { name: "Ham Salad", price: "£4.50", description: "Fresh ham with crisp salad" },
    { name: "Cheese Salad", price: "£4.00", description: "Mature cheddar with fresh salad" },
    { name: "Tuna Mayo", price: "£4.50", description: "Chunky tuna with mayonnaise" },
    { name: "Chicken Salad", price: "£5.00", description: "Tender chicken breast with salad" },
  ],
  "hot-lunch": [
    { name: "Fish & Chips", price: "£8.50", description: "Fresh cod in crispy batter with hand-cut chips" },
    { name: "Garlic & Herb Chicken", price: "£7.50", description: "Succulent chicken breast with garlic and herbs" },
    { name: "Cheese & Onion Toastie", price: "£4.50", description: "Melted cheese with caramelized onions" },
    { name: "Ham & Cheese Toastie", price: "£5.00", description: "Premium ham with melted cheese" },
  ],
  drinks: [
    { name: "Tea", price: "£2.00", description: "Proper brew, just how you like it" },
    { name: "Coffee", price: "£2.50", description: "Freshly ground, smooth and rich" },
    { name: "Hot Chocolate", price: "£3.00", description: "Creamy and indulgent" },
    { name: "Cold Drinks", price: "£1.50", description: "Various soft drinks available" },
  ],
  "sweet-treats": [
    { name: "Homemade Cake", price: "£3.50", description: "Daily selection of fresh cakes" },
    { name: "Scones", price: "£2.50", description: "With jam and cream" },
    { name: "Biscuits", price: "£1.50", description: "Fresh baked daily" },
  ]
};

const categories = [
  { id: "breakfast", name: "🍳 Breakfast", emoji: "🍳" },
  { id: "cold-sandwiches", name: "🥪 Cold Sarnies", emoji: "🥪" },
  { id: "hot-lunch", name: "🍽️ Hot Lunch", emoji: "🍽️" },
  { id: "drinks", name: "☕ Drinks", emoji: "☕" },
  { id: "sweet-treats", name: "🧁 Sweet Treats", emoji: "🧁" },
];

const callCTAs = [
  "Give us a bell! 📞",
  "Ring us up! 🔔",
  "Fancy a chat? Call us! ☎️",
  "Pick up the phone! 📱",
  "Drop us a line! 📞",
];

export const InteractiveMenu = () => {
  const [activeCategory, setActiveCategory] = useState("breakfast");
  
  const getRandomCTA = () => callCTAs[Math.floor(Math.random() * callCTAs.length)];

  return (
    <section className="py-16 sm:py-24 bg-background">
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
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 text-lg font-medium transition-all duration-300 shadow-cozy ${
                activeCategory === category.id 
                  ? "transform scale-105 shadow-warm" 
                  : "hover:scale-105"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuData[activeCategory].map((item, index) => (
            <Card key={index} className="shadow-cozy hover:shadow-warm transition-all duration-300 transform hover:scale-105">
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
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('tel:02572976', '_self')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  {getRandomCTA()}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Menu to Phone Feature */}
        <div className="text-center mt-12">
          <Card className="inline-block p-6 shadow-warm">
            <h3 className="text-xl font-semibold mb-3">📱 Get Our Menu on Your Phone!</h3>
            <p className="text-muted-foreground mb-4">Scan this QR code or text yourself our menu</p>
            <div className="flex gap-4 justify-center">
              <Button 
                variant="outline" 
                onClick={() => {
                  const menuText = Object.entries(menuData).map(([category, items]) => 
                    `${categories.find(c => c.id === category)?.name}\n${items.map(item => `${item.name} - ${item.price}`).join('\n')}`
                  ).join('\n\n');
                  
                  if (navigator.share) {
                    navigator.share({
                      title: 'ScranAway.Cafe Menu',
                      text: menuText,
                    });
                  } else {
                    navigator.clipboard.writeText(menuText);
                    alert('Menu copied to clipboard!');
                  }
                }}
              >
                📤 Share Menu
              </Button>
              <Button 
                variant="default"
                onClick={() => window.open('sms:?body=Check out ScranAway.Cafe menu at https://scranaway.cafe', '_self')}
              >
                💬 Text Menu Link
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};