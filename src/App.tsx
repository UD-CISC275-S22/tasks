import React from "react";
import "./App.css";
import { Button, Col, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="Blueheader">
                    UD CISC275 with React Hooks and TypeScript Brandon Marafino
                    Hello World
                </h1>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Brandon Marafino test
            </p>
            <Row>
                <Col>
                    <img src={require("./Clouds.jpg")} alt="cloud image" />
                    <Button onClick={() => console.log("Hello World!")}>
                        Log Hello World
                    </Button>
                    <div className="uglysquare"></div>
                </Col>
                <Col>
                    <ul>
                        <li>one</li>
                        <li>two</li>
                        <li>three</li>
                    </ul>
                    <div className="uglysquare"></div>
                </Col>
            </Row>
        </div>
    );
}

export default App;
