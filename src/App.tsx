import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <>
            <>
                <h1 className="csn">Crosby, Stills and Nash</h1>
                <img
                    src="https://i.imgur.com/6xrGsGi.jpg"
                    alt="Crosby, Stills and Nash"
                />
                <header className="App-header"> </header>
                Hello World <br></br> Isaac Lewis <br></br> UD CISC275 with
                React Hooks and TypeScript <br></br>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
                <ol>
                    <li>Crosby</li>
                    <li>Stills</li>
                    <li>Nash</li>
                </ol>
                <Container>
                    <Row>
                        <Col>
                            Left Column
                            <div className="rectangle"></div>
                        </Col>
                        <Col>
                            Right Column
                            <div className="rectangle"></div>
                        </Col>
                    </Row>
                </Container>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload.
                </p>
            </>
        </>
    );
}

export default App;
