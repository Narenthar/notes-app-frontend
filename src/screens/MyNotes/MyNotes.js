import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import notes from "../../data/notes";

const MyNotes = () => {
  return (
    <MainScreen title="Welcome Narenthar">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create new note
        </Button>
        {notes.map((note) => (
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                title
              </span>

              <div>
                <Button>Edit</Button>
                <Button variant="danger" className="mx-2">
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.{" "}
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        ))}
      </Link>
    </MainScreen>
  );
};

export default MyNotes;
