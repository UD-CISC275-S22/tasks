import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import file from "../public/funny.jpeg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by Carter McCabe!
            </header>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World!
            </p>

            <h1>I love headers. Here are some other things I like:</h1>

            <ol>
                <li>Video Games</li>
                <li>Monkeys</li>
                <li>Guitars</li>
            </ol>

            <img src={file} alt="funny computer science meme" />

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>

            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "200px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "200px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <div></div>
        </div>
    );
}

export default App;
