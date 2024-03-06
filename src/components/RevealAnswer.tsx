import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isAnswerVisible, setAnswerVisibility] = useState(false);

    return (
        <div>
            <Button onClick={() => setAnswerVisibility(!isAnswerVisible)}>
                Reveal Answer
            </Button>
            {isAnswerVisible && <div>The answer is 42</div>}
        </div>
    );
}
