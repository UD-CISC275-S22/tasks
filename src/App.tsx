import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import garfield from "./925_garfield.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">React Hooks and TypeScript</header>
            <h2> UD CISC275 2024</h2>
            <p>Kushal Gurrapu</p>
            <p>Hello World</p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "500px",
                                height: "500px",
                                backgroundColor: "red"
                            }}
                        >
                            {" "}
                            Random List!
                            <ul>
                                <li>I am so Computer Science!</li>
                                <li>I passed my DiffEQ exam!</li>
                                <li>I am very sick right now!</li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "500px",
                                height: "500px",
                                padding: "10px",
                                backgroundColor: "red"
                            }}
                        >
                            {" "}
                            <img
                                src={garfield}
                                width="480"
                                height="480"
                                alt="Garfield!"
                            />{" "}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
