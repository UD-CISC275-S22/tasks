/* eslint-disable indent */
/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import "./App.css";
import { GenerateCSV, Import } from "./CSV";
import { DegreePlan } from "./interfaces/degreeplan";
import dpsamplejson from "./sampleDpData.json"; //this is the real json data that the user will start with if they are new
import { Button } from "react-bootstrap";
import { DpList } from "./DpList";
import { AddDpSemestersCoursesModal } from "./AddDpSemestersCoursesModal";
import { WelcomeMessage } from "./Name";

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
    const [isSiteVisble, setIsSiteVisible] = useState(false);
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
    const toggleSiteVisability = () => {
        setIsSiteVisible(!isSiteVisble);
    };

    function editDegreePlan(id: number, newDp: DegreePlan) {
        setdegreePlans(
            degreePlans.map(
                (dp: DegreePlan): DegreePlan => (dp.id === id ? newDp : dp)
            )
        );
    }

    return (
        <div>
            <WelcomeMessage></WelcomeMessage>
            <DpList dp={degreePlans} deleteDp={deleteDp}></DpList>
            <Button onClick={toggleSiteVisability} className="link_wrapper">
                <a href="#">Continue to Site!</a>
                <div className="icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 268.832 268.832"
                    >
                        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                    </svg>
                </div>
            </Button>
            {isSiteVisble && (
                <div className="Back-color">
                    <div className="App">
                        <header className="App-header2">
                            University of Delaware Computer Science Degree Plan
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
                        <div className="App-blockright">
                            <p className="BT">
                                Here you will select your desired courses to
                                build your degree plan:{" "}
                            </p>

                            <Button
                                className="add_btn"
                                onClick={handleShowModal}
                            >
                                Add New Degree Plan
                            </Button>
                            <Button onClick={saveData}>
                                Save Degree Plans
                            </Button>
                            <AddDpSemestersCoursesModal
                                show={showAddModal}
                                handleClose={handleCloseModal}
                                addDp={addDp}
                            ></AddDpSemestersCoursesModal>
                        </div>
                        <div className="App-blockleft">
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
                    </div>{" "}
                </div>
            )}
        </div>
    );
}
