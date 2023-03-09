import React from "react";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <Container>
                    <Row>
                        <Col>
                            <div id="box1"></div>
                        </Col>
                        <Col>
                            <div id="box2"></div>
                        </Col>
                    </Row>
                </Container>
                <div style={{ border: "1px solid red", padding: "1px" }}></div>
                <h1> This is header text</h1>
                <img src="techphoto.jpeg" alt="tech pic" />
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
