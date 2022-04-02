import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function QuestionRecordControls({
    changeEditing
}: {
    changeEditing: () => void;
}): JSX.Element {
    return (
        <div>
            <Button className="float-right" size="sm" onClick={changeEditing}>
                Edit
            </Button>
        </div>
    );
}
