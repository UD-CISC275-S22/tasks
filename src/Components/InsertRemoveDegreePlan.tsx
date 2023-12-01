import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { degreePlan, degreePlanProps } from "../interfaces/degreePlan";
import { Views } from "../interfaces/viewProps";

export function InsertRemoveDegreePlan({
    prevDegreePlans,
    CurrentdegreePlan
}: {
    prevDegreePlans: degreePlan[];
    CurrentdegreePlan: degreePlan;
    setDegreePlanList: (degreePlan: degreePlan[]) => void;
    degreePlanList: degreePlan[];
}): JSX.Element {
    const prevDegreePlan: degreePlan[] = [];
    //------------------------------------------------------------------------------------
    // Function to insert a new degree plan, creating an array
    // Function to remove  a new degree plan, removing an array

    function insertDegreePlan() {
        const updatedDegreePlans = [...prevDegreePlans, CurrentdegreePlan];
        return updatedDegreePlans;
    }

    function removeDegreePlan() {
        const updatedDegreePlans = prevDegreePlans.filter(
            (degreePlan: degreePlan): boolean =>
                degreePlan.name !== CurrentdegreePlan.name
        );
        return updatedDegreePlans;
    }
    //-------------------------------------------------------------------------------------
    const [degreePlanList, setDegreePlanList] =
        useState<degreePlan[]>(prevDegreePlan);

    return <div> type here later</div>;
}
