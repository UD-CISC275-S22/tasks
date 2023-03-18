import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<string>("3");
    const [requests, setRequests] = useState<string>("0");
    const attemptsInt: number = parseInt(attempts) || 0;
    const requestsInt = parseInt(requests) || null;
    function requestInput(event: React.ChangeEvent<HTMLInputElement>) {
        setRequests(event.target.value);
    }
    function Gain(): void {
        if (requestsInt !== null) {
            const Add: number = requestsInt + attemptsInt;
            setAttempts(Add.toString());
            setRequests("0");
        }
    }
    function Use(): void {
        const MinusOne: number = attemptsInt - 1;
        setAttempts(MinusOne.toString());
    }
    return (
        <div>
            <h3>Give Attempts: {attempts}</h3>
            <Form.Group controlId="GiveAttempts">
                <Form.Control
                    type="number"
                    value={requests}
                    onChange={requestInput}
                />
            </Form.Group>
            <div>
                <Button onClick={Gain}>gain</Button>
                <Button onClick={Use} disabled={attempts === "0"}>
                    use
                </Button>
            </div>
        </div>
    );
}
