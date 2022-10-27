import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<number>(0);
    const updateRequest = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const valInt: number = parseInt(value);
        setRequest(valInt);
    };
    return (
        <>
            <div>
                <h3>Give Attempts</h3>
            </div>
            <p>
                <Form.Group controlId="formGiveAttempts" style={{ width: 200 }}>
                    <Form.Label>Request Attempts:</Form.Label>
                    <Form.Control
                        type="number"
                        value={request}
                        onChange={updateRequest}
                    />
                    <Button
                        onClick={() => setAttempts(attempts - 1)}
                        disabled={!attempts}
                    >
                        Use
                    </Button>
                    <Button onClick={() => setAttempts(attempts + request)}>
                        Gain
                    </Button>
                </Form.Group>
            </p>
            <p>Attempts: {attempts}</p>
        </>
    );
}
