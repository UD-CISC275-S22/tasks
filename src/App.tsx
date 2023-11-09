/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import "./App.css";
import { GenerateCSV, Import } from "./CSV";
import { WelcomeMessage } from "./Name";
import { DegreePlan } from "./interfaces/degreeplan";
import degreeplan_json from "./dummy_data.json"; //dummy json data (for testing and what not)
import dpsamplejson from "./sampleDpData.json"; //this is the real json data that the user will start with if they are new
import { Button } from "react-bootstrap";
import { DpStarterSample } from "./DpStarterSample";
import { DpList } from "./DpList";
import { AddDpModal } from "./AddDpModal";

//todo: create a system of Id's to fix bug where clicking a dp card opens up multiple views since opening a view depends on Id's
//todo: fix bug where when you first create a dp using the modal you must save and then try and add another dp for the first one to show up on the UI
//      (I THINK THE ISSUE OCCURS DOWN BELOW WHERE IF PREVIOUSDATA === NULL THEN IT WONT SHOW ALL THE CARDS UNTIL I SAVE IT IN WHICH CASE PREVIOUSDATA WILL NO LONGER BE NULL)

function App(): JSX.Element {
    //load in json data
    const DEGREEPLANS: DegreePlan[] = dpsamplejson.map(
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
    const [showAddModal, setShowAddModal] = useState<boolean>(false);
    //handles opening and closing the popup (modal)
    const handleCloseModal = () => setShowAddModal(false);
    const handleShowModal = () => setShowAddModal(true);

    //should soon take in a full dp using a form of sort to pass in a fully described dp
    function addDp(title: string) {
        const exists = degreePlans.find(
            (dp: DegreePlan): boolean => dp.title === title
        );
        if (exists === undefined) {
            setdegreePlans([
                ...degreePlans,
                { title: title, id: 1, totalCredits: 0, semestersList: [] }
            ]);
        }
    }

    function saveData() {
        localStorage.setItem(SAVE_KEY, JSON.stringify(degreePlans));
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
            <div>
                {previousData === null ? (
                    <div>
                        <DpStarterSample jsonDp={degreePlans}></DpStarterSample>
                        {saveData()}
                    </div>
                ) : (
                    <DpList dp={degreePlans}></DpList>
                )}
            </div>
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
            <Button className="add_btn" onClick={handleShowModal}>
                Add New Degree Plan
            </Button>
            <AddDpModal
                show={showAddModal}
                handleClose={handleCloseModal}
                addDp={addDp}
            ></AddDpModal>
            <Button onClick={saveData}>Save Degree Plans</Button>
        </div>
    );
}

export default App;
