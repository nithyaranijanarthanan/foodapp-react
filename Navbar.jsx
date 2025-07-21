import React,{useState} from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("menu")
  return (
    <div className='navbar'>
      {/* Logo */}
      <img src={assets.logo} alt="Logo" className='logo' />

      {/* Menu Items */}

      <ul className='navbar-menu'>
      <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
      <Link to="/">home</Link>
      </li>
       <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>
       <Link to="/menu">menu</Link>
       </li>
       <li onClick={() => setMenu("about us")} className={menu === "about us" ? "active" : ""}>
       <Link to="/about">About us</Link>
       </li>
        <li onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>
       <Link to="/contact">contact us</Link>
       </li>
</ul>


      {/* Right Section */}
      <div className='navbar-right'>
        {/* Cart Icon */}
        <FontAwesomeIcon icon={faCartShopping} className='icon' />

        {/* Search Icon with Dot */}
        <div className='navbar-search-icon'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
          <div className='dot'></div>
        </div>

        {/* Sign In Button */}
        <Link to="/signin">
  <button className='signin-button'>
    <FontAwesomeIcon icon={faUser} /> Sign In
  </button>
</Link>
      </div>
    </div>
  )
}

export default Navbar
