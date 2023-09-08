import React from "react";
import "./App.css";
import shiny_chansey from "./assets/shiny_chansey.png";
import { Button, Row, Col, Container } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript{" "}
                <span style={{ color: "#FFDBAC" }}>ft. Leo Chen </span>
                <br></br>
                Hello World!
            </header>
            <h1 style={{ backgroundColor: "#FFDBAC" }}>Cool things</h1>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        Must Have Mac Apps
                        <ul>
                            <li>Yabai, a tiling window manager</li>
                            <li>Skhd, simple hotkey daemon</li>
                            <li>Homebrew, package manager</li>
                        </ul>
                        <div
                            style={{
                                width: "100px",
                                height: "50px",
                                backgroundColor: "red"
                            }}
                        />
                    </Col>
                    <Col>
                        <span style={{ color: "#3CD6A3" }}>Column 2</span>
                        <img
                            src={shiny_chansey}
                            width="200"
                            height="auto"
                            alt="My favorite shiny Pokemon"
                        />
                        <div
                            style={{
                                width: "100px",
                                height: "50px",
                                backgroundColor: "red"
                            }}
                        />
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}
console.log;
export default App;
