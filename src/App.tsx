import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import image from "./Getaway.png";
import image2 from "./Vibes1.png";
import image3 from "./Vibes2.png";

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
                            <img src={image2} alt="Sunshine" />
                            <img src={image3} alt="7/11" />
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
