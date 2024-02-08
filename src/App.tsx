import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Hello World Corey Mitterer UD CISC275 with React Hooks and
                TypeScript
            </header>
            <h1>This is a tree</h1>
            <img
                src="https://cdn.pixabay.com/photo/2017/01/31/22/47/tree-2027899_640.png"
                alt="A picture of a tree"
            />
            <ul>
                <li>The bark is brown</li>
                <li>The leaf is green</li>
                <li>The Tree is a tree</li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        First Column
                        <div className="rectangle"></div>
                    </Col>
                    <Col>
                        This is the Second
                        <div className="rectangle"></div>
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
