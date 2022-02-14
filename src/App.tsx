import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./App.css";
import { Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <div
                style={{
                    border: "red",
                    height: "500",
                    width: "500",
                    backgroundColor: "red"
                }}
            >
                <Container>
                    <Row>
                        <Col>
                            <header className="App-header">
                                Ziyang Jiang UD CISC275 with React Hooks and
                                TypeScript Hello World
                            </header>
                        </Col>
                        <Col>
                            <h2>I love you. Dr.Bart</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
            <img
                src="/Users/ziyangjiang/Desktop/iron-man_marvel_silo.png"
                alt="A picture of Iron Man"
            />
            <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
