import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Question, QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [question, setQuestion] = useState<QuestionType>(
        "short_answer_question"
    );
    const switchQuestion = (): void => {
        if (question == "short_answer_question") {
            setQuestion("multiple_choice_question");
        } else {
            setQuestion("short_answer_question");
        }
    };

    return (
        <div>
            <Button onClick={switchQuestion}>Change Type</Button>
            {question == "short_answer_question" ? (
                <span>Short Answer</span>
            ) : (
                <span>Multiple Choice</span>
            )}
        </div>
    );
}
