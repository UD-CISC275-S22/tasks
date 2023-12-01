import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { degreePlan } from "../interfaces/degreePlan";

export function InsertRemoveDegreePlan(): JSX.Element {
    const prevDegreePlan: degreePlan[] = [];
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
            (degreePlan: degreePlan): boolean =>
                degreePlan.name !== removePlan.name
        );
        return updatedDegreePlans;
    }

    //-------------------------------------------------------------------------------------
    const [degreePlanList, setDegreePlanList] =
        useState<degreePlan[]>(prevDegreePlan);

    return (
        <div>
            <Button
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
            </Button>
            <ul>
                {degreePlanList.map((plan) => (
                    <li key={plan.name}>
                        <Button
                            onClick={() =>
                                setDegreePlanList((prevDegreePlans) =>
                                    removeDegreePlan(prevDegreePlans, plan)
                                )
                            }
                        >
                            Remove
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
