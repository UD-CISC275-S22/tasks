import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Bada Boop</h1>
            <img
                src="https://petcostumecenter.com/wp-content/uploads/2020/05/Action-Hero-Rambo-Dog-Cat-Costume-.webp"
                width="260"
                alt="A picture of a cool dog"
            />
            <p>Tommy Ashfield, Hello World </p>
            <div className="list">
                <ul>
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </ul>
            </div>
            <div className="Button">
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <div className="columns">
                {" "}
                <Container>
                    <Row>
                        <Col>
                            <div className="Rectangle">
                                <p>first</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="Rectangle">
                                <p>Second</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
