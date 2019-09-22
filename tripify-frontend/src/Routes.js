import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Component/nav";
import Main from "./Component/Main";
import styled, { keyframes } from "styled-components";
import Login from "./Component/Login";
import Carousel from "./Component/carousel";

const slide = keyframes`
  from {
    background-position: -120px 60px;
  }

  to {
    background-position: 0 0;
  }
`;

const Section = styled.div`
  /* width: 80%;
  margin-left: 270px; */
  width: 100%;
  min-height: 100vh;
  height: 100%;
  color: black;
  font-family: "Questrial", sans-serif;
  background-color: #ffb2cd;
  background-image: linear-gradient(
      45deg,
      #fbbaf0 25%,
      transparent 25%,
      transparent 75%,
      #fbbaf0 75%,
      #fbbaf0
    ),
    linear-gradient(
      -45deg,
      #fbbaf0 25%,
      transparent 25%,
      transparent 75%,
      #fbbaf0 75%,
      #fbbaf0
    );
  background-size: 60px 60px;
  background-position: 0 0;/

  animation: 4s ${slide} infinite linear;
`;

const AppWrraper = styled.div`
//   display: flex;
//   justify-content: flex-start;
`;

const Routes = () => {
  return (
    <AppWrraper>
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Main} />
        <Route path="/details/:id" component={Carousel}/>
        {/* <Route path="/photos/:photoId" component={PhotosById} /> */}
      </Router>
    </AppWrraper>
  );
};
export default Routes;
