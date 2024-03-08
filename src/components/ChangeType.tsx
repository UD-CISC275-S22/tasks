import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setType] = useState<QuestionType>(
        "short_answer_question"
    );

    function changeType(): void {
        setType(
            questionType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }

    return (
        <div>
            <span>
                {questionType === "short_answer_question"
                    ? "Short Answer"
                    : "Multiple Choice"}
            </span>
            <Button onClick={changeType}>Change Type</Button>
        </div>
    );
}
