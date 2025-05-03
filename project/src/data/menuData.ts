import { MenuSectionType } from '../types';

export const menuData: MenuSectionType[] = [
  {
    id: 'ice-cream',
    category: 'ice-cream',
    title: 'Ice Cream',
    description: 'Our signature ice creams are made in house with premium ingredients. Choose from classic favorites and unique flavors.',
    items: [
      {
        id: 'ic1',
        name: 'Triple Chocolate Delight',
        description: 'Rich chocolate ice cream with brownie chunks and fudge swirl',
        price: 5.99,
        image: 'https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        popular: true,
        rating: 5,
        reviews: 124
      },
      {
        id: 'ic2',
        name: 'Strawberry Cheesecake',
        description: 'Creamy cheesecake ice cream with strawberry swirls and graham cracker pieces',
        price: 5.99,
        image: 'https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        reviews: 89
      },
      {
        id: 'ic3',
        name: 'Mint Chocolate Chip',
        description: 'Refreshing mint ice cream loaded with chocolate chips',
        price: 5.49,
        image: 'https://images.pexels.com/photos/1332267/pexels-photo-1332267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        reviews: 76
      },
      {
        id: 'ic4',
        name: 'Salted Caramel',
        description: 'Sweet and salty caramel ice cream with caramel swirls',
        price: 5.99,
        image: 'https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        popular: true,
        rating: 5,
        reviews: 112
      },
      {
        id: 'ic5',
        name: 'Vanilla Bean',
        description: 'Classic vanilla ice cream made with real vanilla beans',
        price: 4.99,
        image: 'https://images.pexels.com/photos/3763678/pexels-photo-3763678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        reviews: 93
      },
      {
        id: 'ic6',
        name: 'Cookie Dough',
        description: 'Vanilla ice cream packed with chunks of chocolate chip cookie dough',
        price: 5.99,
        image: 'https://images.pexels.com/photos/1125850/pexels-photo-1125850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        reviews: 85
      }
    ]
  },
  {
    id: 'shakes',
    category: 'shakes',
    title: 'Shakes & Smoothies',
    description: 'Cool down with our creamy milkshakes and refreshing fruit smoothies, each one handcrafted to perfection.',
    items: [
      {
        id: 'sh1',
        name: 'Classic Vanilla Shake',
        description: 'Creamy vanilla ice cream blended to perfection',
        price: 6.49,
        image: 'https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        reviews: 67
      },
      {
        id: 'sh2',
        name: 'Chocolate Brownie Shake',
        description: 'Chocolate ice cream blended with brownie chunks and chocolate sauce',
        price: 6.99,
        image: 'https://images.pexels.com/photos/8845713/pexels-photo-8845713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        popular: true,
        rating: 5,
        reviews: 103
      },
      {
        id: 'sh3',
        name: 'Strawberry Banana Smoothie',
        description: 'Fresh strawberries and banana blended with yogurt and honey',
        price: 6.49,
        image: 'https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        reviews: 79
      },
      {
        id: 'sh4',
        name: 'Rainbow Sprinkle Shake',
        description: 'Vanilla shake blended with rainbow sprinkles and topped with whipped cream',
        price: 6.99,
        image: 'https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        popular: true,
        rating: 5,
        reviews: 91
      }
    ]
  },
  {
    id: 'coffee',
    category: 'coffee',
    title: 'Coffee & Beverages',
    description: 'We proudly serve hand-crafted coffee beverages made with locally roasted beans. Pair one with any of our treats!',
    items: [
      {
        id: 'cf1',
        name: 'Caramel Macchiato',
        description: 'Espresso with steamed milk and caramel drizzle',
        price: 4.50,
        image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        reviews: 82
      },
      {
        id: 'cf2',
        name: 'Iced Coffee',
        description: 'Cold brewed coffee served over ice',
        price: 3.99,
        image: 'https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        popular: true,
        rating: 4,
        reviews: 107
      },
      {
        id: 'cf3',
        name: 'Mocha Latte',
        description: 'Espresso with steamed milk, chocolate, and whipped cream',
        price: 4.75,
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
        reviews: 93
      },
      {
        id: 'cf4',
        name: 'Chai Tea Latte',
        description: 'Spiced chai tea with steamed milk',
        price: 4.50,
        image: 'https://images.pexels.com/photos/229493/pexels-photo-229493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        reviews: 68
      }
    ]
  },
  {
    id: 'sandwiches',
    category: 'sandwiches',
    title: 'Sandwiches',
    description: 'Our gourmet sandwiches are made fresh daily with quality ingredients, perfect for lunch or a light dinner.',
    items: [
      {
        id: 'sw1',
        name: 'Classic Club Sandwich',
        description: 'Triple-decker sandwich with turkey, bacon, lettuce, and tomato',
        price: 8.99,
        image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        popular: true,
        rating: 4,
        reviews: 112
      },
      {
        id: 'sw2',
        name: 'Caprese Panini',
        description: 'Fresh mozzarella, tomato, and basil with balsamic glaze on ciabatta',
        price: 7.99,
        image: 'https://images.pexels.com/photos/4552045/pexels-photo-4552045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        reviews: 86
      },
      {
        id: 'sw3',
        name: 'Turkey Avocado Wrap',
        description: 'Sliced turkey, avocado, lettuce, and tomato in a whole wheat wrap',
        price: 8.49,
        image: 'https://images.pexels.com/photos/1352270/pexels-photo-1352270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        reviews: 78
      }
    ]
  },
  {
    id: 'desserts',
    category: 'desserts',
    title: 'Desserts & Bakery',
    description: 'Indulge in our selection of house-made desserts and baked goods. Perfect for satisfying your sweet tooth!',
    items: [
      {
        id: 'ds1',
        name: 'Fudge Brownie Sundae',
        description: 'Warm brownie topped with vanilla ice cream and hot fudge',
        price: 7.50,
        image: 'https://images.pexels.com/photos/3018814/pexels-photo-3018814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        popular: true,
        rating: 5,
        reviews: 136
      },
      {
        id: 'ds2',
        name: 'New York Cheesecake',
        description: 'Creamy cheesecake with graham cracker crust',
        price: 6.50,
        image: 'https://images.pexels.com/photos/4040693/pexels-photo-4040693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        reviews: 92
      },
      {
        id: 'ds3',
        name: 'Chocolate Chip Cookie',
        description: 'Freshly baked chocolate chip cookie, crispy outside and chewy inside',
        price: 2.99,
        image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        reviews: 108
      },
      {
        id: 'ds4',
        name: 'Apple Pie',
        description: 'Classic apple pie with cinnamon and flaky crust',
        price: 5.99,
        image: 'https://images.pexels.com/photos/6605308/pexels-photo-6605308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
        reviews: 75
      }
    ]
  }
];