import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    //change type component
    const [questionType, setType] = useState<QuestionType>(
        "short_answer_question"
    );
    function ChangeType(): void {
        if (questionType === "multiple_choice_question") {
            setType("short_answer_question");
        } else {
            setType("multiple_choice_question");
        }
    }
    return (
        <div>
            {/* change type component*/}
            <Button onClick={ChangeType}>Change Type</Button>
            {questionType === "multiple_choice_question" ? (
                <span>Multiple Choice Question</span>
            ) : (
                <span>Short Answer Question</span>
            )}
        </div>
    );
}
