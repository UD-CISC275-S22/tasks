import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">Matthew Conlon UD CISC275</header>
            <p>yeah dog! Hello World</p>
            <img
                src="./Images/cyclohexane.jpg"
                alt="A picture of a chair conformation of cyclohexane"
            />
            Top three breakfast cereals:
            <ul>
                <li>3: Oops! All Berries</li>
                <li>2: Captain Crunch</li>
                <li>1: Cinnamon Toast Crunch</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
