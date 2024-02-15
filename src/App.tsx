import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by Ian Duffy
            </header>
            <h1>Cannot Center a Div for his Life</h1>
            <img
                src={require("./images/catThink.png")}
                alt="A picture of CIScord's favorite emoji"
            />
            <br />
            Things this guy has done on campus:
            <ul>
                <li>Met the king of mascots, YoUDee</li>
                <li>Been your New Student Orientation Leader</li>
                <li>Too much laundry</li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        Woah is this a column? I sure hope there is another
                        <div
                            style={{
                                height: "20px",
                                width: "200px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        NO WAY THERE ARE NOW TWO WHOLE COLUMNS
                        <div
                            style={{
                                height: "20px",
                                width: "200px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World! This line is now complete.
            </p>
        </div>
    );
}

export default App;
