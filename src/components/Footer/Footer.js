import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer
      className="footer"
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        backgroundImage: "url(../../assests/Landing-background.jpg)",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; Narenthar {date}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
