import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { MenuItemType } from '../../types';

interface MenuItemProps {
  item: MenuItemType;
  delay: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
    >
      {item.image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-display font-bold text-lg text-gray-900">{item.name}</h3>
          <span className="font-display font-bold text-primary">${item.price.toFixed(2)}</span>
        </div>
        
        {item.popular && (
          <div className="mb-2">
            <span className="bg-accent/10 text-accent text-xs font-medium px-2 py-1 rounded-full">
              Popular Choice
            </span>
          </div>
        )}
        
        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
        
        {item.rating && (
          <div className="flex items-center mt-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={i < item.rating ? 'text-accent' : 'text-gray-300'}
                  fill={i < item.rating ? 'currentColor' : 'none'}
                />
              ))}
            </div>
            {item.reviews && (
              <span className="text-xs text-gray-500 ml-1">({item.reviews})</span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MenuItem;