import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import catPic from "./assets/bella.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1> Welcome to a page about my cat</h1>
                <img src={catPic} alt="A picture of my cat Bella" />
                Hello World. UD CISC275 with React Hooks and TypeScript. Sydney
                Segear.
            </header>
            Reasons I like my cat:
            <ul>
                <li>She is cute</li>
                <li> She is small</li>
                <li> She can sometimes be nice</li>
            </ul>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            Edit <code>src/App.tsx</code> and save. This page will automatically
            reload.
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "60px",
                                backgroundColor: "#FF0000"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "60px",
                                backgroundColor: "#FF0000"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
