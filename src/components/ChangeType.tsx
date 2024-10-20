import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setType] = useState<QuestionType>(
        "short_answer_question",
    );

    function changeType(): void {
        setType(
            questionType === "multiple_choice_question" ?
                "short_answer_question"
            :   "multiple_choice_question",
        );
    }
    return (
        <div>
            <div>
                {questionType === "multiple_choice_question" ?
                    "Multiple Choice"
                :   "Short Answer"}
            </div>
            <Button onClick={changeType}>Change Type</Button>
        </div>
    );
}
