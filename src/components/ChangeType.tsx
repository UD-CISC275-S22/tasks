import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    const [text, setText] = useState<string>("Short Answer");

    function changeQuestionType(): void {
        if (type === "short_answer_question") {
            setType("multiple_choice_question");
            setText("Multiple Choice");
        } else {
            setType("short_answer_question");
            setText("Short Answer");
        }
    }
    return (
        <div>
            <Button onClick={changeQuestionType}>Change Type</Button>
            <div>{text}</div>
        </div>
    );
}
