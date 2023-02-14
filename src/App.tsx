import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import logo from "./golconda.jpeg";
function App(): JSX.Element {
    return (
        <div
            className="App"
            style={{ border: "10px solid green", padding: "4px" }}
        >
            <Button onClick={() => console.log("I am logged")}>Click Me</Button>
            <header className="App-header">
                <span style={{ color: "red" }}>
                    Hello World UD CISC275 with React Hooks and TypeScript{" "}
                </span>
            </header>
            <img src={logo} />

            <p>
                Edit <code>src/App.tsx</code>3 and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
