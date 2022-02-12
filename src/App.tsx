import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <Container>
                <Row>
                    <Col>
                        <h1>Meet my dogs</h1>
                        <img
                            src={require("./dogs.jpg")}
                            style={{ height: "225px", width: "300px" }}
                            alt="A cute picture of my dogs"
                        />
                        <div
                            style={{
                                width: "10px",
                                height: "5px",
                                backgroundColor: "red",
                                margin: "auto"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <p>My dogs:</p>
                        <ul>
                            <li>Valegro od Dalajskeho potoka</li>
                            <li>Blueberry od Dalajskeho potoka</li>
                            <li>Both are standard black schnauzers</li>
                        </ul>
                        <div
                            style={{
                                width: "10px",
                                height: "5px",
                                backgroundColor: "red",
                                margin: "auto"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>Jan Ahmed</p>
            <p>Hello World</p>
        </div>
    );
}

export default App;
