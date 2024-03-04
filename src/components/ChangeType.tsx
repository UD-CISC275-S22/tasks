import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    type QuestionType = "multiple_choice_question" | "short_answer_question";

    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    function flipQuestionType(): void {
        if (questionType === "short_answer_question") {
            setQuestionType("multiple_choice_question");
        } else {
            setQuestionType("short_answer_question");
        }
    }

    return (
        <div>
            <Button onClick={flipQuestionType}>Change Type</Button>
            {(questionType === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )) ||
                (questionType === "short_answer_question" && (
                    <div>Short Answer</div>
                ))}
        </div>
    );
}
