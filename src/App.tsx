import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>
                <span style={{ backgroundColor: "green" }}>heading</span>
            </h1>
            <img src="C:\Users\shaha\Downloads\IMG_1600.jpg" alt="My picture" />
            <ul>
                <li>I</li>
                <li>am</li>
                <li>not</li>
                <li>perfect</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "3px",
                                height: "1px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "3px",
                                height: "1px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <header className="App-header">
                Hello World UD CISC275 with React Hooks and TypeScript, neelam
                Hello World
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
