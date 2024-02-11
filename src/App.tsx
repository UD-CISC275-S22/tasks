import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <span style={{ color: "red" }}>
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript
                </header>
            </span>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Jacob Whitman automatically. Hello World!
            </p>
            <Container>
                <Row>
                    <Col>
                        <img
                            src="src\assets\Clue.png"
                            alt="A picture of a trainnn"
                        />
                        <div
                            style={{
                                color: "red",
                                width: "40px",
                                height: "40px",
                                border: "1px solid red",
                                padding: "4px",
                                backgroundColor: "solid red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <ul>
                            <li>cats</li>
                            <li>cats</li>
                            <li>catssss</li>
                        </ul>
                        <div
                            style={{
                                color: "red",
                                width: "40px",
                                height: "40px",
                                border: "1px solid red",
                                padding: "4px",
                                backgroundColor: "solid red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <Button
                name="Log Hello World"
                onClick={() => console.log("Hello World!")}
            >
                Click Me
            </Button>
        </div>
    );
}

export default App;
