/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import "./App.css";
import Image1 from "./Images/Delaware-Blue-Hens-Logo.png";
import { SemesterTable } from "./semester/SemesterTable";
//import { MainButtons } from "./MainScreen/MainButtons";
import Image2 from "./Images/Udel-Crest.png";
import { MainButtons } from "./MainScreen/MainButtons";
import WelcomeMessage from "./welcome";
import { AddClass } from "./semester-modification/AddClass";
import { semester } from "./Interface/semester";
//import { Session } from "inspector";
//import { Button, Container, Row, Col } from "react-bootstrap";

const tmpClass = [
    {
        id: 1,
        fullTime: true,
        classList: [
            {
                code: "CISC108",
                title: "Introduction to Computer Science I",
                credits: 3,
                preReq: []
            },
            {
                code: "CISC181",
                title: "Introduction to Computer Science II",
                credits: 3,
                preReq: ["CISC108"]
            }
        ],
        totalCredits: 6,
        season: "Fall 2023"
    },
    {
        id: 2,
        fullTime: true,
        classList: [
            {
                code: "CISC210",
                title: "Introduction to Systems Programming",
                credits: 3,
                preReq: ["CISC108"]
            },
            {
                code: "CISC220",
                title: "Data Structures",
                credits: 3,
                preReq: ["CISC210"]
            }
        ],
        totalCredits: 6,
        season: "Spring 2023"
    },
    {
        id: 3,
        fullTime: true,
        classList: [
            {
                code: "CISC108",
                title: "Introduction to Computer Science I",
                credits: 3,
                preReq: []
            },
            {
                code: "CISC181",
                title: "Introduction to Computer Science II",
                credits: 3,
                preReq: ["CISC108"]
            }
        ],
        totalCredits: 6,
        season: "Winter 2023"
    }
];
//const [semesterList, setSemesterList] = useState<semester[]>(exClass);

const addNewClass = {
    code: "New Class",
    title: "Introduction to Computer Science 47",
    credits: 3,
    preReq: []
};

function App(): JSX.Element {
    const [exClass, setexClass] = useState<semester[]>(tmpClass);
    const [page, setPage] = useState(false);
    const [name, setName] = useState("");
    const getName = (name: string) => {
        setName(name);
    };
    const showHomePage = () => {
        setPage(!page);
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
                    <div>Welcome {name}!</div>
                    <SemesterTable></SemesterTable>
                    <MainButtons></MainButtons>
                </div>
            )}
        </div>
    );
}
export default App;
