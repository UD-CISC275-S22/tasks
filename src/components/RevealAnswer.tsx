import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [shown, invertstate] = useState<boolean>(false);
    return (
        <div>
            <h3>Reveal Answer</h3>
            <Button onClick={() => invertstate(!shown)}>Reveal Answer</Button>
            <div>
                The answer is{" "}
                <span data-testid="question-answer">{shown && 42}</span>
            </div>
        </div>
    );
}
