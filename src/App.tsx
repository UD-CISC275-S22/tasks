import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "LightSkyBlue" }}
            >
                Olivia Karney - UD CISC275 with React Hooks and TypeScript
            </header>
            <h3>Spring 2024</h3>
            <hr></hr>
            <span>Hello World!</span>
            <hr></hr>
            <img
                src="https://as1.ftcdn.net/v2/jpg/02/64/91/06/1000_F_264910607_0WvD3QBB0LWyVc8FtrtcqPGSVOcsKi9B.jpg"
                alt="Image that I am required to add, by law."
                width={400}
                height={400}
            />
            <hr></hr>
            <span>List of Animals</span>
            <ul>
                <li>Dog</li>
                <li>Cat</li>
                <li>Horse</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        First Column. Hello!!
                        <div
                            style={{
                                width: 300,
                                height: 100,
                                backgroundColor: "LightSkyBlue"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        Second column. Good-bye!!
                        <div
                            style={{
                                width: 300,
                                height: 100,
                                backgroundColor: "LightSkyBlue"
                            }}
                        ></div>
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

export default App;
