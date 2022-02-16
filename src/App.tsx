import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <header className="App-header">
                        Rehan Amir UD CISC275 with React Hooks and TypeScript
                    </header>
                    <p>
                        Edit <code>src/App.tsx</code> and save. This page
                        automatically reload. Hello World
                    </p>
                    <h1 style={{ backgroundColor: "green" }}>
                        Persimmon Facts
                    </h1>
                    <Col>
                        <div
                            style={{
                                border: "8px solid red",
                                width: "400px",
                                height: "300px",
                                backgroundColor: "red",
                                padding: "2px"
                            }}
                        >
                            Persimmon Facts
                            <ul>
                                <li>It is a fruit</li>
                                <li>It originates from China</li>
                                <li>
                                    They are typically in season from September
                                    to December
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                border: "8px solid blue",
                                width: "400px",
                                height: "300px",
                                backgroundColor: "blue",
                                padding: "2px"
                            }}
                        >
                            <img
                                src=" https://pngimg.com/uploads/persimmon/persimmon_PNG86238.png"
                                width="300"
                                height="200"
                                alt="picture of a persimmon"
                            />
                        </div>
                    </Col>
                </Row>
                <div>
                    <Button onClick={() => console.log("Hello World!")}>
                        Log Hello World
                    </Button>
                </div>
            </Container>
        </div>
    );
}

export default App;
