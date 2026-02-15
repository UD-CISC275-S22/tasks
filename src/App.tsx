import React from "react";
import "./App.css";
import { Button } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap';


function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UD CISC275 with React Hooks and TypeScript Amazing Website by Sonny Ly</h1>
                <img 
                    src="C:\Users\User\Downloads\shocked face.jpg" 
                    alt="Shocked face" 
                />
            </header>
            
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <ul>
                <li>Chicken</li>
                <li>Bun</li>
                <li>Ketchup</li>
            </ul>

            <Button
                onClick={() => console.log("Hello World!")}
            >
                Log Hello World
            </Button>

            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        />
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default App;
