import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function ShowAnswer(): void {
        setVisible(!visible);
    }
    return (
        <div>
            <Button onClick={ShowAnswer}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}
