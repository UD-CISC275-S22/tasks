import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello World</h1>
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <ul>
                <li>StarTrek</li>
                <li>Pirates of the Caribbean</li>
                <li>Prometheus</li>
            </ul>
            <p> Mayowa Ayeni </p>
            <div>
                <img src="https://i.imgflip.com/155tc5.jpg" alt="The fonz" />
            </div>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ marginRight: "20px" }}>
                    <div
                        style={{
                            width: "100px",
                            height: "200px",
                            backgroundColor: "red",
                            marginBottom: "20px"
                        }}
                    ></div>
                    <div
                        style={{
                            width: "100px",
                            height: "150px",
                            backgroundColor: "red"
                        }}
                    ></div>
                </div>
                <div>
                    <div
                        style={{
                            width: "100px",
                            height: "200px",
                            backgroundColor: "red",
                            marginBottom: "20px"
                        }}
                    ></div>
                    <div
                        style={{
                            width: "100px",
                            height: "150px",
                            backgroundColor: "red"
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default App;
