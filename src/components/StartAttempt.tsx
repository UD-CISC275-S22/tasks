import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    // const [attempts, setAttempts] = useState<number>(4);
    // const [quizInProgress, setQuizInProgress] = useState<boolean>(false);

    // const startQuiz = () => {
    //     if (attempts > 0) {
    //         setQuizInProgress(true);
    //         setAttempts(attempts - 1);
    //     }
    // };

    // const stopQuiz = () => {
    //     setQuizInProgress(false);
    // };

    // const giveMulligan = () => {
    //     setAttempts(attempts - 1);
    // };

    return (
        <div>
            {/* <Button
                onClick={startQuiz}
                disabled={quizInProgress || attempts === 0}
            >
                {" "}
                Start Quiz{" "}
            </Button>
            <Button onClick={stopQuiz} disabled={!quizInProgress}>
                {" "}
                Stop Quiz
            </Button>
            <Button onClick={giveMulligan} disabled={quizInProgress}>
                {" "}
                Mulligan{" "}
            </Button>
            <p> Attempts left: {attempts}</p> */}
        </div>
    );
}
