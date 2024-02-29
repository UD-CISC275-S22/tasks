import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    function flipvisability(): void {
        setIsVisible(!isVisible);
    }
    return (
        <div>
            <Button onClick={flipvisability}>Reveal Answer</Button>
            {isVisible && <div>42</div>}
        </div>
    );
}
