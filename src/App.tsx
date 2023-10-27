import React from "react";
import "./App.css";
import { ViewSemester } from "./Components/ViewSemesters";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <p>CISC275 Final-Project</p>
            </header>
            <header>Matthew Mestre</header>
            <header>Bryant Ferguson </header>
            <header>Ava West</header>
            <header>Malika Iyer</header>
            <header>Dina Dawood</header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <hr></hr>
            <ViewSemester></ViewSemester>
        </div>
    );
}

export default App;
