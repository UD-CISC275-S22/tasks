import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Sara Noor UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Hello World</h1>
            <Container>
                <Row>
                    <Col>
                        Things I like to do:
                        <ul>
                            <li>I like photography.</li>
                            <li>I like to code.</li>
                            <li>I like to go out to eat.</li>
                        </ul>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <div
                            style={{
                                width: 100,
                                height: 50,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <img
                            src="https://i.etsystatic.com/20158337/r/il/6f243d/2359030151/il_340x270.2359030151_88d0.jpg"
                            alt="Picture of a dusty pink flower"
                        />
                        <div
                            style={{
                                width: 100,
                                height: 50,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
