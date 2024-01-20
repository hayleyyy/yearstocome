import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useBreakpoint from "./UseBreakpoint";
import venueImgMobile from "./assets/venue-images-mobile.png";
import venueImg from "./assets/venue-images.png";

function Venue() {
  const breakpoint = useBreakpoint();
  const mapWidthSizes = {
    xs: 360,
    sm: 442,
    md: 504,
    lg: 544,
    xl: 567,
    xxl: 672,
  };

  const mapWidth = mapWidthSizes[breakpoint] || 672;

  return (
    <>
      <Container fluid className="section-venue">
        <Container className="py-5">
          <Row className="py-5">
            <Col
              md={2}
              lg={4}
              xl={5}
              className="venue-photo-container order-md-2"
            >
              <div>
                <img src={venueImg} className="venue-photo"></img>
                <img src={venueImgMobile} className="venue-photo-mobile"></img>
              </div>
            </Col>
            <Col md={10} lg={8} xl={7} className="venue-text p-5 ">
              <div className="venue-text-upper">
                <h1 className="venue-title">Venue</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  malesuada pretium interdum. Nulla rhoncus eleifend est non
                  dapibus. Fusce vitae vulputate enim, ut sagittis lacus.
                  Phasellus efficitur lorem sed lorem lacinia consequat.
                  Curabitur bibendum ut nisl congue malesuada. Ut purus enim,
                  posuere fringilla nunc sit amet, bibendum parturient montes,
                  nascetur ridiculus mus. {mapWidth}
                </p>
                <h5>The Barn at Sadie Belle Farm</h5>
                <p>
                  <span className="venue-address">1636 Bishopville Road,</span>
                  <span className="venue-address">Hantsport, NS, B0P 1P0</span>
                  <span className="venue-address">(902) 809-2359</span>
                </p>
              </div>
              <div className="venue-map border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d87413.00580062682!2d-64.2905018096398!3d45.043349601202394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b59abf901c468c5%3A0x40e82a0b83889eea!2sThe%20Barn%20at%20Sadie%20Belle%20Farm!5e0!3m2!1sen!2sca!4v1703692195530!5m2!1sen!2sca"
                  width={mapWidth}
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="paper-edge"></Container>
    </>
  );
}

export default Venue;
