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
            {filter ? (
                <Button
                    className="float-right"
                    size="sm"
                    onClick={filterQuestions}
                >
                    Show All Questions
                </Button>
            ) : (
                <Button
                    className="float-right"
                    size="sm"
                    onClick={filterQuestions}
                >
                    Show Published Questions
                </Button>
            )}
        </div>
    );
}
