import React, { useState } from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import ugway from "./assets/ugway.jpeg";

function App(): JSX.Element {
    const [x, setX] = useState(0);
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div className="counter-container">
                <Button className="button" onClick={() => setX(x + 1)}>
                    +
                </Button>
                <div>{x}</div>
                <Button className="button" onClick={() => setX(x - 1)}>
                    -
                </Button>
            </div>
            <p>Michael Lutz</p>
            <p>Hello World</p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                    style={{
                        width: `${x * 5 + 200}px`,
                        height: `${x * 5 + 200}px`,
                        borderRadius: "50%",
                        display: "block"
                    }}
                    src={ugway}
                    alt="master ugway meditates"
                />
            </div>
            <h1>Master Ugway To-Do list</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <ul style={{ textAlign: "left" }}>
                    <li>Meditate in the peach blossom garden</li>
                    <li>Reflect on the balance of yin and yang</li>
                    <li>Share wisdom and guidance</li>
                    <li>Guide the dragon warrior</li>
                </ul>
            </div>
            <Container style={{ marginBottom: "50px" }}>
                <Row>
                    <Col>
                        <div
                            style={{
                                height: "50px",
                                width: "50px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                height: "50px",
                                width: "50px",
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
