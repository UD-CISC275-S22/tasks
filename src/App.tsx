import React from "react";
import "./App.css";
import logo from "./basketball.jpeg";
import { Button, Col, Container, Row } from "react-bootstrap";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript. Hello World.
            </header>
            <h1>Second header</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Antoine Gravat.
            </p>
            <img src={logo} alt="Basketball" />
            <ul>
                <li>I am 20 years old</li>
                <li>I am a junior</li>
                <li>I attend UD </li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        FIRST COLUMN
                        <div className="App-rectangles"></div>
                    </Col>
                    <Col>
                        SECOND COLUMN
                        <div className="App-rectangles"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
