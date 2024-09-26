import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    type updateBox = React.ChangeEvent<HTMLInputElement>;

    const [numAttemptsLeft, setNumAttemptsLeft] = useState<number>(3);
    const [numAttempsRequesting, setNumAttempsRequesting] = useState<number>(0);

    function updateBox(event: updateBox) {
        setNumAttempsRequesting(parseInt(event.target.value) || 0);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <span>Num Attempts Left:{numAttemptsLeft}</span>
            {/* box to input more attempts they want */}
            <Form.Group controlId="form input text">
                <Form.Label>Attempts</Form.Label>
                <Form.Control type="number" onChange={updateBox} />
            </Form.Group>
            {/* button to use attempt which decreases attempts by 1*/}
            <Button
                onClick={() => setNumAttemptsLeft(numAttemptsLeft - 1)}
                disabled={numAttemptsLeft === 0}
            >
                use
            </Button>
            {/* button to gain attempts which increases attempts by amount in box */}
            <Button
                onClick={() =>
                    setNumAttemptsLeft(numAttemptsLeft + numAttempsRequesting)
                }
            >
                Gain
            </Button>
        </div>
    );
}
