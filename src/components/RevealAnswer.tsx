import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isAnswerVisable, setIsAnswerVisable] = useState(false);

    const toggleAnswerVisability = () => {
        setIsAnswerVisable(!isAnswerVisable);
    };

    return (
        <div>
            <Button onClick={toggleAnswerVisability}> Reveal Answer</Button>
            {isAnswerVisable && <div> 42 </div>}
        </div>
    );
}
