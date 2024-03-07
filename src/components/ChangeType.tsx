import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    const flipQuestionTypeHandler = (): void => {
        if (questionType === "short_answer_question") {
            setQuestionType("multiple_choice_question");
        } else {
            setQuestionType("short_answer_question");
        }
    };

    const questionTypeOutput: string =
        questionType === "short_answer_question"
            ? "Short Answer"
            : "Multiple Choice";
    return (
        <div>
            <Button onClick={flipQuestionTypeHandler}>Change Type</Button>
            <p>{questionTypeOutput}</p>
        </div>
    );
}
