/* eslint-disable no-extra-parens */
import React, { useEffect, useState } from "react";
import "./App.css";
import Image1 from "./Images/Delaware-Blue-Hens-Logo.png";
import Image2 from "./Images/Udel-Crest.png";
import Image3 from "./Images/UniversityofDelawareLogo.png";
import WelcomeMessage from "./welcome";
import { SideNav2 } from "./SideNav/SideNav2";
import { SwitchComponents } from "./SwitchComponents";
import { Col, Row } from "react-bootstrap";
import { AddSemesterModal } from "./SemesterModal/addSemesterModal";
import { semester } from "./Interface/semester";
import { classes } from "./Interface/classes";
import { Plan } from "./Interface/Plan";
//import sample from "./data/Dummy.json";
import { AddToSemester } from "./semester-modification/AddToSemester";
import {
    ChosenMajor,
    generalClasses,
    generalCredits
} from "./Audit/ChosenMajor";
import { PlanView } from "./PlanView/PlanView";
import { DownloadPlan } from "./PlanView/DownloadPlan";
import { SeeAuditPage } from "./Audit/SeeAuditPage";
import { AddDeletePlan } from "./addPlan/AddDeletePlan";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

function App(): JSX.Element {
    const [page, setPage] = useState(false);
    const [seeSemesterView, setSeeSemesterView] = useState(false);
    const [modalView, setModalView] = useState(false);
    const [addView, setAddView] = useState(false);
    const [seeAudit, setSeeAudit] = useState(false);
    const [displayPlan, setdisplayPlan] = useState(false);
    const [downloadPlan, setDownloadPlan] = useState(false);
    const [currentPlan, setCurrentPlan] = useState("");
    const [majorPageView, setMajorPageView] = useState(false);
    const [addPlanView, setAddPlanView] = useState(false);

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

    const flipMajorPageViewOn = () => {
        setMajorPageView(true);
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
    const [Credits, setCredits] = useState<number[]>(generalCredits);
    const [usedClasses, setUsedClasses] = useState<classes[][]>([]);
    const [major, setMajor] = useState<string>("");

    function reqList(finalList: string[]) {
        setDegreeRequirements(finalList);
    }

    function creditList(allCredit: number[]) {
        setCredits(allCredit);
    }

    function setNewMajor(newMajor: string) {
        setMajor(newMajor);
    }

    function resetCurrList() {
        setUsedClasses([]);
    }
    const handleLogout = () => {
        // console.log(page);
        // setPage(!page);
        // console.log("Logging out...");
        // console.log(page);
        signOut(auth)
            .then(() => {
                console.log("Sign Out was Successful");
                //onLogout();
                showHomePage();
            })
            .catch((error) => console.log(error));
    };

    /*
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
*/
    const [plans, setPlans] = useState<Plan[]>([]);

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

    console.log(currentPlan);

    useEffect(() => updatingPlans(), [semesters]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={Image1} className="logo" />
                <h1 className="Title">Course Scheduler</h1>
                <img src={Image2} className="logo" />
            </header>
            {!page ? (
                <WelcomeMessage
                    showHomePage={showHomePage}
                    onLogout={handleLogout}
                ></WelcomeMessage>
            ) : (
                <div
                    style={{
                        backgroundImage:
                            "linear-gradient(#fcf0b6 10%, #ffd902 85%)"
                    }}
                >
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
                                handleLogout={handleLogout}
                            ></SideNav2>
                        </Col>
                        <Col sm={10}>
                            {modalView && (
                                <AddSemesterModal
                                    handleClose={flipModalView}
                                    show={modalView}
                                    semesters={semesters}
                                    settingSemester={setSemesters}
                                    currentPlan={currentPlan}
                                />
                            )}
                            {addView && (
                                <AddToSemester
                                    handleClose={flipAddView}
                                    show={addView}
                                    semesters={semesters}
                                    onAddClass={onAddClass}
                                    currentPlan={currentPlan}
                                />
                            )}
                            {seeAudit && (
                                <ChosenMajor
                                    handleClose={flipAudit}
                                    show={seeAudit}
                                    majorPageView={flipMajorPageViewOn}
                                    reqList={reqList}
                                    newMajor={setNewMajor}
                                    creditList={creditList}
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
                            {currentPlan === "" && majorPageView !== true && (
                                <img
                                    src={Image3}
                                    alt=""
                                    style={{
                                        maxHeight: "650px",
                                        maxWidth: "650px"
                                    }}
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
                                <AddDeletePlan
                                    handleClose={flipAddPlanView}
                                    show={addPlanView}
                                    allplans={plans}
                                    setPlans={setPlans}
                                    currentPlan={currentPlan}
                                    setCurrentPlan={setCurrentPlan}
                                    setSemesters={setSemesters}
                                />
                            )}
                            <SwitchComponents
                                seeSemesterView={seeSemesterView}
                                semesterExamples={semesters}
                                setSemesters={setSemesters}
                                currentPlan={currentPlan}
                            ></SwitchComponents>
                            <SeeAuditPage
                                canView={majorPageView}
                                reqList={degreeRequirements}
                                plan={semesters}
                                prevUsedClasses={usedClasses}
                                creditList={Credits}
                                major={major}
                                resetCurrList={resetCurrList}
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
