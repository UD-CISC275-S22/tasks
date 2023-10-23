import React from "react";
import "./App.css";

function App(): JSX.Element {
    const handleCreatePlan = () => {
        console.log("Create plan button clicked");
    };

    const handleImportCSV = () => {
        console.log("Import csv button clicked");
    };

    return (
        <div className="App">
            <h1 className="App-title">CIS scheduler</h1>
            <header className="App-header">
                Adam Beck, Zach Reggio, Sam Ferguson, Brandon Marafino, Adam Liu
            </header>
            <div className="button">
                <button className="buttonSpacing" onClick={handleCreatePlan}>
                    Create New Plan
                </button>
                <button onClick={handleImportCSV}>Import CSV</button>
            </div>
        </div>
    );
}

export default App;
