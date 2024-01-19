import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Menu() {
  return (
    <>
      <Container className="section-menu" fluid>
        <img
          src="../src/assets/img/clip-sm.png"
          className="clipboard-clip"
        ></img>

        <Container className="clipboard-container">
          <Row className="justify-content-center">
            <Col xs="10" sm="9" md="8" lg="6" className="clipboard-paper">
              <div className="clipboard-menu">
                <h1>Menu</h1>
                <ul>
                  <li className="menu-title">Appetizers:</li>
                  <li> Brisket Sliders </li>
                  <li> Chicken Sliders</li>
                  <li> Slow Smoked Jalapeno Poppers</li>
                  <li> Veggie Thai Spring Rolls</li>

                  <li className="menu-title"> Main: (choice of)</li>
                  <li> Chicken and Ribs</li>
                  <li> Vegan Portobello Mushroom Burger</li>

                  <li className="menu-title"> Sides:</li>
                  <li> Corn on the Cob</li>
                  <li> Mac and Cheese</li>
                  <li> Roasted Beet Salad</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Menu;
