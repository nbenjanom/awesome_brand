import React from "react";
import "./index.css";

class About extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isValid : null
        }
        this.validator = this.validator.bind(this);
    }


    validator(event) {
        event.preventDefault();
        let validMail = document.getElementById("mailInput").checkValidity();

        if (validMail) {
            document.getElementById("mailInput").value = "";
            this.setState({
                isValid : true
            });
        } else {
            this.setState({
                isValid : false
            });
        }
    }

    render(){
        return(
            <div className="about-wrapper" >
                <h2>
                    Want to know more about our product&nbsp;?
                </h2>
                <form>
                    <input id="mailInput" type="email" placeholder="@Email" required/>
                    <button onClick={this.validator} type="submit">Submit</button>
                </form>
                <p 
                    className={`${this.state.isValid ? "valid-mail" : "invalid-mail"}`} 
                    style={{
                        visibility: `${this.state.isValid != null ? "visible" : "hidden"}` 
                    }}>
                </p>
            </div>
        )
    }
}

export default About;