import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

export function App(): JSX.Element {
  return <h1>CISC275 Hello World</h1>;

  return (
    <div className="App">
      <header className="App-header">
        UD CISC275 with React Hooks and TypeScript
      </header>
      <p>
        Edit <code>src/App.tsx</code> and save. This page will automatically
        reload.
      </p>
    </div>
  );

  return (
    <div>
      <h1>Hello World</h1>
      <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.computerhope.com%2Fjargon%2Fd%2Fdesktopc.htm&psig=AOvVaw1DMQo2OekdIuCIRyYy30VA&ust=1694879818062000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCNCm5739rIEDFQAAAAAdAAAAABAK"
        alt="This is a Computer"
      />
    </div>
  );
  return (
    <div>
      <ol>
        <li>HTML</li>
        <li>CSS</li>
        <li>TypeScript</li>
      </ol>
    </div>
  );

  return (
    <div>
      <Button> Log Hello World</Button>
    </div>
  );

  return (
    <div>
      <Button onClick={() => console.log("Hello World!")}>
        Log Hello World
      </Button>
    </div>
  );
  return (
    <div>
      <Container>
        <Row>
          <Col>
            Shape
            <div className="shape"></div>
          </Col>
          <Col>
            <div className="shape"></div>
            Hello world
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
