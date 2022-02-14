import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        A column to rule them all
                        <div
                            style={{
                                height: "150px",
                                width: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        <h1>I am a Header</h1>
                        <img
                            src="data:image/jpeg;base64,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"
                            alt="A photo of bepis man"
                        />
                        <ul>
                            <li>A thing</li>
                            <li>Another thing</li>
                            <li>One more thing</li>
                        </ul>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                    <Col>
                        A second column to rule them all
                        <div
                            style={{
                                height: "150px",
                                width: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        <div className="Red_Rect"></div>
                        <header className="App-header">
                            UD CISC275 Hello World John Neilson
                        </header>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
