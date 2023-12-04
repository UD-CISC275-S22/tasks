import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Assuming the QuestionType is imported or defined in the same file
export type QuestionType = "multiple_choice_question" | "short_answer_question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>("short_answer_question");

    const toggleQuestionType = () => {
        setQuestionType(questionType === "short_answer_question"
            ? "multiple_choice_question"
            : "short_answer_question");
    };

    return (
        <div>
            <Button onClick={toggleQuestionType}>Change Type</Button>
            <div>{questionType === "short_answer_question" ? "Short Answer" : "Multiple Choice"}</div>
        </div>
    );
}
