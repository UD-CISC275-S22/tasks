import React, { useState } from "react";
import { semester } from "../interfaces/semster";
import { degreePlan, degreePlanProps } from "../interfaces/degreePlan";

import { Button } from "react-bootstrap";

export function clearSemesters({
    degreePlan,
    setDegreePlan
}: degreePlanProps): JSX.Element {
    function clear() {
        setDegreePlan({ ...degreePlan, semesters: [] });
    }

    return (
        <div>
            <Button onClick={clear}> Clear Existing Semesters </Button>
        </div>
    );
}
