import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionDotToken } from "typescript";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("multiple_choice_question");
    function changeT(): void {
        setType(
            type === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }
    return (
        <div>
            <Button onClick={changeT}>Change Type</Button>
            {type === "short_answer_question" ? (
                <span>Multiple Choice</span>
            ) : (
                <span>Short Answer</span>
            )}
        </div>
    );
}
