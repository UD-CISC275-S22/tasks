import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import img from "./assets/F-350 Front Right.jpg";
function App(): JSX.Element {
    return (
        <div className="App">
            <h1 className="App-header" style={{ backgroundColor: "#7B3702" }}>
                Hello People! I have arrived, and I am William Sharp UD CISC275
                I hope your day is wonderful!
            </h1>
            <img src={img} alt="A picture of a big ol truck" />
            <ul>
                <li>Make the bread</li>
                <li>Spend the bread</li>
                <li>Make the bread again</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>

            <Container>
                <Row>
                    <Col>
                        <div className="rectangle"></div>
                    </Col>
                    <Col>
                        <div className="rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
