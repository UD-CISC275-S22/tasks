import React from "react";
import "./App.css";
import jalenHurts from "./jalenhurts.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function App(): React.JSX.Element {
    function handleClick(): void {
        console.log("Hello World!");
    }
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is header text</h1>
            <p>Ethan Stowell</p>
            <p>Hello World</p>
            <img src={jalenHurts} alt="Super Bowl MVP Jalen Hurts" />
            <p>Best Colors Ranked:</p>
            <ol>
                <li>Brown</li>
                <li>Green</li>
                <li>Blue</li>
            </ol>
            <button className="btn btn-primary" onClick={handleClick}>
                Log Hello World
            </button>
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                    </div>
                    <div className="col">
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                    </div>
                    <div className="col">
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                    </div>
                </div>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
