/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import "./App.css";
import { SingleMultipleSemester } from "./Components/SingleMultipleSemester";
import { degreePlan } from "./interfaces/degreePlan";
import { Views } from "./interfaces/viewProps";
import { DegreePlanView } from "./Components/DegreePlanView";

// import SlowAdd from "./Components/SlowAdd";
// import QuickAdd from "./Components/QuickAdd";
// import { Class } from "./interfaces/class";
function App(): JSX.Element {
    const prevDegreePlan: degreePlan[] = [
        { name: "Plan 1", semesters: [] },
        { name: "Plan 2", semesters: [] },
        { name: "Plan 3", semesters: [] }
    ];
    //------------------------------------------------------------------------------------
    // Function to insert a new degree plan, creating an array
    // Function to remove  a new degree plan, removing an array
    function insertDegreePlan(
        prevDegreePlans: degreePlan[],
        newPlan: degreePlan
    ): degreePlan[] {
        const updatedDegreePlans = [...prevDegreePlans, newPlan];
        return updatedDegreePlans;
    }
    function removeDegreePlan(
        prevDegreePlans: degreePlan[],
        removePlan: degreePlan
    ): degreePlan[] {
        const updatedDegreePlans = prevDegreePlans.filter(
            (Plan: degreePlan): boolean => Plan.name !== removePlan.name
        );
        return updatedDegreePlans;
    }
    //-------------------------------------------------------------------------------------
    const [view, setView] = useState<Views>(Views.degreePlanView);
    const [currDegreePlan, setcurrDegreePlan] = useState<degreePlan>(
        prevDegreePlan[1]
    );
    const [degreePlanList, setDegreePlanList] =
        useState<degreePlan[]>(prevDegreePlan);

    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            {/* a button to create a new/remove degreePlan */}
            <button
                onClick={() =>
                    setDegreePlanList(
                        insertDegreePlan(degreePlanList, {
                            name: `Plan ${degreePlanList.length + 1}`,
                            semesters: []
                        })
                    )
                }
            >
                Create New Degree Plan
            </button>
            <button
                onClick={() =>
                    setDegreePlanList((prevDegreePlans) =>
                        removeDegreePlan(prevDegreePlans, currDegreePlan)
                    )
                }
            >
                Remove Degree Plan
            </button>
            {/* end of button to add/remove a new degree Plan */}
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
                <SingleMultipleSemester
                    setCurrentView={setView}
                    CurrentdegreePlan={currDegreePlan}
                    setCurrentDegreePlan={setcurrDegreePlan}
                    setDegreePlanList={setDegreePlanList}
                    DegreePlanList={degreePlanList}
                ></SingleMultipleSemester>
            )}
        </div>
    );
}

export default App;
