import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );

    const handleChangeType = () => {
        setQuestionType(
            questionType === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    };

    return (
        <div>
            <Button onClick={handleChangeType}>Change Type</Button>
            {questionType === "multiple_choice_question" ?
                <p>Multiple Choice</p>
            :   <p>Short Answer</p>}
        </div>
    );
}
