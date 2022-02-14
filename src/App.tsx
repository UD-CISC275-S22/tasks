import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Hello World</h1>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                border: "1px red",
                                backgroundColor: "red"
                            }}
                        >
                            <img
                                src="https://olympic.ca/wp-content/uploads/2019/09/bing-dwen-dwen.png"
                                alt="A picture of 2022 Winter Olympic mascot"
                                width="600"
                                height="360"
                            />
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                border: "1px solid red",
                                backgroundColor: "red"
                            }}
                        >
                            Fun facts:
                            <ul>
                                <li>
                                    The 2022 Winter Olympic is held in Beijing,
                                    China.
                                </li>
                                <li>The mascot is called Bing dwen dwen.</li>
                                <li>It is now popular worldwide.</li>
                            </ul>
                            <Button onClick={() => console.log("Hello World!")}>
                                Log Hello World
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Yiming Wang Hello World
            </p>
        </div>
    );
}

export default App;
