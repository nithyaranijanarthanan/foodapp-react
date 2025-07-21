// src/pages/Menu/MenuDetail.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './MenuDetail.css';

const MenuDetail = () => {
  const { state } = useLocation();

  if (!state) {
    return <div className="menu-detail">No item details found.</div>;
  }

  return (
    <div className="menu-detail">
      <img src={state.menu_image} alt={state.menu_name} className="menu-detail-img" />
      <div className="details-text">
        <h2>{state.menu_name}</h2>
        <p>{state.description}</p>
        <h3>Price: ₹{state.price}</h3>
      </div>
    </div>
  );
};

export default MenuDetail;
