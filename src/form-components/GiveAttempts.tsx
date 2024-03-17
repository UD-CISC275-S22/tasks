import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [leftattemps, setleftattemps] = useState(3);
    const [inputattemps, setinputattemps] = useState<string>("");
    function updateinput(event: React.ChangeEvent<HTMLInputElement>) {
        setinputattemps(event.target.value);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="attemps">
                <Form.Label>Attempts:</Form.Label>
                <Form.Control
                    value={inputattemps}
                    onChange={updateinput}
                    type="number"
                />
            </Form.Group>
            <Button
                onClick={() => setleftattemps(leftattemps - 1)}
                disabled={leftattemps < 1}
            >
                use
            </Button>
            <Button
                onClick={() =>
                    setleftattemps((parseInt(inputattemps) || 0) + leftattemps)
                }
            >
                gain
            </Button>
            Attempts:{leftattemps}
        </div>
    );
}
