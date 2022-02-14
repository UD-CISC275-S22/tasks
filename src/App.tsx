import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <header className="App-header">
                        <Col>
                            Rehan Amir UD CISC275 with React Hooks and
                            TypeScript
                        </Col>
                    </header>
                    <p>
                        <Col>
                            Edit <code>src/App.tsx</code> and save. This page
                            automatically reload. Hello World
                            <img
                                src=" https://pngimg.com/uploads/persimmon/persimmon_PNG86238.png"
                                width="300"
                                height="200"
                                alt="picture of a persimmon"
                            />
                        </Col>
                    </p>
                </Row>
            </Container>
        </div>
    );
}

export default App;
