import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopBar from "./app/navbar/TopBar";
import SideBar from "./app/sidebar/SideBar";

const App = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col style={{ backgroundColor: "#FF4081" }} md={2}>
            <SideBar />
          </Col>
          <Col md={10}>
            <TopBar></TopBar>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
