//import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { start } from "repl";
//import { idText } from "typescript";

export function StartAttempt(): JSX.Element {
    const [nbAttempts, setNbAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function decreaseByOne(): void {
        setNbAttempts(nbAttempts - 1);
    }

    function myStartFunction(): void {
        setInProgress(true);
        decreaseByOne();
    }

    function myStopFunction(): void {
        setInProgress(false);
    }

    function myMulliganFunction(): void {
        setNbAttempts(nbAttempts + 1);
    }

    return (
        <div>
            <div>
                <Button
                    onClick={myStartFunction}
                    disabled={inProgress === true || nbAttempts === 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={myStopFunction}
                    disabled={inProgress === false}
                >
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={myMulliganFunction}
                    disabled={inProgress === true}
                >
                    Mulligan
                </Button>
                <span>Attempts: {nbAttempts}</span>
            </div>
        </div>
    );
}
