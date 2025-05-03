import React from 'react';
import { motion } from 'framer-motion';
import MenuItem from './MenuItem';
import { MenuItemType } from '../../types';

interface MenuSectionProps {
  title: string;
  description: string;
  items: MenuItemType[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, description, items }) => {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="font-display font-bold text-3xl text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 max-w-2xl">{description}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <MenuItem 
            key={item.id} 
            item={item} 
            delay={index * 0.1} 
          />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;