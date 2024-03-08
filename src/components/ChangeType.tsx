import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    // Define constants for question types
    const MULTIPLE_CHOICE = "multiple_choice_question";
    const SHORT_ANSWER = "short_answer_question";

    // Initialize state with default type as short_answer_question
    const [questionType, setQuestionType] =
        useState<QuestionType>(SHORT_ANSWER);

    // Function to handle changing the type
    const handleChangeType = () => {
        setQuestionType((prevType) =>
            prevType === MULTIPLE_CHOICE ? SHORT_ANSWER : MULTIPLE_CHOICE
        );
    };

    return (
        <div>
            <Button onClick={handleChangeType}>Change Type</Button>
            {questionType === MULTIPLE_CHOICE && <p>Multiple Choice</p>}
            {questionType === SHORT_ANSWER && <p>Short Answer</p>}
        </div>
    );
}
