import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import photo from "./images/IMG_4031.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1 className="App-header">About me! CISC275</h1>
            <Container>
                <Row>
                    <Col>
                        <img
                            src={photo}
                            alt="Picture of me on a cruise I took this summer :)"
                        />
                        <div className="redrect"></div>
                    </Col>
                    <Col>
                        <p> Some things I enjoy!</p>
                        <ul>
                            <li> Coding! </li>
                            <li> Watching NFL </li>
                            <li> Playing with my guinea pig </li>
                        </ul>
                        <Button onClick={() => console.log("Hello World!")}>
                            {" "}
                            Log Hello World{" "}
                        </Button>
                        <div className="redrect"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
