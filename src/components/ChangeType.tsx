import React from "react";
import { Button } from "react-bootstrap";
import type { QuestionType } from "../interfaces/question";

export function ChangeType(): React.ReactElement {
    const [type, setType] = React.useState<QuestionType>(
        "short_answer_question",
    );

    function toggleType(): void {
        setType(
            type === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    }

    return (
        <div>
            <Button onClick={toggleType}>Change Type</Button>
            {type === "multiple_choice_question" ?
                <div>Multiple Choice</div>
            :   <div>Short Answer</div>}
        </div>
    );
}
