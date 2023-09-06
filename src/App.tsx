import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>I dont know what Im doing!</h1>
            <img
                src="../assets/images/Lola.jpg"
                alt="A picture of my dog Lola when she was tired."
            />
            <p>BUT IM DOING IT!</p>
            <ol>
                Things I like to do:
                <li>Play video games</li>
                <li>Spend time with friends and family</li>
                <li>Cook</li>
            </ol>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "20px",
                                height: "20px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        PB&J
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "20px",
                                height: "20px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        Best sandwich ever
                    </Col>
                </Row>
            </Container>
            <p>Hello World</p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
