// components/ExploreMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import { menu_list } from '../../assets/assets'; 
import './ExploreMenu.css';

const ExploreMenu = () => {
  return (
    <div className="explore-menu">
      <h2>Explore Our Menu</h2>
      <p className='explore-menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      <div className="menu-items">
        {menu_list.map((item, index) => (
          <Link
    
  to={`/menu/${item.menu_name.toLowerCase().replace(/\s+/g, '-')}`}
  state={item}
  key={index}
  className="menu-card"
>

            <img src={item.menu_image} alt={item.menu_name} />
           
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
