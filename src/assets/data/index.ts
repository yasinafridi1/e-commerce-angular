import { NavItem, ProductItem } from '@models/index';

export const navItems: NavItem[] = [
  {
    url: '/home',
    text: 'Home',
  },
  {
    url: '/about',
    text: 'About Us',
  },
  {
    url: '/contact',
    text: 'Contact Us',
  },
];

export const InAnimations = [
  'animate__fadeIn',
  'animate__fadeInDown',
  'animate__fadeInUp',
  'animate__fadeInLeft',
  'animate__fadeInRight',
  'animate__bounceIn',
  'animate__bounceInDown',
  'animate__bounceInUp',
  'animate__bounceInLeft',
  'animate__bounceInRight',
  'animate__zoomIn',
  'animate__zoomInDown',
  'animate__zoomInUp',
  'animate__zoomInLeft',
  'animate__zoomInRight',
  'animate__slideInDown',
  'animate__slideInUp',
  'animate__slideInLeft',
  'animate__slideInRight',
  'animate__lightSpeedInRight',
  'animate__lightSpeedInLeft',
  'animate__rotateIn',
  'animate__rotateInDownLeft',
  'animate__rotateInDownRight',
  'animate__rotateInUpLeft',
  'animate__rotateInUpRight',
  'animate__flipInX',
  'animate__flipInY',
  'animate__jackInTheBox',
  'animate__rollIn',
];

export const OutAnimations = [
  'animate__fadeOut',
  'animate__fadeOutDown',
  'animate__fadeOutUp',
  'animate__fadeOutLeft',
  'animate__fadeOutRight',
  'animate__bounceOut',
  'animate__bounceOutDown',
  'animate__bounceOutUp',
  'animate__bounceOutLeft',
  'animate__bounceOutRight',
  'animate__zoomOut',
  'animate__zoomOutDown',
  'animate__zoomOutUp',
  'animate__zoomOutLeft',
  'animate__zoomOutRight',
  'animate__slideOutDown',
  'animate__slideOutUp',
  'animate__slideOutLeft',
  'animate__slideOutRight',
  'animate__lightSpeedOutRight',
  'animate__lightSpeedOutLeft',
  'animate__rotateOut',
  'animate__rotateOutDownLeft',
  'animate__rotateOutDownRight',
  'animate__rotateOutUpLeft',
  'animate__rotateOutUpRight',
  'animate__flipOutX',
  'animate__flipOutY',
  'animate__rollOut',
];

export const products: ProductItem[] = [
  {
    id: '1',
    name: 'Leather Jacket',
    price: 150,
    image: 'assets/images/leather.png',
    description:
      'Crafted from high-quality leather, this jacket offers a sleek and timeless look. It features a soft inner lining for comfort and a durable exterior to withstand any weather. Perfect for casual outings or evening rides, this jacket adds an effortless touch of style to your wardrobe.',
    category: 'Clothing',
  },
  {
    id: '2',
    name: "Women's T-Shirt",
    price: 10,
    image: 'assets/images/tShirtWomen.png',
    description:
      'Made from breathable and lightweight cotton, this t-shirt is designed for everyday comfort. Its relaxed fit allows for easy movement, making it a perfect choice for casual wear or layering. Whether paired with jeans or shorts, this t-shirt adds a touch of effortless style to your outfit.',
    category: 'Clothing',
  },
  {
    id: '3',
    name: 'Hoodie',
    price: 20,
    image: 'assets/images/hoodie.png',
    description:
      "Stay warm and stylish with this soft and cozy hoodie. Featuring a relaxed fit and an adjustable hood, it's perfect for lounging at home or stepping out on chilly days. The breathable fabric ensures all-day comfort, making it a must-have for your casual collection.",
    category: 'Clothing',
  },
  {
    id: '4',
    name: 'Sandals',
    price: 15,
    image: 'assets/images/sandals.png',
    description:
      'Designed for both style and comfort, these sandals feature a cushioned footbed and durable straps. Whether you’re heading to the beach or running errands, their lightweight construction ensures ease of movement. Pair them with your favorite summer outfits for a relaxed yet trendy look.',
    category: 'Shoes',
  },
  {
    id: '5',
    name: 'Shoes',
    price: 25,
    image: 'assets/images/shoes.png',
    description:
      'A perfect blend of style and functionality, these shoes provide superior comfort and support. With a durable sole and breathable upper, they are ideal for long walks or casual outings. Their sleek design ensures they complement any outfit, from jeans to chinos.',
    category: 'Shoes',
  },
  {
    id: '6',
    name: 'Wallet',
    price: 10,
    image: 'assets/images/wallet.png',
    description:
      'A sophisticated and compact wallet designed for practicality and elegance. Featuring multiple card slots, a secure coin pocket, and a sleek design, it fits easily into any pocket. Crafted from premium materials, this wallet ensures durability and a refined look.',
    category: 'Accessories',
  },
  {
    id: '7',
    name: 'Long Coat',
    price: 50,
    image: 'assets/images/longCoat.png',
    description:
      'This classic long coat offers a refined silhouette and ultimate warmth. Designed with a tailored fit, it features a button-up front and deep pockets for convenience. Whether worn over formal attire or casual outfits, this coat adds a touch of sophistication to your look.',
    category: 'Clothing',
  },
];
