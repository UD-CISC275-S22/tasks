import React from "react";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript: Hello World, This is
                Olive Odida
            </header>
            <h2>This is a new secondary header</h2>
            <img
                src="/Users/oodida/Desktop/tasks/src/dollar_coin.jpg"
                alt="A picture of a two dollar coin"
                width="500"
                height="500"
            />
            <ul>
                <li>Blacklist</li>
                <li>Love is Blind</li>
                <li>Avatar the Last Airbender</li>
                <li>Beyond the Boundary</li>
            </ul>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
