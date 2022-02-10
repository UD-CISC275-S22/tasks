import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <section className="section">
                <h1>Aidan Tran</h1>
                <div className="orangutan__img">
                    <img
                        src={require("./orangutan.png")}
                        alt="picture of orangutan"
                    />
                </div>
                <Container>
                    <Row>
                        <Col>
                            <ul>
                                <li>Orangutan</li>
                                <li>Orangutan</li>
                                <li>Orangutan</li>
                            </ul>
                            <div className="red_rectangle"></div>
                        </Col>
                        <Col>
                            <Button
                                onClick={() => {
                                    console.log("Hello World!");
                                }}
                            >
                                Log Hello World
                            </Button>
                            <div className="red_rectangle"></div>
                        </Col>
                    </Row>
                </Container>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload. Hello World!
                </p>
            </section>
        </div>
    );
}

export default App;
