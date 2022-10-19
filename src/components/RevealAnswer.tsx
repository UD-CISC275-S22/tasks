import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    //Code for Reveal Answer
    const [visible, setVisible] = useState<boolean>(false);

    const revealAnswer = (): void => {
        setVisible(!visible);
    };

    return (
        <div>
            <Button onClick={revealAnswer}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}
