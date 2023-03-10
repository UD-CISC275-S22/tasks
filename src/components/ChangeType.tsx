import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const QUESTIONTYPE_TRANSITIONS: Record<QuestionType, QuestionType> = {
        multiple_choice_question: "short_answer_question",
        short_answer_question: "multiple_choice_question"
    };
    function changeQuestionType(): void {
        const newQuestionType = QUESTIONTYPE_TRANSITIONS[questionType];
        setQuestionType(newQuestionType);
    }
    const [questionType, setQuestionType] = useState<QuestionType>(
        "multiple_choice_question"
    );
    return (
        <div>
            <Button onClick={() => changeQuestionType()}>Change Type</Button>
            {<span>{questionType}</span>}
        </div>
    );
}
