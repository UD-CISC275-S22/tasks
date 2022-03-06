import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function flipVisibility(): void {
        setVisible(!visible);
    }

    return (
        <div>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {visible && 42}
        </div>
    );
}
