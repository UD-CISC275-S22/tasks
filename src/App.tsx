import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div
            className="App"
            style={{ border: "1px solid blue", padding: "4px" }}
        >
            <header className="App-header">
                Hello World, Joshua Artis in UD CISC275 with React Hooks and
                TypeScript
            </header>
            <h1>This is header text</h1>;
            <img
                src="C:\Users\beamf\tasks\src\land.jpg"
                alt="A picture of land"
            />
            Ordered List:
            <ol>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                {" "}
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <div
                        className="ColStyle"
                        style={{ border: "1px solid red", padding: "4px" }}
                    >
                        <Col xs={6}>First column.</Col>
                    </div>
                    <Col>Second column.</Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
