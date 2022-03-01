import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

const type: QuestionType[] = [
    "short_answer_question",
    "multiple_choice_question"
];

export function ChangeType(): JSX.Element {
    const [qtype, setQtype] = useState<QuestionType>(type[0]);

    function changeIDType(): void {
        setQtype(
            qtype === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }
    return (
        <div>
            <div>
                <Button onClick={changeIDType}>Change Type</Button>
            </div>
            <div>
                {qtype === "short_answer_question" ? (
                    <span>Short Answer</span>
                ) : (
                    <span>Mutiple Choice</span>
                )}
            </div>
        </div>
    );
}
