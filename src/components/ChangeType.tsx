import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestion] = useState<QuestionType>(
        "short_answer_question"
    );

    function changeQuestion(): void {
        setQuestion(
            questionType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }

    return (
        <div>
            Question Type:
            <span>
                {questionType === "short_answer_question" ? (
                    <div>Short Answer</div>
                ) : (
                    <div>Multiple Choice</div>
                )}
            </span>
            <Button onClick={changeQuestion}>Change Type</Button>
        </div>
    );
}
