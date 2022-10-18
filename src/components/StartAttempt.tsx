import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [value, setValue] = useState(false);
    const [attempts, setAttempts] = useState(4);
    return (
        <div>
            <Button onClick={() => setValue(!value)}>
                {value ? "Stop Attempt" : "Start Attempt"}
            </Button>
            Attempts remaining: attempts
        </div>
    );
}
