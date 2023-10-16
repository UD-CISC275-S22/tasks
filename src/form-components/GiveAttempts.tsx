import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement
    >;
    const [attempt, setattempt] = useState<number>(3);
    const [reqattempt, setreqattempt] = useState<string>("0");
    function checkforzero(): boolean {
        if (attempt == 0) {
            return true;
        }
        return false;
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Label>Increase Attempt</Form.Label>
            <span>Attempts remaining: {attempt}</span>
            <Form.Control
                type="number"
                value={reqattempt}
                onChange={(event: ChangeEvent) =>
                    setreqattempt(
                        event.target.value.length != 0
                            ? event.target.value
                            : "0"
                    )
                }
            />
            <Button
                onClick={() => setattempt(attempt - 1)}
                disabled={checkforzero()}
            >
                Use
            </Button>
            <Button onClick={() => setattempt(attempt + parseInt(reqattempt))}>
                Gain
            </Button>
        </div>
    );
}
