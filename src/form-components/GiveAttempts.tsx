import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement
    >;
    const [attempts, setAttempts] = useState<number>(3);
    const [wantedAttempt, setWAttempts] = useState<string>("0");
    function checkforzero(): boolean {
        if (attempts == 0) {
            return true;
        }
        return false;
        /*
    function decrementAttempts() {
        setAttemptsL(attemptsLeft - 1);
    }
    function incrementAttempts(wanted:string): void {
        setAttemptsW(attemptsWanted + parseInt(wanted));
        setAttemptsL(attemptsLeft + parseInt(attemptsWanted));
    }
        */
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Label>Increase Attempt</Form.Label>
            <span>Attempts remaining: {attempts}</span>
            <Form.Control
                type="number"
                value={wantedAttempt}
                onChange={(event: ChangeEvent) =>
                    setWAttempts(
                        event.target.value.length != 0
                            ? event.target.value
                            : "0"
                    )
                }
            />
            <Button
                onClick={() => setAttempts(attempts - 1)}
                disabled={checkforzero()}
            >
                Use
            </Button>
            <Button
                onClick={() => setAttempts(attempts + parseInt(wantedAttempt))}
            >
                Gain
            </Button>
        </div>
    );
}
