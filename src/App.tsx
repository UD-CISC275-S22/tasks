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
    const prevDegreePlan: degreePlan[] = [];
    //-------------------------------------------------------
    // Function to insert a new degree plan
    //creating an array
    function insertDegreePlan(
        prevDegreePlans: degreePlan[],
        newDegreePlan: degreePlan
    ): degreePlan[] {
        const updatedDegreePlans = [...prevDegreePlans, newDegreePlan];

        return updatedDegreePlans;
    }
    //--------------------------------------------------------
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
            </header>
            {view === Views.degreePlanView && (
                <DegreePlanView
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
