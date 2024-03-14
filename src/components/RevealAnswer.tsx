import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    const handleRevealClick = () => {
        setIsAnswerVisible((prev) => !prev);
    };

    return (
        <div>
            <Button onClick={handleRevealClick}>Reveal Answer</Button>
            {isAnswerVisible && <div>42</div>}
        </div>
    );
}
