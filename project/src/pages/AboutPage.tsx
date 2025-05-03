import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Coffee, IceCream, Cake, Heart, Award, TrendingUp } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - Ice Cream Café';
  }, []);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="text-primary font-medium">OUR STORY</span>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mt-2 mb-4">
              About Ice Cream Café
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Discover the sweet journey behind our café and what makes our treats so special.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium">THE BEGINNING</span>
              <h2 className="font-display font-bold text-3xl text-gray-900 mt-2 mb-6">
                Our Sweet Journey
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Ice Cream Café started in 2015 with a simple passion: creating the most delicious 
                  treats using the finest ingredients. What began as a small ice cream stand has 
                  grown into a beloved neighborhood café.
                </p>
                <p>
                  Our founder, Emma Johnson, spent years perfecting her craft, studying traditional 
                  ice cream making techniques while adding her own creative twist. Her commitment 
                  to quality and innovation remains at the heart of everything we do.
                </p>
                <p>
                  Today, we're proud to serve a wide variety of handcrafted ice creams, coffee 
                  beverages, sandwiches, and baked goods—all made with the same dedication to 
                  quality that Emma instilled from day one.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/2819088/pexels-photo-2819088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Our café" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <img 
                  src="https://images.pexels.com/photos/1415555/pexels-photo-1415555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Ice cream making" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium">WHAT DRIVES US</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mt-2 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from selecting ingredients to serving our customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-card text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                <Heart size={28} />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on ingredients. From organic dairy to fresh fruits, we source the best to create treats that delight your taste buds.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-card text-center"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mx-auto mb-6">
                <Award size={28} />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 mb-4">Craftsmanship</h3>
              <p className="text-gray-600">
                We believe in the art of handcrafting. Each treat is made with precision, care and a touch of creativity to ensure an exceptional experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-card text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto mb-6">
                <TrendingUp size={28} />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We constantly explore new flavors, combinations and techniques. Our seasonal offerings and special creations showcase our innovative spirit.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Specialties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium">WHAT WE'RE KNOWN FOR</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mt-2 mb-4">
              Our Specialties
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here's what keeps our customers coming back for more.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <IceCream size={32} />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 mb-2 text-center">
                Artisanal Ice Cream
              </h3>
              <p className="text-gray-600 text-center">
                Our homemade ice cream is churned in small batches for the perfect creamy texture and intense flavor.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6">
                <Coffee size={32} />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 mb-2 text-center">
                Specialty Coffee
              </h3>
              <p className="text-gray-600 text-center">
                Our locally-roasted beans and expert baristas create the perfect cup every time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
                <Cake size={32} />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 mb-2 text-center">
                Fresh Baked Goods
              </h3>
              <p className="text-gray-600 text-center">
                Our pastry chef creates delicious treats daily, from cookies to brownies and seasonal specialties.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl mb-6"
          >
            Ready to Experience Our Treats?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/90 max-w-2xl mx-auto mb-8"
          >
            We'd love to welcome you to our café or help you place an order for your next event.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link 
              to="/menu"
              className="px-6 py-3 bg-white text-primary font-medium rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              View Our Menu
            </Link>
            <Link 
              to="/contact"
              className="px-6 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;