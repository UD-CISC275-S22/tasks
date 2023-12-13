/* eslint-disable no-extra-parens */
import React, { useState, useEffect } from "react";
import "./App.css";
import { Planner } from "./Components/Planner";
import { degreePlan } from "./interfaces/degreePlan";
import { Views } from "./interfaces/viewProps";
import { DegreePlanView } from "./Components/DegreePlanView";
import logo from "../src/logo.png";

function App(): JSX.Element {
    const [view, setView] = useState<Views>(Views.degreePlanView);
    const [currDegreePlan, setcurrDegreePlan] = useState<degreePlan>({
        name: "",
        semesters: []
    });
    const [degreePlanList, setDegreePlanList] = useState<degreePlan[]>([]);

    useEffect(() => {
        const initialDegreePlans: degreePlan[] = [
            { name: "Plan 1", semesters: [] },
            { name: "Plan 2", semesters: [] }
        ];

        setDegreePlanList(initialDegreePlans);
        setcurrDegreePlan(initialDegreePlans[0]);
    }, []);

    const saveCurrentPlan = (updatedPlan: degreePlan) => {
        setcurrDegreePlan(updatedPlan);
        const updatedDegreePlanList = degreePlanList.map((plan) =>
            plan.name === updatedPlan.name ? updatedPlan : plan
        );

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
