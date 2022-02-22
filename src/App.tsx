import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "blue" }}>
                Cool Locations around the World by CISC275
            </header>
            <p>
                Edit <code>Sydney</code> and save. This page will automatically
                reload.
            </p>
            <img
                src="https://trendsinusa.com/wp-content/uploads/2018/01/9061Ujo.jpg"
                alt="A photo of Nature"
            />
            <div className="container">
                <div className="row">
                    <div className="col" style={{ backgroundColor: "red" }}>
                        <p>
                            Nature is a very important part of the modern world
                            but many are unable to enjoy its splendor. So this
                            website will have photos of nature sites.
                        </p>
                        <button
                            onClick={() => console.log("Travel the World!")}
                        >
                            Travel the World
                        </button>
                    </div>
                    <div className="col" style={{ backgroundColor: "red" }}>
                        <h3> Reasons you should travel here </h3>
                        <ul>
                            <li>It is beautiful</li>
                            <li>It is serene here</li>
                            <li>It is an unspoiled piece of Nature</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
