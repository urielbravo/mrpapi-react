import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopBar = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={4}>
          <FontAwesomeIcon icon={faBars} />
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <FontAwesomeIcon icon={faUser} />
          Uriel engineer
        </Col>
      </Row>
    </Container>
  );
};

export default TopBar;
