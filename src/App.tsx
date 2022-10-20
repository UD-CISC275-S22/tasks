import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript<br></br>
            </header>
            <h1 className="header">Meghana Yarlagadda!</h1>
            <p>
                Hello World! <br></br>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <img
                src="https://www.thespruceeats.com/thmb/btLT5e97Xl3vBzNo37xPlUgfQcI=/3135x3900/filters:fill(auto,1)/GettyImages-90053856-588b7aff5f9b5874ee534b04.jpg"
                alt="A cone of several scoops of different flavors of icecream stacked on top of eachother"
                width="250"
                height="325"
            />
            <br></br>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        Column 1:
                        <ul>
                            <li>Chocolate</li>
                            <li>Vanilla</li>
                            <li>Strawberry</li>
                        </ul>
                        <div className="rectangle"></div>
                    </Col>
                    <Col>
                        Column 2:
                        <div className="rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
