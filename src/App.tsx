import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is a header!</h1>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQHjdpNZYqjoQA/profile-displayphoto-shrink_400_400/0/1544037572567?e=1650499200&v=beta&t=FBStRRBg083-pipuWJrvAD4Nbjbm33D6bDf3SGcuk7I"
                alt="my linked in profile picture"
            />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Andrew Woods. Hello World
            </p>
            <ol>
                <li>First thing</li>
                <li>Second thing</li>
                <li>Third thing</li>
            </ol>
            <Container>
                <Row>
                    <div className="Column">
                        <Col>First column.</Col>
                    </div>
                    <div className="Column">
                        <Col>Second column</Col>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default App;
