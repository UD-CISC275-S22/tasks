import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Matthew Holinger
                Hello World!
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div style={{ border: "10px solid blue", padding: "3px" }}>
                <h1>Hey, this is my header</h1>
            </div>
            <Container>
                <Row>
                    <img
                        src="https://images.ctfassets.net/cnu0m8re1exe/4txgybYHtUH0z6Dy9IIFGH/e9f4612ef512ae7ad8a580a39557e4d2/Glass_Frog.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill"
                        alt="A cute frog"
                    />
                    <Col>
                        <div className="red-box"> </div>
                        <ul>
                            <li>Apples</li>
                            <li>Bananas</li>
                            <li>Oranges</li>
                        </ul>
                    </Col>
                    <Col>
                        <div className="red-box"> </div>
                    </Col>
                </Row>
            </Container>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
        </div>
    );
}

export default App;
