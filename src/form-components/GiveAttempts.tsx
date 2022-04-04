import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [attemptleft, setattemptleft] = useState<string>("3");
    const [requestatt, setrequestatt] = useState<string>("0");

    function muns() {
        setattemptleft((parseInt(attemptleft) - 1).toString());
    }
    function add() {
        const num = parseInt(requestatt) + parseInt(attemptleft);
        requestatt === "0"
            ? setattemptleft(attemptleft)
            : setattemptleft(num.toString());
    }
    function updatechange(event: ChangeEvent) {
        setrequestatt(event.target.value);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <span>
                <Button onClick={muns} disabled={parseInt(attemptleft) === 0}>
                    use
                </Button>
            </span>
            <span>
                <Button onClick={add}>gain</Button>
            </span>
            <div>
                <Form.Control
                    type="number"
                    value={requestatt}
                    onChange={updatechange}
                />
            </div>
            <div>The Current attempts is {attemptleft}</div>
        </div>
    );
}
