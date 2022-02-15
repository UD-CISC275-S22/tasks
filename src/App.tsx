import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    {" "}
                    UD CISC275 with hello world React Hooks and TypeScript
                    mathias heider
                </h1>
                <Container>
                    <Row>
                        <Col>
                            <ul>
                                <div
                                    style={{
                                        width: "500px",
                                        height: "500px",
                                        backgroundColor: "#FF0000"
                                    }}
                                >
                                    {" "}
                                </div>
                                <li>one fish</li>
                                <li>two fish</li>
                                <li>red fish</li>
                                <li>blue fish</li>
                            </ul>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "500px",
                                    height: "500px",
                                    backgroundColor: "#FF0000"
                                }}
                            >
                                {" "}
                            </div>
                            <Button onClick={() => console.log("Hello World!")}>
                                Log Hello World
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG"
                    alt="big panda"
                />
            </p>
        </div>
    );
}

export default App;
