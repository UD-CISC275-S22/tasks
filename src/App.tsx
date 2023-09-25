import React from "react";
import "./App.css";
import img from "./Images/image.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "yellowgreen" }}
            ></header>
            UM COS420 with React Hooks and TypeScript
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1> Hello World, I am Shreyash Parajuli</h1>
            <img src={img} alt="A picture of a tree" />
            <ul>
                <li>Lion</li>
                <li>Tiger</li>
                <li>Panda</li>
                <li>Monkey</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                height: "50",
                                width: "25",
                                backgroundColor: "red"
                            }}
                        >
                            COLUMN 1
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                height: "50",
                                width: "25",
                                backgroundColor: "orange"
                            }}
                        >
                            COLUMN 2
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default App;
