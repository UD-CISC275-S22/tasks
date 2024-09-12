import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    function changeType(): void {
        type === "short_answer_question"
            ? setQuestionType("multiple_choice_question")
            : setQuestionType("short_answer_question");
    }
    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            {type === "short_answer_question" ? (
                <span>Short Answer</span>
            ) : (
                <span>Multiple Choice</span>
            )}
        </div>
    );
}
