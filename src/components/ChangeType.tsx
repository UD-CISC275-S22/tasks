import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    const handleChangeType = () => {
        setQuestionType(
            questionType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    };

    return (
        <div>
            <h1>Quiz Question Editor</h1>
            <p>The type is:</p>
            {questionType === "multiple_choice_question" ? (
                <p>Multiple Choice</p>
            ) : (
                <p>Short Answer</p>
            )}
            <button onClick={handleChangeType}>Change Type</button>
        </div>
    );
}
