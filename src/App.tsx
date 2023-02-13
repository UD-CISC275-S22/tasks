import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Kareena Hello World!!
            </header>
            <h1>Task 3 Header</h1>
            <img
                src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/250653613_10158177120945969_8834192512920375842_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=uCuHpQyO5RYAX-R-wQf&_nc_ht=scontent-lga3-1.xx&oh=00_AfA4XOfbHZazJKALAVTEWphTJH3Y3uXODaZDedkhnEJ9Vg&oe=63EFEC08"
                alt="a picture of my dog rocky on halloween"
            />
            <p>My favorite artists</p>
            <ol>
                <li>BTS</li>
                <li>Doja Cat</li>
                <li>Joji</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div className="Rectangle1"></div>Rectangle 1
                    </Col>
                    <Col>
                        <div className="Rectangle2"></div>Rectangle 2
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
