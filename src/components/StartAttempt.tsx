import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numberAttempts, setNumberAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz() {
        // checks to make sure that the quiz isnt already active and to make sure we still have attempts left
        if (inProgress === false && numberAttempts !== 0) {
            setNumberAttempts(numberAttempts - 1);
            setInProgress(!inProgress);
        }
    }

    function stopQuiz() {
        // makes sure that we cannot activate stop quiz if quiz is not active
        if (inProgress === true) {
            setInProgress(!inProgress);
        }
    }

    function addAttempt() {
        // checks to make sure that the quiz is not active
        setNumberAttempts(numberAttempts + 1);
    }

    return (
        <div>
            <div>Start Attempt</div>
            {<div>{numberAttempts}</div>}
            <Button onClick={startQuiz}>Start Quiz</Button>
            <Button onClick={stopQuiz}>Stop Quiz</Button>
            <Button onClick={addAttempt}>Mulligan</Button>
        </div>
    );
}
