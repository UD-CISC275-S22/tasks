import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [hidden, visible] = useState<boolean>(true);
    function show(): void {
        visible(!hidden);
    }

    return (
        <div>
            <Button onClick={show}>Reveal Answer</Button>
            {!hidden && <div>42</div>}
        </div>
    );
}
