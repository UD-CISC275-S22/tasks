import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Behold the octopus.</h1>
            <Container>
                <Row>
                    <Col>
                        <div className="Red-Rect"></div>
                        <img
                            src={require("./octopus.jpg")}
                            alt="A picture of a colorful octopus"
                        />
                    </Col>
                    <Col>
                        <div className="Red-Rect"></div>
                        <ul>
                            <li>Octopuses have three hearts</li>
                            <li>
                                Octopuses have eyes that seperate white light
                                into its color components
                            </li>
                            <li>
                                Octupuses often die after mating and reproducing
                            </li>
                        </ul>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Edited by Drew Crispino. Hello World.
            </p>
        </div>
    );
}

export default App;
