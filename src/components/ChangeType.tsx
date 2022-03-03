import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setQuestType] = useState<QuestionType>(
        "short_answer_question"
    );
    function ChangeDaType(): void {
        type === "short_answer_question"
            ? setQuestType("multiple_choice_question")
            : setQuestType("short_answer_question");
    }
    return (
        <div>
            <Button onClick={ChangeDaType}>Change Type</Button>x
            {type === "short_answer_question" ? (
                <span>Short Answer</span>
            ) : (
                <span>Multiple Choice</span>
            )}
        </div>
    );
}
