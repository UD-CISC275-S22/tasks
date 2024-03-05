import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    function changeVisibility(): void {
        setShowAnswer(!showAnswer);
    }
    return (
        <div>
            <Button onClick={changeVisibility}>Reveal Answer</Button>
            {showAnswer && <p>42</p>}
        </div>
    );
}
