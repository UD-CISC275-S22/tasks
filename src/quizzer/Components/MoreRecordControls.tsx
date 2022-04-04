import React from "react";
import { Button } from "react-bootstrap";
import { Question } from "../Interfaces/question";

export function MoreRecordControls({
    filter,
    filterQuestions
}: {
    filter: boolean;
    filterQuestions: () => void;
}): JSX.Element {
    return (
        <div>
            <Button className="float-right" size="sm" onClick={filterQuestions}>Show Published Questions</Button>
        </div>
    );
}
