import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    function flipVisiblility(): void {
        setVisible(!visible);
    }
    return (
        <div>
            <Button onClick={flipVisiblility}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}
