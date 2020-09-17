import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import navbar from "./app/navbar/navbar";

function App() {
  return (
    <>
      <Container fluid>
        <Row></Row>
        <Row>
          <Col style={{ backgroundColor: "#FF4081" }} md={2}>
            Side panel
          </Col>
          <Col style={{ backgroundColor: "#F44336" }} md={10}>
            Purchasing
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
