import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Categories from '../components/home/Categories';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Testimonials from '../components/home/Testimonials';
import Promotion from '../components/home/Promotion';
import Location from '../components/home/Location';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Ice Cream Café - Sweet Treats & Delicious Eats';
  }, []);

  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts />
      {/* <Promotion /> */}
      <Testimonials />
      <Location />
    </div>
  );
};

export default HomePage;