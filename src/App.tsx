import React from "react";
import "./App.css";
import { GenerateCSV } from "./generateCSV";

const data: string[][] = [
    ["Last Name, First Name"],
    ["Nicky", "Reigel"],
    ["Aidan", "Bell"]
];

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
                <p>Aidan Bell </p>
                <p>Lawrence Collins </p>
                <p>Nicky Reigel</p>
                <p>Melvin Rau</p>
                <p>Victor Vasquez</p>
            </p>
            <GenerateCSV data={data} filename="testexport"></GenerateCSV>
        </div>
    );
}

export default App;
