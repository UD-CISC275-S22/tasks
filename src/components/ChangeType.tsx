import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const TYPES: QuestionType[] = [
        "short_answer_question",
        "multiple_choice_question",
    ];
    const [type, setType] = useState<QuestionType>(TYPES[0]);

    const flipType = (): void => {
        if (type=="multiple_choice_question"){
            setType(TYPES[0]);
        }
        else{
            setType(TYPES[1]);
        }
    };

    return (
        <div>
            <Button onClick={flipType}>Change Type</Button>
            <div>
                {" "}
                {type == "multiple_choice_question" ?
                    <span>Multiple Choice</span>
                :   <span>Short Answer</span>}
            </div>
        </div>
    );
}
