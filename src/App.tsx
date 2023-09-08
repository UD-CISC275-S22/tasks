import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1 className="App-header2">Cute Dog</h1>
            <img
                className="imgfixed-size"
                src="https://th.bing.com/th/id/R.7859264e8e662049d23f5679b4347a39?rik=xiUUPm8WSQ2t4Q&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f20%2f5920.jpg&ehk=g47Yu2qiW009cMIJju2Ye2ddaa3mA9UvGSsg%2beXnaa4%3d&risl=&pid=ImgRaw&r=0"
                alt="A picture of a dog"
            />
            <ul>
                <li>element1</li>
                <li>element2</li>
                <li>element3</li>
            </ul>
            <button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </button>
            <Container>
                <Row>
                    <Col>
                        First column
                        <div
                            style={{
                                width: "100px",
                                height: "80px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <p>Second column</p>
                        <div
                            style={{
                                width: "100px",
                                height: "80px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.(Zonglin Wu) Hello World!
            </p>
        </div>
    );
}

export default App;
