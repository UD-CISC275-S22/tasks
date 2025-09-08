import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {

    return (
        <div className="App">
            <header className="App-header" style = {{backgroundColor: "red"}}>
               <h1>UD CISC275 with React Hooks and TypeScript</h1>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. 
            </p>
            <img
                src="https://commons.wikimedia.org/wiki/File:383-waving-hand-1.svg"
                alt="Waving"
                className="App-image"
            />
            <ul>
                <li>1st</li>
                <li>2nd</li>
                <li>3rd</li>
            </ul>

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>

            
        </div>
    );
}

export default App;
