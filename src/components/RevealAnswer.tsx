import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    function flipVisible(): void {
        setVisible(!visible);
    }
    return (
        <span>
            <Button onClick={() => flipVisible()}> Reveal Answer </Button>{" "}
            {visible && <div> 42 </div>}
        </span>
    );
}
