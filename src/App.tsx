import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div
            className="App"
            style={{ border: "1px solid blue", padding: "4px" }}
        >
            <header className="App-header">
                Hello World, Joshua Artis in UD CISC275 with React Hooks and
                TypeScript
            </header>
            <h1>This is header text</h1>;
            <img
                src="https://cdn.vox-cdn.com/thumbor/Al48-pEnyIn2rlgKX7MIHNmlE68=/0x0:5563x3709/1200x800/filters:focal(2302x1311:3192x2201)/cdn.vox-cdn.com/uploads/chorus_image/image/65752607/1048232144.jpg.0.jpg"
                alt="A picture of land"
            />
            Ordered List:
            <ol>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                {" "}
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <div
                        className="ColStyle"
                        style={{ border: "1px solid red", padding: "4px" }}
                    >
                        <Col xs={6}>First column.</Col>
                    </div>
                    <div
                        className="2ndColStyle"
                        style={{ border: "1px solid red", padding: "4px" }}
                    ></div>
                    <Col xs={6}>Second column.</Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
