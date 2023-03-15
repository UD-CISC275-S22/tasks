import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    //return <div>Change Type</div>;

    //type QuestionType = "multiple_choice_question" | "short_answer_question";

    const [types, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    function changeType(): void {
        if (types == "multiple_choice_question") {
            setQuestionType("short_answer_question");
        } else {
            setQuestionType("multiple_choice_question");
        }
    }

    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            <span>
                {types == "multiple_choice_question"
                    ? "Multiple Choice"
                    : "Short Answer"}
            </span>
        </div>
    );
}
