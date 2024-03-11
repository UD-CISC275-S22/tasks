import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    function changeVisibility(): void {
        setVisible(!visible);
    }
    return (
        <div>
            <Button onClick={changeVisibility}>
                There is a Reveal Answer button
            </Button>
            {visible && <div>42</div>}
        </div>
    );
}
