import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import "./App.css";
function App(): JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <div
                        style={{
                            width: 400,
                            height: 200,
                            backgroundColor: "green",
                            border: "4px solid red",
                            padding: "40px"
                        }}
                    ></div>
                    <Col>First column.</Col>

                    <div
                        style={{
                            width: 400,
                            height: 200,
                            backgroundColor: "green",
                            border: "4px solid red",
                            padding: "40px"
                        }}
                    ></div>
                    <Col></Col>
                </Row>
            </Container>
            <h1>
                CISC 275 - Arjun Manikyath style = {{ background: "#00FF00" }}
            </h1>
            ;
            <ul>
                <li>I like dogs</li>
                <li>I like video games</li>
                <li>I like going to the gym</li>
            </ul>
            <Button>Log Hello World</Button>
            <Button onClick={() => console.log("I am logged")}>
                Log Hello World
            </Button>
            <img
                src="https://gray-wsaw-prod.cdn.arcpublishing.com/resizer/ZwIQmyrMuYMqt_vo2vmmRCU3mQ8=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/BSZOVZKHL5FEHA7FYS6ASQVSZQ.jpg"
                alt="A picture of a golden retriever puppy"
            />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
