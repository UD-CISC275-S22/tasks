import React from "react";
import "./App.css";
import { SingleMultipleSemester } from "./Components/SingleMultipleSemester";
import AddDeleteCourses from "./Components/AddDeleteCourses";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <AddDeleteCourses></AddDeleteCourses>
            <SingleMultipleSemester></SingleMultipleSemester>
        </div>
    );
}

export default App;
