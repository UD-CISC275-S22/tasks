import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    //return <div>Change Type</div>;
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    function changeQuestion(): void {
        const setType =
            questionType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question";
        setQuestionType(setType);
    }

    return (
        <div>
            <Button onClick={changeQuestion}>Change Type</Button>
            {questionType === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )}
            {questionType === "short_answer_question" && (
                <div>Short Answer</div>
            )}
        </div>
    );
}
