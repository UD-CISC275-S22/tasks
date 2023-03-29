import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function flipType(): void {
        setType(
            type === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }
    return (
        <div>
            <Button onClick={flipType}>Change Type</Button>
            {type === "short_answer_question" ? (
                <div>Short Answer</div>
            ) : (
                <div> Multiple Choice </div>
            )}
        </div>
    );
}
