import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import { QuestionType } from "../interfaces/question";

{
    /* 4/4 test cases passed !!!!!!*/
}

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    type QuestionType = "short_answer_question" | "multiple_choice_question";
    function changingType(): void {
        let newType = type;

        if (newType === "short_answer_question") {
            newType = "multiple_choice_question";
        } else {
            newType = "short_answer_question";
        }
        setType(newType);
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
