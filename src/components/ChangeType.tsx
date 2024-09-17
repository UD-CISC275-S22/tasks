import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [qType, setqType] = useState<QuestionType>("short_answer_question");
    function flipType(): void {
        setqType("multiple_choice_question");
    }
    function flipType2(): void {
        setqType("short_answer_question");
    }
    if (qType === "short_answer_question") {
        return (
            <div>
                <Button onClick={flipType}>Change Type</Button>
                {<div>Short Answer</div>}
            </div>
        );
    } else {
        return (
            <div>
                <Button onClick={flipType2}>Change Type</Button>
                {<div>Multiple Choice</div>}
            </div>
        );
    }
}
