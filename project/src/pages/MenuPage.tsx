import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import MenuSection from '../components/menu/MenuSection';
import { menuData } from '../data/menuData';

const MenuPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'ice-cream', name: 'Ice Cream' },
    { id: 'shakes', name: 'Shakes & Smoothies' },
    { id: 'coffee', name: 'Coffee & Beverages' },
    { id: 'sandwiches', name: 'Sandwiches' },
    { id: 'desserts', name: 'Desserts & Bakery' }
  ];

  useEffect(() => {
    document.title = 'Menu - Ice Cream Café';
    const category = searchParams.get('category');
    if (category && categories.some(c => c.id === category)) {
      setActiveCategory(category);
    }
  }, [searchParams]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (categoryId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredSections = activeCategory === 'all'
    ? menuData
    : menuData.filter(section => section.category === activeCategory);

  return (
    <div className="pt-24 pb-16">
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium">DELICIOUS OFFERINGS</span>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mt-2 mb-4">
              Our Menu
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Explore our wide variety of hand-crafted treats made with premium ingredients. 
              From creamy ice cream to gourmet sandwiches, we have something for everyone.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {filteredSections.map((section) => (
          <MenuSection
            key={section.id}
            title={section.title}
            description={section.description}
            items={section.items}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;