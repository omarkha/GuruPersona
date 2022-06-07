import React from "react";
import {Link} from "react-router-dom"


const NavBar = () => {
    return (
            <nav>
                <ul>
                    <li>
                       <Link className="link" to="/">Home</Link>
                    </li>
                    <li>
                    <Link className="link" to="/">About</Link>
                    </li>
                    <li>
                    <Link className="link" to="/">Contact</Link>
                    </li>
                    <li>
                    <Link className="link" to="/">Tests</Link>
                    </li>
                </ul>
            </nav>
       
    )
}

export default NavBar;










