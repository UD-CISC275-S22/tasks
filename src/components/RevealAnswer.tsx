import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleAnswerVisibility = () => {
        setIsVisible((prevState) => !prevState);
    };

    return (
        <div>
            <Button onClick={toggleAnswerVisibility}>
                {isVisible ? "Hide Answer" : "Reveal Answer"}
            </Button>
            {isVisible && <div>42</div>}
        </div>
    );
}
