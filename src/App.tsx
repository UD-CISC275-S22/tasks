import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <div>
                <header className="App-header">
                    UD CISC275 & Solenn Web Application
                </header>
            </div>
            <div>
                <h1>About My Fav Dog: Shar Peis!</h1>
            </div>
            <div>
                <p>
                    Hello World! I wanted to edit <code>src/App.tsx</code> to
                    talk about Shar Peis.. Press on the following button to get
                    started
                </p>
            </div>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            Shar Pei characterisitics:
                            <ul>
                                <li>Loyal</li>
                                <li>Good guardians</li>
                                <li>Calm, confident nature</li>
                                <li>Wrinkles = body armor</li>
                                <li>Hippopotamus head</li>
                            </ul>
                            <div
                                style={{
                                    width: "50px",
                                    height: "75px",
                                    background: "red"
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <img
                                src="https://assets.isu.pub/document-structure/220703215506-5872fb615885558efc1b7df1fad1fc34/v1/eff7ed95da29d0dc2544ff730af45803.jpeg"
                                alt="A picture of a Shar Pei"
                            />
                            <div
                                style={{
                                    width: "50px",
                                    height: "75px",
                                    background: "red"
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
