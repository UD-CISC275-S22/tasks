import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    // State to manage the type of the question, initialized to 'short_answer_question'
    const [type, setType] = useState<QuestionType>("short_answer_question");

    // Function to toggle the question type
    const toggleType = () => {
        setType((currentType) =>
            currentType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    };

    return (
        <div>
            {/* Button to toggle the question type */}
            <Button onClick={toggleType}>Change Type</Button>
            {/* Displaying the text based on the current question type */}
            <div>
                {type === "short_answer_question"
                    ? "Short Answer"
                    : "Multiple Choice"}
            </div>
        </div>
    );
}
