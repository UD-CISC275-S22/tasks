import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [format, setFormat] = useState<QuestionType>("short_answer_question");

    function switchTypes(): void {
        if (format === "short_answer_question") {
            setFormat("multiple_choice_question");
        } else {
            setFormat("short_answer_question");
        }
    }

    return (
        <span>
            <Button onClick={() => switchTypes()}>Change Type</Button>
            {format === "short_answer_question" && <div>Short Answer</div>}
            {format === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )}
        </span>
    );
}
