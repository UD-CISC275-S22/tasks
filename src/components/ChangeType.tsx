import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const questionSwitch: Record<QuestionType, QuestionType> = {
        multiple_choice_question: "short_answer_question",
        short_answer_question: "multiple_choice_question"
    };
    const [questiontype, setType] = useState<QuestionType>(
        "short_answer_question"
    );
    function switchQuestion(): void {
        const newQ = questionSwitch[questiontype];
        setType(newQ);
    }
    return (
        <div>
            <Button onClick={switchQuestion}>Change Type</Button>
            {questiontype === "multiple_choice_question" ? (
                <div>Multiple Choice</div>
            ) : (
                <div>Short Answer</div>
            )}
        </div>
    );
}
