import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;

    const [attLeft, setAttLeft] = useState<number>(3);
    const [attReq, setAttReq] = useState<number>(0);

    function deleteAttempt() {
        setAttLeft(attLeft - 1);
    }

    function addAttempt() {
        isNaN(attReq) ? setAttLeft(attLeft) : setAttLeft(attLeft + attReq);
    }

    function checkAttempts(event: ChangeEvent) {
        setAttReq(parseInt(event.target.value));
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="att">
                <Form.Label> Attemps: {attLeft}</Form.Label>
                <Form.Control
                    type="number"
                    value={checkAttempts.toString()}
                    onChange={checkAttempts}
                />
            </Form.Group>
            <Button onClick={addAttempt}> GAIN </Button>
            <Button onClick={deleteAttempt} disabled={attLeft < 1}>
                USE
            </Button>
        </div>
    );
}
