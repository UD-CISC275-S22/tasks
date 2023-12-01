import React from "react";
import "./App.css";
import { Planner } from "./Planner";
import { CompSciPlan } from "./degrees/CompSci";

function App(): JSX.Element {
    return (
        <div>
            <p>
                Andrew Fonseca, Shrey Patel, Mann Patel, Thiago Vazquez, Devlan
                Horner
            </p>
            <Planner plan={CompSciPlan} />
        </div>
    );
}

export default App;
