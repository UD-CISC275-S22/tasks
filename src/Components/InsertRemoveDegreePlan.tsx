/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { degreePlanViewProps } from "./DegreePlanView";
import { degreePlan } from "../interfaces/degreePlan";
//---------------------------------------------------------------------------------
// Function to insert a new degree plan, creating an array
// Function to remove  a new degree plan, removing an array

export function InsertDegreePlan({
    setDegreePlanList,
    degreePlanList
}: degreePlanViewProps): JSX.Element {
    const updatedDegreePlans = [
        ...degreePlanList,
        {
            name: `Plan ${degreePlanList.length + 1}`,
            semesters: []
        }
    ];
    //return updatedDegreePlans;
    return (
        <Button onClick={() => setDegreePlanList(updatedDegreePlans)}>
            Create New Degree Plan
        </Button>
    );
}

export function RemoveDegreePlan(
    degreePlanList: degreePlan[],
    setDegreePlanList: (degreePlan: degreePlan[]) => void,
    removePlan: degreePlan
): JSX.Element {
    const updatedDegreePlans = degreePlanList.filter(
        (degreePlan: degreePlan): boolean => degreePlan.name !== removePlan.name
    );
    //return updatedDegreePlans;
    return (
        <Button onClick={() => setDegreePlanList(updatedDegreePlans)}>
            Remove
        </Button>
    );
}

//-------------------------------------------------------------------------------------
/*const [degreePlanList, setDegreePlanList] =
        useState<degreePlan[]>(prevDegreePlan);
        */
/*
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
                                setDegreePlanList((degreePlanList) =>
                                    removeDegreePlan(degreePlanList, plan)
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
*/
