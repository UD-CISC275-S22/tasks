import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [state, setState] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    function lowerAttempts(): void {
        setAttempts(attempts - 1);
    }

    function addAttempts(): void {
        setAttempts(attempts + 1);
    }

    function setNewStateOn(): void {
        lowerAttempts();
        setState(!state);
    }

    function setNewStateOff(): void {
        setState(!state);
    }
    if (attempts <= 0 && !state) {
        return (
            <div>
                <div>{attempts}</div>
                <Button disabled onClick={setNewStateOn}>
                    Start Quiz
                </Button>
                <Button disabled onClick={setNewStateOff}>
                    Stop Quiz
                </Button>
                <Button onClick={addAttempts}>Mulligan</Button>
            </div>
        );
    } else if (!state) {
        return (
            <div>
                <div>{attempts}</div>

                <Button onClick={setNewStateOn}>Start Quiz</Button>
                <Button disabled onClick={setNewStateOff}>
                    Stop Quiz
                </Button>
                <Button onClick={addAttempts}>Mulligan</Button>
            </div>
        );
    } else {
        return (
            <div>
                <div>{attempts}</div>

                <Button disabled onClick={setNewStateOn}>
                    Start Quiz
                </Button>
                <Button onClick={setNewStateOff}>Stop Quiz</Button>
                <Button disabled onClick={addAttempts}>
                    Mulligan
                </Button>
            </div>
        );
    }
}
