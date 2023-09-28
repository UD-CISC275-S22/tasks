import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";

export function StartAttempt(): JSX.Element {
    const [run, toggleRun] = useState<boolean>(true);
    const [attemmpts, SetAttempts] = useState<number>(4);
    return (
        <div>
            <h3>Start Attempt</h3>
            <Button
                disabled={!run || attemmpts === 0}
                onClick={() => {
                    toggleRun(!run);
                    SetAttempts(attemmpts - 1);
                }}
            >
                Start Quiz
            </Button>
            <Button onClick={() => toggleRun(!run)} disabled={run}>
                Stop Quiz
            </Button>
            <Button disabled={!run} onClick={() => SetAttempts(attemmpts + 1)}>
                Mulligan
            </Button>
            {attemmpts}
            {run}
        </div>
    );
}
