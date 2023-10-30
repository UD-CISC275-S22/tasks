import React, { useState } from "react";
import { semester } from "../interfaces/semster";
import { Button } from "react-bootstrap";

export function clearSemesters(): JSX.Element {
    const [semesters, setSemesters] = useState<semester[]>([
        { id: 0, classes: [] }
    ]);

    function clear() {
        setSemesters([]);
    }

    return (
        <div>
            <Button onClick={clear}> Clear Existing Semesters </Button>
        </div>
    );
}
