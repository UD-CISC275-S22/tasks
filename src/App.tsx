import React from "react";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Hello World</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically self destruct in five seconds.
            </p>
            <p>
                <strong>
                    <em>Isaac Weber</em>
                </strong>
            </p>
            <img src="tasks\src\assets\pizzaPC.jpg" alt="My Computer" />
        </div>
    );
}

export default App;
