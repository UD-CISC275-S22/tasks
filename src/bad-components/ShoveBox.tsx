import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ShoveBoxButton({
    setPosition
}: {
    setPosition: (updateFn: (prevPosition: number) => number) => void;
}): JSX.Element {
    return (
        <Button
            onClick={() => setPosition((prevPosition) => prevPosition + 50)}
        >
            Shove the Box
        </Button>
    );
}

// MoveableBox remains unchanged from your original code

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);

    // ShoveBox component body remains the same
}
