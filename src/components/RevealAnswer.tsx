import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    const toggleAnswerVisibility = () => {
        setIsAnswerVisible(!isAnswerVisible);
    };

    return (
        <div>
            <Button onClick={toggleAnswerVisibility}>Reveal Answer</Button>
            {isAnswerVisible && <div>42</div>}
        </div>
    );
}
