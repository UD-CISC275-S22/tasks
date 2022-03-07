import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    function flipVisibility(): void {
        setVisible(!visible);
    }
    return (
        <div>
            Reveal Answer
            <div>
                <Button onClick={flipVisibility}>Reveal Answer</Button>
            </div>
            {visible && <div>42</div>}
        </div>
    );
}
