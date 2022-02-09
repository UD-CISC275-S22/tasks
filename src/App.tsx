import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is a header text</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Andrew Long was here! Hello World
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
                <ul>
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </ul>
                <img
                    src="https://www.looper.com/img/gallery/things-only-adults-notice-in-shrek/intro-1573597941.jpg"
                    alt="Shrek.png"
                />
                <Container>
                    <Row>
                        <Col>
                            <div className="C1">
                                <p>First Rectangle</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="C2">
                                <p>Second Rectangle</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </p>
        </div>
    );
}

export default App;
