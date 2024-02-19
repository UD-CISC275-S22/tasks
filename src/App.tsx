import React from "react";
import "./App.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import image1 from "./Images/HelloWorld.jpeg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Hello World. Ricky Kiamilev. UD CISC275 with React Hooks and
                TypeScript
            </header>
            <h2>This is header text</h2>
            <p>Ricky Kiamilev and save. This page will automatically reload.</p>
            <div>
                Unordered List:
                <ul>
                    <li>First thing</li>
                    <li>Another things</li>
                    <li>A third item</li>
                </ul>
            </div>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <img src={image1} alt="Hello World!" />
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    backgroundColor: "red",
                                    height: "100px",
                                    width: "100px"
                                }}
                            >
                                Box 1
                            </div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    backgroundColor: "red",
                                    height: "100px",
                                    width: "100px"
                                }}
                            >
                                Box 2
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
