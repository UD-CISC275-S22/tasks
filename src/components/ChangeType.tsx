import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [question, changeType] = useState<QuestionType>(
        "short_answer_question"
    );
    function changeQuestionType(): void {
        changeType(
            question === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }
    const toUpperCase = (string: string) => {
        return string
            .toLowerCase()
            .split(" ")
            .map(function (word) {
                return word.replace(word[0], word[0].toUpperCase());
            })
            .join(" ");
    };
    return (
        <div>
            <Button onClick={changeQuestionType}>Change Type</Button>
            {toUpperCase(question.replace(/_+/g, " "))}
        </div>
    );
}
