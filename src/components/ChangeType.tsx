import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    //return <div>Change Type</div>;
    const [type, changeType] = useState<QuestionType>("short_answer_question");
    function flipVisible(): void {
        if (type === "multiple_choice_question") {
            changeType("short_answer_question");
        } else {
            changeType("multiple_choice_question");
        }
    }
    return (
        <div>
            <Button onClick={flipVisible}>Change Type</Button>
            {type === "multiple_choice_question" ? (
                <div>Multiple Choice</div>
            ) : (
                <div>Short Answer</div>
            )}
        </div>
    );
}
//create two onclick function one for the multi and another on for single, set the default state to single.
//create a if statement to check the question type
//if the question type is multiple then call the visible function for "multi" and change the visible state
//do the same process for single
