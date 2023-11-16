import React, { useState } from "react";
import "./App.css";
import { SingleMultipleSemester } from "./Components/SingleMultipleSemester";
import { degreePlan } from "./interfaces/degreePlan";
import { Views } from "./interfaces/viewProps";
import { degreePlanView } from "./Components/degreePlanView";

// import SlowAdd from "./Components/SlowAdd";
// import QuickAdd from "./Components/QuickAdd";
// import { Class } from "./interfaces/class";
function App(): JSX.Element {
    const [view, setView] = useState<Views>(Views.degreePlanView);
    const [currDegreePlan, setcurrDegreePlan] = useState<degreePlan>();
    const [degreePlanList, setDegreePlanList] = useState<degreePlan[]>([]);
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            {view === Views.degreePlanView && <degreePlanView></degreePlanView>}
            {view === Views.semestersView && (
                // singleMutipleSemester needs to get pass the current degreePlan in order to know which degreePlan to display
                //try to come up with a save.
                <SingleMultipleSemester></SingleMultipleSemester>
            )}
        </div>
    );
}

export default App;
