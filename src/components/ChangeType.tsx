import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setType] = useState<QuestionType>(
        "short_answer_question"
    );
    function changeQuestionType(): void {
        if (questionType === "short_answer_question") {
            setType("multiple_choice_question");
        } else {
            setType("short_answer_question");
        }
    }
    return (
        <div>
            <Button onClick={changeQuestionType}>Change Type</Button>
            {questionType == "multiple_choice_question" ? (
                <span>Multiple Choice</span>
            ) : (
                <span>Short Answer</span>
            )}
        </div>
    );
}
