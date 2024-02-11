import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

export function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Hello World Rushil Kaushik UD CISC275 with React Hooks and
                TypeScript
            </header>
            <h1>This is a header</h1>
            <img
                className="App-image"
                src={require("../src/bus.jpeg")}
                alt="Picture of the front of a bus"
            />
            <ul>
                Things I like
                <li>Money</li>
                <li>Cars</li>
                <li>Food</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div>
                <Container>
                    <Row>
                        <Col>
                            First column
                            <p>nothing in here</p>
                            <div className="Rect"></div>
                        </Col>
                        <Col>
                            Second column
                            <p>nothing in here either</p>
                            <div className="Rect"></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
