import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <>
            <h1 style={{ backgroundColor: "Yellow" }}>MANN IS BOSS</h1>
            <div className="App">
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript MannPatel Hello
                    World
                </header>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload.
                </p>
                <img
                    src="https://static.wikia.nocookie.net/memorydelta/images/9/9f/SithTrooper-SWGoH.png/revision/latest?cb=20210614150751"
                    alt="A picture of red troopers"
                />
                <ul>
                    <li>Earth</li>
                    <li>Fire</li>
                    <li>Water</li>
                    <li>Air</li>
                </ul>
                <Button onClick={() => console.log("Hello World!")}>
                    {" "}
                    Log Hello World
                </Button>
                <Container>
                    <Row>
                        <Col> Junk Food</Col>
                        <Col> Healthy Food</Col>
                    </Row>
                </Container>
                <div className="column">
                    <div className="red-rectangle"></div>
                </div>
                <div className="column">
                    <div className="red-rectangle"></div>
                </div>
            </div>
        </>
    );
}

export default App;
