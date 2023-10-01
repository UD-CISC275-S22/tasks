import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    const handleRevealAnswer = () => {
        setIsAnswerVisible(!isAnswerVisible);
    };

    return (
        <div>
            <h1>Quiz Application</h1>
            <p>The answer is:</p>
            {isAnswerVisible && <p>42</p>}
            <button onClick={handleRevealAnswer}>Reveal Answer</button>
        </div>
    );
}
