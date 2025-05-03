import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  isBestseller?: boolean;
  isNew?: boolean;
  delay: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  name, 
  description, 
  price, 
  image, 
  rating, 
  isBestseller, 
  isNew,
  delay 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {(isBestseller || isNew) && (
          <div className={`absolute top-3 right-3 py-1 px-3 rounded-full text-xs font-medium ${
            isBestseller ? 'bg-accent text-gray-800' : 'bg-secondary text-white'
          }`}>
            {isBestseller ? 'Bestseller' : 'New'}
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display font-bold text-lg text-gray-900">{name}</h3>
          <span className="font-display font-bold text-primary">{price}</span>
        </div>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex items-center">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < rating ? 'text-accent' : 'text-gray-300'}
                fill={i < rating ? 'currentColor' : 'none'}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({Math.floor(Math.random() * 100) + 20} reviews)</span>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedProducts: React.FC = () => {
  const products = [
    {
      name: "Triple Chocolate Delight",
      description: "Rich chocolate ice cream with brownie chunks and fudge swirl",
      price: "$5.99",
      image: "https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      isBestseller: true,
      delay: 0.1
    },
    {
      name: "Caramel Macchiato",
      description: "Espresso with steamed milk and caramel drizzle",
      price: "$4.50",
      image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4,
      delay: 0.2
    },
    {
      name: "Rainbow Sprinkle Shake",
      description: "Vanilla shake blended with rainbow sprinkles and whipped cream",
      price: "$6.99",
      image: "https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      isNew: true,
      delay: 0.3
    },
    {
      name: "Classic Club Sandwich",
      description: "Triple-decker sandwich with turkey, bacon, lettuce, and tomato",
      price: "$8.99",
      image: "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4,
      delay: 0.4
    },
    {
      name: "Fudge Brownie Sundae",
      description: "Warm brownie topped with vanilla ice cream and hot fudge",
      price: "$7.50",
      image: "https://images.pexels.com/photos/3018814/pexels-photo-3018814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      isBestseller: true,
      delay: 0.5
    },
    {
      name: "Strawberry Cheesecake",
      description: "Creamy cheesecake with fresh strawberry topping",
      price: "$6.50",
      image: "https://images.pexels.com/photos/4040693/pexels-photo-4040693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4,
      delay: 0.6
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-medium"
          >
            CUSTOMER FAVORITES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl md:text-4xl text-gray-900 mt-2"
          >
            Our Most Popular Items
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;