import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-4 bg-dark">
      <div className="footer-content">
        {/* About Us Section */}
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We provide high-quality services to our customers. Our mission is to
            ensure customer satisfaction and trust.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Product">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@example.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 React Street, JS City</p>
        </div>

        {/* Apps Section */}
        <div className="footer-section apps ">
          <h3>Download Our App</h3>
          <div className=" d-flex">
            <Link 
              className="  mx-3 "
              to="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play Store"
                className="app-badge"
              />
            </Link>
            <Link
              to="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Apple App Store"
                className="app-badge"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
