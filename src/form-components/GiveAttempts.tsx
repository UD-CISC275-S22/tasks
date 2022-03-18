import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [leftNum, setLeftNum] = useState<string>("3");
    const [gainNum, setGainNum] = useState<string>("");

    function updateAttempts(event: ChangeEvent) {
        setGainNum(event.target.value);
    }

    function use() {
        const num1 = parseInt(leftNum) - 1;
        setLeftNum(num1.toString());
    }

    function gain() {
        let num2 = 0;
        if (isNaN(parseInt(gainNum))) {
            num2 = parseInt(leftNum);
        } else {
            num2 = parseInt(leftNum) + parseInt(gainNum);
        }
        setLeftNum(num2.toString());
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>{leftNum}</div>
            <Form.Group controlId="FormAttempt">
                <Form.Label>Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={gainNum}
                    onChange={updateAttempts}
                />
                <Button onClick={use} disabled={parseInt(leftNum) < 1}>
                    use
                </Button>
                <Button onClick={gain}>gain</Button>
            </Form.Group>
        </div>
    );
}
