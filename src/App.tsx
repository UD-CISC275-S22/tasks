import React from "react";
import "./App.css";
import space from "./space.jpg";
import { Button, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1 style={{ backgroundColor: "gray" }}>Explore The Space</h1>
            <img src={space} width="400" height="200" alt="Space Photo" />
            <ul>
                <li>Earth</li>
                <li>Moon</li>
                <li>Sun</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>Nazmul Hossain</p>
            <p>Hello World</p>
            <Container>
                <Row>
                    <Col>
                        <p>COlUMN 1</p>
                        <div
                            style={{
                                width: "600px",
                                height: "700px",
                                backgroundColor: "red",
                                marginBottom: "20px"
                            }}
                        ></div>
                    </Col>

                    <Col>
                        <p>COlUMN 2</p>
                        <div
                            style={{
                                width: "600px",
                                height: "700px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
