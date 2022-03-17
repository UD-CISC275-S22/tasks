import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    type QuizProgress = "IN PROGRESS" | "NOT IN PROGRESS";

    const [qProg, setQProg] = useState<QuizProgress>("NOT IN PROGRESS");
    const [attempts, setAttempts] = useState<number>(4);
    const [testing, setTesting] = useState<boolean>(false);

    /*
    let start = false;
    let stop = true;
    let mulli = true;

    function checkAttempts(): boolean {
        if (attempts <= 0) {
            return true;
        } else {
            return false;
        }
    }
    */

    function startQuiz(): void {
        setTesting(testing == false ? true : false);
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
        setQProg("IN PROGRESS");
    }

    function stopQuiz(): void {
        setQProg("NOT IN PROGRESS");
        setTesting(testing == true ? false : true);
    }
    function mulligan(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <div>
                <Button onClick={startQuiz} disabled={testing || attempts == 0}>
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={stopQuiz} disabled={!testing}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <span></span>
                <Button id="mulli" onClick={mulligan} disabled={testing}>
                    Mulligan
                </Button>
            </div>
            {qProg} <br />
            Attempts: {attempts}
        </div>
    );
}
