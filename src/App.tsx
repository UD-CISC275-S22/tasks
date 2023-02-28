import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <b>Made by Robert Oratorio</b>
            </header>
            <h1>Test</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <ul>
                <li>list item 1</li>
                <li>list item 2</li>
                <li>list item 3</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div className="red_rec"></div>
                    </Col>
                    <Col>
                        <div className="red_rec"></div>
                    </Col>
                </Row>
            </Container>
            <img
                src="https://content.sportslogos.net/logos/31/657/full/delaware_blue_hens_logo_primary_1999_sportslogosnet-4605.png"
                alt="Italian Trulli"
            ></img>
        </div>
    );
}

export default App;
