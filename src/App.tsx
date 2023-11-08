import React, { useState } from "react";
import "./App.css";
import { GenerateCSV, Import } from "./CSV";
import { WelcomeMessage } from "./Name";
import { DegreePlan } from "./interfaces/degreeplan";
import degreeplan_json from "./dummy_data.json";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    //load in json data
    const DEGREEPLANS: DegreePlan[] = degreeplan_json.map(
        (dp: DegreePlan): DegreePlan => ({ ...dp }) //dp = degreeplan
    );
    //this is the initial data that every user starts with
    let loaded_data = DEGREEPLANS;
    //this will be the key we use to access previous data
    const SAVE_KEY = "MY-PAGE-DEGREEPLANS";
    const previousData = localStorage.getItem(SAVE_KEY);
    //load data into loaded_data (will either overwrite loaded_data with previous data if user is not new or keep initial loaded data if user it new)
    if (previousData !== null) {
        loaded_data = JSON.parse(previousData);
    }

    const [importData, setImportData] = useState<string>("");
    //degreePlans will store and maintain the users degree plans, whenever they save their work it will be stored here
    const [degreePlans, setdegreePlans] = useState<DegreePlan[]>(loaded_data);

    function saveData() {
        localStorage.setItem(SAVE_KEY, JSON.stringify(degreePlans));
        console.log(setdegreePlans); //will delete only here to satisfy typescript
    }

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
            <GenerateCSV
                data={[
                    ["First Name", "Last Name"],
                    ["Nicky", "Reigel"],
                    ["Aidan", "Bell"]
                ]}
                filename="testexport"
            />
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
            <Button onClick={saveData}>Save Degree Plans</Button>
        </div>
    );
}

export default App;
