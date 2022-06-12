import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/tests">
            Tests
          </Link>
        </li>
        <li>
          <Link className="link" to="/profiles">
            Profiles
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
