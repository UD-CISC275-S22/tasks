import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Ethan Hogan, Hello World</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div>
                <img
                    src="rainer.jpg"
                    alt="A poster of mount rainer national park"
                />
            </div>
            <div>
                Favorite Numbers:
                <ol>
                    <li>44</li>
                    <li>26</li>
                    <li>7436</li>
                </ol>
            </div>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>First Column</Col>
                    <Col>Second Column</Col>
                </Row>
            </Container>
            <div>
                <Container id="rectangle_1">
                    <Row>
                        <Col>rectangle 1</Col>
                    </Row>
                </Container>
                <Container id="rectangle_2">
                    <Row>
                        <Col>rectangle 2</Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
