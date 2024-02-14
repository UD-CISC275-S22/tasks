import React from "react";
import logo from "./assets/ardy.png";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header></header>
            <h1 className="App-heading"> James Paul Healy UD CISC275</h1>
            <p className="App-logo">Hello World</p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col className="App-text">
                        <ul>
                            Do not put the following items in the deep frier:
                            <li>Ice</li>
                            <li>Airpods</li>
                            <li>Rats</li>
                        </ul>
                    </Col>
                    <Col>
                        <img src={logo} alt="You ardy know" />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                height: 200,
                                width: 50,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                height: 200,
                                width: 50,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
