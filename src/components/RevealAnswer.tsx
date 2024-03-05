import React, { useState } from "react";
import { Button } from "react-bootstrap";

const [visible, setVisible] = useState<boolean>(false);

function flipVisibility(): void {
    setVisible(!visible);
}

export function RevealAnswer(): JSX.Element {
    return (
        <div>
            <button onClick={flipVisibility}>
                <div>Reveal Answer</div>
            </button>
            {visible && <div>42</div>}
        </div>
    );
}
