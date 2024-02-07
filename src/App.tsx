import React, { useState } from "react";
import "./App.css";

function App(): JSX.Element {
    const [x, setX] = useState(0);
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div className="counter-container">
                <button className="button" onClick={() => setX(x + 1)}>
                    +
                </button>
                <div>{x}</div>
                <button className="button" onClick={() => setX(x - 1)}>
                    -
                </button>
            </div>
            <h1>Michael Lutz</h1>
            <h1>Hello World</h1>
        </div>
    );
}

export default App;
