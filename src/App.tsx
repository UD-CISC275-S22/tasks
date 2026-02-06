import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import wisin from "./wisin.jpg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "red" }}>
                <h1>
                    <span style={{ color: "blue" }}>
                        {" "}
                        UD CISC275 with React Hooks and TypeScript
                    </span>
                </h1>

                <ul>
                    <li>Ri</li>
                    <li>cardo</li>
                    <li>Fort</li>
                </ul>
            </header>
            <img src={wisin} alt="wisin y yandel" />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Jeremias Brana Tonelli. Hello World
            </p>

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>

            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                height: "120px",
                                width: "180px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                    <Col>
                        <div
                            style={{
                                height: "120px",
                                width: "180px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
