import React from "react";
import "./App.css";
import City from "./Cityscape.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1>Welcome I am Davyn Savage</h1>
            <Container>
                <Row>
                    <Col>
                        <ul>
                            <li className="Rectangle">
                                I like to go by savage
                            </li>
                            <li>
                                My name is pronounced the same way you would
                                divine
                            </li>
                            <li>
                                I dislike having to correct how people say name
                                name so I go by Savage
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        return{" "}
                        <img
                            className="Rectangle"
                            src={City}
                            alt="A picture of a city"
                        />
                    </Col>
                </Row>
            </Container>
            <p>Davyn Savage</p>
            <p>Hello World</p>
            return{" "}
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
        </div>
    );
}

export default App;
