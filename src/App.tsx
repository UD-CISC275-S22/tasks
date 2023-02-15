import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <>
            <h1>Mikaylla Website</h1>
            <div className="App">
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScriptS
                </header>
                <div>
                    <img
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22935cd4-b5b4-4716-98f8-bb6d00156232/de3qhpq-ac4700a1-0404-46d5-9f6f-ad55eda89f6d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIyOTM1Y2Q0LWI1YjQtNDcxNi05OGY4LWJiNmQwMDE1NjIzMlwvZGUzcWhwcS1hYzQ3MDBhMS0wNDA0LTQ2ZDUtOWY2Zi1hZDU1ZWRhODlmNmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nm2goVv_zI3gqXErAWbJPbVK6-KLhr-6HsvU2IzvQ7M"
                        alt="Baby"
                    />
                </div>
                ;
                <p>
                    Hello World Edit <code>src/App.tsx</code> and save. This
                    page will automatically reload. Hello World
                </p>
            </div>
            <div>
                Ordered List:
                <ol>
                    <li>cookie</li>
                    <li>cookies</li>
                    <li>cookies3</li>
                </ol>
            </div>
            ;
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            ;
            <div>
                <Container>
                    <Row>
                        <Col>First column. Hello!</Col>
                        <Col>Second column. Welcome to the website!</Col>
                    </Row>
                </Container>
            </div>
            ;
        </>
    );
}

export default App;
