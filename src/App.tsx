import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript: Hello World, This is
                Olive Odida
            </header>
            <h2>This is a new secondary header</h2>
            <img
                src="/src/dollar_coin.jpg"
                alt="A picture of a two dollar coin"
                width="500"
                height="500"
            />
            <ul>
                <li>Blacklist</li>
                <li>Love is Blind</li>
                <li>Avatar the Last Airbender</li>
                <li>Beyond the Boundary</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        First Column return{" "}
                        <div
                            style={{
                                border: "100px solid red",
                                padding: "0px"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        Second Column return{" "}
                        <div
                            style={{
                                border: "100px solid red",
                                padding: "0px"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
