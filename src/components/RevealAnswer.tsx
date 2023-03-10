import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisibile] = useState<boolean>(false);
    const flipVisibility = (): void => setVisibile(!visible);
    return (
        <span>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </span>
    );
}
