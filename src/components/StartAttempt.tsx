import React, { useState } from "react";
import { Button } from "react-bootstrap";
export function StartAttempt(): JSX.Element {
    const [quiz, setQuiz] = useState<boolean>(false);
    const [mulligan, setMulligan] = useState<number>(4);
    function addOneMulligan(): void {
        setMulligan(mulligan + 1);
    }
    function subOneMulligan(): void {
        setMulligan(mulligan - 1);
    }
    function stopAndSub(): void {
        subOneMulligan();
        setQuiz(false);
    }
    return (
        <div>
            <Button onClick={() => setQuiz(true)} disabled={quiz || !mulligan}>
                Start Quiz
            </Button>
            <Button onClick={() => stopAndSub()} disabled={!quiz}>
                Stop Quiz
            </Button>
            <Button onClick={() => addOneMulligan()} disabled={quiz}>
                mulligan
            </Button>
            {<div> Attempts left: {mulligan}</div>}
        </div>
    );
}
