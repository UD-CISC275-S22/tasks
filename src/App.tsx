import React, { useState } from "react";
import "./App.css";
import Image1 from "./Images/Delaware-Blue-Hens-Logo.png";
import { SemesterTable } from "./semester/SemesterTable";
//import { MainButtons } from "./MainScreen/MainButtons";
import Image2 from "./Images/Udel-Crest.png";
import { MainButtons } from "./MainScreen/MainButtons";
import WelcomeMessage from "./welcome";
import { Session } from "inspector";
//import { Button, Container, Row, Col } from "react-bootstrap";
//import { useState } from "react";

function App(): JSX.Element {
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
