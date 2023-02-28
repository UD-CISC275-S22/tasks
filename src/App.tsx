import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

export function App(): JSX.Element {
    return (
        <div className="App">
            <h1 className="App-header">
                UD CISC275 with React Hooks and TypeScript Ana Donato
            </h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <img
                src="http://richarddeutsch.com/wp-content/uploads/2015/08/1C.-Wings-long-view-copy.jpg"
                alt="University of Delaware"
                width={"50%"}
            />
            <ul>
                <li> Red </li>
                <li> Blue </li>
                <li> Yellow </li>
                <li> Green </li>
                <li> Orange </li>
                <li> Purple </li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>Cick Me</Button>
            <Container>
                <Row>
                    <div
                        style={{
                            backgroundColor: "red",
                            height: 50,
                            width: 150
                        }}
                    >
                        <Col> Name Year Major Concentration </Col>
                    </div>
                    <Col>
                        Ana Donato Sophmore Computer Science Cybersecurity
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default App;
