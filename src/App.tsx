import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";

import familyGathering from "./assets/family-gathering.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UD CISC275 with React Hooks and TypeScript</h1>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Roger Cronin. Hello World!
            </p>
            <img src={familyGathering} alt="oops" className="dogs" />
            <ul>
                <li>This is the first item</li>
                <li>This is the second item</li>
                <li>This is the third item</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: 100,
                                height: 100
                            }}
                        >
                            <p>Column 1 :)</p>
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: 100,
                                height: 100
                            }}
                        >
                            <p>Column 2 :(</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
