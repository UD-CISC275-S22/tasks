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
                            <div
                                style={{
                                    border: "7px solid blue",
                                    padding: "1px"
                                }}
                            >
                                <img src={image} alt="Purity" />
                            </div>
                        </Col>
                        <Col>
                            <div className="Rectangle">
                                <div
                                    style={{
                                        border: "7px solid lavender",
                                        padding: "1px"
                                    }}
                                >
                                    <h1>
                                        <span style={{ color: "#a29bfd" }}>
                                            NEON
                                        </span>
                                    </h1>
                                </div>
                                <ul>
                                    <li>Nights</li>
                                    <li>Stars</li>
                                    <li>Traffic Lights</li>
                                    <li>Music</li>
                                    <li>Rain</li>
                                    <li>Reflections</li>
                                    <li>The Moon</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
