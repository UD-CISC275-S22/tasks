import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, changeType] = useState<QuestionType>(
        "short_answer_question"
    );

    function flipQuestion(): void {
        if (questionType === "short_answer_question") {
            changeType("multiple_choice_question");
        } else {
            changeType("short_answer_question");
        }
    }

    return (
        <div>
            <Button onClick={flipQuestion}>Change Type</Button>
            {questionType === "short_answer_question" && (
                <div>Short Answer</div>
            )}
            {questionType === "multiple_choice_question" && (
                <div>Multiple Choice </div>
            )}
        </div>
    );
}
