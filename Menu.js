// src/pages/Menu/Menu.js
import React from 'react';
import './Menu.css';
import { menu_list } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/menu/${item.menu_name}`, { state: item });
  };

  return (
    <div className="menu-page">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menu_list.map((item, index) => (
          <div key={index} className="menu-item" onClick={() => handleClick(item)}>
            <img src={item.menu_image} alt={item.menu_name} />
            <h3>{item.menu_name}</h3>
            <p>{item.description}</p>
            <span> Rs: {item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
