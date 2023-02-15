import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Hello World UD CISC275 with React Hooks and TypeScript Christian
                Munley
            </header>
            <h1 id="theh1">This is a heading!!!</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <img
                src={require("./assets/panda.JPG")}
                alt="A picture of a panda"
            />
            Unordered List:
            <ul>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <div>
                <Container>
                    <Row>
                        <Col>
                            First column.
                            <div id="div1">hello</div>
                        </Col>
                        <Col>
                            Second column. You can put whatever you want in
                            here, and it will be on the right side. Maybe try
                            adding an image?
                            <div id="div2">hello</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
