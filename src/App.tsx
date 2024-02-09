import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Christopher Rasquin. Hello World
            </p>
            <h1>Cool Image Here</h1>
            <img src={"Green,_yellow_snake"} alt="Its a cool snake" />
            Movie List:
            <ol>
                <li>The Hateful Eight</li>
                <li>Kill Bill</li>
                <li>Django Unchained</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div className="rectangle"></div>
                    </Col>

                    <Col>
                        <div className="rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
