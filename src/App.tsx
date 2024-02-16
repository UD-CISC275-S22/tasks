import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App(): JSX.Element {
    const handleButtonClick = () => {
        console.log("Hello World!");
    };

    return (
        <div>
            <header style={{ backgroundColor: "blue", color: "white" }}>
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>This is just a paragraph.</p>

            <div style={{ display: "flex" }}>
                {/* First column */}
                <div style={{ flex: 1, marginRight: "10px" }}>
                    <h1>First Column</h1>
                    <p>How are you doing today?</p>
                    {/* Red rectangle */}
                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "red"
                        }}
                    ></div>
                    {/* Ordered List */}
                    <div>
                        Ordered List:
                        <ol>
                            <li>First thing</li>
                            <li>Another thing</li>
                            <li>A third item</li>
                        </ol>
                    </div>
                </div>
                {/* Second column */}
                <div style={{ flex: 1 }}>
                    <p>This is the right column</p>
                    {/* Red rectangle */}
                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "red"
                        }}
                    ></div>
                    {/* Image */}
                    <img
                        src="C:\Users\Max\Desktop\cisc275\tasks\src\download.jpg"
                        alt="A picture of my dog Ada"
                        style={{ maxWidth: "100%" }}
                    />
                    {/* Button */}
                    <button
                        className="btn btn-primary"
                        onClick={handleButtonClick}
                    >
                        Log Hello World
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
