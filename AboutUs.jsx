// src/pages/AboutUs.js
import React from 'react';
import './AboutUs.css'; // optional styling

const AboutUs = () => {
  return (
    <section className="about-section container my-5">
      <h2 className="text-center mb-4">About Us</h2>
      <div className="row align-items-center">
        {/* Image side */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" 
            alt="Our Team"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Text side */}
        <div className="col-md-6">
          <p>
            Welcome to our food paradise! We're passionate about delivering delicious, hygienic,
            and freshly cooked meals right to your doorstep. Our chefs handpick every ingredient
            to ensure the perfect taste and health balance in each bite.
          </p>
          <p>
            Whether you're craving South Indian classics, North Indian flavors, Chinese spice, or
            mouthwatering desserts—we have it all! Your satisfaction is our mission.
          </p>
          <p><strong>Started in 2023, our journey continues with love and dedication from our kitchen to your home.</strong></p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
