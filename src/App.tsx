import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript. Listowel Anim
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div>Hello World</div>
            <h3>Learning HTML</h3>
            <Container>
                <Row>
                    <Col>
                        <img
                            src="https://www.udel.edu/content/dam/udelImages/udaily/2021/March/fb-campus-aerial-the-green-800x420.jpg"
                            alt="UD Campus"
                        ></img>
                        <div className="First"></div>
                    </Col>
                    <Col>
                        <ul>
                            <li>UD campus is beautiful</li>
                            <li>I love the people here</li>
                            <li>There is so much to do here</li>
                        </ul>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <div className="Second"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
