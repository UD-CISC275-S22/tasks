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
        prevDegreePlan[0]
    );
    const [degreePlanList, setDegreePlanList] =
        useState<degreePlan[]>(prevDegreePlan);

    // Save function to update the current degree plan
    const saveCurrentPlan = (updatedPlan: degreePlan) => {
        console.log("Saving updated plan:", updatedPlan);

        setcurrDegreePlan(updatedPlan);

        // Update the degree plan list by creating a new array with the updated plan
        const updatedDegreePlanList = degreePlanList.map((plan: degreePlan) =>
            plan.name === updatedPlan.name ? updatedPlan : plan
        );

        console.log("Updated degree plan list:", updatedDegreePlanList);

        setDegreePlanList(updatedDegreePlanList);
    };

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
                />
            )}
            {view === Views.semestersView && (
                <Planner
                    setCurrentView={setView}
                    CurrentdegreePlan={currDegreePlan}
                    setCurrentDegreePlan={setcurrDegreePlan}
                    setDegreePlanList={setDegreePlanList}
                    DegreePlanList={degreePlanList}
                    saveCurrentPlan={saveCurrentPlan}
                />
            )}
        </div>
    );
}

export default App;
