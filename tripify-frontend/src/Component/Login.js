
import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';

    
     class Login extends Component {
      render() {
        const responseGoogle = (response) => {
          console.log('response',response);
          //hnMfvpAcSM2x1AyV18uYOUzQ
        }
        return (
          <div>
            
            <h1>LOGIN WITH  GOOGLE</h1>
            <GoogleLogin
            clientId="578096971638-umd3nf96bj55ms66igpkdc1hjqsgpjif.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
          </div>
        )
      }
    }
    

export default Login;
