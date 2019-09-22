import React from "react";
import { ApolloProvider } from "react-apollo";
import Login from './Component/Login'
import {BrowserRouter, Link } from "react-router-dom";
import apolloClient from "./config/createApolloClient";
import Routes from "./Routes";
import "./App.css";

function App(props) {

  return (
    <div><Routes/></div>
    // <ApolloProvider client={apolloClient}>
    // <BrowserRouter>
    //   {/* <Login /> */}
    //   </BrowserRouter>
    // </ApolloProvider>
  );
}

export default App;
