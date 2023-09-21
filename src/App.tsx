import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by Cameron Wine
            </header>
            <p>
                Hello World Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
            </p>
            <Container>
                <Row>
                    <Col>
                        <h3>This is gonna be bananas</h3>
                        <img
                            src="https://cdn.discordapp.com/attachments/469333219037151272/1149176810676949073/mp2dk.jpg"
                            alt="Donkey Kong wearing a sweet cowboy costume"
                        />
                        <div className="rectangle">This is a rectangle</div>
                    </Col>
                    <Col>
                        <ul>
                            <li>Bigger</li>
                            <li>Faster</li>
                            <li>Stronger too</li>
                        </ul>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <div className="rectangle">
                            This is another rectangle
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
