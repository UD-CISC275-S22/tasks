import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    //define state to track the current question type
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    //function to switch between question types
    const switchType = () => {
        const newType =
            questionType === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question";
        setQuestionType(newType);
    };
    return (
        <div>
            {/* button to change type */}
            <Button onClick={switchType}>Change Type</Button>
            {/* display appropriate text based on type*/}
            {questionType === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )}
            {questionType === "short_answer_question" && (
                <div>Short Answer</div>
            )}
        </div>
    );
}
