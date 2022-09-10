import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import pic1 from "./pictures/pic1.jpg";

console.log(pic1);

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with Reaction Hooks and TypeScript
            </header>
            <h1 style={{ color: "blue" }}>This is such an amazing header.</h1>
            <img src={pic1} alt="Everything is Fine" />;
            <Button onClick={() => console.log("Everything is NOT Fine")}>
                Everything is Fine
            </Button>
            <ul>
                <li>Everything</li>
                <li>Everything is</li>
                <li>Everything is Fine</li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        First column.
                        <div className="rectangle"></div>
                    </Col>
                    <Col>
                        Second column.
                        <div className="rectangle"></div>
                    </Col>
                </Row>
            </Container>
            <p>
                Hello World, Daniel Xu has edited <code>src/App.tsx</code> and
                saved. This page will automatically reload.
            </p>
        </div>
    );
}

export default App;
