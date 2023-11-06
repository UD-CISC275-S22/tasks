import React from "react";
import "./App.css";
import { SingleMultipleSemester } from "./Components/SingleMultipleSemester";
// import SlowAdd from "./Components/SlowAdd";
// import QuickAdd from "./Components/QuickAdd";
// import { Class } from "./interfaces/class";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <SingleMultipleSemester></SingleMultipleSemester>
        </div>
    );
}

export default App;
