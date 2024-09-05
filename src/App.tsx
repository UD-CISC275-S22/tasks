import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Tarun website</h1>
            <img src="../public/tasks/dog.jpg" alt="dog" />
            <div style={{ border: "1px solid blue", padding: "4px" }}>
                <ul>
                    <li>The Cat in the Hat</li>
                    <li>Thing 1</li>
                    <li>Thing 2</li>
                </ul>
            </div>
            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "72px",
                                    height: "96px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "72px",
                                    height: "96px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <p>
                Hello World Tarun Baskaran Edit <code>src/App.tsx</code> and
                save. This page will automatically reload.
            </p>
        </div>
    );
}

export default App;
