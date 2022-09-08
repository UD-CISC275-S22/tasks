import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by Patrick Harris
            </header>
            <Container>
                <Row>
                    <Col>
                        First Column.
                        <div className="App-col" />
                    </Col>
                    <Col>
                        Second Column. You can put whatever you want in here,
                        and it will be on the right side.
                        <div className="App-col" />
                    </Col>
                </Row>
            </Container>
            Tiger Woods Last Three Major Wins:
            <ul>
                {" "}
                <li> 2019 Masters Tournament</li>
                <li> 2008 U.S. Open</li>
                <li> 2007 PGA Championship</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <h1> I am a junior at UD who likes to play golf ⛳ </h1>
            <img
                src="data:image/jpeg;base64,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"
                alt="Picture of Tiger Woods at the Masters"
            />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World</p>
        </div>
    );
}

export default App;
