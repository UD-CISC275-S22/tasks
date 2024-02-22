import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import catcircle from "./catcircle.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript and also Kai Winterle
            </header>
            <p>
                Hello World! Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
            </p>
            <h1>Header? I hardly,</h1>
            <Container>
                <Row>
                    <Col>
                        <p>Mmmm Text Yummy</p>
                    </Col>
                    <Col>
                        <img src={catcircle} alt="CircleofCatImage" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="redRect"></div>
                    </Col>
                    <Col>
                        <div className="redRect"></div>
                    </Col>
                </Row>
            </Container>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
