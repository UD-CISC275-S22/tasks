import React from "react";
import "./App.css";
import pizzaBox from "./assets/pizzaPC.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header"></header>
            <div style={{ backgroundColor: "#036b6b", color: "#c1c1c1" }}>
                <h1>
                    <strong>UD CISC275 with React Hooks and TypeScript</strong>
                </h1>
                <strong style={{ fontSize: 30 }}>
                    <em>Isaac Weber</em>
                </strong>
                <br></br>
                <br></br>
            </div>
            <div style={{ backgroundColor: "black" }}>
                <br></br>
                <div style={{ backgroundColor: "#a1586b" }}>
                    <br></br>
                    <br></br>
                    <strong style={{ color: "white", fontSize: 40 }}>
                        Hello World of Pizza Box Computing
                    </strong>
                    <Button
                        style={{ position: "fixed", top: 196, right: 0 }}
                        onClick={() => console.log("Hello World!")}
                    >
                        Log Hello World
                    </Button>
                    <br></br>
                    <Container
                        style={{
                            width: 1000,
                            height: 1000
                        }}
                    >
                        <Row>
                            <Col
                                style={{
                                    width: 250,
                                    height: 250,
                                    position: "relative",
                                    right: 30,
                                    top: 30
                                }}
                            >
                                <div
                                    style={{
                                        width: 540,
                                        height: 540,
                                        backgroundColor: "#64313E",
                                        color: "white"
                                    }}
                                >
                                    <br></br>
                                    <p style={{ color: "white", fontSize: 30 }}>
                                        Requirements
                                    </p>
                                    <ul style={{ textAlign: "left" }}>
                                        <li>
                                            <strong>Dominos Pizza</strong>
                                        </li>
                                        <li>
                                            <strong>Laptop</strong>
                                        </li>
                                        <li>
                                            <strong>Screw Driver</strong>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col
                                style={{
                                    width: 250,
                                    height: 250,
                                    position: "relative",
                                    left: 30,
                                    top: 30
                                }}
                            >
                                <div
                                    style={{
                                        width: 540,
                                        height: 540,
                                        backgroundColor: "#64313E"
                                    }}
                                >
                                    <img
                                        src={pizzaBox}
                                        alt="My Computer"
                                        style={{
                                            width: 500,
                                            height: 500,
                                            position: "relative",
                                            top: 20
                                        }}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically self destruct in five seconds.
            </p>
        </div>
    );
}

export default App;
