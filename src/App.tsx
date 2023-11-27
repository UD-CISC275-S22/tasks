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
import sample from "./data/data.json";
import { AddToSemester } from "./semester-modification/AddToSemester";
import { ChosenMajor } from "./Audit/ChosenMajor";
import { SeeAuditPage } from "./Audit/SeeAuditPage";

function App(): JSX.Element {
    const [page, setPage] = useState(false);
    const [name, setName] = useState("");
    const [seeSemesterView, setSeeSemesterView] = useState(false);
    const [modalView, setModalView] = useState(false);
    const [addView, setAddView] = useState(false);
    const [seeAudit, setSeeAudit] = useState(false);
    const [majorPageView, setMajorPageView] = useState(false);
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

    const flipMajorPageView = () => {
        setMajorPageView(!majorPageView);
    };

    const semesterExamples = sample.map(
        (sem): semester => ({
            ...sem,
            classList: sem.classList.map(
                (c): classes => ({
                    ...c
                })
            )
        })
    );

    const [semesters, setSemesters] = useState<semester[]>(semesterExamples);

    //exported const from ChosenMajor.tsx
    //Classes for each major
    const [degreeRequirements, setDegreeRequirements] = useState<string[]>([]);
    const [usedClasses, setUsedClasses] = useState<classes[][]>([[]]);

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

    function reqList(finalList: string[]) {
        if (!degreeRequirements.every((req, IDX) => req === finalList[IDX])) {
            setUsedClasses([[]]);
        }
        setDegreeRequirements(finalList);
    }

    function pushCurrList(classesUsed: classes[][]) {
        setUsedClasses(classesUsed);
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
                                    majorPageView={flipMajorPageView}
                                    reqList={reqList}
                                />
                            )}
                            <SwitchComponents
                                seeSemesterView={seeSemesterView}
                                semesterExamples={semesters}
                                setSemesters={setSemesters}
                            ></SwitchComponents>
                            <SeeAuditPage
                                canView={majorPageView}
                                reqList={degreeRequirements}
                                plan={semesters}
                                prevUsedClasses={usedClasses}
                                pushCurrList={pushCurrList}
                                stopView={flipMajorPageView}
                            ></SeeAuditPage>
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
