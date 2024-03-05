import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [question, setQuestion] = useState<QuestionType>(
        "short_answer_question"
    );
    function type(): void {
        setQuestion(
            // If it's SA, make MC
            question === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }

    return (
        <div>
            <Button onClick={type}>Change Type</Button>
            {question === "multiple_choice_question"
                ? "Multiple Choice"
                : "Short Answer"}
        </div>
    );
}
