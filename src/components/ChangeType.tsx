import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    const toggleQuestionType = () => {
        setQuestionType((prevType) =>
            prevType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    };

    return (
        <div>
            {/* Displaying the type in a more human-readable format */}
            {questionType === "short_answer_question"
                ? "Short Answer"
                : "Multiple Choice"}
            <Button onClick={toggleQuestionType}>Change Type</Button>
        </div>
    );
}
