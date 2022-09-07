import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Harleen Chahal + UD CISC275 with React Hooks and TypeScript.
                Hello World
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Container>
                <Row>
                    <Col>
                        <div className="Rectangle"></div>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                    <Col>
                        <div className="Rectangle"></div>
                        <h1>Pretty Sights</h1>
                        <img
                            src="./IMG_7304.JPG"
                            alt="Picture of sunrise at the beach."
                        />
                        <ul>
                            <li>Sunrise</li>
                            <li>Sunset</li>
                            <li>Moonlight</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
