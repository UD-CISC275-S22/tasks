import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    function flipVis(): void {
        setVisible(!visible);
    }
    return (
        <div>
            <h3>reveal answer</h3>
            <Button onClick={flipVis}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}
