import { Button } from "react-bootstrap";
import React from "react";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <Button>Click Me</Button>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <header>Paul Kearneyy</header>
            <header>Hello World</header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
