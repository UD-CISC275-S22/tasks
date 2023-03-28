import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    const [changed, setChanged] = useState<boolean>(false);
    function change(): void {
        type === "short_answer_question"
            ? setType("multiple_choice_question")
            : setType(type);
        setChanged(!changed);
    }
    return (
        <span>
            <Button onClick={change}>Change Type</Button>
            {changed ? <div>Multiple Choice</div> : <div>Short Answer</div>}
        </span>
    );
}
