import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { isQuestion } from "../functions";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Question, QuestionType } from "../interfaces/question";
//import { getNonEmptyQuestions } from "../nested";

export function ChangeType(): JSX.Element {
    const [state, setState] = useState<QuestionType>("short_answer_question");
    const setAnswerType = (): void => {
        setState(
            state === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    };
    return (
        <div>
            <div>
                <Button onClick={setAnswerType}>Change Type</Button>
            </div>
            <div>
                {state === "short_answer_question" ? (
                    <span>Short Answer</span>
                ) : (
                    <span>Multiple Choice</span>
                )}
            </div>
        </div>
    );
}
