import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestion] = useState<QuestionType>(
        "short_answer_question"
    );

    function changeQuestion(): void {
        if (questionType === "short_answer_question") {
            setQuestion("multiple_choice_question");
        } else {
            setQuestion("short_answer_question");
        }
    }

    return (
        <div>
            <Button onClick={changeQuestion}>Change Type</Button>
            {questionType === "short_answer_question" && (
                <div>Short Answer</div>
            )}
            {questionType === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )}
        </div>
    );
}
