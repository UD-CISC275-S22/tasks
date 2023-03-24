import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, changeQuestion] = useState<QuestionType>(
        "short_answer_question"
    );
    function changeType() {
        if (questionType === "short_answer_question")
            changeQuestion("multiple_choice_question");
        else changeQuestion("short_answer_question");
    }
    return (
        <div>
            <div style={{ fontSize: "x-large" }}>Change Type</div>
            <div style={{ textAlign: "center" }}>
                <Button onClick={changeType} variant={"outline-dark"}>
                    Change Type
                </Button>
                <div>
                    {questionType === "short_answer_question"
                        ? "Short Answer"
                        : "Multiple Choice"}
                </div>
            </div>
        </div>
    );
}
