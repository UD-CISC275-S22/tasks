import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div>
            <h1>Tavon Website</h1>
            <img
                src="https://www.google.com/search?q=lebron+james&tbm=isch&ved=2ahUKEwjF4Jem8aX6AhWbtXIEHQx1DxcQ2-cCegQIABAA#imgrc=lSggYxaBapjIUM"
                alt="Photo of Lebron James"
            />
            <ol>
                <li> Russell Westbrook</li>
                <li> Lebron James</li>
                <li> Anthony Davis</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>First column.</Col>
                    <Col>
                        Second Column. Completing tasks not represented in tests
                        part 1
                    </Col>
                </Row>
            </Container>
            <div className="App">
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript
                </header>
                Hello World
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload.
                </p>
            </div>
        </div>
    );
}

export default App;
