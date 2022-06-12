import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link className="link" to="/">
            About
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="link" to="/faq">
            FAQ
          </Link>
        </li>
      </ul>
      <h6>Personified.com Copyright 2022</h6>
    </footer>
  );
};

export default Footer;
