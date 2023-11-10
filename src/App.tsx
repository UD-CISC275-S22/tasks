/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import "./App.css";
import Image1 from "./Images/Delaware-Blue-Hens-Logo.png";
import { SemesterTable } from "./semester/SemesterTable";
//import { MainButtons } from "./MainScreen/MainButtons";
import Image2 from "./Images/Udel-Crest.png";
import { MainButtons } from "./MainScreen/MainButtons";
import WelcomeMessage from "./welcome";
//import { Session } from "inspector";
//import { Button, Container, Row, Col } from "react-bootstrap";
//import { useState } from "react";
import { SideNav2 } from "./SideNav/SideNav2";
import { SwitchComponents } from "./SwitchComponents";
import { Col, Row } from "react-bootstrap";

function App(): JSX.Element {
    const [page, setPage] = useState(false);
    const [name, setName] = useState("");
    const [seeSemesterView, setSeeSemesterView] = useState(false);
    const getName = (name: string) => {
        setName(name);
    };
    const showHomePage = () => {
        setPage(!page);
    };
    const flipView = () => {
        setSeeSemesterView(!seeSemesterView);
    };
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
                    <div>
                        <Row>
                            <Col sm={2}>
                                {" "}
                                <SideNav2 flipView={flipView}></SideNav2>
                            </Col>
                            <Col sm={10}>
                                <SwitchComponents
                                    seeSemesterView={seeSemesterView}
                                ></SwitchComponents>
                            </Col>
                        </Row>
                    </div>
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
