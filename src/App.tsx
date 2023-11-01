import React, { useState } from "react";
import "./App.css";
import { GenerateCSV, Import } from "./CSV";
import { WelcomeMessage } from "./Name";

function App(): JSX.Element {
    const [importData, setImportData] = useState<string>("");

    return (
        <div className="App">
            <header className="App-header">
                University of Delaware Computer Science Degree Plan
                <p>
                    <WelcomeMessage></WelcomeMessage>
                </p>
                <p>
                    <ul className="horizontal-list">
                        <li> Aidan Bell </li>
                        <li>Lawrence Collins </li>
                        <li>Nicky Reigel</li>
                        <li>Melvin Rau</li>
                        <li>Victor Vasquez</li>
                    </ul>
                </p>
            </header>
        
            <div />
            <GenerateCSV data={[["First Name", "Last Name"], ["Nicky", "Reigel"], ["Aidan", "Bell"]]} filename="testexport" />
            <div />
            <Import importData={importData} setImportData={setImportData} />
        
            <div className="div-alightleft">
                <div className="App-blockleft">
                    <p>sample block left</p>
                </div>
            </div>
            <div className="div-alignright">
                <div className="App-blockright">
                    <p>sample block right</p>
                </div>
            </div>
        </div>
    );
}

export default App;
