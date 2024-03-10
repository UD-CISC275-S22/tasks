import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    // State to manage the visibility of the answer
    const [isVisible, setIsVisible] = useState(false);

    // Function to toggle the visibility state
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            {/* Button to toggle the answer visibility */}
            <Button onClick={toggleVisibility}>Reveal Answer</Button>
            {/* Conditionally rendering the answer based on the visibility state */}
            {isVisible && <div>42</div>}
        </div>
    );
}
