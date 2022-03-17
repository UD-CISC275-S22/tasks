import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [value, theType] = useState<QuestionType>("short_answer_question");

    function switchType(): QuestionType {
        if (value == "multiple_choice_question") {
            theType("short_answer_question");
        } else {
            theType("multiple_choice_question");
        }
        return value;
    }
    return (
        <span>
            <Button onClick={() => theType(switchType)}>Change Type</Button>
            {value == "multiple_choice_question" ? (
                <span>Multiple Choice</span>
            ) : (
                <span>Short Answer</span>
            )}
        </span>
    );
}
