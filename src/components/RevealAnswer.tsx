import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    function flip(): void {
        setIsVisible(!isVisible);
    }
    return (
        <div>
            <Button onClick={flip}>Reveal Answer</Button>
            {isVisible && <div>42</div>}
        </div>
    );
}
