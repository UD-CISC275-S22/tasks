import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import img from "./assets/stubtoe.jpg";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>
                Hello People! I have arrived, and I am William Sharp I hope your
                day is wonderful!
            </h1>
            <img src={img} alt="A picture of a an alien dog" />
            <ul>
                <li>Make the bread</li>66
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
