import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Logo size={60} inverted />
              <span className="font-display font-bold text-xl">Ice Cream Café</span>
            </div>
            <p className="text-gray-300 mb-6">
              Serving delicious ice cream, sandwiches, shakes, coffee, and treats since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-light transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-primary-light transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4">Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock size={16} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Monday - Sunday</p>
                  <p className="text-gray-300">10:00 AM - 12:00 PM</p>
                </div>
              </li>
      
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-300"> 10, aaradhana complex, gangotri circle, Nikol<br />Ahmedabad, Gujarat 382350</p>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <p className="text-gray-300">+91 8690474441</p>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <p className="text-gray-300">hello@icecreamcafe.com</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Ice Cream Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;