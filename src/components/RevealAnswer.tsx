import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visibility, setVisibility] = useState<boolean>(false);
    function flipVisibility(): void {
        setVisibility(!visibility);
    }
    return (
        <div>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {visibility && <div>42</div>}
        </div>
    );
}
