import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): JSX.Element {
    // counter component
    const [counter, setCounter] = useState<number>(0);
    return (
        <span>
            {/* counter component */}
            <Button id="Add One" onClick={() => setCounter(1 + counter)}>
                Add One
            </Button>
            {counter}
        </span>
    );
}
