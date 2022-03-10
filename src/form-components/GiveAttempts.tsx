import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

function UseButton({
    attempts,
    setAttempts
}: {
    attempts: number;
    setAttempts: (newVal: number) => void;
}): JSX.Element {
    return (
        <Button
            name="use"
            disabled={attempts <= 0}
            onClick={() => setAttempts(attempts - 1)}
        >
            use
        </Button>
    );
}

function GainButton({
    attempts,
    setAttempts,
    request
}: {
    attempts: number;
    setAttempts: (newVal: number) => void;
    request: number;
}): JSX.Element {
    return (
        <Button
            name="gain"
            onClick={() =>
                setAttempts(
                    attempts + (!isNaN(request) && request >= 0 ? request : 0)
                )
            }
        >
            gain
        </Button>
    );
}

export function GiveAttempts(): JSX.Element {
    const [request, setRequest] = useState<number>(NaN);
    const [attempts, setAttempts] = useState<number>(3);

    function checkRequest(event: ChangeEvent) {
        const newReq = parseInt(event.target.value);
        setRequest(newReq);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formAttempts">
                <Form.Label>Request Attempts</Form.Label>
                <Form.Control
                    type="number"
                    onChange={checkRequest}
                    placeholder="Enter Request Here"
                ></Form.Control>
            </Form.Group>
            <div>
                Requested Attempts:{" "}
                {isNaN(request) || request < 0
                    ? "Enter a valid request."
                    : request}
            </div>
            <div>Current Attempts: {attempts}</div>
            <div>
                <UseButton
                    attempts={attempts}
                    setAttempts={setAttempts}
                ></UseButton>
                <GainButton
                    attempts={attempts}
                    setAttempts={setAttempts}
                    request={request}
                ></GainButton>
            </div>
        </div>
    );
}
