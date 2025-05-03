import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Promotion: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-medium">LIMITED TIME OFFER</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2 mb-4">
              Buy One Shake, Get One Free!
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Come in with a friend and enjoy our famous milkshakes together. Valid on all flavors, every weekend this summer.
            </p>
            <Link 
              to="/menu"
              className="px-8 py-3 bg-accent text-gray-900 font-medium rounded-full inline-block hover:bg-accent-light transition-colors shadow-lg"
            >
              View Our Shake Menu
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-dashed border-white/30"
              ></motion.div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white rounded-full w-56 h-56 md:w-72 md:h-72 flex items-center justify-center shadow-2xl">
                  <div className="text-center p-6">
                    <h3 className="font-display font-bold text-primary text-5xl mb-2">2 FOR 1</h3>
                    <p className="text-gray-800 font-medium mb-2">WEEKEND SPECIAL</p>
                    <p className="text-sm text-gray-600">Valid Sat-Sun Only</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;