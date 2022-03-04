import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    function showAnswer(): void {
        setVisible(true);
    }
    return (
        <div>
            <Button onClick={showAnswer}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}
