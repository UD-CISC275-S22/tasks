import React from "react";
import "./App.css";
import handshake from "./handshake.jpeg";

console.log(handshake);
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>This is this Header</h1>
                <p>
                    UD CISC275 with React Hooks and TypeScript (Wenhan Ying
                    Version)
                </p>
                <br />

                !!!Hello World!!!
                <img src={handshake} alt="Handshake!!!" />
            </header>
            <h3>The list with three elements</h3>
            <ol>
                <li>First thing: Feed my cat.</li>
                <li>Second thing: Walk the dog</li>
                <li>Third thing: Cook a meal</li>
            </ol>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
