import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";
import hand from "./Piano-Hand.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>

            <Container>
                <Row>
                    <Col className="App-div">
                        First colomn
                        <img
                            className="App-hand"
                            src={hand}
                            alt="A picture from my Senior Project"
                        />
                    </Col>
                    <Col className="App-div">
                        Second colomn
                        <ul>
                            <li>
                                This is a &apos;hand&apos; that moves right and
                                left
                            </li>
                            <li>The hand will also depress the keys</li>
                            <li>
                                The combination of these two things will allow
                                it to play the piano
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <h1>Test Header</h1>

            <p>
                Hello World Edit <code>src/App.tsx</code> and save. This page
                will automatically reload. Justin Clavette
            </p>
        </div>
    );
}

export default App;
