import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  image: string;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position, image, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white p-6 rounded-xl shadow-card relative"
    >
      <div className="absolute -top-5 left-6 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white">
        <Quote size={20} />
      </div>
      <p className="text-gray-700 mt-4 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={author}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium text-gray-900">{author}</h4>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "The Triple Chocolate Delight ice cream is to die for! I've never tasted anything so rich and decadent. This is now my go-to spot for dessert.",
      author: "Emma Thompson",
      position: "Ice Cream Enthusiast",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      delay: 0.1
    },
    {
      quote: "Their coffee rivals any specialty coffee shop, and the sandwiches are always fresh and delicious. Perfect spot for lunch meetings or catching up with friends.",
      author: "Michael Rodriguez",
      position: "Regular Customer",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      delay: 0.2
    },
    {
      quote: "The staff is always friendly and the atmosphere is so welcoming. My kids love coming here for the rainbow sprinkle shakes after school!",
      author: "Sarah Johnson",
      position: "Mom of Two",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      delay: 0.3
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
            WHAT PEOPLE SAY
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl md:text-4xl text-gray-900 mt-2"
          >
            Customer Testimonials
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;