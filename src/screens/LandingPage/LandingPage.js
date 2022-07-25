import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <p className="title">Welcome to Notes App</p>
              <p className="subtitle">All the notes you need and more.</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="md" className="landingbutton">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button
                  size="md"
                  className="landingbutton"
                  variant="outline-primary"
                >
                  SignUp
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
