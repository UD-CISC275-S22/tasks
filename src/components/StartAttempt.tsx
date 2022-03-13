import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [handler, setHandle] = useState<boolean>(false);
    const [attempts, setAttempt] = useState<number>(4);
    function manage(): boolean {
        let temp = false;
        // eslint-disable-next-line prettier/prettier
        attempts !== 0 && handler === false ? (temp = true) : temp;
        return temp;
    }
    function startquiz() {
        setAttempt(attempts > 0 ? attempts - 1 : attempts);
        setHandle(attempts === 0 ? false : manage());
    }
    return (
        <div>
            <h3>start attempt</h3>
            <Button onClick={() => startquiz()} disabled={!manage()}>
                Start Quiz
            </Button>
            <Button onClick={() => setHandle(false)} disabled={!handler}>
                Stop Quiz
            </Button>
            <Button onClick={() => setAttempt(attempts + 1)} disabled={handler}>
                Mulligan
            </Button>
            <span>attempts: {attempts}</span>
        </div>
    );
}
