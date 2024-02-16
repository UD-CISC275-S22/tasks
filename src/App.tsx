import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

export function App(): JSX.Element {
    return (
        <>
            <>
                <>
                    <>
                        <>
                            <>
                                <>
                                    <>
                                        <></>
                                        <div className="App">
                                            <header className="App-header">
                                                UD CISC275 with React Hooks and
                                                TypeScript - Hello world -
                                                Created by Tolu Akin
                                            </header>
                                            <p>
                                                Edit <code>src/App.tsx</code>{" "}
                                                and save. This page will
                                                automatically reload.
                                            </p>
                                        </div>
                                        <div>
                                            <Button
                                                onClick={() =>
                                                    console.log("Hello World!")
                                                }
                                            >
                                                Log Hello World
                                            </Button>
                                        </div>
                                    </>
                                    <>
                                        <p>
                                            This is just a paragraph of text. It
                                            can go onto multiple lines, if you
                                            want.
                                        </p>
                                    </>
                                </>
                                <>
                                    <div>
                                        <h1>Hello World</h1>
                                        <p>How are you doing today?</p>
                                    </div>
                                </>
                            </>
                            <div>
                                List:
                                <ul>
                                    <li>item 1</li>
                                    <li>item 2</li>
                                    <li>item 3</li>
                                </ul>
                            </div>
                        </>
                        <div>
                            <img src="verse.jpg" alt="cool bg" />
                        </div>
                    </>
                    <div style={{ border: "1px solid blue", padding: "4px" }}>
                        this will be surrounded by a border and padding.
                    </div>
                </>
                <div>
                    This is <span style={{ color: "red" }}>colored text</span>.
                </div>
            </>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "40px",
                                    height: "80px",
                                    backgroundColor: "#FF1818"
                                }}
                            ></div>
                            First column.
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "40px",
                                    height: "80px",
                                    backgroundColor: "#FF4848"
                                }}
                            ></div>
                            Second column.
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default App;
