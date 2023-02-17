import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header
                style={{ backgroundColor: "purple", padding: "4px" }}
                className="App-header"
            >
                UD CISC275 with React Hooks and TypeScript(This is a Header)
            </header>
            <p>
                <Container>
                    <Row>
                        <Col>
                            <h1>Sreya website</h1>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload. Sreya Venkatesh Hello
                            World
                            <div>
                                <Button
                                    onClick={() => console.log("Hello World!")}
                                >
                                    Log Hello World
                                </Button>
                            </div>
                            <div
                                style={{
                                    backgroundColor: "red",
                                    width: 50,
                                    height: 40
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    backgroundColor: "red",
                                    width: 50,
                                    height: 40
                                }}
                            ></div>
                            To-do List:
                            <ol>
                                <li>Get Breakfast</li>
                                <li>Do Homework</li>
                                <li>Practice Piano</li>
                            </ol>
                            <img
                                src="https://excitedcats.com/wp-content/uploads/2020/07/yellow-cat-playing-piano_amenic181-Shutterstock.jpg"
                                alt="Cat playing piano"
                            />
                        </Col>
                    </Row>
                </Container>
            </p>
        </div>
    );
}

export default App;
