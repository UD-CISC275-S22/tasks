import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [question1, setQuestion] = useState<QuestionType>(
        "short_answer_question"
    );
    function flipQuestion(): void {
        setQuestion(
            question1 === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }
    return (
        <div>
            <span>
                {question1 === "short_answer_question"
                    ? "Short Answer"
                    : "Multiple Choice"}{" "}
            </span>
            <Button onClick={flipQuestion}>Change Type</Button>
        </div>
    );
}
