import React from "react";
import mark from "./mark.jpg.webp";
import "./App.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Hello World
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Jacob Wilber
            </p>
            <h1>Mark Zuckerberg</h1>
            <img src={mark} alt="picture of Mark Zuckerberg" />
            <ul>
                <li>CEO of Meta</li>
                <li>Harvard Dropout</li>
                <li>Founded Facebook at the age of 19</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <div>
                <Container>
                    <Row>
                        <Col>
                            Red Box #1
                            <div className="Red-Box"></div>
                        </Col>
                        <Col>
                            Red Box #2
                            <div className="Red-Box"></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
