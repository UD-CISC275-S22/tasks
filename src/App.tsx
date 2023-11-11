/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import "./App.css";
import Image1 from "./Images/Delaware-Blue-Hens-Logo.png";
//import { SemesterTable } from "./semester/SemesterTable";
//import { MainButtons } from "./MainScreen/MainButtons";
import Image2 from "./Images/Udel-Crest.png";
//import { MainButtons } from "./MainScreen/MainButtons";
import WelcomeMessage from "./welcome";
//import { Session } from "inspector";
//import { Button, Container, Row, Col } from "react-bootstrap";
//import { useState } from "react";
import { SideNav2 } from "./SideNav/SideNav2";
import { SwitchComponents } from "./SwitchComponents";
import { Col, Row } from "react-bootstrap";
import { AddSemesterModal } from "./SemesterModal/addSemesterModal";
import { semester } from "./Interface/semester";
import { classes } from "./Interface/classes";
import sample from "./data/data.json";

function App(): JSX.Element {
    const [page, setPage] = useState(false);
    const [name, setName] = useState("");
    const [seeSemesterView, setSeeSemesterView] = useState(false);
    const [modalView, setModalView] = useState(false);
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
                    <Row>
                        <Col sm={2}>
                            {" "}
                            <SideNav2
                                flipView={flipView}
                                flipModalView={flipModalView}
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
