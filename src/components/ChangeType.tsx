import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

// LightColor is a Type Union of three possible string values
//type LightColor = "Multiple Choice" | "Short Answer";
type LightColor = QuestionType;

export function ChangeType(): JSX.Element {
    // We have two parts to our State
    const [lightColor, setLightColor] = useState<LightColor>(
        "short_answer_question"
    );
    //const [driving, setDriving] = useState<boolean>(false);

    // No parameters or return value, because it's a closure
    function changeLightColor(): void {
        setLightColor(
            // If it's red, make it green
            lightColor === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }

    //return <div>Change Type</div>;
    return (
        <div>
            <div>
                <Button onClick={changeLightColor}>Change Type</Button>
            </div>
            <div>
                {lightColor === "short_answer_question" ? (
                    <span>Short Answer</span>
                ) : (
                    <span>Multiple Choice</span>
                )}
            </div>
        </div>
    );
}
