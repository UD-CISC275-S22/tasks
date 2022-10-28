import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [QuestionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    function toggleQuestionType(): void {
        if (QuestionType == "short_answer_question") {
            setQuestionType("multiple_choice_question");
        } else {
            setQuestionType("short_answer_question");
        }
    }
    return (
        <div>
            <Button onClick={toggleQuestionType}>Change Type</Button>
            {QuestionType === "short_answer_question" ? (
                <span>Short Answer</span>
            ) : (
                <span>Multiple Choice</span>
            )}
        </div>
    );
}
