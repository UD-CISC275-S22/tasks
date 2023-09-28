import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const versionQuestion: QuestionType[] = [
        "multiple_choice_question",
        "short_answer_question"
    ];
    const [currentType, setCurrentType] = useState<string>(
        "short_answer_question"
    ); // Initial type

    const handleChangeType = () => {
        currentType === "multiple_choice_question"
            ? setCurrentType(versionQuestion[1])
            : setCurrentType(versionQuestion[0]);
    };

    return (
        <div>
            <h2>Change Type</h2>
            <p>Current Type: {currentType}</p>
            <button onClick={handleChangeType}>Change Type</button>
            {currentType === "multiple_choice_question"
                ? "Multiple Choice"
                : "Short Answer"}
        </div>
    );
}
