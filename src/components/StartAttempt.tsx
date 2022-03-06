import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    //simulates another part of the quiz application
    //providing a "start" and "stop" button for the quiz
    //since there is a limited number of attempts, there is a "Mulligan" button to give more attempts

    //2 peices of state: number of attempts + whether the quiz is in progress -- finished
    //number of attempts initially: 4
    //initially not in progress

    //button labelled "Start Quiz" -- puts the Quiz in progress and decrease the number of attempts by one
    //button labbeled "stop Quiz" -- stops the Quiz from being in progress
    //button labelled "Mulligan" -- increase the attempts by 1

    //when quiz is in progress, Start Quiz and Mulligan buttons are disabled
    //when quiz is not in progress, the Stop Quiz button is disabled
    //attempts = 0, Start Quiz is disabled

    const [Attempts, setAttempts] = useState<number>(4);
    const [inProgress, setinProgress] = useState<boolean>(false);

    function putInProgress(): void {
        //setinProgress to the opposite value of inProgress, so if it was false, it'll become true, and vice versa
        setinProgress(!inProgress);
        //subtract the attmpts by 1
        setAttempts(Attempts - 1);
    }

    return (
        <div>
            <div>
                <Button onClick={putInProgress} disabled={inProgress}>
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => setinProgress(false)}
                    disabled={!inProgress}
                >
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => setAttempts(Attempts + 1)}
                    disabled={inProgress}
                >
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
