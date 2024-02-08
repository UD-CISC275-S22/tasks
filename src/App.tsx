import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="Benjamin Le App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/2/29/University_of_Delaware_Seal.svg"
                    alt="University of Delaware"
                ></img>
            </header>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit Ben Le<code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
                <h1>HEADING OUT</h1>
            </p>
            <ul>
                <li>3</li>
                <li>2</li>
                <li>1</li>
            </ul>
            <div className="column">
                <Container>
                    <Row>
                        <Col>
                            RECTANGLE
                            <div className="rectangle"></div>
                        </Col>
                        <Col>
                            RECTANGLE
                            <div className="rectangle"></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
