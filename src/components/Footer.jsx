import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <p>&copy; {currentYear} STREAMLAB. All rights reserved.</p>
          </div>
          
          <div className="footer-right">
            <Link to="/about" className="footer-link">
              About
            </Link>
            <Link to="/disclaimer" className="footer-link">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6585857350615324"
     crossorigin="anonymous"></script>
  );
};

export default Footer;
