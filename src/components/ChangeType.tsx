import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    const toggleType = (): void => {
        setQuestionType((prevType) =>
            prevType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    };

    const getTypeText = (): string => {
        return questionType === "multiple_choice_question"
            ? "Multiple Choice"
            : "Short Answer";
    };

    return (
        <div>
            <div>
                Current type: <span>{questionType}</span>
            </div>
            <Button onClick={toggleType}>Change Type</Button>
            <div>
                <span>{getTypeText()}</span>
            </div>
        </div>
    );
}
