//eslint - disable - next - line;
import React, { useState } from "react";
//eslint - disable - next - line;
import { Button } from "react-bootstrap";
//eslint - disable - next - line;
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [value, setState] = useState<QuestionType>("short_answer_question");
    const handleTypeChange = () => {
        setState(
            value === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    };
    return (
        <span>
            <Button onClick={handleTypeChange}>Change Type</Button>
            {value === "multiple_choice_question" && <div>Multiple Choice</div>}
            {value === "short_answer_question" && <div>Short Answer</div>}
        </span>
    );
}
