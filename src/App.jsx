import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Header from "./Header";
import Intro from "./Intro";
import Navigation from "./Navigation";
import Story from "./Story";
import Venue from "./Venue";
import Menu from "./Menu";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <Router>
        <Navigation></Navigation>
        <ParallaxProvider>
          <Header></Header>
          <Intro></Intro>
        </ParallaxProvider>
        <Story></Story>
        <Venue></Venue>
        <Menu></Menu>
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/intro" exact component={Intro} />
          <Route path="/book" exact component={Story} />
          <Route path="/venue" exact component={Venue} />
          <Route path="/menu" exact component={Menu} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
