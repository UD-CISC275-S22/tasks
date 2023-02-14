import React from "react";
import "./App.css";
import creature from "./assets/creature.png";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript. Edited by Brendan
                Lewis.
            </header>
            <h1 id={"heading"}>Amazing, this is a heading!</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World! Nice.
            </p>
            <p>Wow now there&apos;s a list!! What will happen next?????</p>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
            <img src={creature} alt={"the creature stirs"} />
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "200px",
                                height: "200px",
                                backgroundColor: "red"
                            }}
                        >
                            First column.
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "200px",
                                height: "200px",
                                backgroundColor: "red"
                            }}
                        >
                            Second column. You can put whatever you want in and
                            it will be on the right side. Maybe try adding an
                            image? Nah I&apos;m good thanks 😊
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
