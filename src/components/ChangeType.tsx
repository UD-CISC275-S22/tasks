import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [QuestionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    function changeQuestionType(): void {
        setQuestionType(
            QuestionType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }

    return (
        <span>
            <Button onClick={changeQuestionType}>Change Type</Button>
            <br></br>
            Current Question Type:
            {QuestionType === "short_answer_question" ? (
                <span> Short Answer</span>
            ) : (
                <span> Multiple Choice</span>
            )}
        </span>
    );
}
