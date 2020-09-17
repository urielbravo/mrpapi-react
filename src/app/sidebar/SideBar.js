import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const SideBar = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <img
              src="http://www.optimumturbines.com/images/otm3.png"
              alt="Logo"
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SideBar;
