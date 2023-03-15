import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

{
    /* 4/4 test cases passed !!!!!!*/
}

export function ChangeType(): JSX.Element {
    // eslint-disable-next-line prefer-const
    let [type, setType] = useState<QuestionType>("short_answer_question");

    type QuestionType = "short_answer_question" | "multiple_choice_question";
    function changingType(): void {
        if (type === "short_answer_question") {
            type = "multiple_choice_question";
        } else {
            type = "short_answer_question";
        }
        setType(type);
    }
    return (
        <div>
            <Button onClick={changingType}>Change Type</Button>
            {type === "short_answer_question" ? (
                <div> Short Answer </div>
            ) : (
                <div>Multiple Choice </div>
            )}
        </div>
    );
}
