import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { alignPropType } from "react-bootstrap/esm/types";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>New Header for Task 3!</h1>
                Diya Shah - UD CISC275 with React Hooks and TypeScript - Hello
                World!
            </header>
            <Container>
                <Row>
                    <Col>
                        {" "}
                        To do list:
                        <ul>
                            <li>Clean Room </li>
                            <li>Do Homework</li>
                            <li>Go to grocery store</li>
                            <li>Fill gas</li>
                        </ul>
                        <div
                            style={{
                                width: "175px",
                                height: "50px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <img
                            src="https://free-images.com/tn/366a/beachy_head_lighthouse_east_2.jpg"
                            alt="A picture of a lighthouse"
                        />
                        <div
                            style={{
                                width: "175px",
                                height: "50px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Diya Shah.
            </p>
        </div>
    );
}

export default App;
