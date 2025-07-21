import React from 'react';
import { useParams } from 'react-router-dom';
import { menu_list } from '../../assets/assets';
import './CategoryMenu.css';

const CategoryMenu = () => {
  const { categoryName } = useParams();

  // Try to find the selected item
  const selectedItem = menu_list.find(
    item => item.menu_name.toLowerCase() === categoryName.toLowerCase()
  );

  // If not found, show error message
  if (!selectedItem) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Oops! Item not found 😓</h2>
        <p>The menu item you're looking for doesn't exist.</p>
      </div>
    );
  }

  // Else, show the item details
  return (
    <div className="category-menu">
      <h2>{selectedItem.menu_name}</h2>
      <div className="category-item">
        <img src={selectedItem.menu_image} alt={selectedItem.menu_name} />
        <h3>{selectedItem.menu_name}</h3>
        <p>{selectedItem.description || 'No description available.'}</p>
        <span>{selectedItem.price || 'Price not available'}</span>
      </div>
    </div>
  );
};

export default CategoryMenu;
