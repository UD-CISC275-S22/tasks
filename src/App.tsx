import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import img from "./jelliesBackground.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "red" }}>
                Olivia Folliard UD CISC275 with React Hooks and TypeScript
            </header>
            <header className="App-header" style={{ backgroundColor: "blue" }}>
                Hello
            </header>
            <Container>
                <Row>
                    <Col>
                        <h1>First column.</h1>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                    <Col>
                        <header>Jellies!</header>
                        <img src={img} alt="A picture of jellyfish." />
                        <ul>
                            <li>jellyfish live in the ocean</li>
                            <li>some jellies glow in the dark</li>
                            <li>there is a kind of jelly that is immortal</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("I am logged")}>Click Me</Button>
            <header> Hello World! </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
