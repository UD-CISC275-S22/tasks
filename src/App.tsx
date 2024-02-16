import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>Hello World</p>
            <p>
                Edit <code>src/App.tsx return Qingjian Xu</code> and save. This
                page will automatically reload.
            </p>

            <div className="red-rectangle">
                <h1>This is header text</h1>;
                <ol>
                    <li>First thing</li>
                    <li>Another thing</li>
                    <li>A third item</li>
                </ol>
                <img src="1.jpg" alt="image" />
            </div>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
