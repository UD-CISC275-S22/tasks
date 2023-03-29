import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    /*function update(event: React.ChangeEvent<HTMLInputElement>) {
        setAttempts(event.target.value);
    }*/
    function handleGain() {
        if (!isNaN(parseInt(requestedAttempts))) {
            setAttempts(attempts + parseInt(requestedAttempts));
        }
        setRequestedAttempts("");
    }

    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "x-large" }}>Give Attempts</div>
            number of attempts left: {attempts}
            <div>
                <Button
                    onClick={() => setAttempts(attempts - 1)}
                    disabled={attempts < 1}
                    variant={"outline-dark"}
                >
                    USE
                </Button>
            </div>
            <div>
                <Button variant={"outline-dark"} onClick={handleGain}>
                    GAIN
                </Button>
            </div>
            <div>
                <Form.Group controlId={"formGainAttempts"}>
                    <Form.Control
                        type="number"
                        value={requestedAttempts}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setRequestedAttempts(event.target.value)}
                    />
                </Form.Group>
            </div>
        </div>
    );
}
