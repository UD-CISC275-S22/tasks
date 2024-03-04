import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [count, newCount] = useState(4);
    const [InProgress, progress] = useState(false);

    function startQuiz() {
        progress(true);
        newCount(count - 1);
    }
    function stopQuiz() {
        progress(false);
    }
    function mulligan() {
        newCount(count + 1);
    }
    return (
        <div>
            Current Attempt: <span>{count}</span>
            <Button onClick={mulligan} disabled={InProgress}>
                Mulligan
            </Button>
            <div>
                <Button
                    onClick={startQuiz}
                    disabled={count === 0 || InProgress}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={stopQuiz} disabled={!InProgress}>
                    Stop Quiz
                </Button>
            </div>
        </div>
    );
}
