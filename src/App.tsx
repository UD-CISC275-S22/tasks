import React from "react";
import "./App.css";
import img1 from "./images/mountain.jpg";
import { Button, Container, Row, Col } from "react-bootstrap";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <div>Stephen Wiafe</div>
            </header>
            <div>Hello World</div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1 style={{ background: "#ADD8E6" }}>Welcome to my page</h1>
            <Container>
                <Row>
                    <Col>
                        <p>Column 1</p>
                        <img
                            style={{
                                width: "500px",
                                height: "300px"
                            }}
                            src={img1}
                            alt="An image of a mountain"
                        />
                        <div>
                            <div
                                className="redBox"
                                style={{
                                    backgroundColor: "red",
                                    width: "200px",
                                    height: "50px"
                                }}
                            ></div>
                        </div>
                    </Col>
                    <Col>
                        <ul>
                            <p>Column 2</p>
                            <li>basketball</li>
                            <li>soccer</li>
                            <li>tennis</li>
                        </ul>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <div
                            className="redBox"
                            style={{
                                backgroundColor: "red",
                                width: "200px",
                                height: "50px"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
