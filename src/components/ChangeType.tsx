import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [question, setQuestion] = useState<QuestionType>(
        "short_answer_question"
    );
    function setAQuestion() {
        setQuestion(
            question == "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }

    function isTrue(): boolean {
        if (question === "short_answer_question") {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div>
            <Button onClick={setAQuestion}>Change Type</Button>
            {isTrue() ? <div>Short Answer</div> : <div>Multiple Choice</div>}
        </div>
    );
}
