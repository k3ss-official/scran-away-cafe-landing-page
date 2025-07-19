import React, { useState } from 'react';
import './InteractiveMenu.css';

interface MenuItem {
  name: string;
  description?: string;
  price: string;
}

interface MenuData {
  [key: string]: MenuItem[];
}

const InteractiveMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');

  const menuData: MenuData = {
    breakfast: [
      { name: "Scran Away Muffin", description: "Egg, bacon, sausage, black pudding, cheese", price: "£3.30" },
      { name: "Breakfast Fry", description: "Egg, bacon, sausage, beans, tomato, hash brown", price: "£5.95" }
    ],
    jackets: [
      { name: "Chilli", price: "£5.50" },
      { name: "Cheese & Beans", price: "£4.50" },
      { name: "Coleslaw", price: "£4.50" },
      { name: "Chicken", price: "£5.50" }
    ],
    paninis: [
      { name: "Cheese", price: "£3.75" },
      { name: "Cheese & Ham", price: "£4.50" },
      { name: "Tuna Mayonnaise", price: "£4.50" }
    ],
    drinks: [
      { name: "Tea", price: "£1.20" },
      { name: "Instant Coffee", price: "£1.20" },
      { name: "Cappuccino", price: "£2.00" },
      { name: "Latte", price: "£2.00" },
      { name: "Hot Chocolate", price: "£2.50" },
      { name: "Bottled Water", price: "£1.00" },
      { name: "Apple Juice", price: "£1.50" },
      { name: "Orange Juice", price: "£1.50" }
    ],
    treats: [
      { name: "Chocolate Flapjack", price: "£1.50" },
      { name: "Caramel Shortcake", price: "£1.50" },
      { name: "Chocolate Brownie", price: "£1.75" },
      { name: "Victoria Sponge", price: "£1.50" },
      { name: "Meat & Potato Pie", price: "£2.70" },
      { name: "Steak Pie", price: "£2.70" }
    ]
  };

  const categories = [
    { key: 'breakfast', label: 'Breakfast' },
    { key: 'jackets', label: 'Jackets' },
    { key: 'paninis', label: 'Paninis' },
    { key: 'drinks', label: 'Drinks' },
    { key: 'treats', label: 'Treats' }
  ];

  return (
    <section className="menu" id="menu">
      <div className="menu-container">
        <h2 className="menu-title">Our Menu</h2>

        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`category-btn ${activeCategory === category.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="menu-items">
          {menuData[activeCategory]?.map((item, index) => (
            <div key={index} className="menu-item">
              <div className="item-info">
                <h3 className="item-name">{item.name}</h3>
                {item.description && (
                  <p className="item-description">{item.description}</p>
                )}
              </div>
              <div className="item-price">{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveMenu;