import React from "react";
import "./App.css";
import orange from "./download.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col style={{ border: "1px solid red", padding: "4px" }}>
                        First column. Where is it
                    </Col>
                    <Col style={{ border: "1px solid red", padding: "4px" }}>
                        <header className="App-header">
                            UD CISC275 with React Hooks and TypeScript. By
                            Jordan Photis
                        </header>
                        <h1>This is header text</h1>
                        <img src={orange} alt="A picture of a dog 1" />
                        <ul>
                            <li>First item</li>
                            <li>Another item</li>
                            <li>A third item that is not the other items</li>
                        </ul>

                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <div></div>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload. Hello World. Some tweaks.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
