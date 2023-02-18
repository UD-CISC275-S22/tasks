import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>Website</h1>
            <img src={require("./drakepic.png")} alt="Drake" width={"40%"} />
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Nicholas Lago
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div className="twoColumn">Column 1.</div>
                    </Col>
                    <Col>
                        <div className="twoColumn">Column 2.</div>
                    </Col>
                </Row>
            </Container>
            <ul>
                <li>Drake</li>
                <li>Drake</li>
                <li>Drake</li>
                <li>Drake</li>
                <li>Drake</li>
            </ul>
        </div>
    );
}

export default App;
