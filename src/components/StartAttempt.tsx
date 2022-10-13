import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [att, setAtt] = useState<number>(4);
    const [inProgress, setActive] = useState<boolean>(false);
    function startQuiz(): void {
        setActive(!inProgress);
        setAtt(att - 1);
    }

    return (
        <div>
            <div>
                <Button onClick={startQuiz} disabled={inProgress || att <= 0}>
                    Start Quiz
                </Button>
                <Button onClick={() => setActive(false)} disabled={!inProgress}>
                    Stop Quiz
                </Button>
                <Button onClick={() => setAtt(att + 1)} disabled={inProgress}>
                    Mulligan
                </Button>
            </div>
            <div>Attempt Remaining: {att}</div>
        </div>
    );
}
