import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks & TypeScript
                <p>Alex M</p>
                <p>Hello World</p>
            </header>
            <Container>
                <Row>
                    <Col
                        style={{
                            backgroundColor: "red",
                            width: "100px",
                            height: "300px",
                            margin: "30px"
                        }}
                    >
                        <div>
                            <h1>This is my header!</h1>
                            <img
                                src={require("./images.png")}
                                alt={"Capital Letter A"}
                            />
                        </div>
                    </Col>
                    <Col
                        style={{
                            backgroundColor: "red",
                            width: "100px",
                            height: "300px",
                            margin: "30px"
                        }}
                    >
                        <div>
                            <ol>
                                <li className="lists">This</li>
                                <li className="lists">Is</li>
                                <li className="lists">My</li>
                                <li className="lists">Website</li>
                            </ol>
                            <Button onClick={() => console.log("Hello World!")}>
                                Log Hello World
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br />
            <br />

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
