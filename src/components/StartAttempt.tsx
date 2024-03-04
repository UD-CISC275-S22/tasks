import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attemp, setattemp] = useState<number>(4);
    const [progress, setprogress] = useState<boolean>(false);
    function setquizeStart(): void {
        setattemp(attemp - 1);
        setprogress(true);
    }
    function setquizeStop(): void {
        setprogress(false);
    }
    function Mulligan(): void {
        setattemp(attemp + 1);
    }

    return (
        <div>
            <Button onClick={Mulligan} disabled={progress}>
                Mulligan
            </Button>
            {attemp}
            <Button onClick={setquizeStart} disabled={attemp <= 0 || progress}>
                Start Quiz
            </Button>
            <Button onClick={setquizeStop} disabled={!progress}>
                Stop Quiz
            </Button>
        </div>
    );
}
