import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Cat2 from "./CAT2.jpg";
import Cat1 from "./CAT1.jpg";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    UD CISC275 with React Hooks and TypeScript, Yuchen Zhang.
                    Hello World
                </h1>
            </header>
            <img
                height="40%"
                width="40%"
                src={Cat1}
                alt="A picture of my cat"
            />
            <Container>
                <div style={{ background: "red" }}>
                    <Row>
                        <Col>
                            <ul>
                                <li>FORD</li>
                                <li>DODGE</li>
                                <li>CHEVROLET</li>
                            </ul>
                        </Col>
                        <Col>
                            {" "}
                            <ul>
                                <li>Mustang</li>
                                <li>Challenger</li>
                                <li>Camaro</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Container>
            <span style={{ color: "red" }}></span>
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
