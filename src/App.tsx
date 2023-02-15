import React from "react";
import { Button, Col, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <>
            <h1>
                Mikaylla World
                {/* // <div className="App">
//     <header className="App-header">
//         UD CISC275 with React Hooks and TypeScript
//     </header>
//     <p>
//         Mikaylla Hello World Edit <code>src/App.tsx</code> and save.
//         This page will automatically reload. Hello World
//     </p>
// </div> */}
            </h1>
            <div>
                <h1>Hello World</h1>
                <img
                    src="https://static.wikia.nocookie.net/supermonkeyball/images/b/b8/Mb_baby.jpg/revision/latest/scale-to-width-down/155?cb=20180420160100"
                    alt="A picture of my dog Ada"
                />
            </div>
            <div>
                Unordered List:
                <ul>
                    <li>3 cookies</li>
                    <li>1 cookie</li>
                    <li>2 cookies</li>
                </ul>
                Ordered List:
                <ol>
                    <li>1 cookie</li>
                    <li>2 cookies</li>
                    <li>3 cookies</li>
                </ol>
            </div>
            <div>
                <Button>Log Hello World</Button>
            </div>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Click Me
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>First column.</Col>
                        <Col>
                            Second column. You can put whatever you want in
                            here, and it will be on the right side. Maybe try
                            adding an image?
                        </Col>
                    </Row>
                </Container>
            </div>
            ; ; ;
        </>
    );
}

export default App;
