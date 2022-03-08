import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [remaining, setRemaining] = useState<number>(3);
    const [requesting, setRequesting] = useState<number>(0);

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>{remaining}</p>
            <Button
                onClick={() => {
                    setRemaining((prevState: number) => prevState - 1);
                }}
                disabled={remaining === 0}
            >
                Use
            </Button>
            <Button
                onClick={() => {
                    setRemaining((prevState: number) => prevState + requesting);
                }}
            >
                Gain
            </Button>
            <Form.Group controlId="gainInputForm">
                <Form.Label>Attempts to add?</Form.Label>
                <Form.Control
                    type="number"
                    value={requesting}
                    onChange={(e: ChangeEvent) =>
                        setRequesting(parseInt(e.target.value) || 0)
                    }
                ></Form.Control>
            </Form.Group>
        </div>
    );
}
