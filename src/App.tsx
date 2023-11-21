/* eslint-disable indent */
/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import "./App.css";
import { GenerateCSV, Import } from "./CSV";
import { WelcomeMessage } from "./Name";
import { DegreePlan } from "./interfaces/degreeplan";
import dpsamplejson from "./sampleDpData.json"; //this is the real json data that the user will start with if they are new
import { Button } from "react-bootstrap";
import { DpList } from "./DpList";
import { AddDpSemestersCoursesModal } from "./AddDpSemestersCoursesModal";

export function App(): JSX.Element {
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

    //load in ID
    let default_id = 2;
    const SAVED_ID = "MY-PAGE-IDCOUNT";
    const previoudId = localStorage.getItem(SAVED_ID);
    if (previoudId !== null) {
        default_id = JSON.parse(previoudId);
    }

    const [importData, setImportData] = useState<string>("");
    //degreePlans will store and maintain the users degree plans, whenever they save their work it will be stored here
    const [degreePlans, setdegreePlans] = useState<DegreePlan[]>(loaded_data);
    const [showAddModal, setShowAddModal] = useState<boolean>(false);
    const [availableId, setAvailableId] = useState<number>(default_id);
    //handles opening and closing the popup (modal)
    const handleCloseModal = () => setShowAddModal(false);
    const handleShowModal = () => setShowAddModal(true);

    function addDp(newDp: DegreePlan) {
        const exists = degreePlans.find(
            (dp: DegreePlan): boolean => dp.title === newDp.title
        );
        if (exists === undefined) {
            setdegreePlans([
                ...degreePlans,
                {
                    title: newDp.title,
                    id: availableId,
                    totalCredits: newDp.totalCredits,
                    semestersList: newDp.semestersList
                }
            ]);
            setAvailableId(availableId + 1);
        }
    }

    function deleteDp(id: number) {
        const updatedDps = degreePlans.filter((dp) => dp.id !== id);
        setdegreePlans(updatedDps);
    }
    function saveData() {
        localStorage.setItem(SAVE_KEY, JSON.stringify(degreePlans));
        localStorage.setItem(SAVED_ID, JSON.stringify(availableId));
    }

    return (
        <div>
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
                <DpList dp={degreePlans} deleteDp={deleteDp}></DpList>
                <Button className="add_btn" onClick={handleShowModal}>
                    Add New Degree Plan
                </Button>
                <Button onClick={saveData}>Save Degree Plans</Button>
                <AddDpSemestersCoursesModal
                    show={showAddModal}
                    handleClose={handleCloseModal}
                    addDp={addDp}
                ></AddDpSemestersCoursesModal>
                <div>
                    <Import
                        importData={importData}
                        setImportData={setImportData}
                    />
                    <GenerateCSV
                        data={[
                            ["First Name", "Last Name"],
                            ["Nicky", "Reigel"],
                            ["Aidan", "Bell"]
                        ]}
                        filename="testexport"
                    />
                </div>
            </div>
        </div>
    );
}
