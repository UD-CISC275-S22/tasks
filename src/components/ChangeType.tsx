import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [Question, setQuestion] = useState<QuestionType>(
        "short_answer_question"
    );
    const ChangeQuestionType = () =>
        Question === "short_answer_question"
            ? setQuestion("multiple_choice_question")
            : setQuestion("short_answer_question");
    return (
        <>
            <Button onClick={ChangeQuestionType}>Change Type</Button>
            <div>
                {Question === "short_answer_question"
                    ? "Short Answer"
                    : "Multiple Choice"}
            </div>
        </>
    );
}
