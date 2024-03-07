import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const revealAnswer = () => {
        setIsVisible(!isVisible); // Toggle visibility
    };

    return (
        <div>
            <Button onClick={revealAnswer}>Reveal Answer</Button>
            {isVisible && <div>The answer is 42</div>}
        </div>
    );
}
