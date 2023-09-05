import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className=".App-header">UD CISC275</header>
            <h1>Nathan Manning</h1>
            <img
                src="https://media.licdn.com/dms/image/C4E03AQHgmmhmbxXQhA/profile-displayphoto-shrink_800_800/0/1643306790885?e=2147483647&v=beta&t=x9n4WgVXe7RKuNWbknSxIh3DpFYWsWJ1IHup-Ndar1I"
                alt="Photo of me, Nathan Manning"
            />
            <div>
                Things that I enjoy
                <ul>
                    <li>Python</li>
                    <li>Running</li>
                    <li>Guitar</li>
                </ul>
            </div>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col className="col">Class</Col>
                        <Col className="col">CISC 275</Col>
                    </Row>
                </Container>
            </div>
            <body>Hello World</body>
            <p>This is Nathan Manning.</p>
        </div>
    );
}

export default App;
