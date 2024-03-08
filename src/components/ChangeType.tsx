import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState("Short Answer"); // Initial state is "Short Answer"
    const toggleType = () => {
        setType((currentType) =>
            currentType === "Short Answer" ? "Multiple Choice" : "Short Answer"
        );
    };

    return (
        <div>
            <div>{type}</div>

            <Button onClick={toggleType}>Change Type</Button>
        </div>
    );
}
