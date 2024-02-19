import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Container fluid className="rsvp-footer" id="footer">
        <Container>
          <Row>
            <Col>
              <h3>#MAHANEYYEARSTOCOME</h3>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Footer;
