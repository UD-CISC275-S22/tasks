import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    //two different types for question
    type qType = "multiple_choice_question" | "short_answer_question";

    //state for type of question
    // eslint-disable-next-line prefer-const
    let [value, theType] = useState<QuestionType>("short_answer_question");

    function switchType(): QuestionType {
        if (value == "multiple_choice_question") {
            value = "short_answer_question";
        } else {
            value = "multiple_choice_question";
        }
        return value;
    }
    return (
        <span>
            <Button onClick={() => theType((value = switchType()))}>
                Change Type
            </Button>
            {value == "multiple_choice_question" ? (
                <span>Multiple Choice</span>
            ) : (
                <span>Short Answer</span>
            )}
        </span>
    );
}
