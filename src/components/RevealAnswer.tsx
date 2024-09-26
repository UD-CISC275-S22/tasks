import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    // Function to toggle the visibility of the answer
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            {/* Button to reveal or hide the answer */}
            <Button onClick={toggleVisibility}>
                {isVisible ? "Hide Answer" : "Reveal Answer"}
            </Button>

            {/* Conditionally render the answer based on the state */}
            {isVisible && <p>42</p>}
        </div>
    );
}
