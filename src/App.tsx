import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>HEADER</h1>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Miles Gaydos says Hello World
            </p>
            <Button onClick={() => console.log("Hello World!")}>
                {" "}
                Log Hello World
            </Button>
            <img src="whistle.jpg" alt="A picture of Josh Hutcherson" />
            <ol>
                <li>Computer Science</li>
                <li>Math</li>
                <li>History</li>
            </ol>
        </div>
    );
}

export default App;
