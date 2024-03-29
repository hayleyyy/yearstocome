import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import introPhoto from "./assets/intro-photo.png";
import { Parallax, useParallax } from "react-scroll-parallax";

function Intro() {
  return (
    <>
      <Container fluid className="section-intro" id="intro">
        <Container className="py-5">
          <Row className="py-5">
            <Col md={7} className="intro-text p-4 p-sm-2 p-md-4 p-lg-5">
              <div>
                <h1>We're getting married!</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                malesuada pretium interdum. Nulla rhoncus eleifend est non
                dapibus. Fusce vitae vulputate enim, ut sagittis lacus.
                Phasellus efficitur lorem sed lorem lacinia consequat. Curabitur
                bibendum ut nisl congue malesuada. Ut purus enim, posuere
                fringilla nunc sit amet, bibendum parturient montes, nascetur
                ridiculus mus. Phasellus at orci a odio venenatis interdum vitae
                vitae sem.
              </div>
            </Col>
            <Col md={5} className="intro-photo p-4 p-md-0 p-lg-3 p-xl-5">
              <Parallax translateY={["-100px", "100px"]}>
                <img src={introPhoto}></img>
              </Parallax>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Intro;
