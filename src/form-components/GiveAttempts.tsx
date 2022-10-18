import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

interface useProps {
    setNumAttempts: (subtractAttempts: number) => void;
    numAttempts: number;
}

interface gainProps {
    setNumAttempts: (subtractAttempts: number) => void;
    numAttempts: number;
    numAttemptsRequest: number;
    setNumAttemptsRequest: (changeAttempts: number) => void;
}

function UseButton({ setNumAttempts, numAttempts }: useProps) {
    return (
        <Button
            onClick={() => setNumAttempts(numAttempts - 1)}
            disabled={numAttempts < 1}
        >
            Use
        </Button>
    );
}

function GainButton({
    setNumAttempts,
    numAttempts,
    numAttemptsRequest,
    setNumAttemptsRequest
}: gainProps) {
    return (
        <Button
            onClick={() =>
                gainChange({
                    setNumAttempts,
                    numAttempts,
                    numAttemptsRequest,
                    setNumAttemptsRequest
                })
            }
        >
            Gain
        </Button>
    );

    function gainChange({
        setNumAttempts,
        numAttempts,
        numAttemptsRequest,
        setNumAttemptsRequest
    }: gainProps) {
        setNumAttempts(numAttempts + numAttemptsRequest);
        setNumAttemptsRequest(0);
    }
}

export function GiveAttempts(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(3);
    const [numAttemptsRequest, setNumAttemptsRequest] = useState<number>(0);

    function parse(numAttemptsRequest: string) {
        let i = parseInt(numAttemptsRequest) || 0;
        if (i < 0) {
            i = 0;
        }
        setNumAttemptsRequest(i);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>
                <Form.Group controlId="formRequests">
                    <Form.Label>Request Attempts:</Form.Label>
                    <Form.Control
                        type="number"
                        value={numAttemptsRequest}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => parse(event.target.value)}
                    />
                </Form.Group>
            </div>
            <UseButton
                setNumAttempts={setNumAttempts}
                numAttempts={numAttempts}
            ></UseButton>
            <GainButton
                setNumAttempts={setNumAttempts}
                numAttempts={numAttempts}
                numAttemptsRequest={numAttemptsRequest}
                setNumAttemptsRequest={setNumAttemptsRequest}
            ></GainButton>
            <div>Attempts Left: {numAttempts}</div>
        </div>
    );
}
