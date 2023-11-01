import React from "react";
import "./App.css";
import { SeeSingleSemester } from "./Components/SeeSingleSemester";
import AddDeleteCourses from "./Components/AddDeleteCourses";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <AddDeleteCourses></AddDeleteCourses>
            <SeeSingleSemester></SeeSingleSemester>
        </div>
    );
}

export default App;
