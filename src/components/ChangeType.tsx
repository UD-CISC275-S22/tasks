import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    //Code for ChangeType
    const [startType, setType] = useState<QuestionType>(
        "short_answer_question"
    );
    function changeType(): void {
        setType(
            startType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }
    return (
        <>
            <Button onClick={changeType}>Change Type</Button>
            <div>
                {startType === "short_answer_question" ? (
                    <span>Short Answer</span>
                ) : (
                    <span>Multiple Choice</span>
                )}
            </div>
        </>
    );
}
