import React from "react";
import "./App.css";
import { Planner } from "./Planner";
import { CompSciPlan } from "./degrees/CompSci";

function App(): JSX.Element {
    return (
        <div>
            <Planner plan={CompSciPlan} />
        </div>
    );
}

export default App;
