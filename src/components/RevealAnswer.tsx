import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [value, setValue] = useState(false);
    return (
        <div>
            <span>
                <Button onClick={() => setValue(!value)}>Reveal Answer</Button>
                {value === true ? " 42" : ""}
            </span>
        </div>
    );
}
