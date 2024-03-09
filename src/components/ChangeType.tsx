import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    const changeQuestionType = () => {
        const newType =
            questionType === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question";
        setQuestionType(newType);
    };

    return (
        <div>
            <button onClick={changeQuestionType}>Change Type</button>
            {questionType === "multiple_choice_question" && (
                <p>Multiple Choice</p>
            )}
            {questionType === "short_answer_question" && <p>Short Answer</p>}
        </div>
    );
}
