import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    // reveal answer component
    const [visible, setVisible] = useState<boolean>(false);
    function flipVisibility(): void {
        setVisible(!visible);
    }
    return (
        <div>
            {/*reveal answer component */}
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}
