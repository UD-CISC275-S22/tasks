import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div>
            <div className="App">
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
                Unordered List:
                <ul>
                    <li>Thing1</li>
                    <li>Thing2</li>
                    <li>Thing3</li>
                </ul>
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript
                    <h1>New Header Text Goes here</h1>
                </header>
                <img
                    src={require("./assets/randcake.png")}
                    alt="A cursed picture of cake"
                />
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload. Name: Sean OSullivan. Hello World!!
                </p>
            </div>
            <div className="newdiv">
                <Container>
                    <Row>
                        <Col className="col1">
                            <p className="redbox"></p>
                        </Col>
                        <Col className="col2">
                            <p className="redbox"></p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
