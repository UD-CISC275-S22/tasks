import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [Qtype, SetQType] = useState<QuestionType>("short_answer_question");

    const changeQuestion: Record<QuestionType, QuestionType> = {
        multiple_choice_question: "short_answer_question",
        short_answer_question: "multiple_choice_question"
    };
    return (
        <div>
            <Button onClick={() => SetQType(changeQuestion[Qtype])}>
                Change Type
            </Button>
            to{" "}
            {Qtype === "short_answer_question"
                ? "Short Answer"
                : "Multiple Choice"}
        </div>
    );
}
