import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import image from "./Getaway.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    <span style={{ color: "white" }}>CISC275</span>
                </h1>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </header>

            <div>
                <Container>
                    <Row>
                        <Col>
                            <img src={image} alt="Purity" />
                        </Col>
                        <Col>
                            Prices:
                            <ul>
                                <li>$10,000</li>
                                <li>$20,500</li>
                                <li>$FREE</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="Rectangle"></div>
        </div>
    );
}

export default App;
