import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import logo from "./assets/Moon River copy.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Welcome To My Website!</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. I am Michael Lorang. Hello World
            </p>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div className="App-box"></div>
                            Some fun facts about me
                            <ul>
                                <li>I am the one who knocks</li>
                                <li>I love exercising</li>
                                <li>
                                    I have some prior expereince to software
                                    development
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            A column of red boxes. How exciting!!!
                            <div className="App-box"></div>
                            <div className="App-box"></div>
                            <div className="App-box"></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <p>
                <img src={logo} alt="Moon RIver" />
            </p>
        </div>
    );
}

export default App;
