import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import {  Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      mystate: false
    };
  }
  render() {
    const responseGoogle = response => {
      console.log("response", response);
      this.setState({ mystate: true });
    };
    return (
      <div>
        <h1>LOGIN WITH GOOGLE</h1>
       
          <GoogleLogin
            clientId="578096971638-umd3nf96bj55ms66igpkdc1hjqsgpjif.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
            buttonText= {<Link to="/home">"LOGIN WITH GOOGLE"</Link>}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        
      </div>
    );
  }
}

export default Login;
