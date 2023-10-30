import React from "react";
import { degreePlanProps } from "../interfaces/degreePlan";

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
