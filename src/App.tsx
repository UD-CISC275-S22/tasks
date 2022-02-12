import React from "react";
import logo from "./SurveyCorps.jpeg";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <h1>This is also a header</h1>
            </header>
            <ul>
                <li>Maria Wall</li>
                <li>Rose Wall</li>
                <li>Sina Wall</li>
            </ul>
            <div>
                <Container>
                    <Row xl="auto">
                        <Col xs="auto" className="rectangle">
                            Attack titan
                        </Col>
                        <Col xs="auto" className="rectangle1">
                            Armored titan
                        </Col>
                        <Col xs="auto" className="rectangle2">
                            Beast titan
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <Row xl="auto">
                        <Col xl="auto" className="rectangle">
                            Female titan
                        </Col>
                        <Col xl="auto" className="rectangle1">
                            Jaw titan
                        </Col>
                        <Col xl="auto" className="rectangle2">
                            Founding titan
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <Row xl="auto">
                        <Col xl="auto" className="rectangle">
                            Colossal titan
                        </Col>
                        <Col xl="auto" className="rectangle1">
                            Warhammer titan
                        </Col>
                        <Col xl="auto" className="rectangle2">
                            Cart titan
                        </Col>
                    </Row>
                </Container>
            </div>
            <p>
                <img src={logo} alt="Survey Corps" width="60" height="60" />
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload Edited by Zhiwen Zhu. Hello World
            </p>

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
