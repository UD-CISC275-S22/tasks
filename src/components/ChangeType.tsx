import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [Q, setQ] = useState<QuestionType>("short_answer_question");

    function changeQ(): void {
        setQ(
            Q === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }
    return (
        <div>
            <Button onClick={changeQ}> Change Type </Button>
            <div>
                {Q === "short_answer_question" ? (
                    <span> Short Answer</span>
                ) : (
                    <span> Multiple Choice</span> //worked with mbiet uko
                )}
            </div>
        </div>
    );
}
