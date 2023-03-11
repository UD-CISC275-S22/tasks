import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, changeType] = useState<QuestionType>("short_answer_question");
    return (
        <div className="body">
            <div className="card">
                {type === "short_answer_question"
                    ? "Short Answer"
                    : "Multiple Choice"}
            </div>
            <Button
                onClick={() => {
                    type === "short_answer_question"
                        ? changeType("multiple_choice_question")
                        : changeType("short_answer_question");
                }}
            >
                Change Type
            </Button>
        </div>
    );
}
