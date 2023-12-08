/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import "./App.css";
import { Planner } from "./Components/Planner";
import { degreePlan } from "./interfaces/degreePlan";
import { Views } from "./interfaces/viewProps";
import { DegreePlanView } from "./Components/DegreePlanView";
import logo from "../src/logo.png";

// import SlowAdd from "./Components/SlowAdd";
// import QuickAdd from "./Components/QuickAdd";
// import { Class } from "./interfaces/class";
function App(): JSX.Element {
    //--------------------------------------------------------------------------------------
    const prevDegreePlan: degreePlan[] = [
        { name: "Plan 1", semesters: [] },
        { name: "Plan 2", semesters: [] }
    ];
    //act as the initial value, otherwise the "go back" button will not work
    //--------------------------------------------------------------------------------------
    const [view, setView] = useState<Views>(Views.degreePlanView);
    const [currDegreePlan, setcurrDegreePlan] = useState<degreePlan>(
        prevDegreePlan[1]
    );
    const [degreePlanList, setDegreePlanList] =
        useState<degreePlan[]>(prevDegreePlan);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} width="100" alt="BH" /> CS Degree Planner
                <h5>
                    Welcome! To get started, create a new degree plan, click on
                    the plan you would like to view, and click &ldquo;View
                    Plan&ldquo;
                </h5>
            </header>
            {view === Views.degreePlanView && (
                <DegreePlanView
                    setDegreePlanList={setDegreePlanList}
                    setCurrentView={setView}
                    setCurrentDegreePlan={setcurrDegreePlan}
                    degreePlanList={degreePlanList}
                ></DegreePlanView>
            )}
            {view === Views.semestersView && (
                // singleMutipleSemester needs to get pass the current degreePlan in order to know which degreePlan to display
                //try to come up with a save.
                //<SingleMultipleSemester></SingleMultipleSemester>
                <Planner
                    setCurrentView={setView}
                    CurrentdegreePlan={currDegreePlan}
                    setCurrentDegreePlan={setcurrDegreePlan}
                    setDegreePlanList={setDegreePlanList}
                    DegreePlanList={degreePlanList}
                ></Planner>
            )}
        </div>
    );
}

export default App;
