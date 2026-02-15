import React from "react";
import "./App.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import confusedEmoji from "./assets/images/d0daa10ef9e8a988c1e154d25ca28bc3.jpg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <div style={{ backgroundColor: "red" }}>
                    UD CISC275 with React Hooks and TypeScript
                </div>
            </header>
            <p>Marcus Cao Hello World</p>
            <h1>Studying</h1>
            <p> This is what I will be studying today.</p>
            <ul>
                <li> Statistical Methods </li>
                <li> Intro to Software Engineering </li>
                <li> Linear Algebra </li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <img src={confusedEmoji} alt="blue confused emoji" />

            <Container>
                <Row>
                    <Col>
                        <div className="App-column">First Column.</div>
                    </Col>
                    <Col>
                        <div className="App-column"> Second Column.</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
