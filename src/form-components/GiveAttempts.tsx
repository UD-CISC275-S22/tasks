import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<string>();

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formMovieReleased">
                <Form.Label>Use or Give Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequest(event.target.value)
                    }
                />
                <Button
                    onClick={() => setAttempts(attempts - 1)}
                    disabled={attempts === 0}
                >
                    use
                </Button>
                <span> </span>
                <Button
                    onClick={() =>
                        setAttempts(
                            attempts +
                                (request === undefined ? 0 : Number(request))
                        )
                    }
                >
                    gain
                </Button>
            </Form.Group>
            <div>Number of Attempts Left: {attempts}</div>
        </div>
    );
}
