import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function flipVisibility(): void {
        setVisible(!visible);
    }
    return (
        <div>
            <button onClick={flipVisibility}>
                <div>Reveal Answer</div>
                {visible && <div>42</div>}
            </button>
        </div>
    );
}
