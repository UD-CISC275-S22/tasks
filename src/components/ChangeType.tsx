import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(true);
    const [type, setType] = useState<QuestionType>("short_answer_question");

    type QuestionType = "multiple_choice_question" | "short_answer_question";
    return (
        <div>
            <div>
                <Button
                    onClick={() => setType("short_answer_question")}
                    disabled={visible}
                >
                    Short Answer
                </Button>
                <Button
                    onClick={() => setType("multiple_choice_question")}
                    disabled={!visible}
                >
                    Multiple Choice
                </Button>
            </div>
        </div>
    );
}
