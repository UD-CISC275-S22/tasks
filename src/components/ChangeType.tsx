import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ChangeType(): React.JSX.Element {
    const types: ("Short Answer" | "Multiple Choice")[] = [
        "Short Answer",
        "Multiple Choice"
    ];
    const [index, setIndex] = useState(0);

    function handleChange() {
        setIndex((i) => (i + 1) % types.length);
    }

    return (
        <div>
            <Button onClick={handleChange}>Change Type</Button>
            <p>{types[index]}</p>
        </div>
    );
}