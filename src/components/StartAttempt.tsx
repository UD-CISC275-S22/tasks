import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [quizState, setQuiz] = useState<boolean>(false);
    const [attemptState, setAttempt] = useState<number>(4);
    function quizStart() {
        //setQuiz(attemptState === 0 ? false : true);
        setAttempt(attemptState > 0 ? attemptState - 1 : attemptState);
        setQuiz(attemptState === 0 ? false : manageState());
    }
    function manageState(): boolean {
        let temp = false;
        // eslint-disable-next-line no-extra-parens
        attemptState !== 0 && quizState === false ? (temp = true) : temp;
        return temp;
    }
    return (
        <div>
            <div>
                <Button onClick={() => quizStart()} disabled={!manageState()}>
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={() => setQuiz(false)} disabled={!quizState}>
                    Stop Quiz
                </Button>
                <span>
                    <Button
                        onClick={() => setAttempt(1 + attemptState)}
                        disabled={quizState}
                    >
                        Mulligan
                    </Button>
                    attempts: {attemptState}
                </span>
            </div>
        </div>
    );
}
