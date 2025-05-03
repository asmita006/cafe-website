import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-medium"
          >
            FIND US
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl md:text-4xl text-gray-900 mt-2"
          >
            Visit Our Café
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-xl h-[400px]"
          >
            {/* Embed a map or image of location */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.405192564141!2d72.66887337428595!3d23.04560197915759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8707f49b9a3f%3A0x39ce1ddef333fe5e!2sIce%20cream%20cafe%20Nikol!5e0!3m2!1sen!2sin!4v1746288390574!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Our Location"
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-white rounded-xl shadow-card"
          >
            <h3 className="font-display font-bold text-2xl text-gray-900 mb-6">Visit Our Sweet Spot</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Address</h4>
                  <p className="text-gray-600"> 10, aaradhana complex, gangotri circle, Nikol<br />Ahmedabad, Gujarat 382350</p>
                </div>
              </div>

             
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Hours</h4>
                  <p className="text-gray-600">Monday - Sunday: 10:00 AM - 12:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Contact</h4>
                  <p className="text-gray-600">Phone: +91 8690474441<br />
                  Email: hello@icecreamcafe.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;