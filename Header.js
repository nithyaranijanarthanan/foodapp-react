import React from 'react';
import './Header.css';
import bg from '../../assets/header.jpg';
import { useNavigate } from 'react-router-dom'; // ✅ Step 1

const Header = () => {
  const navigate = useNavigate(); // ✅ Step 2

  const handleViewMenu = () => {
    navigate('/menu'); // ✅ Step 3
  };

  return (
    <div className='header' style={{ backgroundImage: `url(${bg})` }}> 
      <div className='header-content'>
        <h2>Order Your Favourite Food Here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <button onClick={handleViewMenu}>View Menu</button> {/* ✅ Clickable */}
      </div>
    </div>
  );
};

export default Header;
