import { useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Header from "./Header";
import Intro from "./Intro";
import Navigation from "./Navigation";
import Story from "./Story";
import Venue from "./Venue";
import Menu from "./Menu";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      {/* <Navigation></Navigation>
      <Header></Header>
      <Intro></Intro>
      <Story></Story>
      <Venue></Venue>
      <Menu></Menu> */}
      {/* <Parallax pages={2} style={{ top: "0", left: "0" }} className="parallax">
        <Footer></Footer>
        <ParallaxLayer offset={1} speed={0.1}>
          <div className="test-parallax parallax" id="img3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={2}>
          <div className="test-parallax parallax" id="img4"></div>
        </ParallaxLayer>
      </Parallax> */}
      {/* <Footer></Footer> */}
      <ParallaxProvider>
        <Header></Header>
        <Intro></Intro>
      </ParallaxProvider>
      <Story></Story>
      <Venue></Venue>
      <Menu></Menu>
    </>
  );
}

export default App;
