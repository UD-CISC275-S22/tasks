import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [qtype, setQtype] = useState<QuestionType>("short_answer_question");

    const switchType = () => {
        if (qtype === "multiple_choice_question") {
            setQtype("short_answer_question");
        } else {
            setQtype("multiple_choice_question");
        }
    };

    return (
        <div>
            <Button onClick={switchType}>Change Type</Button>
            {qtype === "multiple_choice_question" && <div>Multiple Choice</div>}
            {qtype === "short_answer_question" && <div>Short Answer</div>}
        </div>
    );
}
