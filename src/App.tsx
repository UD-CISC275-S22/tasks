import React from "react";
import "./App.css";
import Oreo from "../src/assets/images/Oreo-burger.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UD CISC275 with React Hooks and TypeScript</h1>
                <img src={Oreo} width="200" height="200" alt="Oreo Burger" />
            </header>
            <p>Hello World!</p>
            <Container>
                <Row>
                    <Col>
                        <div className="rectangle"></div>
                        <ul>
                            <li>My Name is Bing</li>
                            <li>unordered lists I trying</li>
                            <li>totally not rhyming</li>
                        </ul>
                    </Col>
                    <Col>
                        <div className="rectangle"></div>
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
