import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [status, setStatus] = useState<boolean>(false);
    function showHide(): void {
        setStatus(!status);
    }
    return (
        <div>
            <Button onClick={showHide}>Reveal Answer</Button>
            {status && <div>42</div>}
        </div>
    );
}
