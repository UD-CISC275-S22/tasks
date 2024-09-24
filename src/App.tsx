import React from "react";
import "./App.css";
import { Button, Col, Row, Container } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>Balamurugan Saravanan Hello World </p>
            <h1>Task 3</h1>
            <img src=".../src/dog.jpg" alt="A picture of a dog" />
            <ul>
                <li>Rain!</li>
                <li>Snow</li>
                <li>Hail</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
                className="mb-3"
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
