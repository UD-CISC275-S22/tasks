import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inProgress, setProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);
    return (
        <div className="grid">
            {/*Quiz attempt counter*/}
            {inProgress && (
                <div className="card">
                    Quiz in Progress!<br></br>
                    Attempts left: {attempts}
                </div>
            )}
            {!inProgress && (
                <div className="card">
                    Quiz is on Standby.<br></br>
                    Attempts left: {attempts}
                </div>
            )}
            {/*Start Quiz Button*/}
            <Button
                onClick={() => {
                    setProgress(!inProgress);
                    setAttempts(attempts - 1);
                }}
                disabled={inProgress || attempts <= 0}
            >
                Start Quiz
            </Button>
            {/*Stop Quiz Button*/}
            <Button
                onClick={() => setProgress(!inProgress)}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
            {/*Mulligan Button*/}
            <Button
                onClick={() => setAttempts(attempts + 1)}
                disabled={inProgress}
            >
                Mulligan
            </Button>
        </div>
    );
}
