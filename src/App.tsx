import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        {"first column"}
                        <header className="App-header">
                            Connor Nagle UD CISC275 with React Hooks and
                            TypeScript
                        </header>
                        <p>
                            Hello World Edit <code>src/App.tsx</code> and save.
                            This page will automatically reload.
                        </p>
                        <div
                            style={{
                                width: "99px",
                                height: "99px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        {"second column "}
                        <h1>this is a header</h1>
                        <ul>
                            <li> list element one </li>
                            <li> list element two </li>
                            <li> list element three </li>
                            <li> list element four </li>
                        </ul>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <br></br>
                        <img
                            src="https://th.bing.com/th/id/OIP.RGuAScO6NcgfsV7MygdKFAAAAA?pid=ImgDet&rs=1"
                            alt="Cheesy"
                        />
                        <div
                            style={{
                                width: "99px",
                                height: "99px",
                                backgroundColor: "#FF0000"
                            }}
                        >
                            red rect
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
