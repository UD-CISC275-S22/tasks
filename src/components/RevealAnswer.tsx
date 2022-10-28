import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visibility, setVisibility] = useState<boolean>(false);
    function invertState() {
        setVisibility(!visibility);
    }
    return (
        <div>
            <Button onClick={invertState}>Reveal Answer</Button>{" "}
            {visibility && <span>42</span>}
        </div>
    );
}
