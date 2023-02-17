import React from "react";
import "./App.css";
import milo from "./assets/milo.png";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Emma Frampton
            </header>
            <h1>This is a header!</h1>
            <img src={milo} alt="A picture of my childhood dog Milo" />
            <p>
                Hello World! Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
            </p>
            <h2>Classes I am taking Spring 2023:</h2>
            <ul>
                <li>CISC275</li>
                <li>CISC320</li>
                <li>CISC374</li>
                <li>CISC355</li>
                <li>EDUC421</li>
                <li>EDUC450</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        hi
                        <div
                            style={{
                                backgroundColor: "#FF0000",
                                width: 300,
                                height: 500
                            }}
                        ></div>
                    </Col>
                    <Col>
                        Second column. You can put whatever you want in here,
                        and it will be on the right side. Maybe try adding an
                        image?
                        <div
                            style={{
                                backgroundColor: "#FF0000",
                                width: 300,
                                height: 200
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
