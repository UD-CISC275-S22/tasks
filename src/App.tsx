import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello World</h1>
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p> Mayowa Ayeni </p>
            <div>
                <h2>This is the fonz</h2>
                <img src="https://i.imgflip.com/155tc5.jpg" alt="The fonz" />
            </div>
            <div>
                <ul>
                    <li>StarTrek</li>
                    <li>Pirates of the Caribbean</li>
                    <li>Prometheus</li>
                </ul>
            </div>
            <Button>Log Hello World</Button>
        </div>
    );
}

export default App;
