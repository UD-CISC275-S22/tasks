//eslint - disable - next - line;
import React, { useState } from "react";
//eslint - disable - next - line;
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [value, setState] = useState<boolean>(false);
    return (
        <span>
            <Button onClick={() => setState(!value)}>Reveal Answer</Button>
            {value && <div>42</div>}
        </span>
    );
}
