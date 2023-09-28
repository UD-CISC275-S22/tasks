import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function setNewType(): void {
        if (type === "short_answer_question") {
            setType("multiple_choice_question");
        } else {
            setType("short_answer_question");
        }
    }

    if (type === "short_answer_question") {
        return (
            <div>
                <Button onClick={setNewType}>Change Type</Button>
                <div>Short Answer</div>
            </div>
        );
    } else {
        return (
            <div>
                <Button onClick={setNewType}>Change Type</Button>
                <div>Multiple Choice</div>
            </div>
        );
    }
}
