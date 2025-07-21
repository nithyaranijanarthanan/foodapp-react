// image imports
import logo from './navlogo.png';
import header from './header.jpg';
import burger from './burger-and-fries.jpeg';
import chicken from './chicken.jpg';
import frenchfries from './french fries.jpg';
import naan from './naan.jpg';
import noodles from './noodles.jpg';
import paneer from './paneer butter masala.jpg';
import pizza from './pizza.jpg';
import fish from './fish.jpg';

// assets export
export const assets = {
  logo,
  header,
  burger,
  chicken,
  frenchfries,
  naan,
  noodles,
  paneer,
  pizza,
  fish,
};

// menu list export - use array of objects
export const menu_list = [
  {
    menu_name: 'Burger',
    menu_image: burger,
    price: 99,
    description: 'Juicy grilled burger with lettuce, tomato, and cheese in a sesame bun.',
  },
  {
    menu_name: 'Chicken',
    menu_image: chicken,
    price: 149,
    description: 'Spicy fried chicken with crispy skin and juicy inside.',
  },
  {
    menu_name: 'French Fries',
    menu_image: frenchfries,
    price: 79,
    description: 'Golden crispy fries lightly salted, perfect as a side or snack.',
  },
  {
    menu_name: 'Naan',
    menu_image: naan,
    price: 40,
    description: 'Soft and buttery Indian flatbread served hot and fresh.',
  },
  {
    menu_name: 'Noodles',
    menu_image: noodles,
    price: 119,
    description: 'Hot and spicy Indo-Chinese noodles loaded with vegetables.',
  },
  {
    menu_name: 'Paneer Butter Masala',
    menu_image: paneer,
    price: 169,
    description: 'Cottage cheese cubes in rich buttery tomato gravy with Indian spices.',
  },
  {
    menu_name: 'Pizza',
    menu_image: pizza,
    price: 199,
    description: 'Classic cheese pizza with a crispy crust and flavorful toppings.',
  },
  {
    menu_name: 'Fish',
    menu_image: fish,
    price: 179,
    description: 'Fried or grilled fish seasoned with herbs, spices, and lemon.',
  },
];

