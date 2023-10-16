import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const QuestionVersion: QuestionType[] = [
        "short_answer_question",
        "multiple_choice_question"
    ];

    const [question, setQuestion] = useState<string>(QuestionVersion[0]);
    function changetype(): void {
        question == "multiple_choice_question"
            ? setQuestion(QuestionVersion[0])
            : setQuestion(QuestionVersion[1]);
    }
    return (
        <div>
            <Button onClick={changetype}>Change Type</Button>
            {question === "multiple_choice_question"
                ? "Multiple Choice"
                : "Short Answer"}
        </div>
    );
}
