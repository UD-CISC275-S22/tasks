import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [question, setQuestion] = useState<QuestionType>(
        "short_answer_question"
    );

    const changeQuestionType = () =>
        question === "short_answer_question"
            ? setQuestion("multiple_choice_question")
            : setQuestion("short_answer_question");

    return (
        <>
            <Button onClick={changeQuestionType}>Change Type</Button>
            <div>
                {question === "short_answer_question"
                    ? "Short Answer Question"
                    : "Multiple Choice Question"}
            </div>
        </>
    );
}
