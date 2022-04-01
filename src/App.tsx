import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

import { Quizzer } from "./quizzer/Quizzer";
import { ShowHideTasks } from "./tasks/ShowHideTasks";

function App(): JSX.Element {
    const [quizzer, setQuizzerState] = useState<boolean>(true);

    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript, Shaun Gupta
            </header>

            <Button
                onClick={() => {
                    setQuizzerState(!quizzer);
                }}
            >
                {" "}
                {quizzer ? "Quizzer" : "Tasks"}{" "}
            </Button>

            <div style={{ display: quizzer ? "block" : "none" }}>
                <Quizzer></Quizzer>
            </div>

            <ShowHideTasks visible={!quizzer}></ShowHideTasks>
        </div>
    );
}
export default App;
