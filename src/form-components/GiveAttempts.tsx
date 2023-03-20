import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requests, setRequests] = useState<number>(0);

    function updateRequests(e: ChangeEvent) {
        setRequests(parseInt(e.target.value));
    }
    return (
        <div>
            <div className="card">{attempts} attempts left.</div>
            <div className="container">
                <Form.Group className="mb-3" controlId="formCheckAnswer">
                    <Form.Label>
                        Specify Some Number of Attempts to Add
                    </Form.Label>
                    <Form.Control type="number" onChange={updateRequests} />
                    <Form.Text className="text-muted">
                        <Button
                            onClick={() => setAttempts(attempts + requests)}
                        >
                            Gain attempts
                        </Button>
                        <Button
                            onClick={() => setAttempts(attempts - 1)}
                            disabled={attempts < 1}
                        >
                            Use An Attempt
                        </Button>
                    </Form.Text>
                </Form.Group>
            </div>
        </div>
    );
}
