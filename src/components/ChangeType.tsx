import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questiontype, setquestiontype] = useState<QuestionType>(
        "short_answer_question",
    );
    function changeType(): void {
        setquestiontype(
            questiontype === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    }

    return (
        <span>
            <Button onClick={changeType}>Change Type</Button>
            <span>
                {questiontype === "short_answer_question" ?
                    "Short Answer"
                :   "Multiple Choice"}
            </span>
        </span>
    );
}
