import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <Container>
                    <Row>
                        <Col>
                            <div id="box1"></div>
                        </Col>
                        <Col>
                            <div id="box2"></div>
                        </Col>
                    </Row>
                </Container>
                <div style={{ border: "1px solid red", padding: "1px" }}></div>
                <h1> This is header text</h1>
                <img src="techphoto.jpeg" alt="tech pic" />
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World</p>
            <p>Gregory Mensah</p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello world
            </Button>
            <ul>
                <li> Mustang</li>
                <li>Dodge</li>
                <li>Camero</li>
            </ul>
        </div>
    );
}

export default App;
