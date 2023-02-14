import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
// import smiley from "./assets/smiley.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "pink" }}>
                UD CISC275 with React Hooks and TypeScript
                <span>Hello World! My name is Aman Singh!</span>
            </header>
            <div>
                <h1>New code!</h1>
                Testing the following languages:
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                </ul>
                <div>
                    <Button onClick={() => console.log("Hello World!")}>
                        Log Hello World
                    </Button>
                </div>
                <img
                    src={require("./assets/smiley.png")}
                    style={{ width: "100px" }}
                    alt="Smiley"
                />
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            First column.
                            <div
                                style={{
                                    backgroundColor: "red",
                                    border: "2px solid black",
                                    width: "100%",
                                    height: "100%"
                                }}
                            ></div>
                        </Col>
                        <Col>
                            Second column.
                            <div
                                style={{
                                    backgroundColor: "red",
                                    border: "2px solid black",
                                    width: "100%",
                                    height: "100%"
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>-</div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
