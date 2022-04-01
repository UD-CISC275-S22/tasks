import React from "react";
import { Button } from "react-bootstrap";

export function RecordControls({
    changeEditing,
    changeSelected
}: {
    changeEditing: () => void;
    changeSelected: () => void;
}): JSX.Element {
    return (
        <div>
            <Button className="float-right" size="sm" onClick={changeEditing}>
                Edit
            </Button>
            <Button className="float-right" size="sm" onClick={changeSelected}>
                Take Quiz
            </Button>
        </div>
    );
}
