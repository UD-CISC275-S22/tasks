/* eslint-disable no-extra-parens */
import React, { useEffect, useState } from "react";
import "./App.css";
import { Plan, Planner } from "./Planner";
import { computerSciencePlan } from "./degrees/CompSci";
import { physicsPlan } from "./degrees/Physics";

function App(): JSX.Element {
    const [currentPlan, setCurrentPlan] = useState(computerSciencePlan);
    const [planList, setPlanList] = useState<Plan[]>([
        computerSciencePlan,
        physicsPlan
    ]);
    const [selectedPlan, setSelectedPlan] = useState<string>(
        computerSciencePlan.id
    );

    useEffect(() => {
        setPlanList([computerSciencePlan, physicsPlan]);
        setSelectedPlan(computerSciencePlan.id);
    }, []);

    const createNewPlan = () => {
        const newPlan: Plan = {
            id: "Plan_" + (planList.length + 1),
            title: "New Plan",
            semesters: []
        };

        setPlanList(prevList => [...prevList, newPlan]);
        setCurrentPlan(newPlan);
        setSelectedPlan(newPlan.id);
    };

    const switchPlan = (planId: string) => {
        const selected = planList.find(plan => plan.id === planId);
        if (selected) {
            setCurrentPlan(selected);
            setSelectedPlan(planId);
        }
    };

    const editPlanTitle = (newTitle: string) => {
        if (currentPlan) {
            const updatedList = planList.map(plan =>
                plan.id === currentPlan.id ? { ...plan, title: newTitle } : plan
            );
            setPlanList(updatedList);
            setCurrentPlan(prevPlan => ({ ...prevPlan, title: newTitle }));
        }
    };

    return (
        <div>
            <p>
                Andrew Fonseca, Shrey Patel, Mann Patel, Thiago Vazquez, Devlan
                Horner
            </p>
            <label>
                Select Plan:{" "}
                <select
                    value={selectedPlan}
                    onChange={e => switchPlan(e.target.value)}
                >
                    {planList.map(plan => (
                        <option key={plan.id} value={plan.id}>
                            {plan.title}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Edit Plan Title:
                <input
                    type="text"
                    value={currentPlan?.title || ""}
                    onChange={e => editPlanTitle(e.target.value)}
                />
            </label>
            <button onClick={createNewPlan}>Create New Plan</button>
            <Planner plan={currentPlan} />
        </div>
    );
}

export default App;
