import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    const change = () => {
        setType(
            type === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    };

    return (
        <div>
            <Button onClick={change}>Change Type</Button>
            {type === "multiple_choice_question" && <p>Multiple Choice</p>}
            {type === "short_answer_question" && <p>Short Answer</p>}
        </div>
    );
}
