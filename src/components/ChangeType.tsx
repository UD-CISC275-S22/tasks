import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    //simulates another editor for a quiz application that provides a way to change the type of a quiz
    //by pressing a button: Quiz Questions can be Multiple Choice or Short Answer

    //single state: handle whether the type is multiple_choice_question or short_answer_question
    //type of the state should be QuestionType not string

    //button labelled "Change Type" - changes the state from one type to the other
    //when type is multiple_choice_question, the text Multiple Choice should be visible

    //when the type is short_answer_question, the text "short answer" should be visible
    //initial type: short_answer_question

    type QuestionType = "multiple_choice_question" | "short_answer_question";

    const [QuestionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    //if it's short make it multiple, if it's multiple make it short
    function changeQuestionType(): void {
        setQuestionType(
            QuestionType === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    }

    return (
        <div>
            <div>
                <Button onClick={changeQuestionType}>Change Type</Button>
            </div>
            <div>
                {QuestionType === "multiple_choice_question" ? (
                    <span>Multiple Choice</span>
                ) : (
                    <span>Short Answer</span>
                )}
            </div>
        </div>
    );
}
