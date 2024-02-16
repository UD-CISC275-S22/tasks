import React from "react";
import "./App.css";
import profilePicture from "./images/Edmar.jpeg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Edmar Pelayo: Hello World, CISC275 with React Hooks and
                TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1 style={{ backgroundColor: "blue", color: "white" }}>
                Edmar Pelayo
            </h1>
            <img src={profilePicture} alt="A picture of my LinkedIn Profile" />
            <div style={{ textAlign: "center" }}>
                <br></br>
                Push:
                <ul>
                    <li>Incline Bench: 6 sets until failure </li>
                    <li>Chest Fly: 6 sets until Failure</li>
                    <li>Shoulder Press: 4 sets of Failure</li>
                    <li>Tricep Push Down: As many sets as you can do </li>
                </ul>
            </div>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col> I was told to put a column,here</Col>
                    <Col>
                        I was also told to put another column, but over here
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
