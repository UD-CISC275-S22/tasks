import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedattempts, setRequestedattempts] = useState<string>("");

    function requestAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        setRequestedattempts(event.target.value);
    }
    function updateAttepmts(){
        if (!isNaN(parseInt(requestedattempts))) {
            setAttempts(attempts+parseInt(requestedattempts));
        }
    }
    function decreaseAttepmts() {
         setAttempts(attempts-1);
    }

    return (
        <div>
            <div>Number of attempts left: {attempts}</div>
            <Form.Group controlId="requestAttempts">
                <Form.Label>Requested Attempts:</Form.Label>
                <Form.Control type="number" onChange={requestAttempts} />
            </Form.Group>
            <div>
                <Button onClick={updateAttepmts}>gain</Button>
                <Button onClick={decreaseAttepmts} disabled={attempts <= 0}>
                    use
                </Button>
            </div>
        </div>
    );
}
