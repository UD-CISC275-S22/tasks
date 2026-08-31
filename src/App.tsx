import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import images from "./images/images.png";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Hamad AlJneibi UD CISC275 with React Hooks and TypeScript
                </h1>

                <p>Hello World</p>

                <img src={images} alt="Udel logo" />

                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>

                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>

                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    backgroundColor: "white",
                                }}
                            ></div>
                        </Col>

                        <Col>
                            <div
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
}

export default App;
