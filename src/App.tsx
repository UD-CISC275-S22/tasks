import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "#2cbb04" }}
            >
                UD CISC275 with React Hooks and TypeScript, BBank
            </header>
            <h1>H1</h1>
            <img
                src={require("./Untitled drawing.png")}
                alt="a random google drawing"
            />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World.
            </p>
            <ul>
                <li>Thing 1</li>
                <li>Thing 2</li>
                <li>Thing 3</li>
            </ul>
            <div style={{ border: "5px solid blue", padding: "5px" }}></div>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "500px",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        Col1
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "500px",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        Col2
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
