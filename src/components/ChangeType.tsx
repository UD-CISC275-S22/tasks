import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    const handleChangeType = () => {
        setType((prev) =>
            prev === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    };

    return (
        <div>
            <button onClick={handleChangeType}>Change Type</button>
            <p>
                {type === "short_answer_question" ?
                    "Short Answer"
                :   "Multiple Choice"}
            </p>
        </div>
    );
}
    