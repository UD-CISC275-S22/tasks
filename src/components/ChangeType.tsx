import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [startType, setType] = useState<QuestionType>(
        "short_answer_question"
    );

    function changeType(): void {
        setType(
            startType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }
    return (
        <div>
            <Button onClick={changeType}>{startType}</Button>
        </div>
    );
}
