import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IceCream, Coffee, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:py-32 overflow-hidden bg-hero-pattern">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 mb-10 md:mb-0 md:pr-12"
        >
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900">
            Delicious Treats <span className="text-primary">Every Scoop</span> of the Way
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg">
            Experience handcrafted ice cream, artisanal coffee, gourmet sandwiches and more. Made fresh daily with the finest ingredients.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/menu"
              className="px-6 py-3 bg-primary text-white font-medium rounded-full flex items-center hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl hover:shadow-primary/20"
            >
              <IceCream size={20} className="mr-2" />
              Explore Our Menu
              <ChevronRight size={16} className="ml-1" />
            </Link>
            <Link 
              to="/contact"
              className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-full flex items-center hover:bg-primary/5 transition-colors"
            >
              <Coffee size={20} className="mr-2" />
              Visit Us Today
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 relative"
        >
          <div className="relative ml-auto w-full max-w-lg aspect-square">
            <motion.img 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              src="https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Delicious Ice Cream" 
              className="rounded-full shadow-2xl object-cover w-[90%] h-[90%] absolute top-0 left-0 z-10"
            />
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              className="absolute top-[5%] right-0 w-[70%] h-[70%] rounded-full overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Coffee Cup" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-0 left-[10%] w-[60%] h-[60%] rounded-full overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Brownie Dessert" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;