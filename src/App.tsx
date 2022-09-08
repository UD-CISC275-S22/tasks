import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <Container>
                <Row>
                    <Col>
                        <img
                            src="https://www.animalspot.net/wp-content/uploads/2020/01/Types-of-Beetles.jpg"
                            alt="different types of beetles"
                            style={{ height: "400px" }}
                        />
                    </Col>
                    <Col>
                        <h3>Types of beetles</h3>
                        <ul>
                            <li>Cool ones</li>
                            <li>Small ones</li>
                            <li>Big ones</li>
                            <li>Shiny ones</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>

            <div
                style={{
                    height: "200px",
                    width: "250px",
                    backgroundColor: "red"
                }}
            ></div>
        </div>
    );
}

export default App;
