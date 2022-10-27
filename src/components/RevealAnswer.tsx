import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    function changeVisibility(): void {
        if (visible == true) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    }
    return (
        <div>
            <Button onClick={changeVisibility}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
    return <div>Reveal Answer</div>;
}
