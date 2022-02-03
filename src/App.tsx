import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">Josh was here - CISC275</header>
            <h1>Hi, Im Josh</h1>

            <img alt="A picture of prof silber" src="assets/sadber.png" />
            <ul>
                <p>Things I love about that picture of prof. Silber</p>
                <li>The poorly drawn tear</li>
                <li>The way he looks so happy</li>
                <li>How closely it is cropped</li>
            </ul>

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
