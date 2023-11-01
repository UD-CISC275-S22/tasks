import React, { useState } from "react";
import "./App.css";
import { GenerateCSV, Import } from "./CSV";

const data: string[][] = [["Last Name, First Name"], ["Nicky", "Reigel"]];

function App(): JSX.Element {
    const [importData, setImportData] = useState<string>("");

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
            <div />
            <GenerateCSV data={data} filename="testexport" />
            <div />
            <Import importData={importData} setImportData={setImportData} />
        </div>
    );
}

export default App;
