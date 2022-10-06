import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    //return <div>Reveal Answer</div>;
    const [visible, setVisible] = useState<boolean>(false);

    function flipVisible(): void {
        setVisible(!visible);
    }
    return (
        <div>
            <Button onClick={flipVisible}>Reveal Answer</Button>
            {visible && <div> 42</div>}
        </div>
    );
}
