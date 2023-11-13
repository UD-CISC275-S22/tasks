import React, { useState } from "react";
import "./App.css";
///import { Button } from "react-bootstrap";
//import { data } from "./classData";
import { plan } from "./PlannerInterfaces/plan";
import { Plan } from "./Plan";
import DefaultPlans from "./Defaults.json";
function App(): JSX.Element {
    // const [isOpen, setIsOpen] = useState(true);
    // const [selectedPlan, setSelectedPlan] = useState<number>(-1); //Selected plan
    // // function toggleModal() {
    // //     setIsOpen(!isOpen);
    // }
    const defaultPlan = DefaultPlans.defaultPlans;
    const [degreePlans, setDegreePlans] = useState<plan[]>(defaultPlan);
    return (
        <div className="App">
            <header className="App-header">UD Course Planner</header>
            <p>
                James Lloyd, Kerry Ferguson, Matthew Conlon, Caleb Sachetti,
                Arnav Baliyan
            </p>
            <p> List of Degree Plans: </p>
            <table>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Credits</th>
                </tr>
            </table>
            <Plan
                degreePlans={degreePlans}
                setDegreePlans={setDegreePlans}
                currentPlan={degreePlans[0]}
            ></Plan>
        </div>
    );
}

export default App;
