import React from 'react';
import './Footer.css'; // custom styles if needed
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-md-4 mb-4">
          <Link to="/about" className="nav-link">About Us</Link>

            <p>Delicious food delivered to your doorstep. Fast, fresh, and tasty meals every day!</p>
          </div>

          {/* Quick Links */}
         {/* Quick Links */}
<div className="col-md-4 mb-4">
  <h5>Quick Links</h5>
  <ul className="list-unstyled">
    <li><Link to="/menu" className="text-light text-decoration-none">Menu</Link></li>
    <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
    <li><Link to="/faq" className="text-light text-decoration-none">FAQs</Link></li>
  </ul>
</div>

{/* Social Media */}
<div className="col-md-4 mb-4">
  <h5>Follow Us</h5>
  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-light me-3"><i className="fab fa-facebook-f"></i></a>
  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-light me-3"><i className="fab fa-instagram"></i></a>
  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-light me-3"><i className="fab fa-twitter"></i></a>
  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-light"><i className="fab fa-youtube"></i></a>
</div>


        </div>

        <div className="text-center mt-3">
          <p className="mb-0">&copy; 2025 FoodieApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
