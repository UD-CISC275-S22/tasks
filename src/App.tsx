import React from "react";
import "./App.css";
import { Quizzer } from "./quizzer/Quizzer";
import { ShowHideTasks } from "./ShowHideTasks";
import sketch from "./quizzer/scratch.jpeg";

function App(): JSX.Element {
    const criteria = ["Application is sketched", "Quizzes are Visible"];
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Yiming Wang
            </header>
            <Quizzer></Quizzer>
            <img
                src={sketch}
                width="370"
                height="370"
                alt="Sketch of App"
            ></img>
            <h3>Completed Features</h3>
            <ul>
                {criteria.map((detail: string) => (
                    <li key={detail}>{detail}</li>
                ))}
            </ul>
            <hr></hr>
            <ShowHideTasks></ShowHideTasks>
        </div>
    );
}

export default App;
