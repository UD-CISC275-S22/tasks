import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

const Type_TRANSITIONS: Record<QuestionType, QuestionType> = {
    multiple_choice_question: "short_answer_question",
    short_answer_question: "multiple_choice_question"
};
export function ChangeType(): JSX.Element {
    const [type, changeType] = useState<QuestionType>("short_answer_question");

    function change_Type(): void {
        const newType = Type_TRANSITIONS[type];
        changeType(newType);
    }

    return (
        <div>
            <Button onClick={change_Type}>Change Type</Button>
            {type === "short_answer_question" ? (
                <span>Short Answer</span>
            ) : (
                <span>Multiple Choice</span>
            )}
        </div>
    );
}
