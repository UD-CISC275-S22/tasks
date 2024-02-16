import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript | David Bui
            </header>
            <p>Hello World</p>
            <h2> Second Header</h2>
            <div style={{ border: "1px solid red", padding: "4px" }}>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "red"
                                }}
                            >
                                First column.
                            </div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "red"
                                }}
                            >
                                <ul>
                                    <li>Unorder</li>
                                    <li>List</li>
                                    <li>Third Item</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
