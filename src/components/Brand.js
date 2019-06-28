import React from "react";

class Brand extends React.Component {
    render() {
        return(
            <div style={{color: this.props.color, width: "100%", fontSize: 17}}>
                <i style={{fontSize: 13}} className="fa fa-heart"></i> AWESOME-BRAND
            </div>
        )
    };
}

Brand.defaultProps = {
    color: "black"
}

export default Brand;