import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    function changeQuestionType(): void {
        if (questionType === "short_answer_question") {
            setQuestionType("multiple_choice_question");
        } else {
            setQuestionType("short_answer_question");
        }
    }

    return (
        <div>
            <div>
                <Button onClick={changeQuestionType}>Change Type</Button>
                {questionType === "multiple_choice_question" && (
                    <div>Multiple Choice</div>
                )}
                {questionType === "short_answer_question" && (
                    <div>Short Answer</div>
                )}
            </div>
        </div>
    );
}
