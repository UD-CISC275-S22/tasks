import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import SSPoster from "./SSPoster.jpg";

function App(): JSX.Element {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="App">
                        <header className="App-header">
                            UD CISC275 with React Hooks and TypeScript
                        </header>
                        <p>Jason Hensley Hello World</p>
                    </div>
                    <div>
                        style=
                        {{
                            width: 100,
                            length: 50,
                            color: "red"
                        }}
                    </div>
                </Col>
                <Col>
                    <div>
                        style=
                        {{
                            backgroundColor: "blue"
                        }}
                        <h1>I swear I added a header.</h1>
                    </div>
                    <img src={SSPoster} alt="My Summer Scholars Poster." />
                    <ul>
                        <li> My summer scholars poster is pictured above </li>
                        <li> I did data processing for a neuroscience lab </li>
                        <li> It was kinda stressful but super cool </li>
                    </ul>
                    <div>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </div>
                    <div>
                        style=
                        {{
                            width: 100,
                            length: 50,
                            color: "red"
                        }}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
