import React from 'react';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="signin-container">
      <form className="signin-form">
        <h2>Sign In</h2>
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
        <p className="signup-link">
          Don’t have an account? <a href="/signup">Create one</a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
