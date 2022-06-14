import React from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { RiTestTubeLine } from "react-icons/ri";
import { RiProfileLine } from "react-icons/ri";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="link" to="/">
            <BiHomeAlt className="icon" />
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/tests">
            <RiTestTubeLine className="icon" />
            Tests
          </Link>
        </li>
        <li>
          <Link className="link" to="/profiles">
            <RiProfileLine className="icon" />
            Profiles
          </Link>
        </li>
      </ul>
      <SearchBar />
    </nav>
  );
};

export default NavBar;
