import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [QType, setQType] = useState<QuestionType>("short_answer_question");
    //inital question type is short_answer_question
    function swapType(): void {
        setQType(
            QType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
            //if the question is short_answer make it multiple_choice
            //if the question is multiple_choice make it short_answer
        );
    }

    return (
        <div>
            <div>
                <Button onClick={swapType}>Change Type</Button>
            </div>
            <div>
                {QType === "short_answer_question" ? (
                    //if QType is shortAnswer you will see "Short Answer"
                    //if QType is multipleChoice you will see Multiple Choice
                    <span>Short Answer</span>
                ) : (
                    <span>Multiple Choice</span>
                )}
            </div>
        </div>
    );
}
