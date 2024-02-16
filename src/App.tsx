import React from "react";
import "./App.css";
import logo from "./logo.png";
import { Col, Container, Row, Button } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <div className="header">
                <img src={logo} alt=" " />
                <header className="App-header">Welcome to Junpuyin</header>
            </div>

            <div className="content">
                <body>
                    <p>Hello World!!! </p>
                </body>
                <div>
                    Unordered List:
                    <ul>
                        <li>First thing</li>
                        <li>Another thing</li>
                        <li>A third item</li>
                        <li>Other</li>
                    </ul>
                </div>
                <div>
                    <Button onClick={() => console.log("Hello World!")}>
                        Log Hello World
                    </Button>
                </div>
            </div>
            <div className="list">
                <Container>
                    <Row>
                        <Col>
                            <p>I am badman</p>
                        </Col>
                        <Col>
                            <p>I am superman</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="title">
                <h1>CISC275 Junpuyin Wei</h1>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload.
                </p>

                <p>Junpuyin Wei</p>
            </div>
        </div>
    );
}

export default App;
