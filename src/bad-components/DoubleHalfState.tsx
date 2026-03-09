import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalfState(): React.JSX.Element {
    // FIX: Move the useState inside the function component
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double or Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            {/* FIX: Add curly braces to the arrow functions to satisfy the linter */}
            <Button
                onClick={() => {
                    setDhValue(2 * dhValue);
                }}
            >
                Double
            </Button>
            <Button
                onClick={() => {
                    setDhValue(0.5 * dhValue);
                }}
            >
                Half
            </Button>
        </div>
    );
}
