import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [value, setValue] = useState("short_answer_question");
    return (
        <div>
            <Button
                onClick={() => {
                    value === "short_answer_question"
                        ? setValue("multiple_choice_question")
                        : setValue("short_answer_question");
                }}
            >
                Change Type
            </Button>
            {value === "short_answer_question"
                ? " Short Answer"
                : " Multiple Choice"}
        </div>
    );
}
