import React from "react";
import "./App.css";
import { SingleMultipleSemester } from "./Components/SingleMultipleSemester";
import AddDeleteCourses from "./Components/AddDeleteCourses";
import QuickAdd from "./Components/QuickAdd";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <div>
                <h4>Search for your course, or manually input your course.</h4>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ marginRight: "5px" }}>
                        <QuickAdd />
                    </div>
                    <div className="separator"></div>
                    <div style={{ marginLeft: "5px" }}>
                        <AddDeleteCourses />
                    </div>
                </div>
            </div>
            <SingleMultipleSemester></SingleMultipleSemester>
        </div>
    );
}

export default App;
