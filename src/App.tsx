import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "gold", color: "black" }}
            >
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>Hello World, this is Eric Merritts Website</p>
            The Planet of the Apes:
            <div></div>
            <img
                src="https://th.bing.com/th/id/R.6c1ff2c14604c4264d98377eeb711f2d?rik=CVVLX9HwnbXE0Q&riu=http%3a%2f%2felelur.com%2fdata_images%2fmammals%2fape%2fape-06.jpg&ehk=xtRzgXT71NfxQdjCTf440Jra97%2f8ddXRMGrLA9tgfWQ%3d&risl=&pid=ImgRaw&r=0"
                alt="A picture of a Ape"
                style={{ height: "200px", width: "200px" }}
            />
            <h2>My Affirmations:</h2>
            <ul>
                <li>I Am Tall</li>
                <li>I Am Smart</li>
                <li>I Am Strong</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col
                        style={{
                            width: "50%",
                            height: "15px",
                            backgroundColor: "red"
                        }}
                    ></Col>
                    <Col
                        style={{
                            width: "25%",
                            height: "15px",
                            backgroundColor: "red"
                        }}
                    ></Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
