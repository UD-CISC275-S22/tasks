import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Ian Steele UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Hejjj</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col className="col">Hej</Col>
                    <Col className="col">
                        <img
                            src="https://i.kym-cdn.com/photos/images/masonry/002/363/364/447.png"
                            alt="It's over"
                        />
                    </Col>
                </Row>
            </Container>
            <ul>
                <li>I</li>
                <li>Hate</li>
                <li>School</li>
            </ul>
        </div>
    );
}

export default App;
