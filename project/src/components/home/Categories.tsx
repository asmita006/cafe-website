import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IceCream, Coffee, Dessert, Sandwich } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  link: string;
  delay: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, icon, image, link, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-3">
            {icon}
          </div>
          <h3 className="font-display font-bold text-xl">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to={link}
          className="inline-block text-primary font-medium hover:underline"
        >
          Explore {title} →
        </Link>
      </div>
    </motion.div>
  );
};

const Categories: React.FC = () => {
  const categories = [
    {
      title: "Ice Cream",
      description: "Creamy, dreamy scoops in a variety of flavors from classics to exotic combinations.",
      icon: <IceCream size={24} />,
      image: "https://images.pexels.com/photos/1435706/pexels-photo-1435706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/menu?category=ice-cream",
      delay: 0.1
    },
    {
      title: "Coffee",
      description: "Expertly crafted coffee drinks from espresso to frothy lattes and iced specialties.",
      icon: <Coffee size={24} />,
      image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/menu?category=coffee",
      delay: 0.2
    },
    {
      title: "Desserts",
      description: "Indulgent treats including brownies, cakes, and specialty desserts to satisfy any sweet tooth.",
      icon: <Dessert size={24} />,
      image: "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/menu?category=desserts",
      delay: 0.3
    },
    {
      title: "Sandwiches",
      description: "Gourmet sandwiches made with fresh ingredients, perfect for a hearty lunch or snack.",
      icon: <Sandwich size={24} />,
      image: "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/menu?category=sandwiches",
      delay: 0.4
    }
  ];

  return (
    <section className="py-16 bg-background-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-medium"
          >
            OUR SPECIALTIES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl md:text-4xl text-gray-900 mt-2"
          >
            Explore Our Delicious Categories
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;