import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttempts] = useState<string>("3");
    const [attemptsRequest, setAttemptsRequest] = useState<string>("0");
    const newAttempts = parseInt(attemptsLeft) - 1 || 0;

    function gainAttempts(): void {
        if (attemptsRequest !== "") {
            setAttempts(
                (parseInt(attemptsLeft) + parseInt(attemptsRequest)).toString()
            );
        }
    }
    function useAttempts(): void {
        setAttempts(newAttempts.toString());
    }
    function updateAttemptsRequest(
        event: React.ChangeEvent<HTMLInputElement>
    ): void {
        setAttemptsRequest(event.target.value);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formQuizAttempts">
                <Form.Label>How many more attempts would you like?</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequest}
                    onChange={updateAttemptsRequest}
                />
            </Form.Group>
            <div>You have {attemptsLeft} attempts left.</div>
            <Button onClick={useAttempts} disabled={attemptsLeft === "0"}>
                use
            </Button>
            <Button onClick={gainAttempts}>gain</Button>
        </div>
    );
}
