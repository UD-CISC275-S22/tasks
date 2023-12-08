/* eslint-disable no-extra-parens */
import React, { useEffect, useState } from "react";
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
import {
    ChosenMajor,
    generalClasses,
    generalCredits
} from "./Audit/ChosenMajor";
import { PlanView } from "./PlanView/PlanView";
import { DownloadPlan } from "./PlanView/DownloadPlan";
import { SeeAuditPage } from "./Audit/SeeAuditPage";
import { AddPlan } from "./addPlan/AddPlan";

function App(): JSX.Element {
    const [page, setPage] = useState(false);
    const [name, setName] = useState("");
    const [seeSemesterView, setSeeSemesterView] = useState(false);
    const [modalView, setModalView] = useState(false);
    const [addView, setAddView] = useState(false);
    const [seeAudit, setSeeAudit] = useState(false);
    const [displayPlan, setdisplayPlan] = useState(false);
    const [downloadPlan, setDownloadPlan] = useState(false);
    const [currentPlan, setCurrentPlan] = useState("");
    const [majorPageView, setMajorPageView] = useState(false);
    const [addPlanView, setAddPlanView] = useState(false);

    const getName = () => {
        setName(name);
    };
    const showHomePage = () => {
        setPage(!page);
    };
    const flipView = () => {
        setSeeSemesterView(true);
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

    const flipDownload = () => {
        setDownloadPlan(!downloadPlan);
    };

    const flipMajorPageView = () => {
        setMajorPageView(!majorPageView);
    };

    const flipAddPlanView = () => {
        setAddPlanView(!addPlanView);
    };

    //exported const from ChosenMajor.tsx
    //Classes for each major
    const [degreeRequirements, setDegreeRequirements] =
        useState<string[]>(generalClasses);
    const [basicCredits] = useState<number[]>(generalCredits);
    const [usedClasses, setUsedClasses] = useState<classes[][]>([]);
    const [major, setMajor] = useState<string>("");

    function reqList(finalList: string[]) {
        setDegreeRequirements(finalList);
    }

    function setNewMajor(newMajor: string) {
        if (major !== newMajor) {
            setUsedClasses([]);
        }
        setMajor(newMajor);
    }

    function pushCurrList(classesUsed: classes[][]) {
        setUsedClasses(classesUsed);
    }

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
    const [plans, setPlans] = useState<Plan[]>(planExamples);

    const [semesters, setSemesters] = useState<semester[]>([]);

    function onAddClass(updatedSemester: semester[]): void {
        setSemesters(updatedSemester);
    }

    function updatingPlans(): void {
        const findIndexplan: number = plans.findIndex(
            (plan) => plan.name === currentPlan
        );
        if (findIndexplan === -1) {
            console.log("sike i lied");
        } else {
            const foundPlan = {
                ...plans[findIndexplan],
                semesters: semesters
            };
            console.log(semesters);
            plans.splice(findIndexplan, 1, foundPlan);
            console.log(plans);
            setPlans(plans);
        }
    }

    useEffect(() => updatingPlans(), [semesters]);

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
                                flipAddPlanView={flipAddPlanView}
                                flipPlan={flipPlan}
                                flipModalView={flipModalView}
                                flipAudit={flipAudit}
                                flipAddView={flipAddView}
                                flipDownload={flipDownload}
                            ></SideNav2>
                        </Col>
                        <Col sm={10}>
                            {modalView && (
                                <AddSemesterModal
                                    handleClose={flipModalView}
                                    show={modalView}
                                    semesters={semesters}
                                    settingSemester={setSemesters}
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
                                    newMajor={setNewMajor}
                                />
                            )}
                            {displayPlan && (
                                <PlanView
                                    handleClose={flipPlan}
                                    show={displayPlan}
                                    allplans={plans}
                                    changeViewSemesters={setSemesters}
                                    setCurrentPlan={setCurrentPlan}
                                />
                            )}
                            {downloadPlan && (
                                <DownloadPlan
                                    handleClose={flipDownload}
                                    show={downloadPlan}
                                    allplans={plans}
                                />
                            )}
                            {addPlanView && (
                                <AddPlan
                                    handleClose={flipAddPlanView}
                                    show={addPlanView}
                                    allplans={plans}
                                    setPlans={setPlans}
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
                                major={major}
                                creditList={basicCredits}
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
