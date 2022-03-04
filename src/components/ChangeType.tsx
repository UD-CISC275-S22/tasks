import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

type questionOptions = QuestionType;

export function ChangeType(): JSX.Element {
    const [question, setquestionOptions] = useState<questionOptions>(
        "short_answer_question"
    );

    function changequestionType(): void {
        setquestionOptions(
            question === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }

    return (
        <div>
            <div>
                <Button onClick={changequestionType}>Change Type</Button>
            </div>
            <div>
                {question === "short_answer_question" ? (
                    <span>Short Answer</span>
                ) : (
                    <span>Multiple Choice</span>
                )}
            </div>
        </div>
    );
}
