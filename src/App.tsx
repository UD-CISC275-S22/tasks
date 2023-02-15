import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import image from "./Getaway.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    <span style={{ color: "white" }}>CISC275</span>
                </h1>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </header>

            <div>
                <Container>
                    <Row>
                        <Col>
                            <div className="Rectangle"></div>
                            <div
                                style={{
                                    border: "1px solid blue",
                                    padding: "9px"
                                }}
                            >
                                <img src={image} alt="Purity" />
                            </div>
                        </Col>
                        <Col>
                            <div className="Rectangle"></div>
                            <div
                                style={{
                                    border: "1px #a29bfd",
                                    padding: "9px"
                                }}
                            >
                                Vibes
                            </div>
                            <ul>
                                <li>Nights</li>
                                <li>Stars</li>
                                <li>Traffic Lights</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
