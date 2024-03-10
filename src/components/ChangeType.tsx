import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [visible, setVisible] = useState<QuestionType>(
        "short_answer_question"
    );
    function changeVisibility(): void {
        if (visible === "short_answer_question") {
            setVisible("multiple_choice_question");
        } else {
            setVisible("short_answer_question");
        }
    }
    return (
        <div>
            <Button onClick={changeVisibility}>Change Type </Button>
            {visible === "short_answer_question" && <div>Short Answer</div>}
            {visible === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )}
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
