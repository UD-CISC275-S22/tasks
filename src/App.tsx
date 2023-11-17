/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import "./App.css";
import Image1 from "./Images/Delaware-Blue-Hens-Logo.png";
import Image2 from "./Images/Udel-Crest.png";
import WelcomeMessage from "./welcome";
import { SideNav2 } from "./SideNav/SideNav2";
import { SwitchComponents } from "./SwitchComponents";
import { Col, Row } from "react-bootstrap";
import { AddSemesterModal } from "./SemesterModal/addSemesterModal";
import { semester } from "./Interface/semester";
import { classes } from "./Interface/classes";
import { Plan } from "./Interface/Plan";
import sample from "./data/Dummy.json";
import { AddToSemester } from "./semester-modification/AddToSemester";
import { ChosenMajor } from "./Audit/ChosenMajor";
import { PlanView } from "./PlanView/PlanView";

function App(): JSX.Element {
    const [page, setPage] = useState(false);
    const [name, setName] = useState("");
    const [seeSemesterView, setSeeSemesterView] = useState(false);
    const [modalView, setModalView] = useState(false);
    const [addView, setAddView] = useState(false);
    const [seeAudit, setSeeAudit] = useState(false);
    const [displayPlan, setdisplayPlan] = useState(false);
    const getName = () => {
        setName(name);
    };
    const showHomePage = () => {
        setPage(!page);
    };
    const flipView = () => {
        setSeeSemesterView(!seeSemesterView);
    };

    const flipModalView = () => {
        setModalView(!modalView);
    };

    const flipAddView = () => {
        setAddView(!addView);
    };

    const flipAudit = () => {
        setSeeAudit(!seeAudit);
    };

    const flipPlan = () => {
        setdisplayPlan(!displayPlan);
    };

    const planExamples = sample.map(
        (plan): Plan => ({
            ...plan,
            semesters: plan.semesters.map((s: semester) => ({
                ...s,
                classList: s.classList.map((c: classes) => ({
                    ...c
                }))
            }))
        })
    );
    const [plans] = useState<Plan[]>(planExamples);
    const FirstPlan = plans[0].semesters;
    const [semesters, setSemesters] = useState<semester[]>(FirstPlan);

    function addSemester(
        id: number,
        fullTime: boolean,
        classList: classes[],
        totalCredits: number,
        season: string
    ): void {
        const newSemester: semester = {
            id: id,
            fullTime: fullTime,
            classList: classList,
            totalCredits: totalCredits,
            season: season
        };
        setSemesters([...semesters, newSemester]);
    }

    function onAddClass(updatedSemester: semester[]): void {
        setSemesters(updatedSemester);
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={Image1} className="logo" />
                <h1 className="Title">Udel CS Course Scheduler</h1>
                <img src={Image2} className="logo" />
            </header>
            {!page ? (
                <WelcomeMessage
                    showHomePage={showHomePage}
                    getName={getName}
                ></WelcomeMessage>
            ) : (
                <div>
                    {
                        //prettier giving issues with large ternary else. Will be fixed by end of sprint.
                    }
                    <Row>
                        <Col sm={2}>
                            {" "}
                            <SideNav2
                                flipView={flipView}
                                flipPlan={flipPlan}
                                flipModalView={flipModalView}
                                flipAudit={flipAudit}
                                flipAddView={flipAddView}
                            ></SideNav2>
                        </Col>
                        <Col sm={10}>
                            {modalView && (
                                <AddSemesterModal
                                    handleClose={flipModalView}
                                    show={modalView}
                                    semesterExamples={semesters}
                                    addSemester={addSemester}
                                />
                            )}
                            {addView && (
                                <AddToSemester
                                    handleClose={flipAddView}
                                    show={addView}
                                    semesters={semesters}
                                    onAddClass={onAddClass}
                                />
                            )}
                            {seeAudit && (
                                <ChosenMajor
                                    handleClose={flipAudit}
                                    show={seeAudit}
                                />
                            )}
                            {displayPlan && (
                                <PlanView
                                    handleClose={flipPlan}
                                    show={displayPlan}
                                    allplans={plans}
                                    changeViewSemesters={setSemesters}
                                />
                            )}
                            <SwitchComponents
                                seeSemesterView={seeSemesterView}
                                semesterExamples={semesters}
                                setSemesters={setSemesters}
                            ></SwitchComponents>
                        </Col>
                    </Row>
                </div>
            )}
        </div>
    );
}

export default App;

{
    /*pagecomponents

if seeSemester
    return semestercomponent
if seecourse
return coursecomponent*/
}
