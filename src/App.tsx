import React from "react";
import "./App.css";
import huskypic from "./assets/huskypick.png";
import { Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Gabe B, Hello World.
            </p>
            <h1>
                this is my header, this is cool
                <img
                    src={huskypic}
                    alt="A picture of a husky"
                    className="husky"
                />
            </h1>
            cool things about this husky
            <ol>
                <li>he is tiny</li>
                <li>he is soft</li>
                <li>he can do a backflip</li>
            </ol>
            <button
                className="btn btn-primary"
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "100px",
                                height: "50px",
                            }}
                        >
                            hellos
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "100px",
                                height: "50px",
                            }}
                        >
                            hellos
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "100px",
                                height: "50px",
                            }}
                        >
                            hellos
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
