import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    type QuestionType = "multiple_choice_question" | "short_answer_question";
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    const changeQuestionType = () => {
        setQuestionType(
            questionType === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    };
    return (
        <div>
            <Button onClick={changeQuestionType}>Change Type :</Button>
            {questionType === "multiple_choice_question" ? (
                <div>Multiple Choice</div>
            ) : (
                <div>Short Answer </div>
            )}
        </div>
    );
}
