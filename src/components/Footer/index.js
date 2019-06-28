import React from "react";
import "./index.css";
import Brand from "../Brand";


class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                <Brand
                  color="white"
                />
            </div>
        )
    };
}

export default Footer;