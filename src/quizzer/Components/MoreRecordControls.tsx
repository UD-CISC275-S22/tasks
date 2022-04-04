import React from "react";
import { Button } from "react-bootstrap";
//import { Question } from "../Interfaces/question";

export function MoreRecordControls({
    clearAns,
    filter,
    filterQuestions
}: {
    clearAns: () => void;
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

            <div>
                <Button className="float-right" size="sm" onClick={clearAns}>
                    Clear Question Answers
                </Button>
            </div>
        </div>
    );
}
