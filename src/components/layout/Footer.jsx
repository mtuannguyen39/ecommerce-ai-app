import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to="/">EduEcommerce AI</Link>
        <p>&copy; 2025 EduEcommerce AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
