import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, ToggleType] = useState<QuestionType>("short_answer_question");
    const toggle = () => {
        return type == "multiple_choice_question"
            ? ToggleType("short_answer_question")
            : ToggleType("multiple_choice_question");
    };

    return (
        <div>
            <h3>Change Type</h3>
            <Button onClick={toggle}>Change Type</Button>
            <p>
                {type == "multiple_choice_question"
                    ? "Multiple Choice"
                    : "Short Answer"}
            </p>
        </div>
    );
}
