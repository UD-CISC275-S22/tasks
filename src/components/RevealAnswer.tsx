import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, isVisible] = useState<boolean>(false);

    const handleClick = () => {
        isVisible(!visible);
    };

    return (
        <div>
            <Button onClick={handleClick}>Reveal Answer</Button>
            {visible && <p>42</p>}
        </div>
    );
}
