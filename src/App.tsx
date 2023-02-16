import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./App.css";
import city from "./assets/neonCity.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. - John Henry Cooper says Hello World
            </p>

            <p
                style={{
                    border: "10px groove #F700FF",
                    padding: "4px",
                    color: "#01096E"
                }}
            >
                This is the start of the{" "}
                <span style={{ color: "#F700FF" }}>Task 3 </span>
                changes.
            </p>
            <h2 style={{ color: "#F700FF", backgroundColor: "01096E" }}>
                {" "}
                What a nice looking image!
            </h2>
            <img src={city} alt="A Nice Neon City" />
            <Button
                style={{ color: "#01096E" }}
                onClick={() => console.log("Hello World!")}
            >
                <span style={{ color: "#F700FF" }}>Log Hello World</span>
            </Button>
            <div
                style={{
                    width: "1260px",
                    height: "100px",
                    backgroundColor: "red"
                }}
            >
                <Container>
                    <Row>
                        <Col>
                            <ul>
                                <li>Eggs</li>
                                <li>Milk</li>
                                <li>Bananas</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li>Soda</li>
                                <li>Bread</li>
                                <li>Chips</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
