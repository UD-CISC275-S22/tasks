/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import forest from "./images/forest.png";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by Quinten Bettin
            </header>
            <h1 className="App-joke">
                when im not coding, I actually touch grass, unlike some of
                yall...
            </h1>
            <Container>
                <Row>
                    <Col>
                        <div className="imgtxt">
                            <p>me walking up a path to a cliff jumping spot</p>
                        </div>
                    </Col>
                    <Col>
                        <img
                            className="forest-pic"
                            src={forest}
                            height={270}
                            width={480}
                            alt="forest"
                        />
                    </Col>
                </Row>
            </Container>
            <ul>
                <li>3 fun facts about me:</li>
                <li>I am 6'6" and can backflip (on ground)</li>
                <li>I often use adobe after effects to edit videos</li>
                <li>I love cliff jumping</li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        <div className="rectangle1"></div>
                    </Col>
                    <Col>
                        <div className="rectangle2"></div>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>Hello World</p>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World</p>
        </div>
    );
}

export default App;
