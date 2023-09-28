import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isAnswerVisible, setAnswerVisible] = useState(false);
    function toggleAnswerVisibility() {
        setAnswerVisible(!isAnswerVisible);
    }
    return (
        <div>
            <Button onClick={toggleAnswerVisibility}>Reveal Answer</Button>
            {isAnswerVisible ? "42" : ""}
        </div>
    );
}
