import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Footer() {
  return (
    <>
      {/* <Container className="footer-main" fluid>
        <Container>
          <h1>This is a Footer</h1>
        </Container>
      </Container> */}
      {/* <Container className="footer-main" fluid>
        <Parallax pages={1}>
          <ParallaxLayer offset={0} speed={2.5}>
            <h1>Parallax</h1>
          </ParallaxLayer>
        </Parallax>
      </Container> */}
      <div className="rsvp-footer">
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="test-parallax parallax" id="img1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2.5}>
          <div className="test-parallax parallax" id="img2"></div>
        </ParallaxLayer>
      </div>
    </>
  );
}

export default Footer;
