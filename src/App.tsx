import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import catcircle from "./catcircle.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript and also Kai Winterle
            </header>
            <p>
                Hello World! Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
            </p>
            <h1>Ying and Yang(Jack and Snowpuff)</h1>
            <Container>
                <Row>
                    <Col>
                        <div className="Red-Rect"></div>
                        <img
                            src={require("./catcircle.png")}
                            alt="My children"
                        />
                    </Col>
                    <Col>
                        <div className="Red-Rect"></div>
                        <ul>
                            <li>Cats in a basket</li>
                            <li>What are they going to do</li>
                            <li>Probably snuggle</li>
                        </ul>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
