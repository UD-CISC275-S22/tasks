import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div
            className="App"
            style={{
                border: "15px solid purple",
                padding: "1px"
            }}
        >
            <header className="App-header">
                UD CISC275 Project by Rory Jordan, Hello World!
            </header>
            <div className="Container">
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "50px",
                                    height: "30px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                            <h1>This side is for text</h1>
                            <p>Here is some info about me!</p>
                            Favorite Foods:
                            <ol>
                                <li>Poke Bowls</li>
                                <li>Sushi</li>
                                <li>Sashimi</li>
                            </ol>
                            <Button onClick={() => console.log("Hello World!")}>
                                Log Hello World
                            </Button>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "50px",
                                    height: "30px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                            <p>Here is a cool cat.</p>
                            <img
                                src="https://st2.depositphotos.com/1000938/5499/i/450/depositphotos_54998613-stock-photo-ginger-cat.jpg"
                                alt="A picture of an Orange Cat"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
