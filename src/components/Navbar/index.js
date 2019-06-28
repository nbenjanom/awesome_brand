import React from "react";
import "./index.css";
import Brand from "../Brand";

class Navbar extends React.Component {
    render(){
        return(
            <div className="navbar">
                <Brand 
                  color='black='
                />
                <div className="navbar-links">
                    <ul>
                        <a href="# "> <li>Product</li> </a>
                        <a href="# "> <li>About</li> </a>
                        <a href="# "> <li>More</li> </a>
                    </ul>
                </div>
            </div>
        )
    };
}

export default Navbar;