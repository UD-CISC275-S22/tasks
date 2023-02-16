import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>ZhongYi Jiang task3</h1>
            <img src={require("./images/jzy.jpg")} alt="A picture of me" />
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "100px",
                                height: "100px"
                            }}
                        >
                            First column:
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "100px",
                                height: "100px"
                            }}
                        >
                            Second column:
                        </div>
                    </Col>
                </Row>
            </Container>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <ul>
                <li>My name is ZhongYi Jiang</li>
                <li>I am a senior student</li>
                <li>My major is Computer Science</li>
            </ul>
        </div>
    );
}

export default App;
