import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function changeVisibility(): void {
        setVisible(!visible);
    }
    return (
        <div>
            <Button onClick={changeVisibility}>Reveal Answer</Button>
            {visible ? "42" : ""}
        </div>
    );
}
