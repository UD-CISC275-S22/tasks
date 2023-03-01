import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>

            <div> Name: Farhan Ohe </div>
            <div>Hello World</div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <div style={{ border: "6px solid maroon", padding: "4px" }}>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
                <h1>Hello Welcome to My website</h1>
                <Container>
                    <Row>
                        <Col
                            style={{
                                border: "6px solid maroon",
                                padding: "4px"
                            }}
                        >
                            <p>Image of my fav car brand</p>
                            <img
                                src="https://di-uploads-pod16.dealerinspire.com/competitionbmwofsmithtown/uploads/2020/03/new-bmw-logo.jpg"
                                alt="Logo of Favourite car brand"
                                width={"500"}
                                height={"300"}
                            />
                            <div>
                                <div
                                    className="redBox"
                                    style={{
                                        backgroundColor: "red",
                                        width: "80px",
                                        height: "80px"
                                    }}
                                ></div>
                            </div>
                        </Col>

                        <Col
                            style={{
                                border: "6px solid maroon",
                                padding: "4px"
                            }}
                        >
                            <p>
                                <span style={{ color: "maroon" }}>
                                    Making a list of my favourite cars
                                </span>
                            </p>
                            <ul>
                                <li>Lexus LFA</li>
                                <li>Any Generation of BMW M Cars</li>
                                <li>Audi R8 V10</li>
                            </ul>
                            <div>
                                <div
                                    className="redBox"
                                    style={{
                                        backgroundColor: "red",
                                        width: "200px",
                                        height: "200px"
                                    }}
                                ></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
