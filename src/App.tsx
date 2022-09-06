import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD + Shreeya CISC275 with React Hooks and TypeScript
            </header>
            <Container>
                <Row>
                    <Col>
                        <h1>Studio Ghibli Films</h1>
                        <img
                            src="https://m.media-amazon.com/images/M/MV5BNzQ0OTcwNDY3MF5BMl5BanBnXkFtZTgwODc1MTMyMDE@._V1_.jpg"
                            alt="Spirited Away"
                        />
                        Top Three Films:
                        <ol>
                            <li>Spirited Away</li>
                            <li>Howls Moving Castle</li>
                            <li>Ponyo</li>
                        </ol>
                        <div
                            style={{
                                border: "1px solid red",
                                width: "100px",
                                height: "300px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>

                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload. Hello World
                        </p>
                        <div
                            style={{
                                border: "1px solid red",
                                width: "100px",
                                height: "300px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
