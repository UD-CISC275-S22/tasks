import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    function changeQuestionType() {
        setQuestionType(
            questionType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }
    return (
        <div>
            <div>Change Type</div>
            <Button onClick={changeQuestionType}>Change Type</Button>
            {questionType === "short_answer_question" ? (
                <div> Short Answer </div>
            ) : (
                <div> Multiple Choice </div>
            )}
        </div>
    );
}
