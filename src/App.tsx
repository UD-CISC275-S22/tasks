import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import logo from "./images/Bonzo.png";


function App(): JSX.Element {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript
                </header>
                <p>
                    <span style={{ color: "red" }}>Aidan Eyre</span>
                </p>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload. Hello World!
                </p>
            </div>
            <div>
                <h1>This is a header</h1>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            {" "}
                            Best Drummers
                            <ul>
                                <li>John Bonham</li>
                                <li>Keith Moon</li>
                                <li>Aidan Eyre</li>
                            </ul>
                            <div
                                id="rectangle"
                                style={{
                                    width: 200,
                                    height: 100,
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <img
                                src={logo}
                                alt="John Bonham, greatest drummer"
                            />
                            <div
                                id="rectangle"
                                style={{
                                    width: 200,
                                    height: 100,
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            ;
        </>
    );
}

export default App;
