import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

const QuestionTypes = {
    MULTIPLE_CHOICE: "multiple_choice_question" as QuestionType,
    SHORT_ANSWER: "short_answer_question" as QuestionType,
};

export function ChangeType(): React.JSX.Element {
    // Set initial type to short_answer_question
    const [questionType, setQuestionType] = useState<QuestionType>(
        QuestionTypes.SHORT_ANSWER,
    );

    // Function to toggle the question type
    const toggleQuestionType = () => {
        setQuestionType((prevType) =>
            prevType === QuestionTypes.SHORT_ANSWER ?
                QuestionTypes.MULTIPLE_CHOICE
            :   QuestionTypes.SHORT_ANSWER,
        );
    };

    return (
        <div>
            <Button onClick={toggleQuestionType}>Change Type</Button>
            {questionType === QuestionTypes.SHORT_ANSWER ?
                <div>Short Answer</div>
            :   <div>Multiple Choice</div>}
        </div>
    );
}
