import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [QuestionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    function flipQuestion(): void {
        setQuestionType(
            QuestionType === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    }
    return (
        <div>
            <Button onClick={flipQuestion}>Change Type</Button>
            {QuestionType === "multiple_choice_question" ? (
                <div>Multiple Choice</div>
            ) : (
                <div>Short Answer</div>
            )}
        </div>
    );
}
